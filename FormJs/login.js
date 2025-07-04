//Start: used for Apply CheckBox Mask
$(function () {

    $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' // optional
    });
});
//End: used for Apply CheckBox Mask 


function Validate()
{
    var UserName = $("#txtUserName").val();
    var Password = $("#txtPassword").val();
    var FinancialYear = $("#FinancialYear").val();
    var CaptchaSession = $('#hdnCatptcha').val();
    var txtcaptcha = $('#Confromcaptcha').val();
    var unit = $('#unit').val();
    var IsValid = true;
    var Error = "";
    if (UserName == "" || UserName == null || UserName == undefined)
    {
        IsValid = false;
        Error += "Please enter User Name. <br />";
        $("#txtUserName").addClass("redborder");
    }
    else { $("#txtUserName").removeClass("redborder"); }

    if (Password == "" || Password == null || Password == undefined)
    {
        IsValid = false;
        Error += "Please enter Password. <br />";
        $("#txtPassword").addClass("redborder");
    }
    else { $("#txtPassword").removeClass("redborder"); }
    
    if (unit == "" || unit == null || unit == undefined || unit == "0")  {
        IsValid = false;
        Error += "Please select unit. <br />";
        $("#unit").addClass("redborder");
    }
    else { $("#unit").removeClass("redborder"); }

    if (FinancialYear == "" || FinancialYear == null || FinancialYear == undefined || FinancialYear == "0") {
        IsValid = false;
        Error += "Please select FinancialYear. <br />";
        $("#FinancialYear").addClass("redborder");
    }
    else { $("#FinancialYear").removeClass("redborder"); }

    if (IsCaptcha == "yes")
    {
        if (txtcaptcha == "" || txtcaptcha == null || txtcaptcha == undefined) {
            $('#Confromcaptcha').addClass("border-danger");
            Error += "Captcha Code is Required. <br />";
            IsValid = false;
        }
        else if (txtcaptcha != CaptchaSession) {
            $('#Confromcaptcha').val("");
            Error += "Captcha Code Not Match. <br />";
            IsValid = false;
        }
    }

    if (!IsValid)
    {
        TosterAlert(AlertMessageType.ERROR, Error, AlertMessageTitle.REQUIRED);
        return false;
    }
    else
    {
        return true;
    }
    
}
    
$(function () {
    ReloadCaptchaCode();
});

