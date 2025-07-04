$(document).ready(function () {
    Autocompletebox("txtCompanyName", "CompanyRefID", "Company", "GetCompany");
    Autocompletebox("CountryName", "CountryId", "Company", "GetCountry");
    Autocompletebox("BankName", "BankID", "Company", "GetBank");
    Autocompletebox("StateName", "StateCode", "Company", "getStateNames");
    if (doaction.toLowerCase() == "edit" || doaction.toLowerCase() == "add") {
        DisplayInactiveReason('IsActive', 'dvInActiveReason');
    }
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

function EditBank(ID) {
    $("#IFSCCode").val($("#IFSCCode_" + ID).text());
    $("#BankName").val($("#BankName_" + ID).text());
    $("#BankID").val($("#BankID_" + ID).text());
    $("#AccountNo").val($("#AccountNo_" + ID).text());
    $("#AccountName").val($("#AccountName_" + ID).text());
    $("#AccountType").val($("#AccountType_" + ID).text());
    $("#BankDetailsID").val($("#BankDetailsID_" + ID).text());

    if ($("#IsDefaultBilling_" + ID).text() == "YES") {
        $('#DefaultBilling').iCheck('check');
    }
    else {
        $('#DefaultBilling').iCheck('uncheck');
    }

}
 
function ClearBankDetails() {
    $("#IFSCCode").val('');
    $("#BankName").val('');
    $("#AccountNo").val('');
    $("#AccountName").val('');
    $("#AccountType").val('');
    $("#DefaultBilling").val('');
}

function Validation() {

    var isvalid = true;

    $.ajax({
        url: GetRootPath + "Company/validateModel",
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