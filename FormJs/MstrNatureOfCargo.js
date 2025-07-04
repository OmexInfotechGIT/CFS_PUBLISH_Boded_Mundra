$(document).ready(function () {
    Autocompletebox("NatureofCargoName", "MstrNatureOfCargoID", "MstrNatureOfCargo", "GetMstrNatureOfCargo");
    Autocompletebox("txtNatureofCargoName", "RefID", "MstrNatureOfCargo", "GetNatureOfCargo");
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