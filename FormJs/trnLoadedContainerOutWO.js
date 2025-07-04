$(document).ready(function () {    
    Autocompletebox("NOCName", "SpaceCertificateNo", "trnLoadedContainerOutWO", "GetSpaceCertificateNo/" + $("#trnLoadedContainerOutWOID").val(), "GetLotNo");
    Autocompletebox("ContNo", "trnDocumentContainerID", "trnLoadedContainerOutWO", "GetContainerNo/" + $("#trnLoadedContainerOutWOID").val(), "FillISOCodeDetails");
    var TransportationType = $("input[name='TRANSPORTATIONTYPE']:checked").val();
    if (TransportationType == "Party") {
        $("#dvOwnTruckTransporter").hide();
        $("#dvPartyTruckTransporter").show();
    }
    else {
        $("#dvOwnTruckTransporter").show();
        $("#dvPartyTruckTransporter").hide();
    }
    Autocompletebox("Transporter", "TransporterID", "trnLoadedContainerOutWO", "GetTransporter", "GetTRUCKNO");
    Autocompletebox("LOCATIONFROM", "LOCATIONFROMID", "trnLoadedContainerOutWO", "GetLocationfrom");
    DisplayWeighment('WEIGHMENTREQUIRED', 'dvInActiveReason', 'dvOther', 'dvisshow');
    DisplaySSR('WEIGHMENTPAYMENTMODE', 'dvisshow');       

    filldatatable();
    MytransportType();
});
function MytransportType() {
//setTimeout(function () {
    $("input[name=TRANSPORTATIONTYPE]").on('ifChanged', function (event) {

        var TransportationType = $("input[name='TRANSPORTATIONTYPE']:checked").val();

        if (TransportationType != undefined) {


            if (TransportationType == "Party") {
                $("#dvOwnTruckTransporter").hide();
                $("#dvPartyTruckTransporter").show();
                $("#PARTYTRUCKNO").val('');
                $("#PartyTransporter").val('');
            }
            else {
                $("#dvOwnTruckTransporter").show();
                $("#dvPartyTruckTransporter").hide();
                $("#TRUCKNO").val('');
                $("#Transporter").val('');
                $("#TRUCKID").val('0');
                $("#TransporterID").val('0');
            }
        }
    });

}
//}, 1000);

function GetLotNo() {
    Autocompletebox("LOTNO", "trnDocumentLotDetailsID", "trnLoadedContainerOutWO", "GetLotNo/" + $("#SpaceCertificateNo").val(), "GetLotNoDetails");
}

function GetLotNoDetails() {
  //  setTimeout(function () {
        var ID = $("#trnDocumentLotDetailsID").val();
        if (ID != null && ID != undefined && ID != "" && ID != "0") {
            $.ajax({
                url: GetRootPath + "trnLoadedContainerOutWO/FillLabelDetails/" + ID + "?trnLoadedContainerOutWOID=" + $("#trnLoadedContainerOutWOID").val(),
                type: "GET",
                dataType: "text",
                success: function (data) {
                    if (data != "" && data != null) {
                        $("#addLabel").html(data);
                        $("#totalpkg").text("Total : " + $("#balpkg_").text() + "/" + $("#totalpkg_").text());
                        $("#totalWeight").text("Total : " + $("#balweight_").text() + "/" + $("#totalweight_").text());
                        $("#totalPiece").text("Total : " + $("#balpieces_").text() + "/" + $("#totalpieces_").text());
                        $(".QTYLABEL").addClass("badge bg-light-blue");
                    }
                    else {
                        $("#addLabel").html("");
                        $("#totalpkg").text("");
                        $("#totalWeight").text("");
                        $("#totalPiece").text("");
                        $(".QTYLABEL").removeClass("badge bg-light-blue");
                    }
                }
            })
        }
        else {
            $("#addLabel").html("");
            $("#totalpkg").text("");
            $("#totalWeight").text("");
            $("#totalPiece").text("");
            $(".QTYLABEL").removeClass("badge bg-light-blue");
        }
  //  }, 100);
}
    
                                    
function GetTRUCKNO() {    
    Autocompletebox("TRUCKNO", "TRUCKID", "trnLoadedContainerOutWO", "GetTRUCKNO/" + $("#TransporterID").val(), "CheckTruckInUsed");
    // CheckTruckInUsed();
}

function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}

$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

function searchSpaceCertificateNo() {
    var NOCName = $("#txtNOCName").val();
    if (NOCName != null && NOCName != undefined && NOCName != "") {
        location.href = "?pg=1&IsSearch=" + true + "&SpaceCertificateNo=" + $("#txtSpaceCertificateNo").val() + "&NOCName=" + NOCName;
    }
    else {
        TosterAlert("error", "Please select NOC No", "Required!");
    }
}

function validateModel(tab) {

    changestepValue(tab);
    if (tab == 10) {
        changestepValue(1);
    }

    var isvalid = true;    
    $('#WEIGHMENTREQUIRED').iCheck('enable');    
    $.ajax({
        url: GetRootPath + "trnLoadedContainerOutWO/validateModel",
        type: "Post",
        data: $("form").serialize(),
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
        }
    });

    if (isvalid && tab == 2) {
        $.ajax({
            url: GetRootPath + "trnLoadedContainerOutWO/Action",
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                filldatatable();
                TosterAlert("success", " Record added Successfully! ", "success!");
            }
        });
    }
    
    return isvalid;
}

function ClearNOCData() {
    $("#trnDocumentLotDetailsID").val("0");
    $("#trnLoadedContainerOutWOLotDetailsID").val("0");
    $("#NOCName").val("");
    $("#SpaceCertificateNo").val("0");
    $("#LOTNO").val("");
    $("#WorkOrderPackages").val("0");
    $("#WorkOrderWeight").val("0");
    $("#WorkOrderPieces").val("0");
    GetLotNo();
    GetLotNoDetails();
}

function changestepValue(tabNo) {
    if (tabNo == 10) {
        $("#IsFinished").val(true);
    }
    $("#trnLoadedContainerOutWOTab").val(tabNo);
}

function filldatatable() {
    $.ajax({
        url: GetRootPath + "trnLoadedContainerOutWO/FillGrid/",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            
            ClearNOCData();
            $("#tblLotDetails").html(data);
            
        }
    });
}
function Getlotdetails(id, workorderid) {

    $.ajax({
        url: GetRootPath + "trnLoadedContainerOutWO/FillLabelDetails/" + id + "?trnLoadedContainerOutWOID=" + workorderid,
        type: "GET",
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#lotdetailnoc").html(data);

            }
            else {
                $("#lotdetailnoc").html("");

            }
        }
    })
}

function EditLotdetails(ID) {
    $("#trnDocumentLotDetailsID").val($("#trnDocumentLotDetailsID_" + ID).text());
    $("#trnLoadedContainerOutWOLotDetailsID").val($("#trnLoadedContainerOutWOLotDetailsID_" + ID).text());
    $("#NOCName").val($("#SpaceCertificateNo_" + ID).text());
    $("#SpaceCertificateNo").val($("#SpaceCertificateID_" + ID).text());
    $("#LOTNO").val($("#LotNo_" + ID).text());
    $("#WorkOrderPackages").val($("#WorkOrderPackages_" + ID).text());
    $("#WorkOrderWeight").val($("#WorkOrderWeight_" + ID).text());
    $("#WorkOrderPieces").val($("#WorkOrderPieces_" + ID).text());

    GetLotNo();
    GetLotNoDetails();
}

function deleteLotDetails(ID) {
    if (ID != "" && ID != "0" && ID != null) {
        $.ajax({
            url: GetRootPath + "trnLoadedContainerOutWO/deleteLotDetails/" + ID,
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                var LotNo = $("#LotNo_" + ID).text();
                filldatatable();
                TosterAlert('success', ' Lot No "' + LotNo + '"  deleted Successfully! ', 'success!');
            }
        });
    }
}

function DisplayWeighment(CheckBoxID, InactivePanalID, Other, isshow) {    
    var IsActive = $("#" + CheckBoxID).prop("checked");
    if (IsActive != undefined) {
        if (IsActive == false) {
            $("#" + InactivePanalID).show();
            $("." + Other).hide();
            $("input[name=" + CheckBoxID + "]").iCheck('uncheck');
        }
        else {
            $("input[name=" + CheckBoxID + "]").iCheck('check');
            $("#" + InactivePanalID).hide();
            $("." + Other).show();
        }
    }
  //  setTimeout(function () {
        $("#" + CheckBoxID).on('ifChanged', function (event) {
            if (event.target.checked == true) {
                $("#" + InactivePanalID).hide();
                $("." + Other).show();
                $("." + isshow).hide('slow');
            }
            else {
                $("#" + InactivePanalID).show();
                $("." + Other).hide();
                $("#MANUALSSRNO").val('');
                $("#WEIGHMENTPAYMENTMODE").val("CASH");
            }
    });
    if (IsTruckUsed == "True" || IsTruckUsed == "true" || IsTruckUsed == true) {
        $('#WEIGHMENTREQUIRED').iCheck('disable');
    } 
  //  }, 100);
}

function DisplaySSR(FieldID, divID) {
    var Field = $("#" + FieldID).val();

    if (Field == "SSR") {
        $("." + divID).show('slow');
    }
    else {
        $("." + divID).hide('slow');
        $("#MANUALSSRNO").val('');
    }
}

function DeleteReason(TableName, ID) {
    if (ID != "" && ID != null && ID != undefined) {
        $("#DeleteReason").val('');
        $("#trnLoadedContainerOutWOID").val(ID);
    }
}

function DeleteWorkOrder() {
    var DeleteReason = $("#DeleteReason").val();
    var isvalid = true;
    $.ajax({
        url: GetRootPath + "trnLoadedContainerOutWO/validateDeleteModel/?DeleteReason=" + DeleteReason,
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
                var ID = $("#trnLoadedContainerOutWOID").val();
                $.ajax({
                    url: GetRootPath + "trnLoadedContainerOutWO/delete/" + ID + "?Reason=" + DeleteReason + "",
                    type: "GET",
                    dataType: "text",
                    async: false,
                    success: function (data) {
                        $('#DeleteWorkOrder').modal('hide');
                        location.reload();
                    }
                });
            }
        }
    });
}

function CheckTruckInUsed() {
    var ID = $("#trnLoadedContainerOutWOID").val();
    if (IsTruckUsed == "true" || IsTruckUsed == "True" || IsTruckUsed == true) {
        GetTRUCKNO();
    }
    var TRUCKNO = "";
    var TransportationType = $("input[name='TRANSPORTATIONTYPE']:checked").val();
    if (TransportationType == "Party") {
        TRUCKNO = $("#PARTYTRUCKNO").val()
    }
    else {
        TRUCKNO = $("#TRUCKNO").val()
    }

    $.ajax({
        url: GetRootPath + "trnLoadedContainerOutWO/CheckTruckInUsed/?TruckNo=" + TRUCKNO + "&trnLoadedContainerOutWOID=" + ID,
        type: "Get",
        dataType: "text",
        async: false,
        success: function (data) {
            if (data != "") {
                TosterAlert("warning", data, "Warning!");

                if (TransportationType == "Party") {
                    $("#PARTYTRUCKNO").val("");
                    $("#PartyTransporter").val("");
                }
                else {
                    $("#TRUCKNO").val("");
                    $("#TRUCKID").val("0");
                    $("#TRUCKNO").addClass("redborder")
                }

                ;
            }
            else {
                $("#TRUCKNO").removeClass("redborder");
            }
        }
    });
}

function FillISOCodeDetails()
{
    if ($("#trnDocumentContainerID").val() > 0) {
        $.ajax({
            url: GetRootPath + "trnLoadedContainerOutWO/FillDocumentDetails?trnDocumentContainerID=" + $("#trnDocumentContainerID").val(),
            type: "GET",
            dataType: "text",
            async: false,
            success: function (data) {
                $("#selectedcondetails").html(data);
            }
        });
    }
    else {
        $("#selectedcondetails").html('');
    }
}

function ContainerValidation() {

    var isvalid = true;
    var MErrormsg = "";

    $.ajax({
        url: GetRootPath + "trnLoadedContainerOutWO/validateSubModel",
        type: "Post",
        data: $("form").serialize(),
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
                    MErrormsg += Errormsg;
                }
            }
        }
    });

    if (!isvalid) {
        TosterAlert("error", MErrormsg, "Required!");
    }
    else {
        debugger
        $.ajax({
            url: GetRootPath + "trnLoadedContainerOutWO/ValidCPStatusDates/?id=" + $("#trnDocumentContainerID").val(),
            type: "GET",
            dataType: "text",
            success: function (data) {
                debugger
                if (data != "") {
                    
                    if (confirm(`${data}. Are you sure you want to Continue?`)) {
                        isvalid = true;
                        return SaveContainer(true);
                    } else {
                        isvalid = false;
                        return SaveContainer(false);
                    }
                } else {
                    return SaveContainer(true);
                }
            }
        });
    }
    return isvalid;
}

function SaveContainer(status) {

    if (status) {

        $.ajax({
            url: GetRootPath + "trnLoadedContainerOutWO/AddContainer",
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                if (data != "") {
                    var msgtype = data.split('|')[0];
                    var msg = data.split('|')[1];
                    var msgtxt = data.split('|')[2];
                    TosterAlert(msgtype, msg, msgtxt);
                    location.reload();
                }
            }
        });
    }
}

function ClearContainerDetails() {
    $("#ContNo").val('');
    $("#trnDocumentContainerID").val('0');
    if ($("#trnLoadedContainerOutWODetailsID").val() > 0) {

        filldatatable();
    }
    $("#trnLoadedContainerOutWODetailsID").val('0');
    FillISOCodeDetails();
}
function EditContainerdetails(ID) {
    $("#ContNo").val($("#ContNo_" + ID).text());
    $("#size").val($("#spnCSize" + ID).text());
    $("#trnDocumentContainerID").val($("#trnDocumentContainerID_" + ID).text());
    $("#trnLoadedContainerOutWODetailsID").val(ID);
    
    FillISOCodeDetails();
    $('.IsFull').show('slow');
}
function filldatatable() {
    $.ajax({
        url: GetRootPath + "trnLoadedContainerOutWO/FillGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            if (data != "" && data != null) {
                $("#tblContainer").html(data);                
                filldatatableNOC();
                ClearContainerDetails();
                //$("#dvAddContainerDetails").hide();
            }
        }

    });
}
function filldatatableNOC() {
    if ($("#trnLoadedContainerOutWOID").val() > 0) {

        $.ajax({
            url: GetRootPath + "trnLoadedContainerOutWO/FillGridNOCDetails/" + $("#trnLoadedContainerOutWOID").val(),
            type: "GET",
            dataType: "text",
            async: false,
            success: function (data) {
                if (data != "" && data != null) {
                    $("#tblContainerNOC").html(data);
                    //$("#dvAddContainerDetails").hide();
                }
                else {
                    $("#tblContainerNOC").html("");
                }
            }
        });
    }
}
function deleteContainer(ID) {
    if (ID != "" && ID != "0" && ID != null) {
        $.ajax({
            url: GetRootPath + "trnLoadedContainerOutWO/deleteContainer/" + ID,
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                filldatatable();
                TosterAlert("success", " Container Detail deleted Successfully! ", "success!");
            }
        });
    }
}