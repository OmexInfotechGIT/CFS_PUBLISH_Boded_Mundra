function Validate() {
    var isvalid = true;
    var Errormsg = "";
    debugger;
    var FromDate = $("#FromDate").val();
    var ToDate = $("#ToDate").val();
    var InvoiceType = $("#InvoiceName").val();

    if (FromDate == null || FromDate == undefined || FromDate == "") {
        isvalid = false;
        $("#FromDate").addClass("redborder");
        TosterAlert("error", "Please select From Date", "Required!");
    }
    else {
        $("#FromDate").removeClass("redborder");
    }
    if (ToDate == null || ToDate == undefined || ToDate == "") {
        isvalid = false;
        $("#ToDate").addClass("redborder");
        TosterAlert("error", "Please select To Date", "Required!");
    }
    else {
        $("#ToDate").removeClass("redborder");
    }
    if (InvoiceType == null || InvoiceType == "" || InvoiceType == undefined || InvoiceType == "SELECT") {
        isvalid = false;
        $("#InvoiceName").addClass("redborder");
        TosterAlert("error", "Please select Invoice Type", "Required!");
    }
    else {

        $("#InvoiceName").removeClass("redborder");
        /*$("#InvoiceType").val(InvoiceType);*/
    }
    

    if (Errormsg != "") {
        debugger;
        TosterAlert("error", Errormsg, "Required!");
        isvalid = false;
    }

    return isvalid;
}