$(document).ready(function () {

    Autocompletebox("DocumentBOENo", "trnDocumentLotDetailsID", "trnWorkOrder", "GetBOENO/" + $("#trnWorkOrderID").val() + "?trnDocumentID=" + $("#trnDocumentID").val(), "GetDocumentNo");
    Autocompletebox("DocNo", "trnDocumentID", "trnWorkOrder", "GetDocumentNo/" + $("#trnWorkOrderID").val() + "?trnDocumentLotDetailsID=" + $("#trnDocumentLotDetailsID").val(), "GetBOENO");
    Autocompletebox("Transporter", "TransporterID", "trnWorkOrder", "GetTransporter", "GetTRUCKNO");
    Autocompletebox("LOCATIONFROM", "LOCATIONFROMID", "trnWorkOrder", "GetLocationfrom");
    var TransportationType = $("input[name='TRANSPORTATIONTYPE']:checked").val();
    if (TransportationType == "Party") {
        $("#dvOwnTruckTransporter").hide();
        $("#dvPartyTruckTransporter").show();
    }
    else {
        $("#dvOwnTruckTransporter").show();
        $("#dvPartyTruckTransporter").hide();
    }

    DisplayWeighment('WEIGHMENTREQUIRED', 'dvInActiveReason', 'dvOther', 'dvisshow');
    DisplaySSR('WEIGHMENTPAYMENTMODE', 'dvisshow');
    
    filldatatable();
    myTransportationType();
});

//setTimeout(function () {
function myTransportationType() {
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

function GetBOENO() {

    Autocompletebox("DocumentBOENo", "trnDocumentLotDetailsID", "trnWorkOrder", "GetBOENO/" + $("#trnWorkOrderID").val() + "?trnDocumentID=" + $("#trnDocumentID").val(), "GetBOENODetails");    
}

function GetDocumentNo() {

    Autocompletebox("DocNo", "trnDocumentID", "trnWorkOrder", "GetDocumentNo/" + $("#trnWorkOrderID").val() + "?trnDocumentLotDetailsID=" + $("#trnDocumentLotDetailsID").val(), "GetBOENODetails");
    
}

function GetBOENODetails() { 
    //setTimeout(function () {

    var ID = $("#trnDocumentLotDetailsID").val();
    let ID1 = $("#trnDocumentID").val()
    if (ID != null && ID != undefined && ID != "" && ID != "0" && ID1 != null && ID1 != undefined && ID1 != "" && ID1 != "0") {
        $.ajax({
            url: GetRootPath + "trnWorkOrder/FillLabelDetails/" + ID + "?trnWorkOrderID=" + $("#trnWorkOrderID").val() + "&trnWorkOrderLotDetailsID=" + $("#trnWorkOrderLotDetailsID").val(),
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    
                    $("#addLabel").html(data);
                    $("#totalpkg").text("Total : " + $("#balpkg_").text() + "/" + $("#totalpkg_").text());
                    $("#totalWeight").text("Total : " + $("#balweight_").text() + "/" + $("#totalweight_").text());
                    $("#totalPiece").text("Total : " + $("#balpieces_").text() + "/" + $("#totalpieces_").text());
                    $("#TotalRemainPkg").val($("#totalpkg_").text());
                    $("#hdnBULKSTATUS").val($("#hdnBULKSTATUS_").text());
                    $(".QTYLABEL").addClass("badge bg-light-blue");
                    
                }
                else {
                    $("#addLabel").html("");
                    $("#totalpkg").text("");
                    $("#totalWeight").text("");
                    $("#totalPiece").text("");
                    $("#hdnBULKSTATUS").val("");
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
        $("#hdnBULKSTATUS").val("");
        $(".QTYLABEL").removeClass("badge bg-light-blue");
    }
   // }, 100);


    Autocompletebox("DocumentBOENo", "trnDocumentLotDetailsID", "trnWorkOrder", "GetBOENO/" + $("#trnWorkOrderID").val() + "?trnDocumentID=" + $("#trnDocumentID").val(), "GetBOENODetails");
    Autocompletebox("DocNo", "trnDocumentID", "trnWorkOrder", "GetDocumentNo/" + $("#trnWorkOrderID").val() + "?trnDocumentLotDetailsID=" + $("#trnDocumentLotDetailsID").val(), "GetBOENODetails");
}

function GetTransporter() {
    Autocompletebox("Transporter", "TransporterID", "trnWorkOrder", "GetTransporter/" + $("#TRUCKID").val());
}

function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}

$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

//function searchSpaceCertificateNo() {
//    var NOCName = $("#txtNOCName").val();
//    if (NOCName != null && NOCName != undefined && NOCName != "") {
//        location.href = "?pg=1&IsSearch=" + true + "&SpaceCertificateNo=" + $("#txtSpaceCertificateNo").val() + "&NOCName=" + NOCName;
//    }
//    else {
//        TosterAlert("error", "Please select NOC No", "Required!");
//    }
//}

function validateModel(tab) {
    
    changestepValue(tab);
    if (tab == 10) {
        changestepValue(1);
    }

    var isvalid = true;
    if (isvalid) {
        $("#WEIGHMENTREQUIRED").iCheck("enable");
    }

    $.ajax({
        url: GetRootPath + "trnWorkOrder/validateModel",
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
            url: GetRootPath + "trnWorkOrder/Action",
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                filldatatable();
                TosterAlert("success", " Record added Successfully! ", "success!");
                GetDocumentNo();
            }
        });
    }
    return isvalid;
}

function ClearDOCData() {
    
    $("#trnDocumentLotDetailsID").val("0");
    $("#trnWorkOrderLotDetailsID").val("0");    
    $("#DocNo").val("");
    $("#trnDocumentID").val("0");
    $("#DocumentBOENo").val("");
    $("#WorkOrderPackages").val("0");
    $("#WorkOrderWeight").val("0");
    $("#WorkOrderPieces").val("0");
    GetBOENO();
    GetBOENODetails();
}

function changestepValue(tabNo) {
    if (tabNo == 10) {
        $("#IsFinished").val(true);
    }
    $("#trnWorkOrderTab").val(tabNo);
}

function filldatatable() {
    $.ajax({
        url: GetRootPath + "trnWorkOrder/FillGrid/",
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

function EditLotdetails(ID) {
    $("#trnDocumentLotDetailsID").val($("#trnDocumentLotDetailsID_" + ID).text());
    $("#trnWorkOrderLotDetailsID").val($("#trnWorkOrderLotDetailsID_" + ID).text());
    $("#DocNo").val($("#trnDocumentNo_" + ID).text());
    $("#trnDocumentID").val($("#trnDocumentID_" + ID).text());
    $("#DocumentBOENo").val($("#DocumentBOENo_" + ID).text());
    $("#WorkOrderPackages").val($("#WorkOrderPackages_" + ID).text());
    $("#WorkOrderWeight").val($("#WorkOrderWeight_" + ID).text());
    $("#WorkOrderPieces").val($("#WorkOrderPieces_" + ID).text());
    $("#trnDocumentLotDetailsID").val($("#trnDocumentLotDetailsID_" + ID).text());
    
    GetBOENO();
    GetBOENODetails();

    Autocompletebox("DocumentBOENo", "trnDocumentLotDetailsID", "trnWorkOrder", "GetBOENO/" + $("#trnWorkOrderID").val() + "?trnDocumentID=" + $("#trnDocumentID").val(), "GetBOENODetails");    
    Autocompletebox("DocNo", "trnDocumentID", "trnWorkOrder", "GetDocumentNo/" + $("#trnWorkOrderID").val() + "?trnDocumentLotDetailsID=" + $("#trnDocumentLotDetailsID").val(), "GetBOENODetails");

}

function deleteLotDetails(ID) {
    if (ID != "" && ID != "0" && ID != null) {
        $.ajax({
            url: GetRootPath + "trnWorkOrder/deleteLotDetails/" + ID,
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                var LotNo = $("#LotNo_" + ID).text();
                filldatatable();
                TosterAlert('success', ' Lot No"' + LotNo + '"  deleted Successfully! ', 'success!');
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
            $("#WEIGHMENTPAYMENTMODE").val("CASH"); // This line Added by Bhavesh
        }
    });   
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
        $("#trnWorkOrderID").val(ID);
    }
}

function DeleteWorkOrder() {
    debugger
    var DeleteReason = $("#DeleteReason").val();
    var isvalid = true;
    $.ajax({
        url: GetRootPath + "trnWorkOrder/validateDeleteModel/?DeleteReason=" + DeleteReason,
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
                debugger
                var ID = $("#trnWorkOrderID").val();
                $.ajax({
                    url: GetRootPath + "trnWorkOrder/delete/" + ID + "?Reason=" + DeleteReason + "",
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

function GetTRUCKNO() {
    Autocompletebox("TRUCKNO", "TRUCKID", "trnWorkOrder", "GetTRUCKNO/" + $("#TransporterID").val(), "CheckTruckInUsed");
    // CheckTruckInUsed();
}

function CheckTruckInUsed() {
    var TRUCKNO = "";
    var ID = $("#trnWorkOrderID").val();
    var TransportationType = $("input[name='TRANSPORTATIONTYPE']:checked").val();
    if (TransportationType == "Party") {
        TRUCKNO = $("#PARTYTRUCKNO").val()
    }
    else {
        TRUCKNO = $("#TRUCKNO").val()
    }
    $.ajax({
        url: GetRootPath + "trnWorkOrder/CheckTruckInUsed/?TruckNo=" + TRUCKNO + "&trnWorkOrderID=" + ID,
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

function Getlotdetails(id, workorderid, IsOnlyView) {
 
    //+ "?IsOnlyView=" + IsOnlyView
    $.ajax({
        url: GetRootPath + "trnWorkOrder/FillLabelDetails/" + id + "?trnWorkOrderID=" + workorderid,
        type: "GET",
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#lotdetaildoc").html(data);

            }
            else {
                $("#lotdetaildoc").html("");

            }
        }
    })
}

document.addEventListener('keydown', function (event) {
    // Check if the pressed key is Enter
    if (event.key === 'Enter') {
        // Prevent the default action to avoid form submission
        event.preventDefault();

        // Get the currently focused element
        const focusedElement = document.activeElement;

        // Check which div contains the focused element
        if (focusedElement.closest('#divHeaderDetails')) {
            // Find the submit button in HeaderDetails and trigger a click            
            const btn = focusedElement.id;
            if (btn.includes('btnHeaderClear')) {
                const btnHeaderClear = document.getElementById(btn);
                if (btnHeaderClear) {
                    btnHeaderClear.click();
                }
            }
            else {
                const SaveDocument = document.getElementById('SaveDocument');
                if (SaveDocument) {
                    SaveDocument.click();
                }
            }            
        }
        else if (focusedElement.closest('#divNocDetails')) {
            // Find the submit button in LotDetails and trigger a click
            const btn = focusedElement.id;
            if (btn.includes('btnClearNocDetail')) {
                const btnClearNocDetail = document.getElementById(btn);
                if (btnClearNocDetail) {
                    btnClearNocDetail.click();
                }
            }
            else {
                const btnSaveNocDetail = document.getElementById('btnSaveNocDetail');
                if (btnSaveNocDetail) {
                    btnSaveNocDetail.click();
                }
            }           
        }
        else if (focusedElement.closest('#divFinalSave')) {
            const btn = focusedElement.id;
            if (btn.includes('btnFinalClear')) {
                const btnFinalClear = document.getElementById(btn);
                if (btnFinalClear) {
                    btnFinalClear.click();
                }
            }
            else {
                const btnFinalSave = document.getElementById('btnFinalSave');
                if (btnFinalSave) {
                    btnFinalSave.click();
                    validateModel(10);
                }
            }
        }
        else if (focusedElement.closest('#DeleteWorkOrder')) {
            const btn = focusedElement.id;
            if (btn.includes('btnDeleteCancel')) {
                const btnDeleteCancel = document.getElementById(btn);
                if (btnDeleteCancel) {
                    btnDeleteCancel.click();
                }
            }
            else {
                const btndelete=document.getElementById('delete');
                if (btndelete) {
                    btndelete.click();
                }
            }
        }
        else if (focusedElement.closest('#divSearch')) {
            const btn = focusedElement.id;
            if (btn.includes("btnAdd")) {

                const btnAdd = document.getElementById("btnAdd");
                if (btnAdd) {
                    btnAdd.click();
                }
            }
            else {
                const btnSearch = document.getElementById(btn);
                if (btnSearch) {
                    btnSearch.click();
                }
            }
        }
        else if (focusedElement.closest('#divBack')) {
            const btnBack = document.getElementById("btnBack");
            if (btnBack) {
                btnBack.click();
            }
        }
    }
});