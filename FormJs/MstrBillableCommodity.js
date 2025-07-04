$(document).ready(function () {
    Autocompletebox("Billname", "MstrBillableCommodityID", "MstrBillableCommodity", "GetMstrBillableCommodity");
    Autocompletebox("txtBillname", "RefID", "MstrBillableCommodity", "GetBillable");
    if (doaction.toLowerCase() == "edit" || doaction.toLowerCase() == "add") {
        DisplayInactiveReason('IsActive', 'dvInActiveReason');
    }

});

function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}
$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});