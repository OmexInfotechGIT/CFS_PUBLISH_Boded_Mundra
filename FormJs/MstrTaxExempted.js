$(document).ready(function () {
    Autocompletebox("txtCommodityName", "MstrSubCommodityID", "MstrTaxExempted", "GetMstrSubCommodity");

    if (IsEdit.toLowerCase() == "true") {
        $("#txtCommodityName").prop("readonly", true);
        $("#btnsearchclick").hide();
    }
    else {
        $("#txtCommodityName").prop("readonly", false);
        $("#btnsearchclick").show();
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

$("#txtCommodityName").bind("keypress", function (e) {
    if (e.keyCode == 13) {
        return false;
    }
});
function searchTaxExempted() {

    var MstrSubCommodityID = $("#MstrSubCommodityID").val();
    var MstrSubCommodityName = $("#txtCommodityName").val();
    if (MstrSubCommodityID != null && MstrSubCommodityID != undefined && MstrSubCommodityID != "" && MstrSubCommodityID != "0") {
        location.href = "?pg=1&IsSearch=" + true + "&MstrSubCommodityID=" + MstrSubCommodityID + "&MstrSubCommodityName=" + MstrSubCommodityName;
    }
    else {
        $("#txtCommodityName").addClass("redborder");
        TosterAlert("error", "Please select Sub-Commodity.", "Required!");
        return false;
    }
}


function MstrTaxExemptedValidation() {

    var isvalid = true;

    $.ajax({
        url: GetRootPath + "MstrTaxExempted/validateModel",
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
                    TosterAlert("error", Errormsg, "Required!");
                }
            }
        }
    });

    return isvalid;
}