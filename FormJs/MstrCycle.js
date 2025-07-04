$(document).ready(function () {
    Autocompletebox("CycleName", "MstrCycleID", "MstrCycle", "GetMstrCycle");
    Autocompletebox("txtCycleName", "RefID", "MstrCycle", "GetCycl");

    Autocompletebox("txtSortOrder", "SortOrderRefID", "MstrCycle", "GetSortOrder");


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