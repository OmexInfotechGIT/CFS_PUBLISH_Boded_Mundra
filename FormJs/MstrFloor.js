$(document).ready(function () {
    Autocompletebox("txtChamberName", "ChamberRefID", "MstrFloor", "Chambers");
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

$('#txtMstrFloorNo').on('paste', function (event) {
    if (event.originalEvent.clipboardData.getData('Text').match(/[^\d]/)) {
        event.preventDefault();
    }
});
$('#txtFromFloorNo').on('paste', function (event) {
    if (event.originalEvent.clipboardData.getData('Text').match(/[^\d]/)) {
        event.preventDefault();
    }
});
$('#txtToFloorNo').on('paste', function (event) {
    if (event.originalEvent.clipboardData.getData('Text').match(/[^\d]/)) {
        event.preventDefault();
    }
});