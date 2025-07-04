$(document).ready(function () {
    Autocompletebox("txtVesselName", "VesselID", "MstrVesselOnPort", "getVesselName");

    Autocompletebox("txtPortName", "PortID", "MstrVesselOnPort", "getPortName");

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

function isonlynumber(e) {
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        return false;
    }
}