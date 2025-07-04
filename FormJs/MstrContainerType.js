$(document).ready(function () {
    Autocompletebox("ContainerName", "MstrContainerTypeID", "MstrContainerType", "GetMstrContainerType");
    Autocompletebox("txtContainerName", "RefID", "MstrContainerType", "GetContainerType");

    if (doaction.toLowerCase() == "edit" || doaction.toLowerCase() == "add")
    {
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