$(document).ready(function () {
    Autocompletebox("txtContType", "ContTypeID", "MstrISO", "getcontainertype");
    Autocompletebox("txtNatureOfCargo", "NatureOfCargoId", "MstrISO", "GetNatureOfCargoName");

    Autocompletebox("txtIsoCodeName", "RefID", "MstrISO", "getISOCodeName");

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