$(document).ready(function () {
    Autocompletebox("BOENo", "trnExportStufingWOSBDetailsID", "trnExportMovementWO", "GetBOENo", "GetBOEDate");
    Autocompletebox("ContainerNo", "trnExportStufingWOContainerDetailsID", "trnExportMovementWO", "GetStuffedContainerNo", "UpdateSearchFields");
    Autocompletebox("VCNNo", "VCNID", "trnExportMovementWO", "GetVCNNO", "FillVCNDetails");
    $(".clsReadonly").attr("readonly", true);
    $(".ui-autocomplete").attr("style", "z-index: 10000;");

    if (IsSearch.toLowerCase() == "true") {
        $("#BOENo").attr("readonly", true);
        $("#ContainerNo").attr("readonly", true);
        FillVCNDetails();
    }
    var TransportationType = $("input[name='TRANSPORTATIONTYPE']:checked").val();
    if (TransportationType == "Party") {
        $("#dvOwnTruckTransporter").hide();
        $("#dvPartyTruckTransporter").show();
    }
    else {
        $("#dvOwnTruckTransporter").show();
        $("#dvPartyTruckTransporter").hide();
    }
    Autocompletebox("Transporter", "TransporterID", "trnExportMovementWO", "GetTransporter");
    FillContainerDetails();
    FillBOEDetails();

    $('.clsChkContainer').on('ifChanged', function (event) {
        if (event.target.checked) {
            SaveContainer(event.target.value);
        }
        else {
            DeleteContainer(event.target.value);
        }
    });
    SelectTransportationType();
    AllContainerSelect();
    
    if (document.getElementsByClassName("clsChkContainer").length != 0) {

        if (document.getElementsByClassName("clsChkContainer")[0].disabled == true) {
            $("#IsAllCHK").prop('disabled', true);
        }
    }
});

function SelectTransportationType() {
    $("input[name=TRANSPORTATIONTYPE]").on('ifChanged', function (event) {

        var TransportationType = $("input[name='TRANSPORTATIONTYPE']:checked").val();

        if (TransportationType != undefined) {


            if (TransportationType == "Party") {
                $("#dvOwnTruckTransporter").hide();
                $("#dvPartyTruckTransporter").show();
                $("#PartyTransporter").val('');
            }
            else {
                $("#dvOwnTruckTransporter").show();
                $("#dvPartyTruckTransporter").hide();
                $("#Transporter").val('');
                $("#TransporterID").val('0');
            }
        }
        Autocompletebox("Transporter", "TransporterID", "trnWorkOrderGW", "GetTransporter", "GetTRUCKNO");
    });
}

function GetBOEDate() {
    if ($("#trnExportStufingWOSBDetailsID").val() != "" && $("#trnExportStufingWOSBDetailsID").val() != "0") {
        $("#ContainerNo").attr("readonly", true);
        $("#SearchType").val("SB");
        $.ajax({
            url: GetRootPath + "trnExportMovementWO/GetBOEDate?id=" + $("#trnExportStufingWOSBDetailsID").val(),
            type: "GET",
            datatype: "text",
            success: function (data) {
                if (data != "" && data != null) {                    
                    $("#BOEDate").val(data.split("|")[0] + '--' + data.split("|")[2]);

                    $("#ContainerNo").val(data.split("|")[3]);
                }
            }
        });
    }
}

function UpdateSearchFields() {
    if ($("#trnExportStufingWOContainerDetailsID").val() != "" && $("#trnExportStufingWOContainerDetailsID").val() != "0") {
        $("#BOENo").attr("readonly", true);
        $("#SearchType").val("CONT");
        $.ajax({
            url: GetRootPath + "trnExportMovementWO/GetBOEByCont?id=" + $("#trnExportStufingWOContainerDetailsID").val(),
            type: "GET",
            datatype: "text",
            success: function (data) {

                if (data != "" && data != null) {
                    $("#BOEDate").val(data.split("|")[1]);
                    $("#BOENo").val(data.split("|")[0]);
                }
            }
        });
    }
}

function ClearSearchFields() {
    $("#trnExportStufingWOSBDetailsID").val('');
    $("#BOENo").val('');
    $("#trnExportStufingWOContainerDetailsID").val('');
    $("#ContainerNo").val('');
    $("#SearchType").val('');
    location.href = "?doaction=add";
}

function GetExportDetails() {
    var ShippingBillId = $("#trnExportStufingWOSBDetailsID").val();
    var BOENo = $("#BOENo").val();
    var StuffingContinerDetailId = $("#trnExportStufingWOContainerDetailsID").val();
    var ContainerNo = $("#ContainerNo").val();
    var SearchType = $("#SearchType").val();

    if (ShippingBillId != null && ShippingBillId != undefined && ShippingBillId != "" && ShippingBillId != "0") {
        location.href = "?doaction=add&pg=1&IsSearch=" + true + "&SearchID=" + ShippingBillId + "&SearchNo=" + BOENo + "&SearchType=" + SearchType;

    }
    else if (StuffingContinerDetailId != null && StuffingContinerDetailId != undefined && StuffingContinerDetailId != "" && StuffingContinerDetailId != "0") {
        location.href = "?doaction=add&pg=1&IsSearch=" + true + "&SearchID=" + StuffingContinerDetailId + "&SearchNo=" + ContainerNo + "&SearchType=" + SearchType;
    }
    else {
        $("#BOENo").addClass("redborder");
        $("#ContainerNo").addClass("redborder");
        TosterAlert("error", "Please select any one.", "Required!");
    }
    GetBOEDate();
}

function FillVCNDetails() {
    var ID = $("#VCNID").val();
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnExportMovementWO/GetVESSELNAMEAndVOYNO/" + ID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    if (doaction.toLowerCase() == "view") {
                        $("#VesselName").html(data.split("|")[0]);
                        $("#VOYNo").html(data.split("|")[1]);
                        $("#CutOffDate").html(data.split("|")[2]);
                        $("#PortLocation").val(data.split("|")[3]);
                    } else {
                        $("#VesselName").val(data.split("|")[0]);
                        $("#VOYNo").val(data.split("|")[1]);
                        $("#CutOffDate").val(data.split("|")[2]);
                        $("#PortLocation").val(data.split("|")[3]);
                    }
                }
                else {
                    $("#VesselName").val("");
                    $("#CutOffDate").val("");
                    $("#VOYNo").val("");
                    $("#hdnCutoffDate").val("");
                    $("#PortLocation").val("");
                }
            }
        })
    }
    else {
        $("#VesselName").val("");
        $("#CutOffDate").val("");
        $("#VOYNo").val("");
        $("#hdnCutoffDate").val("");
        $("#PortLocation").val("");
    }
}


function ExportMovementWOValidation(tab) {
    //changestepValue(tab);
    $("#trnExportMovementWOTab").val(tab);
    var isvalid = true;
    $.ajax({
        url: GetRootPath + "trnExportMovementWO/validateModel",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            $(".redborder").removeClass("redborder");
            if (data != "") {
                debugger;

                isvalid = false;
                var Errormsg = data.split("|")[0];
                var ErrorFields = data.split("|")[1].split(",");
                if (ErrorFields != null && ErrorFields.length > 0) {
                    for (var Q = 0; Q < ErrorFields.length; Q++) {                        
                        $("#spn_" + ErrorFields[Q]).text('');
                        $("#spn_" + ErrorFields[Q]).next().addClass("redborder");
                    }
                }
                if (Errormsg != "") {
                    TosterAlert("error", Errormsg, "Required!");
                }
            }
        }
    });
    return isvalid;
}

function CancelReason(TableName, ID) {
    if (ID != "" && ID != null && ID != undefined) {
        $("#CancelRemarks").val('');
        $("#trnExportMovementWOID").val(ID);
    }
}
function DeletetrnExportMovementWO() {
    var CancelRemarks = $("#CancelRemarks").val();
    var isvalid = true;
    $.ajax({
        url: GetRootPath + "trnExportMovementWO/validateDeleteModel/?CancelRemarks=" + CancelRemarks,
        type: "Post",
        dataType: "text",
        async: false,
        success: function (data) {
            $(".redborder").removeClass("redborder");
            if (data != "") {
                isvalid = false;
                var Errormsg = data.split("|")[0];
                var ErrorFields = data.split("|")[1].split(",");

                if (ErrorFields != null && ErrorFields.length > 0) {
                    for (var Q = 0; Q < ErrorFields.length; Q++) {
                        $("#spn_" + ErrorFields[Q]).text('');
                        $("#spn_" + ErrorFields[Q]).next().addClass("redborder");
                    }
                }
                if (Errormsg != "") {
                    TosterAlert("error", Errormsg, "Required!");
                }
            }
            else {
                var ID = $("#trnExportMovementWOID").val();
                $.ajax({
                    url: GetRootPath + "trnExportMovementWO/delete/" + ID + "?CancelRemarks=" + CancelRemarks + "",
                    type: "GET",
                    dataType: "text",
                    async: false,
                    success: function (data) {
                        $('#DeleteExportmovementWO').modal('hide');
                        location.reload();
                    }
                });
            }
        }
    });
}
function FillContainerDetails() {

    var SearchType = $("#SearchType").val();
    var SearchID = 0;
    if (SearchType == "CONT") {
        SearchID = $("#trnExportStufingWOContainerDetailsID").val();
    }
    else {
        SearchID = $("#trnExportStufingWOSBDetailsID").val();
    }

    if (doaction.toLowerCase != "view" && doaction.toLowerCase != "Confirmation") {
        var Isinvoice = IsHandlingInvoice;
        var IsApproveddone = IsApproved;
    }
    else {

    }
    if (parseInt(SearchID) > 0 && parseInt($("#trnExportMovementWOID").val()) > 0) {
        $.ajax({
            url: GetRootPath + "trnExportMovementWO/FillContainerDetails/" + $("#trnExportMovementWOID").val() + "?SearchID=" + SearchID + "&SearchType=" + SearchType + "&mode=" + doaction + "&IsHandlingInvoice=" + Isinvoice + "&IsApproved=" + IsApproveddone + "&trnExportStufingWOContainerDetailsID=" + $("#trnExportStufingWOContainerDetailsID").val(),
            type: "GET",
            dataType: "text",
            async: false,
            success: function (data) {
                $("#tblContainer").html(data.split("|")[0]);
                $("#ContSize20").html(data.split("|")[1]);
                $("#ContSize40").html(data.split("|")[2]);
                $("#ContSize45").html(data.split("|")[3]);
                $("#ContainerDetailsID").html(data.split("|")[4]);
            }
        });
    }
}

function FillBOEDetails() {
    var SearchType = $("#SearchType").val();
    var SearchID = 0;
    if (SearchType == "CONT") {
        SearchID = $("#trnExportStufingWOContainerDetailsID").val();
    }
    else {
        SearchID = $("#trnExportStufingWOSBDetailsID").val();
    }
    if (parseInt(SearchID) > 0 && parseInt($("#trnExportMovementWOID").val()) > 0) {
        $.ajax({
            url: GetRootPath + "trnExportMovementWO/FillBOEDetails/" + $("#trnExportMovementWOID").val() + "?SearchID=" + SearchID + "&SearchType=" + SearchType + "&mode=" + doaction,
            type: "GET",
            dataType: "text",
            async: false,
            success: function (data) {
                $("#tblSB").html(data);
            }
        });
    }
}

function SaveContainer(trnExportStufingWOContainerDetailsID) {

    var SearchType = $("#SearchType").val();
    var trnExportMovementWOID = $("#trnExportMovementWOID").val();
    var SearchID = 0;
    if (SearchType == "CONT") {
        SearchID = $("#trnExportStufingWOContainerDetailsID").val();
    }
    else {
        SearchID = $("#trnExportStufingWOSBDetailsID").val();
    }
    $.ajax({
        url: GetRootPath + "trnExportMovementWO/SaveContainer/" + trnExportStufingWOContainerDetailsID + "?trnExportMovementWOID=" + trnExportMovementWOID + "&SearchID=" + SearchID + "&SearchType=" + SearchType,
        type: "GET",
        dataType: "text",
        async: false,
        success: function (data) {
            //$('#IsAllCHK').iCheck('check');
        }
    });

}

function DeleteContainer(trnExportStufingWOContainerDetailsID) {
    var trnExportMovementWOID = $("#trnExportMovementWOID").val();
    $.ajax({
        url: GetRootPath + "trnExportMovementWO/DeleteContainer/" + trnExportStufingWOContainerDetailsID + "?trnExportMovementWOID=" + trnExportMovementWOID,
        type: "GET",
        dataType: "text",
        async: false,
        success: function (data) {

            //debugger
            //let checkBox = document.getElementsByClassName("clsChkContainer");
            //let isCheck = false;
            //for (let i = 0; i < checkBox.length; i++) {
            //    isCheck = checkBox[i].checked
            //}

            //if (isCheck == true) {
            //    $('#IsAllCHK').iCheck('check');
            //} else {
            //    $('#IsAllCHK').iCheck('uncheck');
            //}
        }
    });
}

function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}
$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

function AllContainerSelect() {
    $(document).on('ifChanged', '#IsAllCHK', function (event) {
        debugger
        var IsAllCHK = $("#IsAllCHK:checked").val();
        if (IsAllCHK == true || IsAllCHK == "True" || IsAllCHK == "true") {
            $('.clsChkContainer').iCheck('check');
            //AllSaveContainer($("#IsAllCHK").text());
        }
        else {
            /*AllDeleteContainer($("#ContainerDetailsID").text());*/
            $('.clsChkContainer').iCheck('uncheck');
            //AllDeleteContainer($("#IsAllCHK").text());
        }
    });
}
function GetReExportDetails(ID) {
    $.ajax({
        url: GetRootPath + "trnExportMovementWO/GetReExportDetails/" + ID,
        type: "GET",
        success: function (data) {
            if (data != null && data != "") {
                $("#tbReExportDetails").html(data);
            }
        }
    });
}
//function AllSaveContainer(trnExportStufingWOContainerDetailsID) {
//    debugger
//    var SearchType = $("#SearchType").val();
//    var trnExportMovementWOID = $("#trnExportMovementWOID").val();
//    var SearchID = 0;
//    if (SearchType == "CONT") {
//        SearchID = $("#trnExportStufingWOContainerDetailsID").val();
//    }
//    else {
//        SearchID = $("#trnExportStufingWOSBDetailsID").val();
//    }
//    $.ajax({
//        url: GetRootPath + "trnExportMovementWO/AllSaveContainer/" + trnExportMovementWOID + "?trnExportStufingWOContainerDetailsID=" + trnExportStufingWOContainerDetailsID + "&SearchID=" + SearchID + "&SearchType=" + SearchType,
//        type: "GET",
//        dataType: "text",
//        async: false,
//        success: function (data) {
//            $('.clsChkContainer').iCheck('check');
//        }
//    });

//}

//function AllDeleteContainer(trnExportStufingWOContainerDetailsID) {
//    var trnExportMovementWOID = $("#trnExportMovementWOID").val();
//    $.ajax({
//        url: GetRootPath + "trnExportMovementWO/AllDeleteContainer/" + trnExportMovementWOID + "?trnExportStufingWOContainerDetailsID=" + trnExportStufingWOContainerDetailsID,
//        type: "GET",
//        dataType: "text",
//        async: false,
//        success: function (data) {
//            $('.clsChkContainer').iCheck('uncheck');
//        }
//    });
//}