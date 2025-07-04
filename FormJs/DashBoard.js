function SerchDate() {
    debugger;
    var FromDate = $("#FromDate").val();
    var ToDate = $("#ToDate").val();
    if ((FromDate != null || FromDate != "" || FromDate != undefine) && (ToDate != null || ToDate != "" || ToDate != ToDate)) {
        location.href = "?FromDate=" + encodeURIComponent(FromDate) + "&ToDate=" + encodeURIComponent(ToDate);
    }    
}