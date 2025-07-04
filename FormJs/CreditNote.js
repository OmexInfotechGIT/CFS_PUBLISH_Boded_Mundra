var IRNMsg = "";
$(document).ready(function () {
    $("#FinalCreditNotAmount").text(0.00);

    $("#FinalGSTAmount").text(0.00);

    $("#FinalTotalAmount").text(0.00);
    var doaction = $("#doaction").val();
    var ID = "";
    var TYPE = "";
    if (doaction != undefined) {
        ID = $("#ConsolidatorChargeDatatableRow").val().split(',');
        TYPE = $("#tblTypeName").val().split(',');
    }

    if (doaction != "add" && doaction != null && doaction != undefined && doaction != "") {

        for (var i = 0; i < ID.length; i++) {
            TotalCNTaxableAmount(ID[i], TYPE[i]);
        }
    }
    else {
        for (var i = 0; i < ID.length; i++) {
            TotalCNTaxableAmount(ID[i], TYPE[i]);
        }
    }
});
function changeInvoice() {
    $("#InvoiceNumer").val('');
    $("#InvoiceNumerID").val('0');
    Autocompletebox("InvoiceNumer", "InvoiceNumerID", "CreditNote", "GetInvoiceNumber/" + $("#SelectInvoiceType").val());
}


function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}


$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});
function TotalCNTaxableAmount(ID, Type) {
    debugger
    
    $("#CNTaxableAmount_" + ID + "_" + Type).bind('copy paste', function (e) {
        e.preventDefault(); return false;
    })
    
    var tb = $("#ConsolidatorChargeDatatableRow").val();
    if (tb != null && tb != undefined && tb != "") {
        var CNTotalAmount = 0;
        var TotalGSTAmount = 0;
        var Bal = 0;

        var CNTaxableAmount = 0;
        if ($("#CNTaxableAmount_" + ID + "_" + Type).val() != "" && $("#CNTaxableAmount_" + ID + "_" + Type).val() != undefined) {
            debugger;
            CNTaxableAmount = parseFloat($("#CNTaxableAmount_" + ID + "_" + Type).val());
            TotalAmount = parseFloat($("#TotalAmount_" + ID + "_" + Type).text());
            Bal = CheckBalanceAmt(ID, Type);
            if (CNTaxableAmount <= Bal) {

                var Gst = parseFloat($("#GSTPer_" + ID + "_" + Type).text());
                var CreditGst = parseFloat((CNTaxableAmount * Gst / 100).toFixed(2));
                debugger;
                $("#CNGSTAmount_" + ID + "_" + Type).text(parseFloat(CreditGst).toFixed(2));
                $("#hdnCNGSTAmount_" + ID + "_" + Type).val(parseFloat(CreditGst).toFixed(2));
                $("#CNTotalAmount_" + ID + "_" + Type).text(parseFloat(CNTaxableAmount + CreditGst).toFixed(2));
                $("#hdnCNTotalAmount_" + ID + "_" + Type).val(parseFloat(CNTaxableAmount + CreditGst).toFixed(2));
                CNTotalAmount = CNTotalAmount + CNTaxableAmount;
                TotalGSTAmount = TotalGSTAmount + CreditGst;
                $("#CNTaxableAmount_" + ID + "_" + Type).removeClass("redborder");
            } else {
                $("#CNTaxableAmount_" + ID + "_" + Type).val("0");
                $("#CNTaxableAmount_" + ID + "_" + Type).addClass("redborder");
                $("#CNGSTAmount_" + ID + "_" + Type).text("0");
                $("#hdnCNGSTAmount_" + ID + "_" + Type).val("0");
                $("#CNTotalAmount_" + ID + "_" + Type).text("0");
                $("#hdnCNTotalAmount_" + ID + "_" + Type).val("0");
                TosterAlert("error", "You don't have sufficient balance.Your Balance is : " + Bal, "Required!");
            }

        }
        else {
            $("#CNTaxableAmount_" + ID + "_" + Type).val("0");
            $("#CNGSTAmount_" + ID + "_" + Type).text("0");
            $("#hdnCNGSTAmount_" + ID + "_" + Type).val("0");
            $("#CNTotalAmount_" + ID + "_" + Type).text("0");
            $("#hdnCNTotalAmount_" + ID + "_" + Type).val("0");
        }
        FinalCalDisplay(Type);
    }

}
function FinalCalDisplay(Type) {
    var CNTotalAmount = 0;
    var TotalGSTAmount = 0;
    var TotalAmount = 0;
    var TotalRoundAmount = 0;
    var NetAmount = 0;
    var tb = $("#ConsolidatorChargeDatatableRow").val();
    if (tb != null && tb != undefined && tb != "") {

        var ConsolidatorChargeDatatableRow = $("#ConsolidatorChargeDatatableRow").val().split(',');
        var Type = $("#tblTypeName").val().split(',');
        for (var i = 0; i < ConsolidatorChargeDatatableRow.length; i++) {
            var CNTaxableAmount = 0;
            if ($("#CNTaxableAmount_" + ConsolidatorChargeDatatableRow[i] + "_" + Type[i]).val() != "" && $("#CNTaxableAmount_" + ConsolidatorChargeDatatableRow[i] + "_" + Type[i]).val() != undefined) {
                CNTaxableAmount = parseFloat($("#CNTaxableAmount_" + ConsolidatorChargeDatatableRow[i] + "_" + Type[i]).val());
                var Gst = parseFloat($("#GSTPer_" + ConsolidatorChargeDatatableRow[i] + "_" + Type[i]).text());
                var CreditGst = parseFloat((CNTaxableAmount * Gst / 100).toFixed(2));
                CNTaxableAmount = parseFloat($("#CNTaxableAmount_" + ConsolidatorChargeDatatableRow[i] + "_" + Type[i]).val());
                CNTotalAmount = CNTotalAmount + CNTaxableAmount;
                TotalGSTAmount = TotalGSTAmount + CreditGst;
            }
        }
        $("#FinalCreditNotAmount").text(CNTotalAmount.toFixed(2));
        $("#FinalGSTAmount").text(TotalGSTAmount.toFixed(2));
        $("#FinalTotalAmount").text((CNTotalAmount + TotalGSTAmount).toFixed(2));
        var TotalRoundAmount = (Math.round(CNTotalAmount + TotalGSTAmount) - (CNTotalAmount + TotalGSTAmount))
        $("#FinalRoundAmount").text(TotalRoundAmount.toFixed(2));
        $("#FinalNetAmount").text(CNTotalAmount + TotalGSTAmount + TotalRoundAmount);
    }
}
function CheckBalanceAmt(ConsolidateChargeGWID, Type) {
    debugger;
    var InvoiceType = $("#SelectInvoiceType").val();
    $.ajax({
        url: GetRootPath + "CreditNote/CheckBalance/" + $("#CreditNoteID").val() + "?InvoiceNumerID=" + $("#InvoiceNumerID").val() + "&Type=" + InvoiceType + "&ConsolidateChargeGWID=" + ConsolidateChargeGWID + "&tblType=" + Type,
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            debugger;
            if (data != "" && data != undefined && data != null) {
                $("#Balance").val(data);
                Bal = $("#Balance").val();

            }
            else {
                $("#Balance").val("0");
                Bal = $("#Balance").val();

            }
        }
    });
    return Bal;
}

function SearchWithInvoiceNo() {
    var InvoiceType = $("#SelectInvoiceType").val();
    var InvoiceNumerID = $("#InvoiceNumerID").val();
    var InvoiceNumer = $("#InvoiceNumer").val();
    var isvalid = false;
    if (InvoiceType != null && InvoiceType != undefined && InvoiceType != "SELECT" && InvoiceType != "") {

        $("#SelectInvoiceType").removeClass("redborder");

        if (InvoiceNumerID != null && InvoiceNumerID != undefined && InvoiceNumerID != "" && InvoiceNumerID != "0") {

            isvalid = true;
            $("#InvoiceNumer").removeClass("redborder");
        }
        else {
            $("#InvoiceNumer").addClass("redborder");
            TosterAlert("error", "Please select Invoice Number", "Required!");
        }
    }
    else {
        $("#SelectInvoiceType").addClass("redborder");
        TosterAlert("error", "Please select Invoice Type", "Required!");
    }

    if (isvalid) {

        $.ajax({
            url: GetRootPath + "CreditNote/addCreditNote",
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {

                debugger

                location.href = "?doaction=add&id=" + data + "&pg=1&IsSearch=" + true + "&InvoiceType=" + InvoiceType + "&InvoiceNumerID=" + InvoiceNumerID + "&InvoiceNumer=" + InvoiceNumer;

            }
        });
    }
}


function GatePassValidation() {

    debugger

    var isvalid = true;
    var MErrormsg = "";

    var ConsolidatorChargeDatatableRow = $("#ConsolidatorChargeDatatableRow").val();

    if (ConsolidatorChargeDatatableRow != "") {
        debugger;
        var id = $("#ConsolidatorChargeDatatableRow").val().split(',');
        var type = $("#tblTypeName").val().split(',');
        let textbox = "";
        var totalcreditAmt = 0;
        for (let i = 0; i < id.length; i++) {

            //textbox = $("#CNTaxableAmount_" + id[i] + "_" + type[i]).val();            
            $("#hdnTypeName_" + id[i] + "_" + type[i]).val(type[i]);
            //if (textbox == "") {
            //    isvalid = false;
            //    MErrormsg = "Please Enter Credit Amount";
            //    $("#CNTaxableAmount_" + id[i] + "_" + type[i]).addClass("redborder");

            //} else {
            //    $("#CNTaxableAmount_"+id[i] + "_" + type[i]).removeClass("redborder");
            //}
            totalcreditAmt += $("#CNTaxableAmount_" + id[i] + "_" + type[i]).val();
            totalcreditAmt = parseFloat(totalcreditAmt);

        }
        if (totalcreditAmt == 0) {            
            isvalid = false;
            MErrormsg = "Please Enter at least one Credit Amount";
        }        
        else {
            isvalid = true;
        }

        if (parseInt($("#FinalNetAmount").text()) <= 0) {
            isvalid = false;
            MErrormsg = "Net Amount should be greater than Zero.";
        }

    }
    if (!isvalid) {
        TosterAlert("error", MErrormsg, "Required!");
    }
    return isvalid;

}


function ApproveInvoice(IsIRN, action, InvoiceId, InvoiceNo, InvoiceType, refInvoiceId, refInvoiceType) {
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
    $("#hdnIRNReferenceInvoiceType").val(refInvoiceType);
    $("#hdnIRNReferenceInvoiceId").val(refInvoiceId);
}

function validateremarksForIRN() {
    debugger
    var InvoiceId = $("#InvoiceId").val();
    var InvoiceNo = $("#InvoiceNo").val();
    var InvoiceType = $("#InvoiceType").val();
    var action = $("#action").val();
    var IsIRN = $("#IsIRN").val();
    var ReferenceInvoiceType = $("#hdnIRNReferenceInvoiceType").val();
    var ReferenceInvoiceId = $("#hdnIRNReferenceInvoiceId").val();
    var txtRemarks = $("#txtRemarks1").val().trim();
    var IsValid = true;

    if (txtRemarks == null || txtRemarks == "" || txtRemarks == undefined) {
        $("#txtRemarks1").addClass("redborder");
        TosterAlert("error", "Please enter Remarks", "Required!");
        IsValid = false;
    }
    debugger
    if (IsValid) {
        if (action == "approve" && IsIRN == "true") {
            $.when(GenerateEInvoice(InvoiceId, InvoiceNo, InvoiceType)).done(function () {
                var msg = IRNMsg.split("|")[0];
                if (msg == "SUCCESS") {
                    $.ajax({
                        url: GetRootPath + "CreditNote/UpdateStatus/" + InvoiceId + "?Remarks=" + txtRemarks,
                        type: "GET",
                        dataType: "text",
                        async: false,
                        success: function (data) { location.href = GetRootPath + "CreditNote"; }
                    });
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
                        url: GetRootPath + "CreditNote/delete/" + InvoiceId,
                        type: "GET",
                        dataType: "text",
                        async: false,
                        success: function (data) { location.href = GetRootPath + "CreditNote"; }
                    });
                }
                else {
                    TosterAlert("error", "Error while Cancelling eInvoice : <br />" + IRNMsg.split('|')[1], "Error!");
                }
            });
        }
        else {
            $.ajax({
                url: GetRootPath + "CreditNote/UpdateStatus/" + InvoiceId + "?Remarks=" + txtRemarks,
                type: "GET",
                dataType: "text",
                async: false,
                success: function (data) {
                    location.href = GetRootPath + "CreditNote";
                }
            });
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
                //if (data.split('|')[0] == "SUCCESS") {
                //    isvalid = true;
                //}
                //else {
                //    isvalid = false;
                //    alert("Error while Generating eInvoice : <br />" + data.split('|')[1]);
                //    TosterAlert("error", "Error while Generating eInvoice : <br />" + data.split('|')[1], "Error!");
                //}
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
            //if (data != "") {
            //    if (data.split('|')[0] == "SUCCESS") {
            //        isvalid = true;
            //    }
            //    else {
            //        isvalid = false;
            //        TosterAlert("error", "Error while Cancelling eInvoice : <br />" + data.split('|')[1], "Error!");
            //    }
            //}
        }
    });
}
