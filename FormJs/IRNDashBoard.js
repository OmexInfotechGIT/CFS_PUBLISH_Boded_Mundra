function validateremarksForIRN() {
    debugger;
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
                debugger;
                if (msg == "SUCCESS") {
                    if (InvoiceType == "bond") {
                        $.ajax({
                            url: GetRootPath + "BondInvoice/UpdateStatus/" + InvoiceId + "?Remarks=" + txtRemarks,
                            type: "GET",
                            dataType: "text",
                            async: false,
                            success: function (data) { location.href = GetRootPath + "trnDashboard"; }
                        });
                    }
                    else if (InvoiceType == "export") {
                        $.ajax({
                            url: GetRootPath + "ExportInvoice/UpdateStatus/" + InvoiceId + "?Remarks=" + txtRemarks,
                            type: "GET",
                            dataType: "text",
                            async: false,
                            success: function (data) { location.href = GetRootPath + "trnDashboard"; }
                        });
                    }
                    else if (InvoiceType == "empty") {
                        $.ajax({
                            url: GetRootPath + "emptyInvoice/UpdateStatus/" + InvoiceId + "?Remarks=" + txtRemarks,
                            type: "GET",
                            dataType: "text",
                            async: false,
                            success: function (data) { location.href = GetRootPath + "trnDashboard"; }
                        });
                    }
                    else if (InvoiceType == "misc") {
                        $.ajax({
                            url: GetRootPath + "MiscInvoice/UpdateStatus/" + InvoiceId + "?Remarks=" + txtRemarks,
                            type: "GET",
                            dataType: "text",
                            async: false,
                            success: function (data) { location.href = GetRootPath + "trnDashboard"; }
                        });
                    }
                    else if (InvoiceType == "creditnote") {
                        $.ajax({
                            url: GetRootPath + "CreditNote/UpdateStatus/" + InvoiceId + "?Remarks=" + txtRemarks,
                            type: "GET",
                            dataType: "text",
                            async: false,
                            success: function (data) { location.href = GetRootPath + "trnDashboard"; }
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
        else {
            if (InvoiceType == "bond") {
                $.ajax({
                    url: GetRootPath + "BondInvoice/UpdateStatus/" + InvoiceId + "?Remarks=" + txtRemarks,
                    type: "GET",
                    dataType: "text",
                    async: false,
                    success: function (data) {
                        location.href = GetRootPath + "trnDashboard";
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
                        location.href = GetRootPath + "trnDashboard";
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
                        location.href = GetRootPath + "trnDashboard";
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
                        location.href = GetRootPath + "trnDashboard";
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
                        location.href = GetRootPath + "trnDashboard";
                    }
                });
            }

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
            debugger;
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
    debugger;
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
    $("#InvoiceType").val(InvoiceType);
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