$(document).ready(function () {
    Autocompletebox("Transporter", "TransporterID", "trnEmptyContainerOutGatePass", "GetTransporter", "GetTruckNo");
    Autocompletebox("ContNo", "trnEmptyContainerOutWODetailsID", "trnEmptyContainerOutGatePass", "GetContainerNo/" + $("#TruckID").val() + "?trnEmptyContainerOutGatePassID=" + $("#trnEmptyContainerOutGatePassID").val() + "&trnEmptyContainerOutGatePassDetailsID=" + $("#trnEmptyContainerOutGatePassDetailsID").val(), "FillLabel");
    Autocompletebox("MovetoLocation", "MovetoLocationID", "trnEmptyContainerOutGatePass", "GetLocationfrom");
    filldatatable();
    GetTruckNo();
});
function GetTruckNo() {
    Autocompletebox("TruckNo", "TruckID", "trnEmptyContainerOutGatePass", "GetTRUCKNO/" + $("#TruckID").val(),  "GetDetailsByLicenceNO");
}
function GetDriver() {
   
    Autocompletebox("Driver", "DriverID", "trnEmptyContainerOutGatePass", "GETDriver/" + $("#TransporterID").val(), "GetDetailsByDriver");
    Autocompletebox("LicenceNo", "LicenceNo", "trnEmptyContainerOutGatePass", "GETLicenseNo/" + $("#TransporterID").val(), "GetDetailsByLicenceNO");
}
function GetDetailsByLicenceNO() {    
    var ID = $("#TruckID").val();
    var TransporterType = "";
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnEmptyContainerOutGatePass/GetLicenseDetails/" + ID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                   
                    $("#Transporter").val(data.split("|")[0]);
                    $("#LicenceNo").val(data.split("|")[1]);
                    $("#DriverID").val(data.split("|")[2]);
                    $("#Driver").val(data.split("|")[3]);
                    $("#MobileNo").val(data.split("|")[4]);
                    $("#Address").val(data.split("|")[5]);
                    $("#VehicleType option[value='" + data.split("|")[6]+"']").prop('selected', true);
                    //$("#VehicleType").val(data.split("|")[6]);
                    TransporterType = data.split("|")[7];
                    if (TransporterType.toUpperCase() == "OWN") {
                        $("#Driver").prop('readonly', true);
                        $("#LicenceNo").prop('readonly', true);
                        $("#MobileNo").prop('readonly', true);
                        $("#Address").prop('readonly', true);  
                        //$("#VehicleType").css("pointer-events", "none");
                        //$("#VehicleType").css("background-color", "#eee");
                    }
                    else {
                        $('#Driver').prop('readonly', false);
                        $("#LicenceNo").prop('readonly', false);
                        $("#MobileNo").prop('readonly', false);
                        $("#Address").prop('readonly', false);                        
                        //$("#VehicleType").css("pointer-events", "");
                        //$("#VehicleType").css("background-color", "");
                    }
                }
                else {
                    $("#Driver").val("");
                    $("#DriverID").val("0");
                    $("#MobileNo").val("");
                    $("#Address").val("");
                }
            }
        })
    }
}
function GetDetailsByDriver() {

    var ID = $("#DriverID").val();
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnEmptyContainerOutGatePass/GetDriverDetails/" + ID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#LicenceNo").val(data.split("|")[0]);
                    $("#MobileNo").val(data.split("|")[1]);
                    $("#Address").val(data.split("|")[2]);
                }
                else {
                    $("#LicenceNo").val("");
                    $("#MobileNo").val("");
                    $("#Address").val("");
                }
            }
        })
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
function Callbackautocomplete() {
    Autocompletebox("txtIMPORTERADDRESSNAME", "txtIMPORTERADDRESSID", "trnEmptyContainerOutGatePass", "GetIMPORTERADDRESS/" + $("#txtIMPORTERID").val());
}
function GatePassValidation() {

    var isvalid = true;
    var MErrormsg = "";
    var counter = 0;

    $.ajax({
        url: GetRootPath + "trnEmptyContainerOutGatePass/validateModel",
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
function FillLabel() {
    var ID = $("#trnEmptyTruckGateInEmptyID").val();
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnEmptyContainerOutGatePass/FillLabelDetails/" + ID,
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
function ContainerValidation() {

    var isvalid = true;
    var MErrormsg = "";

    $.ajax({
        url: GetRootPath + "trnEmptyContainerOutGatePass/validateSubModel",
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
    else if ((parseInt($("#hdntotalsize").val()) + parseInt($("#hdnlblsize").val())) > 45) {
        TosterAlert("error", "This container is over sized for this truck", "Required!");
    }
    else {
        $.ajax({
            url: GetRootPath + "trnEmptyContainerOutGatePass/AddContainer",
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
    return isvalid;
}
function ClearContainerDetails() {
    $("#ContNo").val("");
    $("#trnEmptyTruckGateInEmptyID").val("0");
    $("#Condition").val("NORMAL");
    $("#ConditionRemarks").val("");
    $("#MovetoLocation").val("");
    $("#MovetoLocationID").val("0");
    $("#SaveDoccon").text("Add");
    if ($("#trnEmptyContainerOutGatePassDetailsID").val() > 0) {
        $("#trnEmptyContainerOutGatePassDetailsID").val("0");
        filldatatable();
    }
    $("#trnEmptyContainerOutGatePassDetailsID").val("0");
    Autocompletebox("ContNo", "trnEmptyContainerOutWODetailsID", "trnEmptyContainerOutGatePass", "GetContainerNo/" + $("#TruckID").val() + "?trnEmptyContainerOutGatePassID=" + $("#trnEmptyContainerOutGatePassID").val() + "&trnEmptyContainerOutGatePassDetailsID=" + $("#trnEmptyContainerOutGatePassDetailsID").val(), "FillLabel");
    FillLabel();
}
function EditContainerdetails(ID) {
    $("#ContNo").val($("#ContNo_" + ID).text());
    $("#trnEmptyContainerOutWODetailsID").val($("#trnEmptyContainerOutWODetailsID_" + ID).text());
    $("#trnEmptyContainerOutGatePassDetailsID").val(ID);
    $("#Condition").val($("#Condition_" + ID).text());
    $("#ConditionRemarks").val($("#ConditionRemarks_" + ID).text());
    $("#MovetoLocation").val($("#MovetoLocation_" + ID).text());
    $("#MovetoLocationID").val($("#MovetoLocationID_" + ID).text());
    $("#SaveDoccon").text("Save");
    $('.IsFull').show();
    FillLabel();
    Autocompletebox("ContNo", "trnEmptyContainerOutWODetailsID", "trnEmptyContainerOutGatePass", "GetContainerNo/" + $("#TruckID").val() + "?trnEmptyContainerOutGatePassID=" + $("#trnEmptyContainerOutGatePassID").val() + "&trnEmptyContainerOutGatePassDetailsID=" + $("#trnEmptyContainerOutGatePassDetailsID").val(), "FillLabel");
}
function ViewContainerdetails(ID) {
    $("#ContNo").val($("#ContNo_" + ID).text());
    $("#ContNo").prop("disabled","disabled");
    $("#trnEmptyTruckGateInEmptyID").val($("#trnEmptyTruckGateInEmptyID_" + ID).text());
    $("#trnEmptyContainerOutGatePassDetailsID").val(ID);
    $("#Condition").val($("#Condition_" + ID).text());
    $("#Condition").prop("disabled", "disabled");
    $("#ConditionRemarks").val($("#ConditionRemarks_" + ID).text());
    $("#ConditionRemarks").prop("disabled", "disabled");
    $("#MovetoLocation").val($("#MovetoLocation_" + ID).text());
    $("#MovetoLocationID").val($("#MovetoLocationID_" + ID).text());
    $("#MovetoLocation").prop("disabled", "disabled");
    $("#SaveDoccon").css("display","none");
    $("#ClearDoccon").css("display","none");
    $('.IsFull').show();
    FillLabel();
    Autocompletebox("ContNo", "trnEmptyContainerOutWODetailsID", "trnEmptyContainerOutGatePass", "GetContainerNo/" + $("#TruckID").val(), "FillLabel");
}
function filldatatable() {
    $.ajax({
        url: GetRootPath + "trnEmptyContainerOutGatePass/FillGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            $("#tblContainer").html(data);
            ClearContainerDetails();
            if (data != "") {
                $("#IsSubRecord").val(true);
            }
            else {
                $("#IsSubRecord").val(false);
            }
                //$("#dvAddContainerDetails").hide();
        }
    });
}
function deleteContainer(ID) {
    if (ID != "" && ID != "0" && ID != null) {
        $.ajax({
            url: GetRootPath + "trnEmptyContainerOutGatePass/deleteContainer/" + ID,
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                filldatatable();
                var msgType = data.split("|")[0];
                var msg = data.split("|")[1];
                var msgTitle = data.split("|")[2];
                TosterAlert(msgType, msg, msgTitle);
            }
        });
    }
}
