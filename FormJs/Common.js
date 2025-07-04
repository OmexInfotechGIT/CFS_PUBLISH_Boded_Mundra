//Start: used for the call autocomplete Fields
function CheckSessionTimeOut()
{
    debugger;
    $.ajax({
        url: GetRootPath + "General/settionTimeOutcheck",
        type: "GET",
        dataType: "json",
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            if (textStatus == "parsererror") {
                window.location.href = gblStrFullPath + "login/index";
            }
        },
        success: function (data) {
            
        }
    });
}





//Start: used for the call autocomplete Fields
function Autocompletebox(BoxName, BoxID, ControllerName, ActionName, FunctionName = "") {
    var boxwidth = $("#" + BoxName).width();
    var count = 0;
    //$(".ui-autocomplete").width(boxwidth);
    $("#" + BoxName).autocomplete({


        minLength: 0,

        source: function (request, response) {
            $.ajax({
                url: GetRootPath + ControllerName + "/" + ActionName,
                type: "GET",
                dataType: "json",
                data: { Prefix: request.term },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    if (textStatus == "parsererror")
                    {
                        window.location.href = gblStrFullPath + "login/index";
                    }
                },
                success: function (data) {
                    //this code is added By @Jenish After Diccssion with Manish 
                    if (count == 0) {
                        $("#" + BoxID).val("0");
                    }
                    count = 0;

                    if (data.length > 0) {

                        response($.map(data, function (item) {
                            return { value: item.value, label: item.text };
                        }))
                        $('.ui-widget-content').on('click');
                    }
                    else {
                        response([{ label: 'No results found.', val: -1 }]);
                        //$('.ui-widget-content').off('click');
                    }
                }
            })
        },
    
        select: function (e, i) {
            if (i.item.label != 'No results found.') {

                $("#" + BoxID).val(i.item.value);
                $("#" + BoxName).val(i.item.label);
            }
            else {
                $("#" + BoxID).val("0");
                $("#" + BoxName).val("");
            }

            return false;
        },
        focus: function (e, i) {
            if (i.item.label != 'No results found.') {

                //$("#" + BoxID).val(i.item.value);
                //$("#" + BoxName).val(i.item.label);
            }
            else {
                $("#" + BoxID).val("0");
                $("#" + BoxName).val("");
            }
            var Focusid = $(".ui-state-active").attr('id');
            $("#" + Focusid).removeClass("ui-state-active");
            $(".ui-menu-item-wrapper").css("font-weight", "normal").css("background", "white").css("border", "1px solid black;");
            //$("#" + Focusid).css("background-color", "#000000"); 
            $("#" + Focusid).css("font-weight", "normal").css("background", "#dfdfdf").css("border", "1px solid black;");
            
        },
        open: function () {
            //if (BoxName == "BillToCustomerAddress" || BoxName == "txtIMPORTERADDRESSNAME" || BoxName == "SUBCOMMODITYName") {
            $("ul.ui-menu").width(boxwidth + 24);
            //}
            $("ul.ui-menu").css("overflow-wrap", "break-word");
        }
    });

    //This code made by @Dhruv and Commented By Jenish After Disscussion with Manish.
    $("#" + BoxName).blur(function () {
        if ($("#" + BoxName).val() == "" || $("#" + BoxName).val() == null || $("#" + BoxName).val() == undefined) {
            $("#" + BoxID).val("0");
        }
        if (FunctionName != "" && FunctionName != undefined && FunctionName != null) {
            window[FunctionName]();
        }
    });

    $("#" + BoxName).focus(function () {
        //$(this).val('');
        $(this).keydown();
        count++;
    });
    $(".ui-autocomplete").width(boxwidth);
}

//END: used for the call autocomplete Fields



function setCaretPosition(ctrl, Spos, Epos) {
    // Modern browsers
    if (ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(Spos, Epos);

        // IE8 and below
    } else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', Spos);
        range.moveStart('character', Epos);
        range.select();
    }
}

$(document).ready(function () {
    //Start: used for Show Message alert
    if (_Messages != "" && _MessageType != "") {
        TosterAlert(_MessageType, _Messages, _MessageTitle);
    }
    //End: used for Show Message alert

    //Start: used for Auto convert letter small to capital
    $('input').keyup(function () {
        if (this.id != "ContainerHandlingTarrifHead" && this.id != "txtUserName" && this.id != "txtPassword" && this.id != "Confromcaptcha" && this.id != "txtConfirmPassword" && this.id != "MenuName" && this.id != "Controller" && this.id != "Action" && this.id != "MenuLogoText" && this.id != "txtIPaddress" && this.id != "StrValue" && this.id != "ModuleName" && this.id != "StrKey" && this.id != "Description" && this.id != "ParentID" && this.id != "LevelID" && this.id != "SortOrder" && !this.id.includes('Tariff') && !window.location.href.includes("Company")) {
            var ctl = document.getElementById(this.id);
            var startPos = ctl.selectionStart;
            var endPos = ctl.selectionEnd;
            this.value = this.value.toLocaleUpperCase();
            var input = document.getElementById(this.id);
            if (input.type != "radio" && input.type != "checkbox")
            {
                setCaretPosition(input, startPos, endPos);
            }
        }
    });
    $('input').blur(function () {

        if (this.id != "ContainerHandlingTarrifHead" && this.id != "txtUserName" && this.id != "txtPassword" && this.id != "Confromcaptcha" && this.id != "txtConfirmPassword" && this.id != "MenuName" && this.id != "Controller" && this.id != "Action" && this.id != "MenuLogoText" && this.id != "txtIPaddress" && this.id != "StrValue" && this.id != "ModuleName" && this.id != "StrKey" && this.id != "Description" && this.id != "ParentID" && this.id != "LevelID" && this.id != "SortOrder" && !this.id.includes('Tariff') && !window.location.href.includes("Company")) {
            this.value = this.value.toLocaleUpperCase();
        }
    });
    $('textarea').keyup(function () {
        if (!window.location.href.includes("Company")) {

            var ctl = document.getElementById(this.id);
            var startPos = ctl.selectionStart;
            var endPos = ctl.selectionEnd;

            this.value = this.value.toLocaleUpperCase();

            var input = document.getElementById(this.id);
            setCaretPosition(input, startPos, endPos);
        }
    });
    $('textarea').blur(function () {
        if (!window.location.href.includes("Company")) {
            this.value = this.value.toLocaleUpperCase();
            var input = document.getElementById(this.id);
        }
    });

    $("#Inactivereason").on("keypress", function (event) {

        if (event.keyCode === 13) {
            UpdateStatusInActive();
        }
    });
    //End: used for Auto convert letter small to capital

});

//Start: used for check box Active/Inactive with show Hide reason
function DisplayInactiveReason(CheckBoxID, InactivePanalID) {

    var IsActive = $("#" + CheckBoxID).prop("checked");
    if (IsActive != undefined) {
        if (IsActive == false) {
            $("#" + InactivePanalID).show();
            $("input[name=" + CheckBoxID + "]").iCheck('uncheck');
        }
        else {
            $("input[name=" + CheckBoxID + "]").iCheck('check');
            $("#" + InactivePanalID).hide();
        }
    }
    setTimeout(function () {
        $("#" + CheckBoxID).on('ifChanged', function (event) {
            if (event.target.checked == true) {
                $("#" + InactivePanalID).hide();
            }
            else {
                $("#" + InactivePanalID).show();
            }
        });
    }, 100);
}



function HideShowControl(CheckBoxID, InactivePanalID) {

    var isChecked = $("#" + CheckBoxID).prop("checked");
    if (isChecked != undefined) {
        if (isChecked == true) {
            $("#" + InactivePanalID).show();
        }
        else {
            $("#" + InactivePanalID).hide();
        }
    }
    setTimeout(function () {
        $("#" + CheckBoxID).on('ifChanged', function (event) {
            if (event.target.checked != true) {
                $("#" + InactivePanalID).hide();
            }
            else {
                $("#" + InactivePanalID).show();
            }
        });
    }, 100);
}
//End: used for check box Active/Inactive with show Hide reason

//Start: used for Message alert
const AlertMessage = {
    ERROR: 'Error!',
    WARNING: 'Warning!',
    INFO: 'Info!',
    SUCCESS: 'Success!',
    INVALID: 'Invalid!',
    REQUIRED: 'Required!',
    NONE: ''
}


const AlertMessageTitle = {
    ERROR: 'Error!',
    WARNING: 'Warning!',
    INFO: 'Info!',
    SUCCESS: 'Success!',
    INVALID: 'Invalid!',
    REQUIRED: 'Required!',
    NONE: ''
}
const AlertMessageType = {
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info',
    SUCCESS: 'success'
}
const AlertPosition = {
    Top_Right: "toast-top-right",
    Top_Center: "toast-top-center",
    Top_Left: "toast-top-left",
    Top_Full_Width: "toast-top-full-width",
    Bottom_Right: "toast-bottom-right",
    Bottom_Center: "toast-bottom-center",
    Bottom_Left: "toast-bottom-left",
    Bottom_Full_Width: "toast-bottom-full-width"
}
//Start: used for Message alert

//Start: used for Show History Common
function ShowHistory(forh, forhID, schema = "dbo") {
    var url = GetRootPath + "History/getData?doaction=gethistory&forh=" + forh + "&forhID=" + forhID + "&schema=" + schema;
    $.ajax({
        url: url,
        type: "GET",
        async: false,
        success: function (data) {

            if (data != null) {
                $('#GetHistory').html(data);
            }
        }
    });
}

function ShowMoreHistory(forh, forhID, doaction, forhHID, schema = "dbo") {

    var url = GetRootPath + "History/getData?doaction=" + doaction + "&forh=" + forh + "&forhID=" + forhID + "&forhHID=" + forhHID + "&schema=" + schema;
    $.ajax({
        url: url,
        type: "GET",
        async: false,
        success: function (data) {

            if (data != null) {
                $('#GetMoreHistory').html(data);
            }
        }
    });
}
//End: used for Show History Common


//Start: used for Active/Inactive Reason on Single click on all the Summary page.

function ValidateUpdateStatus(TableName, NextStatus, ID) {
    $("#TableName").val(TableName);
    $("#TableID").val(ID);
    $("#IsActive").val(NextStatus);
    if (NextStatus == "true") {
        var postdata =
        {
            TableName: TableName,
            TableID: ID,
            IsActive: NextStatus,
            Inactivereason: ''
        };
        $.ajax({
            url: GetRootPath + "History/updatestatus",
            type: "POST",
            data: postdata,
            success: function (data) {
                location.reload();
            }
        });
    }
    else {
        $("#myModalActiveInactive").modal('show');
    }


}
function UpdateStatusInActive() {
    if ($("#Inactivereason").val().trim() == "") {
        $("#txtvalidatemessage").show();
    }
    else {
        $("#txtvalidatemessage").hide();
        var postdata =
        {
            TableName: $("#TableName").val(),
            TableID: $("#TableID").val(),
            IsActive: $("#IsActive").val(),
            Inactivereason: $("#Inactivereason").val().trim()
        };
        $.ajax({
            url: GetRootPath + "History/updatestatus",
            type: "POST",
            data: postdata,
            success: function (data) {
                location.reload();
            }
        });
    }
}

function isonlynumber(e) {
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        return false;
    }
}

function AlphaNumber(event) {
    var key = (event.which) ? event.which : event.keyCode;
    return ((key >= 65 && key <= 90) || (key >= 97 && key <= 122) || (key >= 48 && key <= 57));
};

function AlphaNumberwithslace(event) {
    var key = (event.which) ? event.which : event.keyCode;
    return ((key >= 65 && key <= 90) || (key >= 97 && key <= 122) || (key >= 48 && key <= 57) || (key == 47));
};
function AlphaNumberwithDash(event) {
    var key = (event.which) ? event.which : event.keyCode;
    return ((key >= 65 && key <= 90) || (key >= 97 && key <= 122) || (key >= 48 && key <= 57) || (key == 45));
};

function alphaOnly(event) {
    var key = (event.which) ? event.which : event.keyCode;
    return ((key >= 65 && key <= 90) || key == 8 || key == 32 || (key >= 97 && key <= 122));
};

function isNumber(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
        return false;
    return true;
}

function isNumberWithTwoDecimal(evt, id) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46)
        return false;
    else {
        var len = document.getElementById(id).value.length;
        var index = document.getElementById(id).value.indexOf('.');
        if (index > 0 && charCode == 46) {
            return false;
        }
    }
    return true;
}
function NumberWithTwoDecimal(evt, id) {
   
    var element = document.getElementById(id);
    element.value = element.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/(\.\d{2}).+/g, '$1');
    
}
function NumberWithTwoDecimalWithNegative(evt, id) {
   
    var element = document.getElementById(id);
    element.value = element.value.replace(/[^-?0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/(\.\d{2}).+/g, '$1');
    
}
function isNumberWithDash(e) {
    var key = (event.which) ? event.which : event.keyCode;
    return ((key >= 48 && key <= 57) || key == 45);
}

//END: used for Active/Inactive Reason on Single click on all the Summary page.
function EscapeString(strVal) {
    var strEscapeUrl = "";

    if (strVal != "" && strVal != undefined && strVal != null) {
        strVal = strVal.split('[').join("[[]")
        strEscapeUrl = encodeURI(strVal);
        //alert(strEscapeUrl);
        strEscapeUrl = strEscapeUrl.split("&").join("^~^").split("+").join("^~~^~~^").split("#").join("^~~~^~~~^~~~^");
        //alert(strEscapeUrl);

    }
    return strEscapeUrl;

}
var wdt = "";
function DataTableSeachEngine(Myinput, myTable, Mybtn, btnclick = "") {

    btn = document.getElementById(Mybtn)
    if (wdt == "") {
        wdt = btn.clientWidth + "px";
    }
    btn.style.width = wdt;
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById(Myinput)
    filter = input.value.toUpperCase();
    if (btn.textContent == "Clear" & btnclick == "yes") {
        document.getElementById(Myinput).value = "";
        filter = "";
        btn.focus();
    }
    if (filter != "") {
        btn.textContent = "Clear";
    }
    else {
        btn.textContent = "Search";
    }
    table = document.getElementById(myTable);
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        txtValue = "";
        for (var j = 0; j < tr[i].getElementsByTagName("td").length; j++) {
            td = tr[i].getElementsByTagName("td")[j];
            if (td) {
                txtValue = txtValue + "|" + td.textContent || td.innerText;
            }
        }
        if (txtValue.toUpperCase().indexOf(filter) > -1 || tr[i].getElementsByTagName("td").length == 0) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }

    }
}
function GetSetMenuSelection(menulevel, ids) {
    var iiiii = GetRootPath + "/home/selectedMenuset/" + menulevel + "?ids=" + ids;

 
    $.ajax({
        url: iiiii,
        type: "GET",
        async: true,
        success: function (data) {
        }
    });
}

function WeightCalculation(PackageID, PiecesID, TotalPackageID, TotalWeightID, WeightID) {    
    var weight = 0;
    var  pack = $("#" + PackageID+"").val();
    var TotalPack = $("#" + TotalPackageID + "").val();
    if (pack != 0 && pack != "" && pack != undefined) {
        $("#" + PiecesID + "").val(pack);
    }
    else {
        $("#" + PiecesID + "").val("0");
    }
   
    var total_weight = $("#" + TotalWeightID + "").val();
    if ((pack != 0 && pack != "" && pack != undefined) && (total_weight != "0" && total_weight != "" && total_weight != undefined) && (TotalPack != "0" && TotalPack != "" && TotalPack != undefined)) {
        weight = (total_weight / TotalPack) * pack;
        $("#" + WeightID + "").val(weight.toFixed(2));
    }
    else {
        $("#" + WeightID + "").val(weight.toFixed(2));
    }
    
}

function btnPrevent() {
    document.addEventListener('keydown', function (event) {
        // Check if the pressed key is Enter
        if (event.key === 'Enter') {
            // Prevent the default action to avoid form submission
            event.preventDefault();

            // Get the currently focused element
            const focusedElement = document.activeElement;

            // Check which div contains the focused element
            if (focusedElement.closest('#myModalConfirmation')) {
                // Find the submit button in HeaderDetails and trigger a click
                const ModalClearConfirmation = focusedElement.id;
                if (ModalClearConfirmation.includes("ModalClearConfirmation")) {
                    const btnModalClearConfirmation = document.getElementById(ModalClearConfirmation);
                    btnModalClearConfirmation.click();
                }
                else {
                    const submitButtonDiv1 = document.getElementById('ModelAddConfirmation');
                    if (submitButtonDiv1) {
                        submitButtonDiv1.click();
                        validateremarks();
                    }
                }

            }
            else if (focusedElement.closest('#myModalConfirmationWithEinvoice')) {
                const btn = focusedElement.id;
                if (btn.includes('btnModelClearConfirmationInvoice')) {
                    const btnModelClearConfirmationInvoice = document.getElementById(btn);
                    if (btnModelClearConfirmationInvoice) {
                        btnModelClearConfirmationInvoice.click();
                    }
                }
                else {
                    const btnModelAddConfirmationInvoice = document.getElementById('btnModelAddConfirmationInvoice')
                    if (btnModelAddConfirmationInvoice) {
                        btnModelAddConfirmationInvoice.click();
                    }
                }
            }
        }
    });
}