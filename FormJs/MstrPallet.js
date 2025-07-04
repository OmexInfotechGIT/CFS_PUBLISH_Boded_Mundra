$(document).ready(function () {
    if (doaction.toLowerCase() == "edit")
    {
        $("#txtChamberName").prop("readonly", true);
        $("#txtFloorNo").prop("readonly", true);
    }
    Autocompletebox("txtChamberName", "txtChamberID", "MstrPallet", "getChamberName","ABC");
    
    DisplayInactiveReason('IsActive', 'dvInActiveReason');
});

function ABC()
{
    Autocompletebox("txtFromFloorName", "txtFloorID", "MstrPallet", "GetFromFloorName/" + $("#txtChamberID").val(),"ABC");
    Autocompletebox("txtToFloorName", "ToFloorID", "MstrPallet", "GetToFloorName/" + $("#txtFloorID").val());
}

function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}
$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});