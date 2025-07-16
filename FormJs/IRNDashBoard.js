$(document).ready(function () {
    var InvoiceType = $("#InvoiceType").val();
    if (InvoiceType != "" && InvoiceType != undefined && InvoiceType != "SELECT") {
        if (InvoiceType.toLowerCase() == "bond") {
            $("#bondInvoice").show();
            $("#ExportInvoice").hide();
            $("#EmptyInvoice").hide();
            $("#MiscInvoice").hide();
            $("#CreditNote").hide();
        }
        else if (InvoiceType.toLowerCase() == "export") {
            $("#bondInvoice").hide();
            $("#ExportInvoice").show();
            $("#EmptyInvoice").hide();
            $("#MiscInvoice").hide();
            $("#CreditNote").hide();
        }
        else if (InvoiceType.toLowerCase() == "empty") {
            $("#bondInvoice").hide();
            $("#ExportInvoice").hide();
            $("#EmptyInvoice").show();
            $("#MiscInvoice").hide();
            $("#CreditNote").hide();
        }
        else if (InvoiceType.toLowerCase() == "misc") {
            $("#bondInvoice").hide();
            $("#ExportInvoice").hide();
            $("#EmptyInvoice").hide();
            $("#MiscInvoice").show();
            $("#CreditNote").hide();
        }
        else if (InvoiceType.toLowerCase() == "cnbond" || InvoiceType.toLowerCase() == "cnempty" || InvoiceType.toLowerCase() == "cnmisc") {
            $("#bondInvoice").hide();
            $("#ExportInvoice").hide();
            $("#EmptyInvoice").hide();
            $("#MiscInvoice").hide();
            $("#CreditNote").show();
        }
        else {
            $("#bondInvoice").hide();
            $("#ExportInvoice").hide();
            $("#EmptyInvoice").hide();
            $("#MiscInvoice").hide();
            $("#CreditNote").hide();
        }       
    }
    else {
        $("#bondInvoice").hide();
        $("#ExportInvoice").hide();
        $("#EmptyInvoice").hide();
        $("#MiscInvoice").hide();
        $("#CreditNote").hide();
    }

});

function validateremarksForIRN() {    
    var InvoiceId = $("#InvoiceId").val();
    var InvoiceNo = $("#InvoiceNo").val();
    var InvoiceType = $("#InvoiceType").val();
    var ApproveInvoiceType = $("#ApproveInvoiceType").val();
    var FromDate = $("#FromDate").val();
    var ToDate = $("#ToDate").val();
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
            $.when(GenerateEInvoice(InvoiceId, InvoiceNo, ApproveInvoiceType)).done(function () {
                var msg = IRNMsg.split("|")[0];                
                if (msg == "SUCCESS") {
                    if (InvoiceType == "bond") {
                        $.ajax({
                            url: GetRootPath + "BondInvoice/UpdateStatus/" + InvoiceId + "?Remarks=" + txtRemarks,
                            type: "GET",
                            dataType: "text",
                            async: false,
                            success: function (data) {                                
                                window.location = GetRootPath + "trnDashboard/Index/?FromDate=" + FromDate + "&ToDate=" + ToDate + "&InvoiceType=" + InvoiceType;
                            }
                        });
                    }
                    else if (InvoiceType == "export") {
                        $.ajax({
                            url: GetRootPath + "ExportInvoice/UpdateStatus/" + InvoiceId + "?Remarks=" + txtRemarks,
                            type: "GET",
                            dataType: "text",
                            async: false,
                            success: function (data) {
                                window.location = GetRootPath + "trnDashboard/Index/?FromDate=" + FromDate + "&ToDate=" + ToDate + "&InvoiceType=" + InvoiceType;
                            }
                        });
                    }
                    else if (InvoiceType == "empty") {
                        $.ajax({
                            url: GetRootPath + "emptyInvoice/UpdateStatus/" + InvoiceId + "?Remarks=" + txtRemarks,
                            type: "GET",
                            dataType: "text",
                            async: false,
                            success: function (data) {
                                window.location = GetRootPath + "trnDashboard/Index/?FromDate=" + FromDate + "&ToDate=" + ToDate + "&InvoiceType=" + InvoiceType;
                            }
                        });
                    }
                    else if (InvoiceType == "misc") {
                        $.ajax({
                            url: GetRootPath + "MiscInvoice/UpdateStatus/" + InvoiceId + "?Remarks=" + txtRemarks,
                            type: "GET",
                            dataType: "text",
                            async: false,
                            success: function (data) {
                                window.location = GetRootPath + "trnDashboard/Index/?FromDate=" + FromDate + "&ToDate=" + ToDate + "&InvoiceType=" + InvoiceType;
                            }
                        });
                    }
                    else if (InvoiceType == "creditnote") {
                        $.ajax({
                            url: GetRootPath + "CreditNote/UpdateStatus/" + InvoiceId + "?Remarks=" + txtRemarks,
                            type: "GET",
                            dataType: "text",
                            async: false,
                            success: function (data) {
                                window.location = GetRootPath + "trnDashboard/Index/?FromDate=" + FromDate + "&ToDate=" + ToDate + "&InvoiceType=" + InvoiceType;
                            }
                        });
                    }
                    var btn = document.querySelector('#InvoiceApproveBtn');
                    btn.setAttribute('disabled', true);
                }
                else {
                    TosterAlert("error", "Error while Generating eInvoice : <br />" + IRNMsg.split('|')[1], "Error!");                    
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
function ApproveInvoice(IsIRN, action, InvoiceId, InvoiceNo, InvoiceType, trnSpaceCertificateGWID) {    
    $("#txtRemarks1").val("");
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
    $("#ApproveInvoiceType").val(InvoiceType);
    $("#action").val(action);
    $("#IsIRN").val(IsIRN);
    $("#hdnIRNSpaceCertificateGWID").val(trnSpaceCertificateGWID);
}

function DisplayError(ErrorMsg) {
    /*TosterAlert("error", ErrorMsg, "Error!");*/
    const input = ErrorMsg;

    // Split sentences by '.'
    const sentences = input.split('.').filter(s => s.trim() !== '');

    // Generate <p> tags
    const outputHtml = sentences.map(sentence => `<p>${sentence.trim()}.</p>`).join('');

    // Display in the div
    document.getElementById('output').innerHTML = outputHtml;
}
function ClosePopup() {    
    var FromDate = $("#FromDate").val();
    var ToDate = $("#ToDate").val();
    var InvoiceType = $("#InvoiceType").val();
    window.location = GetRootPath + "trnDashboard/Index/?FromDate=" + encodeURIComponent(FromDate) + "&ToDate=" + encodeURIComponent(ToDate) + "&InvoiceType=" + InvoiceType;
}
function SearchIRNData() {    
    var FromDate = $("#FromDate").val();
    var ToDate = $("#ToDate").val();
    var InvoiceType = $("#InvoiceType").val();
    var isvalid = true;
    var Errormsg = "";
    if (FromDate == "" || FromDate == undefined || FromDate == null) {
        isvalid = false;
        Errormsg += "Please Select From Date <br />";
        $("#FromDate").addClass("redborder");
    }
    else {
        $("#FromDate").removeClass("redborder");
    }
    if (ToDate == "" || ToDate == undefined || ToDate == null) {
        isvalid = false;
        Errormsg += "Please Select To Date <br />";
        $("#ToDate").addClass("redborder");
    }
    else {
        $("#ToDate").removeClass("redborder");
    }
    if ((InvoiceType.toLowerCase() == "select" || InvoiceType == "" || InvoiceType == undefined)) {

        isvalid = false;
        Errormsg += "Please Select Invoice Type <br />";
        $("#InvoiceType").addClass("redborder");
    }
    else {
        $("#InvoiceType").removeClass("redborder");
    }
    if (isvalid) {        
        $.ajax({
            url: GetRootPath + "trnDashboard/validateModel/?FromDate=" + FromDate + "&ToDate=" + ToDate,
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
                else{
                    window.location = GetRootPath + "trnDashboard/Index/?FromDate=" + encodeURIComponent(FromDate) + "&ToDate=" + encodeURIComponent(ToDate) + "&InvoiceType=" + InvoiceType;
                }
            }
        });        
    }
    else {
        TosterAlert("error", Errormsg, "Required!");
    }        
}