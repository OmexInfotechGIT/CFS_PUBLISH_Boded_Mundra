$(document).ready(function () {
     
    Autocompletebox("DocumentEXBOENo", "trnExBondDocumentEntryDetailsID", "trnWorkOrderOut", "GetEXBOENo/" + $("#trnDocumentID").val() + "?trnWorkOrderOutID=" + trnWorkOrderOutID, "GetEXBOENoDetails");
    Autocompletebox("trnDocumentNo", "trnDocumentID", "trnWorkOrderOut", "GetDocumentNo/" + $("#trnWorkOrderOutID").val() + "?ExBondDocumentEntryDetailsID=" + $("#trnExBondDocumentEntryDetailsID").val(), "GetEXBOENo");

   

    var TransportationType = $("input[name='TRANSPORTATIONTYPE']:checked").val();
    if (TransportationType == "Party") {
        
        $("#dvOwnTruckTransporter").hide();
        $("#dvPartyTruckTransporter").show();
    }
    else {
        
        $("#dvOwnTruckTransporter").show();
        $("#dvPartyTruckTransporter").hide();
    }
    Autocompletebox("Transporter", "TransporterID", "trnWorkOrderOut", "GetTransporter", "GetTRUCKNO");
    Autocompletebox("Surveyor", "SurveyorID", "trnWorkOrderOut", "GetSurveyor");
    Autocompletebox("Vendor", "VendorID", "trnWorkOrderOut", "GetVendor");
    Autocompletebox("LOCATIONFROM", "LOCATIONFROMID", "trnWorkOrderOut", "GetLocationfrom");
    DisplayWeighment('WEIGHMENTREQUIRED', 'dvInActiveReason', 'dvOther', 'dvisshow');
    DisplaySSR('WEIGHMENTPAYMENTMODE', 'dvisshow');

    filldatatable();
    MyTransportationType();

    $("#BulkStatus").val('BULK');

});


function MyTransportationType() {
    
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
                Autocompletebox("Transporter", "TransporterID", "trnWorkOrderOut", "GetTransporter", "GetTRUCKNO");
            }
        }
    });
}

function ChangeLotType() {
    $("#WorkOrderPackages").val("");
    $("#WorkOrderPieces").val("");
    $("#WorkOrderWeight").val("");
}

function GetEXBOENo() {    
    Autocompletebox("DocumentEXBOENo", "trnExBondDocumentEntryDetailsID", "trnWorkOrderOut", "GetEXBOENo/" + $("#trnDocumentID").val() + "?trnWorkOrderOutID=" + trnWorkOrderOutID);
}

function GetEXBOENoDetails() {
    debugger;
    var ID = $("#trnExBondDocumentEntryDetailsID").val();    
    var trnWorkOrderOutLotDetailsID = $("#trnWorkOrderOutLotDetailsID").val();

    Autocompletebox("trnDocumentNo", "trnDocumentID", "trnWorkOrderOut", "GetDocumentNo/" + $("#trnWorkOrderOutID").val() + "?ExBondDocumentEntryDetailsID=" + $("#trnExBondDocumentEntryDetailsID").val());

    if (ID != null && ID != undefined && ID != "" && ID != "0") {

        $.ajax({
            url: GetRootPath + "trnWorkOrderOut/FillLabelDetails/" + ID + "?trnWorkOrderOutID=" + $("#trnWorkOrderOutID").val() + "&trnWorkOrderOutLotDetailsID=" + trnWorkOrderOutLotDetailsID + "&trnExBondDocumentEntryDetailsID=" + $("#trnExBondDocumentEntryDetailsID").val() + "&doaction=" + doaction + "&Packages=" + $("#WorkOrderPackages").val() + "&pieces=" + $("#WorkOrderPieces").val() + "&weight=" + $("#WorkOrderWeight").val(),
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    debugger;
                    if (data.split('|')[0] != "" && data.split('|')[0] != null) {                       
                        $("#addLabel").html(data.split('|')[0]);
                        $("#totalpkg").text("Total : " + $("#balpkg_").text() + "/" + $("#totalpkg_").text());
                        $("#totalWeight").text("Total : " + $("#balweight_").text() + "/" + $("#totalweight_").text());
                        $("#totalPiece").text("Total : " + $("#balpieces_").text() + "/" + $("#totalpieces_").text());
                        $("#TotalRemainPkg").val($("#totalpkg_").text());
                        $("#TotalRemainWT").val($("#totalpkg_").text());
                        $(".QTYLABEL").addClass("badge bg-light-blue");
                        $("#trnDocumentLotDetailsID").val($("#hdntrnDocumentLotDetailsID").text());
                        $("#TransactionType").val($("#hdnTransactionType").text());
                        $("#BulkStatus").val($("#BULKSTATUS").val());

                    }
                    else {
                        $("#addLabel").html("");
                        $("#totalpkg").text("");
                        $("#totalWeight").text("");
                        $("#totalPiece").text("");
                        $(".QTYLABEL").removeClass("badge bg-light-blue");
                    }
                    

                    var nocdata = data.split('|')[1];
                    //$("#trnDocumentNo").val(nocdata.split(',')[1]);
                    //$("#trnDocumentID").val(nocdata.split(',')[0]);
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
        $("#trnDocumentNo").val("");
        $("#trnDocumentID").val("0");
    }

}

function GetTRUCKNO() {
    Autocompletebox("TRUCKNO", "TRUCKID", "trnWorkOrderOut", "GetTRUCKNO/" + $("#TransporterID").val(),"CheckTruckInUsed");
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
    var trnDocumentNo = $("#txttrnDocumentNo").val();
    if (trnDocumentNo != null && trnDocumentNo != undefined && trnDocumentNo != "") {
        location.href = "?pg=1&IsSearch=" + true + "&trnDocumentID=" + $("#txttrnDocumentID").val() + "&trnDocumentNo=" + trnDocumentNo;
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
    var count = 0;
    var isvalid = true;
    var BackToTown = $("input[name='BackToTown']:checked").val();
    if (tab != "2" && BackToTown == "true") {
        if (confirm('Are you sure want to save back to town checkbox value')) {
            $('#BackToTown').prop('checked', true);
        } else {
            $('#BackToTown').prop('checked', false);
        }
    }
    $("#WEIGHMENTREQUIRED").iCheck("enable");
    $("#BackToTown").iCheck("enable");
    $.ajax({
        url: GetRootPath + "trnWorkOrderOut/validateModel",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            $(".redborder").removeClass("redborder");
            if (data != "") {
                isvalid = false;
                count++;
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
    debugger
    $.ajax({
        url: GetRootPath + "trnWorkOrderOut/ValidCPStatusDates/?id=" + $("#trnDocumentLotDetailsID").val(),
        type: "GET",
        dataType: "text",
        success: function (data) {
            debugger
            if (data != "") {

                if (confirm(`${data}. Are you sure you want to Continue?`)) {
                    isvalid = true;
                    //return FinalSaveData(tab, isvalid);
                } else {
                    isvalid = false;
                    count++;
                    //return FinalSaveData(tab, isvalid);
                }
            }
        }
    });

    debugger;
    if (count == 0) {
        isvalid = true;
        return FinalSaveData(tab, isvalid);
    }
    else {
        isvalid = false;
        return FinalSaveData(tab, isvalid);
    }
    //if (isvalid && tab == 2) {
    //    $.ajax({
    //        url: GetRootPath + "trnWorkOrderOut/Action",
    //        type: "Post",
    //        data: $("form").serialize(),
    //        dataType: "text",
    //        async: false,
    //        success: function (data) {
    //            filldatatable();
    //            TosterAlert("success", " Record added Successfully! ", "success!");
    //        }
    //    });
    //}

    //return isvalid;
}
function FinalSaveData(tab, isvalid) {
    debugger
    if (isvalid && tab == 2) {
        $.ajax({
            url: GetRootPath + "trnWorkOrderOut/Action",
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

function ClearDOCData() {
    $("#trnDocumentLotDetailsID").val("0");
    $("#trnExBondDocumentEntryDetailsID").val("0");
    $("#trnWorkOrderOutLotDetailsID").val("0");
    $("#trnDocumentNo").val("");
    $("#trnDocumentID").val("0");
    $("#DocumentEXBOENo").val("");
    $("#WorkOrderPackages").val("");
    $("#WorkOrderWeight").val("");
    $("#WorkOrderPieces").val("");
    GetEXBOENo();
    GetEXBOENoDetails();
}

function changestepValue(tabNo) {
    if (tabNo == 10) {
        $("#IsFinished").val(true);
    }
    $("#trnWorkOrderOutTab").val(tabNo);
}

function filldatatable() {
    $.ajax({
        url: GetRootPath + "trnWorkOrderOut/FillGrid/",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {

            ClearDOCData();
            $("#tblLotDetails").html(data);

        }
    });
}
function Getlotdetails(id, workorderid, trnWorkOrderOutLotDetailsID) {    
    var ViewDetails = true;
    $.ajax({
        url: GetRootPath + "trnWorkOrderOut/FillLabelDetails/" + id + "?trnWorkOrderOutID=" + workorderid + "&trnWorkOrderOutLotDetailsID=" + trnWorkOrderOutLotDetailsID + "&IsViewDetails=" + ViewDetails ,
        type: "GET",
        dataType: "text",
        success: function (data) {            
            if (data != "" && data != null) {
                if (data.split('|')[0] != null && data.split('|')[0] != "") {                    
                    $("#lotdetailnoc").html(data.split('|')[0]);
                }
                else {
                    $("#lotdetailnoc").html("");
                }                

            }
            else {
                $("#lotdetailnoc").html("");

            }
        }
    })
}

function EditLotdetails(ID) {    
    $("#trnDocumentLotDetailsID").val($("#trnDocumentLotDetailsID_" + ID).text());
    $("#trnExBondDocumentEntryDetailsID").val($("#trnExBondDocumentEntryDetailsID_" + ID).text());
    $("#trnWorkOrderOutLotDetailsID").val($("#trnWorkOrderOutLotDetailsID_" + ID).text());
    $("#trnDocumentNo").val($("#trnDocumentNo_" + ID).text());
    $("#trnDocumentID").val($("#trnDocumentID_" + ID).text());
    $("#DocumentEXBOENo").val($("#DocumentEXBOENo_" + ID).text());
    $("#WorkOrderPackages").val($("#WorkOrderPackages_" + ID).text());
    $("#WorkOrderWeight").val($("#WorkOrderWeight_" + ID).text());
    $("#WorkOrderPieces").val($("#WorkOrderPieces_" + ID).text());

    GetEXBOENo();
    GetEXBOENoDetails();
}

function deleteLotDetails(ID) {
    if (ID != "" && ID != "0" && ID != null) {
        $.ajax({
            url: GetRootPath + "trnWorkOrderOut/deleteLotDetails/" + ID,
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                var LotNo = $("#DocumentEXBOENo_" + ID).text();
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
    // setTimeout(function () {
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
            $("#WEIGHMENTPAYMENTMODE").val("CASH"); // This line Added by Bhavesh
        }
    });
    if (IsTruckInUsed == "true" || IsTruckInUsed == "True" || IsTruckInUsed == true) {
        $('#WEIGHMENTREQUIRED').iCheck('disable');
        $('#BackToTown').iCheck('disable');
    }
    // }, 100);
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

function DeleteReason(TableName,ID)
{
    if (ID != "" && ID != null && ID != undefined)
    {
        $("#DeleteReason").val('');
        $("#trnWorkOrderOutID").val(ID);
    }
}

function DeleteWorkOrder() {
    var DeleteReason = $("#DeleteReason").val();
    var isvalid = true;
    $.ajax({
        url: GetRootPath + "trnWorkOrderOut/validateDeleteModel/?DeleteReason=" + DeleteReason,
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
            else
            {
                var ID = $("#trnWorkOrderOutID").val();
                $.ajax({
                    url: GetRootPath + "trnWorkOrderOut/delete/" + ID + "?Reason=" + DeleteReason + "",
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
    var TRUCKNO = "";
    var ID = $("#trnWorkOrderOutID").val();
    var TransportationType = $("input[name='TRANSPORTATIONTYPE']:checked").val();
    if (TransportationType == "Party") {
        TRUCKNO = $("#PARTYTRUCKNO").val()
    }
    else {
        TRUCKNO = $("#TRUCKNO").val()
    }
    $.ajax({
        url: GetRootPath + "trnWorkOrderOut/CheckTruckInUsed/?TruckNo=" + TRUCKNO + "&trnWorkOrderOutID=" + ID,
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
            }
            else {
                $("#TRUCKNO").removeClass("redborder");
            }
        }
    });
}