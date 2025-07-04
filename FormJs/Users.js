$(document).ready(function () {
    Autocompletebox("GroupName", "UserGroupID", "Users", "UserGroup");
    Autocompletebox("txtuserName", "RefID", "Users", "User");
    if (doaction.toLowerCase() == "edit" || doaction.toLowerCase() == "add") {
        DisplayInactiveReason('IsActive', 'dvInActiveReason');
    }

    let searchParams = new URLSearchParams(window.location.search);

    $("#IsChangePassword").prop("checked", searchParams.has('IsChangePassword'))

    if ($("#IsChangePassword").is(":checked") == false) {

        HideShowControl('IsChangePassword', 'dvChangePassword');

    }

    HideShowControl('IsChangePassword', 'dvChangePassword');
    setTimeout(function () {
        $("#txtPassword").val('')
        
    },1000 );
});
function SearchData()
{
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}
$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

function ValidationModel() {
    var isvalid = true;
    var MErrormsg = "";
    var counter = 0;

    $.ajax({
        url: GetRootPath + "Users/validateModel",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {

            $(".redborder").removeClass("redborder");
            if (data != "") {

                isvalid = false;
                var Errormsg = data.split("|")[0];
                var ErrorFields = data.split("|")[1].split(",");

                if (ErrorFields != null && ErrorFields.length > 0) {

                    for (var Q = 0; Q < ErrorFields.length; Q++) {
                        $("#spn_" + ErrorFields[Q]).text('');
                        $("#spn_" + ErrorFields[Q]).next().addClass("redborder");
                    }
                }
                if (Errormsg != "") {
                    MErrormsg += Errormsg;
                }
            }
        }
    });

    if (!isvalid) {
        TosterAlert("error", MErrormsg, "Required!");
    }
    return isvalid;
}
 