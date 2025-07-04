$(document).ready(function () {
    Autocompletebox("ContNo", "ContNoID", "trnReeferPluginOut", "ContainerGateInNo", "Callbackautocomplete");
    Autocompletebox("Agent", "AgentID", "trnReeferPluginOut", "GetAgent");
    Autocompletebox("Line", "LineID", "trnReeferPluginOut", "GetLine?ID=" + $("#AgentID").val());
    
    if (IsSearch == "true") {
        $("#ContNo").prop("readonly", true);

        filldatatable();
        fillMonitor();
    }
    if ($("#hdnEmptyPoweroffdateCount").val() != null && $("#hdnEmptyPoweroffdateCount").val() != undefined && $("#hdnEmptyPoweroffdateCount").val() != "" && $("#hdnEmptyPoweroffdateCount").val() > 0) {
        $("#PlugInDetails").hide();
        $("#dvdMonitoringData").show();
    }
    else {
        $("#PlugInDetails").show();
        $("#dvdMonitoringData").hide();
    }

});

function compareDatetime(newPowerOnDate, newPoweroffdate) {
    let PowerOnDate = new Date(newPowerOnDate);
    let Poweroffdate = new Date(newPoweroffdate);
    if (PowerOnDate.getTime() < Poweroffdate.getTime()) {
        
        return true;
    }
    else {
         
        return false;
    }
}

function compareDate(newtempPowerOffDate, newPoweroffdate) {
    let tempPowerOffDate = new Date(newtempPowerOffDate);
    let Poweroffdate = new Date(newPoweroffdate);
    if (Poweroffdate < tempPowerOffDate) {

        return false;
    }
    else {

        return true;
    }
}


function SearchData() {

    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}
$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

function SearchwithContNo() {
    var ContNoID = $("#ContNoID").val();
    if (ContNoID != null && ContNoID != undefined && ContNoID != "" && ContNoID != "0") {
        location.href = "?doaction=add&pg=1&IsSearch=" + true + "&ContNoID=" + ContNoID + "&ContNo=" + $("#ContNo").val();
    }
    else {
        $("#ContNo").addClass("redborder");
        TosterAlert("error", "Please select Cont No", "Required!");
    }
}

function PlugInValidation(tab) {
    changestepValue(tab);
    var isvalid = true;
    var MErrormsg = "";
    var counter = 0;

    $.ajax({
        url: GetRootPath + "trnReeferPluginOut/validateModel",
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
                $("#IsFinished").val(false);
            }
        }
    });

    if (!isvalid) {
        TosterAlert("error", MErrormsg, "Required!");
    }
    else {
        $("#IsFinished").val(true);
    }
    return isvalid;
}

function EditPluginOutDetails(ID, datetime) {
    debugger;
    $("#PlugInDetails").show();
    $("#Temp").val($("#Temp_" + ID).text());
    $("#PowerOnDate").val($("#PowerOnDate_" + ID).text());
    $("#Poweroffdate").val(datetime);
    $("#trnReeferPluginOutDetailsID").val(ID);
    $("#hdnTempPowerOffDate").val($("#hdnTempPowerOffDate_" + ID).val())
    //FillLabel();
    $("#dvPoweroffdate").show();
    if (ID > 0) {        
        $("#PowerOnDate").attr("readonly", true);
    }
    else {
        $("#PowerOnDate").attr("readonly", false);
    }
}
function EditPluginOutMonitor(ID) {
  
    $("#MonitorDate").val($("#MonitorDate_" + ID).text());
    $("#Temperature").val($("#Temperature_" + ID).text());
    $("#Remarks_Monitor").val($("#Remarks_Monitor_" + ID).text());
    $("#MonitoredBy").val($("#MonitoredBy_" + ID).text());
    $("#trnReeferPluginOutMonitorID").val(ID);
    FillLabelMonitor();
}

function FillLabel() {
    var ID = $("#trnReeferPluginOutDetailsID").val();
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnReeferPluginOut/FillLabelDetails/" + ID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#addLabel").html(data);
                }
                else {
                    $("#addLabel").html("");
                }
            }
        })
    }
    else {
        $("#addLabel").html("");
    }

}
function FillLabelMonitor() {
    var ID = $("#trnReeferPluginOutMonitorID").val();
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnReeferPluginOut/FillLabelMonitor/" + ID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#addLabelMonitor").html(data);
                }
                else {
                    $("#addLabelMonitor").html("");
                }
            }
        })
    }
    else {
        $("#addLabelMonitor").html("");
    }

}

function filldatatable() {
    $.ajax({
        url: GetRootPath + "trnReeferPluginOut/FillGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            if (data != null && data != "") {
                var strtable = data.split("|")[0];
                var emptyPoweroffdatecount = data.split("|")[1];
                $("#tblContainer").html(strtable);
                $("#hdnEmptyPoweroffdateCount").val(emptyPoweroffdatecount);
                ClearPluginOutDetails();
            }
        }
    });
}
function fillMonitor() {
    $.ajax({
        url: GetRootPath + "trnReeferPluginOut/FillGridMonitor",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            $("#tblMonitor").html(data);
            ClearPluginOutMonitor();
        }
    });
}
function deletePluginOutDetails(ID) {
    if (ID != "" && ID != "0" && ID != null) {
        $.ajax({
            url: GetRootPath + "trnReeferPluginOut/deletePluginOutDetails/" + ID,
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                filldatatable();
                TosterAlert("success", " Plug in Out Details deleted Successfully! ", "success!");
            }
        });
    }
}
function deletePluginOutMonitor(ID) {
    if (ID != "" && ID != "0" && ID != null) {
        $.ajax({
            url: GetRootPath + "trnReeferPluginOut/deletePluginOutMonitor/" + ID,
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                fillMonitor();
                TosterAlert("success", " Plug in Out monitor Details deleted Successfully! ", "success!");
            }
        });
    }
}

function MyValidationTemp(ids) {
    var Error = "";
    var o = $("#" + ids).val();
    if (o > 99.99 || o < -99.99) {
        Error = "Enter temperature between -99.99 and 99.99!";
    }
    var str = o;
    if (!str.match(/^-?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)$/)) {
        Error = "Please Enter Valid Temperature!";
    }
    return Error;
}

function PluginOutValidation() {
    var isvalid = true;
    var MErrormsg = "";
    MErrormsg = MyValidationTemp("Temp");
    if (MErrormsg != "") {
        isvalid = false;
    }
    if (isvalid == true) {
        var PowerOnDate = $('#PowerOnDate').val();
        $.ajax({
            url: GetRootPath + "trnReeferPluginOut/validateplugindate?PowerOnDate=" + PowerOnDate,
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                if (data != "") {
                    MErrormsg = "Power On Date must be greater than previous Power off date!";
                }
            }
        });
    }
    debugger;
    if (MErrormsg == "") {
        var PowerOnDate = $('#PowerOnDate').val();
        var Poweroffdate = $('#Poweroffdate').val();
        var id = $('#trnReeferPluginOutDetailsID').val();
        var tempPowerOffDate = $('#hdnTempPowerOffDate').val();
        var GateInDate = $("#txtGateInDate").text();

        let PowerOnDate2 = PowerOnDate.split("/");
        let newPowerOnDate = [PowerOnDate2[1], PowerOnDate2[0], PowerOnDate2[2]].join("/");
        let Poweroffdate2 = Poweroffdate.split("/");
        let newPoweroffdate = [Poweroffdate2[1], Poweroffdate2[0], Poweroffdate2[2]].join("/");
        let GateInDate2 = GateInDate.split("/");
        let newGateInDate = [GateInDate2[1], GateInDate2[0], GateInDate2[2]].join("/");
       
    
        $.ajax({
            url: GetRootPath + "trnReeferPluginOut/validateSubModel",
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

        if (!compareDatetime(newPowerOnDate, newPoweroffdate) && id > 0) {
            MErrormsg = "Power Off date must be greater than Power On date. <br/>";
            isvalid = false;
        }
        if (PowerOnDate != "" && !compareDatetime(newGateInDate, newPowerOnDate)) {
            MErrormsg = "Power On date must be greater than Gate In date. <br/>";
            isvalid = false;
        }
        if (Poweroffdate != "" && tempPowerOffDate != "" && !compareDate(tempPowerOffDate, newPoweroffdate)) {
            MErrormsg = "Power Off date must be greater than or equal InvoiceDate. <br/>";
            isvalid = false;
        }
        if (!isvalid && MErrormsg != "") {
            TosterAlert("error", MErrormsg, "Required!");
        }
        else {
            $.ajax({
                url: GetRootPath + "trnReeferPluginOut/AddPluginOutDetails",
                type: "Post",
                data: $("form").serialize(),
                dataType: "text",
                async: false,
                success: function (data) {
                    if (data != "") {
                        var msgtype = data.split('|')[0];
                        var msg = data.split('|')[1];
                        var msgtxt = data.split('|')[2];
                        TosterAlert(msgtype, msg, msgtxt);
                    }
                    filldatatable();
                }
            });
        }
    }
    else {
        TosterAlert("error", MErrormsg, "Required!");
    }    
    return isvalid;     
}

function PluginOutValidationMonitor() {
    var isvalid = true;
    var MErrormsg = "";
    MErrormsg = MyValidationTemp("Temperature");
    if (MErrormsg != "") {
        isvalid = false;
    }
    if (MErrormsg == "") {
        $.ajax({
            url: GetRootPath + "trnReeferPluginOut/validateSubModelMonitor",
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
        $.ajax({
            url: GetRootPath + "trnReeferPluginOut/AddPluginOutMonitor",
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                if (data != "") {
                    var msgtype = data.split('|')[0];
                    var msg = data.split('|')[1];
                    var msgtxt = data.split('|')[2];
                    TosterAlert(msgtype, msg, msgtxt);
                }
                fillMonitor();
            }
        });
    }
    else {
        TosterAlert("error", MErrormsg, "Required!");
    }
    return isvalid;
}

function ClearPluginOutDetails() {
    if ($("#hdnEmptyPoweroffdateCount").val() != null && $("#hdnEmptyPoweroffdateCount").val() != undefined && $("#hdnEmptyPoweroffdateCount").val() != "" && $("#hdnEmptyPoweroffdateCount").val() > 0) {
        $("#PlugInDetails").hide();
        $("#dvdMonitoringData").show();
    }
    else {
        $("#PlugInDetails").show();
        $("#dvdMonitoringData").hide();
    }
    $("#PowerOnDate").val('');
    $("#Poweroffdate").val('');
    $("#Temp").val('');
    $('#hdnTempPowerOffDate').val('');
    //if ($("#trnReeferPluginOutDetailsID").val() > 0) {

    //    filldatatable();
    //}
    $("#trnReeferPluginOutDetailsID").val('0');
    $("#dvPoweroffdate").hide();
}
function ClearContNo() {
        $("#ContNo").val('');
        $("#ContNoID").val('');
}

function ClearPluginOutMonitor() {
    $("#Temperature").val('');
    $("#Remarks_Monitor").val('');

    if ($("#trnReeferPluginOutMonitorID").val() > 0) {

        fillMonitor();
    }
    $("#trnReeferPluginOutMonitorID").val('0');
}

function AddTemp(TableName, ID) {
    $("#TableID").val(ID);
    $("#TableName").val(TableName);
    $("#divtemp").modal('show');
    
}

function AddDirectTemp() {
    var isvalid = true;
    var MErrormsg = "";
    MErrormsg = MyValidationTemp("Temperature2");
    if (MErrormsg == "") {
        if ($("#Temperature2").val().trim() == "") {
            $("#txtvalidatemessage").show();
        }
        else {
            $("#txtvalidatemessage").hide();
            var postdata =
            {
                Temperature: $("#Temperature2").val().trim(),
                Remarks: $("#Remarks_Monitor2").val().trim(),
                trnReeferPluginOutID: $("#TableID").val()
            };
            $.ajax({
                url: GetRootPath + "trnReeferPluginOut/AddPluginOutMonitor",
                type: "POST",
                data: postdata,
                success: function (data) {
                    /*location.reload();*/
                    $("#divtemp").modal('hide');
                    TosterAlert("success", " Temperature added Successfully! ", "success!");
                }
            });
        }
    }
    else {
        TosterAlert("error", MErrormsg, "Required!");
    }
    $("#Temperature2").val("")
    $("#Remarks_Monitor2").val("")
    return isvalid;
}
function CloseTempdiv() {
    $("#Temperature2").val("")
    $("#Remarks_Monitor2").val("")
}
function PowerOff(TableName, ID) {
    $("#divtemp2").modal('show');
    $("#trnReeferPluginOutID").val(ID);   
    $.ajax({
        url: GetRootPath + "trnReeferPluginOut/GetPluginDate?ID=" + ID,
        type: "GET",
        dataType: "text",
        success: function (data) {
            
            if (data != "" && data != null) {
                $("#txtPowerOnDate").val(data.split("|")[0]);
                $("#lblPowerOnDate").text(data.split("|")[0]);
                $("#txttrnReeferPluginOutDetailsID").val(data.split("|")[1]);
                $("#txtHiddenTempPowerOffDate").val(data.split("|")[2]);
              //  alert(data.split("|")[1])              
            }
            else {
                $("#txtPowerOnDate").val("");
                $("#lblPowerOnDate").text("");
                $("#txtHiddenTempPowerOffDate").val("");
            }
        }
    });
}

function PowerOffFromIndex() {
    var isvalid = true;
    var MErrormsg = "";
    if (MErrormsg == "") {
         
        var txtPowerOnDate = $('#txtPowerOnDate').val();
        var txtPoweroffdate = $('#txtPoweroffdate').val();
        var txtHiddenTempPowerOffDate = $('#txtHiddenTempPowerOffDate').val();

        var id = $('#trnReeferPluginOutID').val();
        let PowerOnDate2 = txtPowerOnDate.split("/");
        let txttrnReeferPluginOutDetailsID = $('#txttrnReeferPluginOutDetailsID').val();
        let newPowerOnDate = [PowerOnDate2[1], PowerOnDate2[0], PowerOnDate2[2]].join("/");
        let Poweroffdate2 = txtPoweroffdate.split("/");
        let newPoweroffdate = [Poweroffdate2[1], Poweroffdate2[0], Poweroffdate2[2]].join("/");
        let txtHiddenTempPowerOffDate2 = txtHiddenTempPowerOffDate.split("/");
        let newtxtHiddenTempPowerOffDate = [txtHiddenTempPowerOffDate2[1], txtHiddenTempPowerOffDate2[0], txtHiddenTempPowerOffDate2[2]].join("/");
        
        if (!compareDatetime(newPowerOnDate, newPoweroffdate)) {
            MErrormsg = "Power Off date must be greater than Power On date. <br/>";
            isvalid = false;
        }
        if (newPoweroffdate != "" && txtHiddenTempPowerOffDate != "" && !compareDate(newtxtHiddenTempPowerOffDate,newPoweroffdate )) {
            MErrormsg = "Power Off date must be greater than or equal InvoiceDate. <br/>";
            isvalid = false;
        }
        if (isvalid == true) {
            $.ajax({
                url: GetRootPath + "trnReeferPluginOut/AddPowerOffDetails?id=" + id + "&newPoweroffdate=" + txtPoweroffdate + "&trnReeferPluginOutDetailsID=" + txttrnReeferPluginOutDetailsID,
                type: "Post",
                data: $("form").serialize(),
                dataType: "text",
                async: false,
                success: function (data) {
                    if (data != "") {
                        //var msgtype = data.split('|')[0];
                        //var msg = data.split('|')[1];
                        //var msgtxt = data.split('|')[2];
                        //TosterAlert(msgtype, msg, msgtxt);
                        location.reload();
                    }
                }
            });
        }
        else {
            TosterAlert("error", MErrormsg, "Required!");
        }
    }
    else {
        TosterAlert("error", MErrormsg, "Required!");
    }    
    return isvalid; 
}
function CloseTempdivnew() {
    $("#Poweroffdate2").val("")
}
 