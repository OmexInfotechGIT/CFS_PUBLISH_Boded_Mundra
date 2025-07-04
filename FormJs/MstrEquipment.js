$(document).ready(function () {
    Autocompletebox("txtEquipmentName", "txtEquipmentID", "MstrEquipment", "getEquipmentName");

    Autocompletebox("EquipmentName", "MstrEquipmentID", "MstrEquipment", "getBankName");
    Autocompletebox("txtEquipmentName", "RefID", "MstrEquipment", "GetEquipment");

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