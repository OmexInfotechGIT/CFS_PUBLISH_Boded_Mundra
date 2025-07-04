
$(document).ready(function () {
    Autocompletebox("TariffHeadName", "MstrTariffHeadID", "MstrTariffHead", "getTariffHeadName");
    Autocompletebox("txtTariffHeadName", "RefID", "MstrTariffHead", "GetTariffHead");
    Autocompletebox("txtHSNSACCode", "RefHSNSACCode", "MstrTariffHead", "GetHSNSACCode");

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