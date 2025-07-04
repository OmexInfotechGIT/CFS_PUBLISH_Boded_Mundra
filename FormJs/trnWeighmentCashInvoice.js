$(document).ready(function () {
    
    $("#SearchWorkOrderNo").prop("readonly", true);
    $("#SearchtrnDocumentNo").prop("readonly", true);
    $("#SearchTransporterName").prop("readonly", true);

    Autocompletebox("BankName", "MstrBankID", "MstrBank", "getBankName");
    var CarriarType = $("input[name=Carriar]:checked").val(); 
     
    var TransactionType = $("#TransactionType").val();
    var Mode = $("input[name=Mode]:checked").val();
    Autocompletebox("SearchTruckNo", "SearchTruckID", "trnWeighmentCashInvoice", "GetTruckNo/?TransactionType=" + TransactionType + "&Mode=" + Mode + "&CarriarType=" + CarriarType , "GetTruckDetails");
    Autocompletebox("PaidBy", "PaidByID", "trnWeighmentCashInvoice", "GetCustomer","CallbackautocompleteForPaidBy");
    Autocompletebox("ContNo1", "ContID1", "trnWeighmentCashInvoice", "GetContainer/?TransactionType=" + TransactionType + "&Mode=" + Mode + "&ID=" + $("#trnDocumentID").val(), "Callbackautocomplete");
    //Autocompletebox("ContNo2", "ContID2", "trnWeighmentCashInvoice", "GetContainer/?TransactionType=" + TransactionType + "&ID=" + $("#SpaceCertificateGWID").val(), "Callbackautocomplete");
    Autocompletebox("StateOfSupply", "StateOfSupplyID", "trnWeighmentCashInvoice", "GetState");
    
    if (IsEdit.toLowerCase() != "true") {
        $("#dvWeighmentDetails").hide();
        $("#dvDoDetails").hide();
        $("#dvContainerDetails").hide();
        $("#ReceiptDetails").hide();
        $("#dvContainerNo2").hide();
        if (IsSearch.toLowerCase() == "true") {
            $("#dvWeighmentDetails").show();
        }
        else {
            $("#dvWeighmentDetails").hide();
        }
    }
    else
    {
        var ContNo2 = $("#ContID2").val();
        if (($("#spn_Size1").text().trim()) == "20") {
            $("#dvContainerNo2").show();
        }
        else {
            $("#dvContainerNo2").hide();
        }
    }
    
    

    filldatatable();
    if ($("#CarriarTruck").is(":checked")) {
        CarriarType = "Truck";
        $("#dvContainerNo1").hide();
        $("#dvContainerNo2").hide();
        $("#lblSearchTruckNo").text("Vehicle No");
         
    }
    else {
        CarriarType = "Container";
        $("#lblSearchTruckNo").text("Container No");
        $("#dvContainerNo1").show();        
    }

  //  setTimeout(function () {
         
        TransactionType = $("#TransactionType").val();
        Mode = $("input[name=Mode]:checked").val();
        CarriarType = $("input[name=Carriar]:checked").val();
        Autocompletebox("SearchTruckNo", "SearchTruckID", "trnWeighmentCashInvoice", "GetTruckNo/?TransactionType=" + TransactionType + "&Mode=" + Mode + "&CarriarType=" + CarriarType);
        

        $("input[name=Mode]").on('ifChanged', function (event) {
            Mode = $("input[name=Mode]:checked").val();
            CarriarType = $("input[name=Carriar]:checked").val();
            Autocompletebox("SearchTruckNo", "SearchTruckID", "trnWeighmentCashInvoice", "GetTruckNo/?TransactionType=" + TransactionType + "&Mode=" + Mode + "&CarriarType=" + CarriarType);
        });

        $("input[name=Carriar]").on('ifChanged', function (event) {
            Mode = $("input[name=Mode]:checked").val();
            CarriarType = $("input[name=Carriar]:checked").val();
            if (CarriarType != undefined)
            {
                if (CarriarType == "Container") {
                    $("#lblSearchTruckNo").text("Container No");
                    Autocompletebox("SearchTruckNo", "SearchTruckID", "trnWeighmentCashInvoice", "GetTruckNo/?TransactionType=" + TransactionType + "&Mode=" + Mode + "&CarriarType=" + CarriarType);
                }
                else
                {
                    $("#lblSearchTruckNo").text("Vehicle No");
                    Autocompletebox("SearchTruckNo", "SearchTruckID", "trnWeighmentCashInvoice", "GetTruckNo/?TransactionType=" + TransactionType + "&Mode=" + Mode + "&CarriarType=" + CarriarType);
                }
            }
            
            $("#SearchTruckNo").val('');
            $("#SearchTruckID").val('');
            $("#SearchWorkOrderNo").val('');
            $("#SearchWorkOrderID").val('');
            $("#SearchtrnDocumentNo").val('');
            $("#SearchtrnDocumentID").val('');
            $("#SearchTransporterName").val('');
            $("#SearchTransporterID").val('');
             
            Autocompletebox("SearchTruckNo", "SearchTruckID", "trnWeighmentCashInvoice", "GetTruckNo/?TransactionType=" + TransactionType + "&Mode=" + Mode + "&CarriarType=" + CarriarType);
        });
    
        
    
        Autocompletebox("SearchTruckNo", "SearchTruckID", "trnWeighmentCashInvoice", "GetTruckNo/?TransactionType=" + TransactionType + "&Mode=" + Mode + "&CarriarType=" + CarriarType);
  //  }, 100);
});

function SearchData()
{
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}

$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

function ValidationForSearch() {
    var TransactionTypeval = "";
    var Modeval = "";
    var Carriarval = "";
    
    TransactionTypeval =  $("#TransactionType").val();
        
    $('input[name=Mode]').each(function () {
        if ($(this).is(":checked")) {
            Modeval = this.value;
        }
    });

    $('input[name=Carriar]').each(function () {
        if ($(this).is(":checked")) {
            Carriarval = this.value;
        }
    });

    var IsValid = true;
    var ErrorMessage = "";
    
    var TruckNo = $("#SearchTruckNo").val();
    var TruckID = $("#SearchTruckID").val();
    var WorkOrderNo = $("#SearchWorkOrderNo").val();
    var WorkOrderID = $("#SearchWorkOrderID").val();
    var SpaceCertificateNo = $("#SearchtrnDocumentNo").val();
    var SpaceCertificateID = $("#SearchtrnDocumentID").val();
    var TransporterName = $("#SearchTransporterName").val();
    var TransporterID = $("#SearchTransporterID").val();

    var VehicleNo = TruckNo + " @ " + WorkOrderNo + " @ " + SpaceCertificateNo + " @ " + TransporterName
    var VehicleID = TruckID + "_" + WorkOrderID + "_" + SpaceCertificateID + "_" + TransporterID

     

    if (Modeval == "" || Modeval == undefined || Modeval == null) {
        IsValid = false;
        ErrorMessage = "Please Check Mode. <br/>"
    }
    else {
        IsValid = true;
    }

    if (Carriarval == "" || Carriarval == undefined || Carriarval == null) {
        IsValid = false;
        ErrorMessage = "Please Check Carriar. <br/>"
    }
    else
    {
        IsValid = true;
    }
     
    if (TruckNo == "" || TruckNo == undefined || TruckNo == null || TruckNo == "0") {
        IsValid = false;
        ErrorMessage += "Please Select Vehicle No."
        $("#SearchTruckID").addClass("redborder");
    }
    else
    {
        IsValid = true;
    }

    if (!(IsValid)) {
        TosterAlert("error", ErrorMessage, "Required!");
    }
    else
    {
        location.href = "?doaction=add&pg=1&IsSearch=" + true + "&TransactionType=" + TransactionTypeval + "&Mode=" + Modeval + "&Carriarval=" + Carriarval + "&VehicleID=" + VehicleID + "&VehicleNo=" + encodeURIComponent(VehicleNo)
    }    
}

function CallbackautocompleteForPaidBy() {
    if ($("#PaidByID").val() != "" && $("#PaidByID").val() != undefined && $("#PaidByID").val() != null) {
        $.ajax({
            url: GetRootPath + "trnWeighmentCashInvoice/GetCustomerDetails/" + $("#PaidByID").val(),
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#GSTINNo").val(data.split("|")[0]);
                    $("#StateOfSupply").val(data.split("|")[1].split("_")[0].trim());
                    $("#StateOfSupplyID").val(data.split("|")[1].split("_")[1].trim());
                    $("#Address").val(data.split("|")[2]);
                }
                else {
                    $("#GSTINNo").val("");
                    $("#StateOfSupply").val("");
                    $("#StateOfSupplyID").val("0");
                    $("#Address").val("");
                }
            }
        })
    }
    else {
        $("#GSTINNo").val("");
        $("#StateOfSupply").val("");
        $("#StateOfSupplyID").val("0");
        $("#Address").val("");
    }
}

function Callbackautocomplete() {
    var TransactionType = $("#TransactionType").val();
    var Mode = $("input[name=Mode]:checked").val();
    
    if ($("#ContID1").val() != "" && $("#ContID1").val() != undefined && $("#ContID1").val() != null) {
        $.ajax({
            url: GetRootPath + "trnWeighmentCashInvoice/GetContainerDetails/?TransactionType=" + TransactionType + "&ID=" + $("#ContID1").val(),
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#Size1").val(data.split("|")[0]);
                    $("#Type1").val(data.split("|")[1]);
                    $("#CargoType1").val(data.split("|")[2]);
                    $("#spn_Size1").text(data.split("|")[0]);
                    $("#spn_Type1").text(data.split("|")[1]);
                    $("#spn_CargoType1").text(data.split("|")[2]);
                    if (($("#spn_Size1").text().trim()) == "20") {
                        $("#dvContainerNo2").show();
                        Autocompletebox("ContNo2", "ContID2", "trnWeighmentCashInvoice", "GetContainer/?TransactionType=" + TransactionType + "&Mode=" + Mode + "&ID=" + $("#trnDocumentID").val() + "&ContNo1ID=" + $("#ContID1").val(), "dvContNo2AutoComplete");
                    }
                    else {
                        $("#dvContainerNo2").hide();
                    }
                }
                else {
                    $("#Size1").val("");
                    $("#Type1").val("");
                    $("#CargoType1").val("");
                    $("#spn_Size1").text("");
                    $("#spn_Type1").text("");
                    $("#spn_CargoType1").text("");
                    $("#dvContainerNo2").hide();
                }
            }
        })
    }
    else {
        $("#Size1").val("");
        $("#Type1").val("");
        $("#CargoType1").val("");
        $("#spn_Size1").text("");
        $("#spn_Type1").text("");
        $("#spn_CargoType1").text("");
        $("#dvContainerNo2").hide();
    }
}

function changestepValue(tabNo) {
    $("#trnWeighmentCashInvoiceTab").val(tabNo);
}

function validateModel(tab) {
    
    changestepValue(tab)
    var isvalid = true;

    var Errormsg = "";

    if (tab == 10) {
        changestepValue(1);
    }

    $.ajax({
        url: GetRootPath + "trnWeighmentCashInvoice/validateModel",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            $(".redborder").removeClass("redborder");
            if (data != "") {
                isvalid = false;
                Errormsg = data.split("|")[0];
                var ErrorFields = data.split("|")[1].split(",");

                if (ErrorFields != null && ErrorFields.length > 0) {
                    for (var Q = 0; Q < ErrorFields.length; Q++) {
                        $("#spn_" + ErrorFields[Q]).text('');
                        $("#spn_" + ErrorFields[Q]).next().addClass("redborder");
                    }
                }

            }
        }
    });

    let BankName = $("#BankName").val()
    let MstrBankID = $("#MstrBankID").val()

    if (BankName != "") {

        if (MstrBankID == "0") {

            Errormsg += " Please Enter Bank Name";
            $("#BankName").addClass("redborder");
        }
    }

    if (Errormsg != "") {
        TosterAlert("error", Errormsg, "Required!");
        return false;
    }

    if (isvalid && tab == 2) {
        $.ajax({
            url: GetRootPath + "trnWeighmentCashInvoice/Action",
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

    if (isvalid) {
        $("#Isfinished").val(true);
    }
    return isvalid;
}

function filldatatable() {
    $.ajax({
        url: GetRootPath + "trnWeighmentCashInvoice/FillGrid/",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            if (data != "") {
                $("#tblWeighmentCashReceiptDetails").html(data);
                $("#dvBodyWeighmentReceiptDetails").hide();
                ClearWeighmentCashReceiptDetails();
                $("#IsReciptExists").val(true);
            }
            else
            {
                $("#tblWeighmentCashReceiptDetails").html("");
                $("#dvBodyWeighmentReceiptDetails").show();
                $("#IsReciptExists").val(false);
            }
        }
    });
}

function ClearWeighmentCashReceiptDetails() {
    $("#trnWeighmentCashReceiptID").val("0");
    $("#SelectedPaymentMode").val("0");
    $("#RefNo").val("");
    $("#RefDate").val("");
    $("#BankName").val("");
    $("#Amount").val("0");
}

function EditWeighmentCashReceiptDetails(ID) {
    $("#dvBodyWeighmentReceiptDetails").show();
    $("#trnWeighmentCashReceiptID").val($("#trnWeighmentCashReceiptID_" + ID).text());
    $("#trnWeighmentCashInvoiceID").val($("#trnWeighmentCashInvoiceID_" + ID).text());
    $("#SelectedPaymentMode").val($("#SelectedPaymentMode_" + ID).text());
    $("#RefNo").val($("#RefNo_" + ID).text());
    $("#RefDate").val($("#RefDate_" + ID).text());
    $("#BankName").val($("#BankName_" + ID).text());
    $("#Amount").val($("#Amount_" + ID).text());
}

function deleteWeighmentCashReceiptDetails(ID) {
    if (ID != "" && ID != "0" && ID != null) {
        $.ajax({
            url: GetRootPath + "trnWeighmentCashInvoice/deleteWeighmentCashReceiptDetails/" + ID,
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                filldatatable();
                TosterAlert('success', ' Weighment Cash Receipt deleted Successfully! ', 'success!');
            }
        });
    }
}

function ClearWeighmentCashInvoice()
{
    $("#VehicleNo").val("");
    $("#CarriarTruck").iCheck('check');
    location.href = "?doaction=add";
}

function GetTruckDetails() {
    debugger;
    TransactionType = $("#TransactionType").val();
    Mode = $("input[name=Mode]:checked").val();
    CarriarType = $("input[name=Carriar]:checked").val();
    var URLs = GetRootPath + "trnWeighmentCashInvoice/GetTruckDetails/"+ $("#SearchTruckID").val() + "?TransactionType=" + TransactionType + "&Mode=" + Mode + "&CarriarType=" + CarriarType + "&truckno=" + $("#SearchTruckNo").val();
     
    var ID = $("#SearchTruckID").val();
    $.ajax({
        url: URLs, 
        type: "get",
        dataType: "text",
        async: false,
        success: function (data) {
            if (data != "" && data != null) {
                var WorkOrderDetails = data.split("|")[0];
                var SpaceCertificateDetails = data.split("|")[1];
                var TransporterDetails = data.split("|")[2];
                if (WorkOrderDetails != "" && WorkOrderDetails != null && WorkOrderDetails != undefined)
                {
                    $("#SearchWorkOrderID").val(WorkOrderDetails.split("_")[0].trim());
                    $("#SearchWorkOrderNo").val(WorkOrderDetails.split("_")[1].trim());
                }
                if (SpaceCertificateDetails != "" && SpaceCertificateDetails != null && SpaceCertificateDetails != undefined)
                {
                    $("#SearchtrnDocumentID").val(SpaceCertificateDetails.split("_")[0].trim());
                    $("#SearchtrnDocumentNo").val(SpaceCertificateDetails.split("_")[1].trim());
                }
                if (TransporterDetails != "" && TransporterDetails != null && TransporterDetails != undefined)
                {
                    $("#SearchTransporterID").val(TransporterDetails.split("_")[0].trim());
                    $("#SearchTransporterName").val(TransporterDetails.split("_")[1].trim());
                }
            }
            else {
                $("#SearchWorkOrderNo").val("");
                $("#SearchtrnDocumentNo").val("");
                $("#SearchTransporterName").val("");
                $("#SearchWorkOrderID").val('0');
                $("#SearchtrnDocumentID").val('0');
                $("#SearchTransporterID").val('0');
            }
        }
    });
}

function dvContNo2AutoComplete()
{
    var TransactionType = $("#TransactionType").val();
    if ($("#ContID2").val() != "" && $("#ContID2").val() != undefined && $("#ContID2").val() != null) {
        $.ajax({
            url: GetRootPath + "trnWeighmentCashInvoice/GetContainerDetails/?TransactionType=" + TransactionType + "&ID=" + $("#ContID2").val(),
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#Size2").val(data.split("|")[0]);
                    $("#Type2").val(data.split("|")[1]);
                    $("#CargoType2").val(data.split("|")[2]);
                    $("#spn_Size2").text(data.split("|")[0]);
                    $("#spn_Type2").text(data.split("|")[1]);
                    $("#spn_CargoType2").text(data.split("|")[2]);

                }
                else {
                    $("#Size2").val("");
                    $("#Type2").val("");
                    $("#CargoType2").val("");
                    $("#spn_Size2").text("");
                    $("#spn_Type2").text("");
                    $("#spn_CargoType2").text("");
                }
            }
        })
    }
    else {
        $("#Size2").val("");
        $("#Type2").val("");
        $("#CargoType2").val("");
        $("#spn_Size2").text("");
        $("#spn_Type2").text("");
        $("#spn_CargoType2").text("");
    }
}

function DeleteReason(TableName, ID) {
    if (ID != "" && ID != null && ID != undefined) {
        $("#DeleteReason").val('');
        $("#trnWeighmentCashInvoiceID").val(ID);
    }
}

function DeleteWeighmentCashInvoice() {
    var DeleteReason = $("#DeleteReason").val();
    var ID = $("#trnWeighmentCashInvoiceID").val();
    var isvalid = true;
    $.ajax({
        url: GetRootPath + "trnWeighmentCashInvoice/validateDeleteModel/?DeleteReason=" + DeleteReason + "&id=" + ID,
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
                var ID = $("#trnWeighmentCashInvoiceID").val();
                $.ajax({
                    url: GetRootPath + "trnWeighmentCashInvoice/delete/" + ID + "?Reason=" + DeleteReason + "",
                    type: "GET",
                    dataType: "text",
                    async: false,
                    success: function (data) {
                        $('#DeleteWeighmentCashInvoice').modal('hide');
                        location.reload();
                    }
                });
            }
        }
    });
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
            if (btn.includes('btnClearWeighment')) {
                const btnClearWeighment = document.getElementById(btn);
                if (btnClearWeighment) {
                    btnClearWeighment.click()
                }
            }
            else {
                const btnSaveWeighment = document.getElementById('btnSaveWeighment');
                if (btnSaveWeighment) {
                    btnSaveWeighment.click();                   
                }
            }
        }
        else if (focusedElement.closest('#dvWeighmentDetails')) {
            // Find the submit button in LotDetails and trigger a click
            const btn = focusedElement.id;
            if (btn.includes('btnClearWeighmentCashReceipt')) {
                const btnClearWeighmentCashReceipt = document.getElementById(btn);
                if (btnClearWeighmentCashReceipt) {
                    btnClearWeighmentCashReceipt.click();
                }
            }            
            else {
                const btnSaveWeighmentCashReceipt = document.getElementById('btnSaveWeighmentCashReceipt');
                if (btnSaveWeighmentCashReceipt) {
                    btnSaveWeighmentCashReceipt.click();                    
                }
            }
        }
        else if (focusedElement.closest('#ReceiptDetails')) {
            const btn = focusedElement.id;
            if (btn.includes('btnClearWtCashReceipt')) {
                const btnClearWtCashReceipt = document.getElementById(btn);
                if (btnClearWtCashReceipt) {
                    btnClearWtCashReceipt.click();
                }
            }
            else {
                const btnSaveWtCashReceipt = document.getElementById('btnSaveWtCashReceipt');
                if (btnSaveWtCashReceipt) {
                    btnSaveWtCashReceipt.click();
                }
            }
        }
        else if (focusedElement.closest('#DeleteWeighmentCashInvoice')) {
            const btn = focusedElement.id;
            if (btn.includes('btnDeleteCancel')) {
                const btnDeleteCancel = document.getElementById(btn);
                if (btnDeleteCancel) {
                    btnDeleteCancel.click();
                }
            }
            else {
                const btndelete = document.getElementById('delete');
                if (btndelete) {
                    btndelete.click();
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
            const btn = focusedElement.id;
            if (btn.includes('btnPrint')) {
                const btnPrint = document.getElementById(btn);
                if (btnPrint) {
                    btnPrint.click();
                }
            }
            else {
                const btnBack = document.getElementById("btnBack");
                if (btnBack) {
                    btnBack.click();
                }
            }            
        }
    }
});