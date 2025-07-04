function SearchData()
{
    location.href = "UserGroupAccess?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}

$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

function Validate() {

    UserGroupSelect = $("#UserGroupSelect").val();
    doaction = $("#doaction").val();

    debugger;

    if (doaction == "add") {

        if (UserGroupSelect == "" || UserGroupSelect == undefined || UserGroupSelect == null) {

            TosterAlert("error", "Please select User Group", "Required!");
            return false;
        } else {
            return true;
        }
    }
}
