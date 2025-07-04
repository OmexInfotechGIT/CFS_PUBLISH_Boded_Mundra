$(document).ready(function () {
    Autocompletebox("Taxname", "MstrTaxTypeID", "MstrTaxGroup", "MstrTaxType/" + MstrTaxGroupID + "?TaxID=" + TaxID);
    Autocompletebox("txtTaxGrpname", "RefID", "MstrTaxGroup", "GetAutoTaxGroup");
    Autocompletebox("txtHSNSACCode", "RefHSNSacCode", "MstrTaxGroup", "GetHSNSACCode");

    if (doaction.toLowerCase() == "edit" || doaction.toLowerCase() == "add") {
        DisplayInactiveReason('IsActive', 'dvInActiveReason');
    }

});

function SearchData() {
    location.href = "?pg=1&search=" + EscapeString($("#txtSearch").val());
}
$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

function EditTax(ID) {
    $("#Taxname").val($("#Taxname_" + ID).text());
    $("#MstrTaxTypeID").val($("#MstrTaxTypeID_" + ID).text());
    $("#TaxPercentage").val($("#TaxPer_" + ID).text());
    $("#TaxID").val($("#TaxID_" + ID).text());
}

function cleartex() {
    $("#Taxname").val("");
    $("#MstrTaxTypeID").val("0");
    $("#TaxPercentage").val("0");
    $("#TaxID").val("0");
}

function Validation() {

    var isvalid = true;

    $.ajax({
        url: GetRootPath + "MstrTaxGroup/validateModel",
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