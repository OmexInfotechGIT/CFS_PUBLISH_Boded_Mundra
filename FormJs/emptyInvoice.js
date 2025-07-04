$(document).ready(function () {
    var WOID = $("#WOID").val();
    var ContID = $("#ContID").val();
    Autocompletebox("ContNo", "ContID", "emptyInvoice", "GetContNo/?WOID=" + WOID, "GetContNoDetails");
    Autocompletebox("BillingParty", "BillingPartyID", "emptyInvoice", "GetBillTo/?ImporterID=" + $("#ImporterID").val() + "&ConsolerID=" + $("#ConsolerID").val() + "&CHAID=" + $("#CHAID").val() + "&ForwarderID=" + $("#ForwarderID").val(), "autocompleteaddress");
    //Autocompletebox("WONO", "WOID", "emptyInvoice", "GetWONo/?InvoiceMode=" + InvoiceMode + "&InvoiceType=" + InvoiceType + "&ContainerStatus=" + ContainerStatus + "&ContID=" + ContID, "GetContNo");
    GetContNoDetails();
    //GetContNo();
   
});
function autocompleteaddress() {

    var BillToCustomerID = $("#BillingPartyID").val();
    if (BillToCustomerID != null && BillToCustomerID != undefined && BillToCustomerID != "" && BillToCustomerID != "0") {

        Autocompletebox("BillingPartyAddress", "BillingPartyAddressID", "emptyInvoice", "GetBillToAddress/?BillToPartyID=" + BillToCustomerID, "GetAddressDetails");
    }
    else {

        Autocompletebox("BillingPartyAddress", "BillingPartyAddressID", "emptyInvoice", "GetBillToAddress/?BillToPartyID=" + BillToCustomerID, "GetAddressDetails");
    }

}
function GetAddressDetails() {
    var BillToAddressID = $("#BillingPartyAddressID").val();
    if (BillToAddressID != "" && BillToAddressID != null && BillToAddressID != undefined && BillToAddressID != "0") {
        $.ajax({
            url: GetRootPath + "emptyInvoice/GetBillToCustomerGSTNo/" + $("#BillingPartyAddressID").val(),
            type: "GET",
            dataType: "text",
            success: function (data) {
                debugger;
                if (data != "" && data != null) {
                    $("#BillingPartyGSTIN").val(data.split('|')[0]);
                    $("#StateID").val(data.split('|')[1]);
                    $("#State").val(data.split('|')[2]);
                    $("#GSTCustomerType").val(data.split('|')[3]);
                    //$("#StateCode").val(data.split('|')[4]);
                }
                else {

                    $("#BillingPartyGSTIN").val('');
                    $("#StateID").val('0');
                    $("#State").val('');
                    $("#GSTCustomerType").val('');
                }
            }
        });
    }
}

function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}

$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

function SearchValidation() {
    var Errormsg = "";
    var IsValid = true;   

    var ContNo = $("#ContNo").val();
    var ID = $("#ContID").val();
    var WOID = $("#WOID").val();
    var ContID = ID.split('_')[0];
    var ContStatus = ID.split('_')[1];

    if ((ContID == "" || ContID == null || ContID == undefined || ContID == "0") && (WOID == "" || WOID == null || WOID == undefined || WOID == "0")) {
        Errormsg += "Please select Container Number or Work Order. <br/>"
        $("#ContNo").addClass('redborder');
        $("#WONO").addClass('redborder');
        IsValid = false;
    }

    if (IsValid) {
        location.href = "?id=0&pg=1&search=&sortorder=&doaction=add&IsSearch=" + true + "&IsNOC=" + true + "&ContID=" + ContID + "&ContNo=" + ContNo + "&WOID=" + WOID + "&ContStatus=" + ContStatus;
    }
    else {
        TosterAlert("error", Errormsg, "Required!");
    }
    return IsValid;
}

function GetContNoDetails() {
    var CID = $("#ContID").val();
    var ID = 0,ContainerStatus="";
    if (CID != null && CID != undefined && CID != "" && CID != "0") {

        ID = CID.split('_')[0];
        ContainerStatus = CID.split('_')[1];
        if (ContainerStatus == undefined || ContainerStatus == "" || ContainerStatus == null) {
            ContainerStatus = $("#ContainerStatus").val();
        }
    }
    if (ID != null && ID != undefined && ID != "" && ID != "0") {

        $.ajax({
            url: GetRootPath + "emptyInvoice/GetContNoDetails/" + ID + "?ContainerStatus=" + ContainerStatus,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#WOID").val(data.split("|")[0]);
                    $("#WONO").val(data.split("|")[1]);
                    $("#WODate").val(data.split("|")[2]);                    
                }
                else {
                    $("#WOID").val("");
                    $("#WONO").val("");
                    $("#WODate").val("");
                }
            }
        })
    }
}

function SearchNOCDetails(Tab) {

    $("#EmptyInvTab").val(Tab)

    var isvalid = true;
    var MErrormsg = "";
    $.ajax({
        url: GetRootPath + "emptyInvoice/validateModel",
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
    return isvalid;

    return IsValid;
}

function validateModel(Tab) {

    //changestepValue(tab);
    //if (tab == 10) {
    //    changestepValue(1);
    //}
    $("#EmptyInvTab").val(Tab)

    var Errormsg = "";

    var isvalid = true;

    $.ajax({
        url: GetRootPath + "emptyInvoice/validateModel",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            $(".redborder").removeClass("redborder");
            if (data != "") {
                isvalid = false;
                Errormsg += data.split("|")[0];
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

    let PaymentMode = $("#PaymentMode").val()

    if (PaymentMode == "Cash") {

        let PaymentModeOfReceipt = $("#PaymentModeOfReceipt").val();
        let AmountOfReceipt = $("#AmountOfReceipt").val();
        let ReceiptDetails = $("#ChequeDDNeftNoOfReceipt").val();
        let ReceiptDate = $("#ChequeDDNeftDateOfReceipt").val();
        let BankDetails = $("#BankDetailsOfReceipt").val();

        let finalAmount = parseFloat(AmountOfReceipt);

        if (PaymentModeOfReceipt == "Cash") {

            if (!($.isNumeric(AmountOfReceipt)) || AmountOfReceipt == "" || finalAmount == 0) {

                Errormsg += "Please Enter Receipt Amount <br />";
                $("#AmountOfReceipt").addClass("redborder");
            } else {
                $("#AmountOfReceipt").removeClass("redborder");
            }

        }

        if (PaymentModeOfReceipt != "Cash") {

            if (!($.isNumeric(AmountOfReceipt)) || AmountOfReceipt == "" || finalAmount == 0) {

                Errormsg += "Please Enter Receipt Amount <br />";
                $("#AmountOfReceipt").addClass("redborder");
            } else {
                $("#AmountOfReceipt").removeClass("redborder");
            }

            if (ReceiptDetails == "") {

                Errormsg += "Please Enter Receipt Number <br />";
                $("#ChequeDDNeftNoOfReceipt").addClass("redborder");
            } else {
                $("#ChequeDDNeftNoOfReceipt").removeClass("redborder");
            }

            if (ReceiptDate == "") {

                Errormsg += "Please Enter Receipt Date <br />";
                $("#ChequeDDNeftDateOfReceipt").addClass("redborder");
            } else {
                $("#ChequeDDNeftDateOfReceipt").removeClass("redborder");
            }

            if (PaymentModeOfReceipt == "DD" || PaymentModeOfReceipt == "CHEQUE") {

                if (BankDetails == "") {

                    Errormsg += "Please Enter Receipt Bank Details <br />";
                    $("#BankDetailsOfReceipt").addClass("redborder");
                } else {
                    $("#BankDetailsOfReceipt").removeClass("redborder");
                }
            } else {
                $("#BankDetailsOfReceipt").removeClass("redborder");
            }
        } else {
            $("#ChequeDDNeftNoOfReceipt").removeClass("redborder");
            $("#ChequeDDNeftDateOfReceipt").removeClass("redborder");
            $("#BankDetailsOfReceipt").removeClass("redborder");
        }

    }

    if (Errormsg != "") {
        TosterAlert("error", Errormsg, "Required!");
        isvalid = false;
    }

    //if (isvalid) {
    //    $.ajax({
    //        url: GetRootPath + "emptyInvoice/Action",
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
    return isvalid;
}

function ApproveInvoice(IsIRN, action, InvoiceId, InvoiceNo, InvoiceType, trnSpaceCertificateGWID) {
    if (IsIRN == "true") {
        if (action == "approve") {
            $("#IRNTaxAlert").show();
            $("#IRNAlert").hide();
        }
        else if (action == "unapprove") {
            $("#IRNTaxAlert").hide();
            $("#IRNAlert").show();
        }
    }
    else {
        $("#IRNTaxAlert").hide();
        $("#IRNAlert").hide();
    }
    $("#InvoiceId").val(InvoiceId);
    $("#InvoiceNo").val(InvoiceNo);
    $("#InvoiceType").val(InvoiceType);
    $("#action").val(action);
    $("#IsIRN").val(IsIRN);
    $("#hdnIRNSpaceCertificateGWID").val(trnSpaceCertificateGWID);
}

function validateremarksForIRN() {

    var InvoiceId = $("#InvoiceId").val();
    var InvoiceNo = $("#InvoiceNo").val();
    var InvoiceType = $("#InvoiceType").val();
    var action = $("#action").val();
    var IsIRN = $("#IsIRN").val();
    var trnSpaceCertificateGWID = $("#hdnIRNSpaceCertificateGWID").val();
    var txtRemarks = $("#txtRemarks1").val().trim();
    var IsValid = true;

    if (txtRemarks == null || txtRemarks == "" || txtRemarks == undefined) {
        $("#txtRemarks1").addClass("redborder");
        TosterAlert("error", "Please enter Remarks", "Required!");
        IsValid = false;
    }

    if (IsValid) {
        if (action == "approve" && IsIRN == "true") {
            $.when(GenerateEInvoice(InvoiceId, InvoiceNo, InvoiceType)).done(function () {
                var msg = IRNMsg.split("|")[0];
                if (msg == "SUCCESS") {
                    $.ajax({
                        url: GetRootPath + "emptyInvoice/UpdateStatus/" + InvoiceId + "?Remarks=" + txtRemarks,
                        type: "GET",
                        dataType: "text",
                        async: false,
                        success: function (data) { location.href = GetRootPath + "emptyInvoice"; }
                    });

                    var btn = document.querySelector('#InvoiceApproveBtn');
                    btn.setAttribute('disabled', true);
                }
                else {
                    TosterAlert("error", "Error while Generating eInvoice : <br />" + IRNMsg.split('|')[1], "Error!");
                }
            });
        }
        else if (action == "unapprove" && IsIRN == "true") {
            $.when(CancelEInvoice(InvoiceId, InvoiceType, InvoiceNo, txtRemarks)).done(function () {
                var msg = IRNMsg.split("|")[0];
                if (msg == "SUCCESS") {
                    $.ajax({
                        url: GetRootPath + "emptyInvoice/delete/" + InvoiceId,
                        type: "GET",
                        dataType: "text",
                        async: false,
                        success: function (data) { location.href = GetRootPath + "emptyInvoice"; }
                    });

                    var btn = document.querySelector('#InvoiceApproveBtn');
                    btn.setAttribute('disabled', true);
                }
                else {
                    TosterAlert("error", "Error while Cancelling eInvoice : <br />" + IRNMsg.split('|')[1], "Error!");
                }
            });
        }
        else {
            $.ajax({
                url: GetRootPath + "emptyInvoice/UpdateStatus/" + InvoiceId + "?Remarks=" + txtRemarks,
                type: "GET",
                dataType: "text",
                async: false,
                success: function (data) {
                    location.href = GetRootPath + "emptyInvoice";
                }
            });

            var btn = document.querySelector('#InvoiceApproveBtn');
            btn.setAttribute('disabled', true);
        }
    }

}

function GenerateEInvoice(InvoiceId, InvoiceNo, InvoiceType) {
    $.ajax({
        url: GetRootPath + "eInvoice/GenerateEInvoice/" + InvoiceId + "?InvoiceNo=" + InvoiceNo + "&InvoiceType=" + InvoiceType,
        type: "GET",
        dataType: "text",
        async: false,
        success: function (data) {
            if (data != "") {
                IRNMsg = data;
            }
        }
    });
}
function CancelEInvoice(InvoiceId, InvoiceType, InvoiceNo, CancelReason) {
    $.ajax({
        url: GetRootPath + "eInvoice/CancelIRN/" + InvoiceId + "?InvoiceNo=" + InvoiceNo + "&InvoiceType=" + InvoiceType + "&CancelReason=" + CancelReason,
        type: "GET",
        dataType: "text",
        async: false,
        success: function (data) {
            IRNMsg = data;
        }
    });
}

//================================================================================================================================
// Other Tariff Head
//================================================================================================================================
function openOtherTariff() {
    FillEmptyInvoiceOtherTariffDetailsGrid();
    SetfuncationModelValue('OtherTariffDetails')
    $("#AddOtherTariffHead").modal("show");

    setTimeout(function () {
        Autocompletebox("OtherTariffDetailsTariffHead", "OtherTariffDetailsTariffHeadID", "emptyInvoice", "GetTariffHead/" + $("#EmptyInvoiceID").val());
        $(".ui-autocomplete").attr("style", "z-index: 10000;position: relative;");
    }, 500);
}

function FillEmptyInvoiceOtherTariffDetailsGrid() {
    $("#OtherTariffDetailsDetails").html("");

    $.ajax({
        url: GetRootPath + "emptyInvoice/FillEmptyInvoiceOtherTariffDetailsGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#OtherTariffDetailsDetails").html(data);
                ClearEmptyInvoiceOtherTariffDetails();

            }
        }
    });
}

function RefreshPage() {

    location.reload()
}

function SetfuncationModelValue(mdlname) {
    ModelName = mdlname;
}

function AddEmptyInvoiceOtherTariffDetails() {
    debugger;
    event.preventDefault();
    $(".redborder").removeClass("redborder");
    $.ajax({
        url: GetRootPath + "emptyInvoice/validateModelOtherTariffDetails",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "") {
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
                $(".redborder").removeClass("redborder");

                $.ajax({
                    url: GetRootPath + "emptyInvoice/AddEmptyInvoiceOtherTariffDetails",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        ClearEmptyInvoiceOtherTariffDetails();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FillEmptyInvoiceOtherTariffDetailsGrid();
                        TosterAlert(msgType, msg, msgTitle);
                    }
                });
            }
        }
    });
}

function ClearEmptyInvoiceOtherTariffDetails() {
    $("#OtherTariffDetailsGSTPer").val('0');
    $("#OtherTariffDetailsGSTAmount").val('0');
    $("#OtherTariffDetailsTaxableAmount").val('0');
    $("#OtherTariffDetailsDiscountamt").val('0');
    $("#OtherTariffDetailsDiscount").val('0');
    $("#OtherTariffDetailsTariffHead").val('');
    $("#OtherTariffDetailsTariffHeadID").val('0');
    $("#OtherTariffDetailsRate").val('0');
    $("#OtherTariffDetailsTotal").val('0');
    $("#OtherTariffDetailsNetAmount").val('0');
    $("#OtherTariffDetailsQTY").val('0');
    $("#EmptyInvoiceOtherTariffDetailsID").val('0');
    $("#btnOtherTariffDetails").text("Add");

}

function CalculateOtherTariffDetailsAMT() {
    var QTY = $('#OtherTariffDetailsQTY').val();
    var Rate = $('#OtherTariffDetailsRate').val();
    var Discount = $('#OtherTariffDetailsDiscount').val();
    var GSTPer = $('#OtherTariffDetailsGSTPer').val();
    debugger
    if (Rate == undefined || Rate == null || Rate == "" || Rate == 0) {
        Rate = 0;
        $('#OtherTariffDetailsTotal').val(0);
        Discount = 0;
        $('#OtherTariffDetailsDiscount').val(0);
    }
    if (GSTPer == undefined || GSTPer == null || GSTPer == "" || GSTPer == 0 || GSTPer > 100) {
        GSTPer = 0;
        $('#OtherTariffDetailsGSTPer').val(0);
        $('#OtherTariffDetailsGSTAmount').val(0);
    }
    if (Discount == undefined || Discount == null || Discount == "" || Discount == 0) {
        Discount = 0;
        $('#OtherTariffDetailsDiscount').val(0);
        $('#OtherTariffDetailsDiscountAmt').val(0);
    }

    if ((parseFloat(Rate) * parseFloat(QTY)) <= (parseFloat(Discount) * parseFloat(QTY))) {
        Discount = 0;
        $('#OtherTariffDetailsDiscount').val(0);
        $('#OtherTariffDetailsDiscountAmt').val(0);
    }
    var DiscountAmount = parseFloat(Discount) * parseFloat(QTY);
    var TaxableAmount = ((parseFloat(Rate) * parseFloat(QTY)) - DiscountAmount);
    var GSTAMT = ((((parseFloat(Rate) * parseFloat(QTY)) - (parseFloat(Discount) * parseFloat(QTY))) * GSTPer) / 100);

    $('#OtherTariffDetailsGSTAmount').val(GSTAMT.toFixed(2));
    $('#OtherTariffDetailsDiscountamt').val(DiscountAmount.toFixed(2));
    $('#OtherTariffDetailsTaxableAmount').val(TaxableAmount.toFixed(2));
    $("#OtherTariffDetailsTotal").val((parseFloat(Rate) * parseFloat(QTY)).toFixed(2));
    $("#OtherTariffDetailsNetAmount").val((TaxableAmount + GSTAMT).toFixed(2));

    // var GSTAMT = ((((parseFloat(Rate) * parseFloat(QTY)) - (parseFloat(Discount) * parseFloat(QTY))) * GSTPer) / 100);
    // $("#OtherTariffDetailsTotal").val(((parseFloat(Rate) * parseFloat(QTY)) - (parseFloat(Discount) * parseFloat(QTY)) + GSTAMT).toFixed(2));

}

function EditEmptyInvoiceOtherTariffDetails(ID) {
    $("#OtherTariffDetailsTariffHead").val($("#OtherTariffDetailsTariffHead_" + ID).text());
    $("#OtherTariffDetailsTariffHeadID").val($("#OtherTariffDetailsTariffHeadID_" + ID).text());
    $("#OtherTariffDetailsRate").val($("#OtherTariffDetailsRate_" + ID).text());
    $("#OtherTariffDetailsTotal").val($("#OtherTariffDetailsTotal_" + ID).text());
    $("#OtherTariffDetailsQTY").val($("#OtherTariffDetailsQTY_" + ID).text());
    $("#btnOtherTariffDetails").text("Save");
    $("#EmptyInvoiceOtherTariffDetailsID").val(ID);
    $("#OtherTariffDetailsGSTPer").val($("#OtherTariffDetailsGSTPer_" + ID).text());
    $("#OtherTariffDetailsDiscount").val($("#OtherTariffDetailsDiscount_" + ID).text());
    $("#OtherTariffDetailsDiscountamt").val($("#OtherTariffDetailsDiscountamt_" + ID).text());
    $("#OtherTariffDetailsNetAmount").val($("#OtherTariffDetailsNetAmount_" + ID).text());
    $("#OtherTariffDetailsGSTAmount").val($("#OtherTariffDetailsGSTAmount_" + ID).text());
    $("#OtherTariffDetailsTaxableAmount").val($("#OtherTariffDetailsTaxableAmount_" + ID).text());
}

function DeleteEmptyInvoiceOtherTariffDetails(ID) {
    $.ajax({
        url: GetRootPath + "emptyInvoice/deleteOtherTariffHeadDetails/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FillEmptyInvoiceOtherTariffDetailsGrid();
            var msgType = data.split("|")[0];
            var msg = data.split("|")[1];
            var msgTitle = data.split("|")[2];
            TosterAlert(msgType, msg, msgTitle);
        }
    });
}