$(document).ready(function () {
    Autocompletebox("txtTaxGrpCode", "hdfTaxGroupRefID", "MstrStateTax", "GetTaxGroup");
    DisplayInactiveReason('IsActive', 'dvInActiveReason');
});

function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}

function onTaxGroupChange(value) {
    var url = "GetHSNCode?TaxGroupID=" + value;
    $.ajax({
        url: url,
        type: "GET",
        async: false,
        success: function (data) {
            if (data != null) {
                $('#HSNCode').html(data);
            }
        }
    });
}

$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

function FillTaxGroupDetails() {
    var TaxGrpCode = $("#txtTaxGrpCode").val();
    if (TaxGrpCode != null && TaxGrpCode != undefined && TaxGrpCode != "") {
        var ID = $("#hdfTaxGroupRefID").val();
        if (TaxGroupDeatails != null && TaxGroupDeatails != undefined && TaxGroupDeatails.length > 0) {
            for (var m = 0; m < TaxGroupDeatails.length; m++) {
                if (TaxGroupDeatails[m]["0"] == ID) {
                    var HsnSacCode = TaxGroupDeatails[m]["1"];
                    if (HsnSacCode != null && HsnSacCode != undefined && HsnSacCode != "") {
                        $("#HSNCode").text(HsnSacCode);
                    }
                }
            }
        }
    }
    else
    {
        $("#HSNCode").text("");
    }

}

function validation() {
    var isvalid = true;

    $.ajax({
        url: GetRootPath + "MstrStateTax/validateModel",
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