$(document).ready(function () {
    Autocompletebox("Exporter", "ExporterID", "trnEmptyContainerInWOGW", "GetEXP");
    Autocompletebox("ConsolerName", "ConsolerID", "trnEmptyContainerInWOGW", "GetConsoler");
    Autocompletebox("CHAName", "CHAID", "trnEmptyContainerInWOGW", "GetCHA");
    Autocompletebox("ForwarderName", "ForwarderID", "trnEmptyContainerInWOGW", "GetForwarder");
    Autocompletebox("FromLocation", "FromLocationID", "trnEmptyContainerInWOGW", "GetFromLocation");
    //Autocompletebox("ContNo", "trnDocumentGWContainerID", "trnEmptyContainerInWOGW", "GetContNo");
    Autocompletebox("Agent", "AgentID", "trnEmptyContainerInWOGW", "GetAgent", "CallbackautocompleteForLine");
    Autocompletebox("ISOCode", "ISOCodeID", "trnEmptyContainerInWOGW", "GetISOCODE", "FillISOCodeDetails");    
    if (doaction.toLowerCase() != "add")
    {
        $("#dvSaveAndNext").css("display", "none");
        $("#dvContainerDetails").css("display", "");
        FillContainerDetailsGrid();
        
    }
    if (doaction.toLowerCase() == "add") {
        document.getElementById("LiftOnBy").selectedIndex = 0;
        document.getElementById("LiftOffBy").selectedIndex = 1;
    }

    Autocompletebox("Agent", "AgentID", "trnEmptyContainerInWOGW", "GetAgent", "CallbackautocompleteForLine");
    Autocompletebox("ISOCode", "ISOCodeID", "trnEmptyContainerInWOGW", "GetISOCODE", "FillISOCodeDetails");

});

//setTimeout(function () {
   //     //Autocompletebox("ContNo", "trnDocumentGWContainerID", "trnEmptyContainerInWOGW", "GetContNo");
   // Autocompletebox("Agent", "AgentID", "trnEmptyContainerInWOGW", "GetAgent", "CallbackautocompleteForLine");
   // Autocompletebox("ISOCode", "ISOCodeID", "trnEmptyContainerInWOGW", "GetISOCODE", "FillISOCodeDetails");
//}, 1000);

function FillISOCodeDetails() {
    if ($("#ISOCodeID").val() != "" && $("#ISOCode").val() != undefined && $("#ISOCodeID").val() != null) {
        $.ajax({
            url: GetRootPath + "trnEmptyContainerInWOGW/GetISOCodeSizeAndType/" + $("#ISOCodeID").val(),
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#ISOCodeType").val(data.split("|")[0]);
                    $("#ISOCodeSize").val(data.split("|")[1]);
                    $("#spanISOCodeType").text(data.split("|")[0]);
                    $("#spanISOCodeSize").text(data.split("|")[1]);
                }
                else {
                    $("#ISOCodeSize").val("");
                    $("#ISOCodeType").val("");
                    $("#spanISOCodeType").text("");
                    $("#spanISOCodeSize").text("");
                }
            }
        })
    }
    else {
        $("#ISOCodeSize").val("");
        $("#ISOCodeType").val("");
        $("#spanISOCodeType").text("");
        $("#spanISOCodeSize").text("");
    }
}

function CallbackautocompleteForLine() {
    Autocompletebox("Line", "LineID", "trnEmptyContainerInWOGW", "GetLine/" + $("#AgentID").val());
}

function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}

$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

function validate() {
    var isvalid = true;
    var MErrormsg = "";
    var counter = 0;

    $.ajax({
        url: GetRootPath + "trnEmptyContainerInWOGW/validateModel",
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

function ValidateContainerDetails(tab) {    
    isvalid = true;

    $.ajax({
        url: GetRootPath + "trnEmptyContainerInWOGW/validateContainerModel",
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
            else {
                IsValid = true;
            }
        }
    });

    if (isvalid) {
        $.ajax({
            url: GetRootPath + "trnEmptyContainerInWOGW/AddContainerDetails",
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                if (data != "") {
                    TosterAlert(data.split("|")[0], data.split("|")[1], data.split("|")[2]);
                    FillContainerDetailsGrid();
                }
            }
        });
   }
       
    return isvalid;
}

function FillContainerDetailsGrid() {
    $("#tblContainerDetails").html("");
    $.ajax({
        url: GetRootPath + "trnEmptyContainerInWOGW/FillContainerDetailsGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#tblContainerDetails").html(data);
                ClearContainerDetails();
            }
        }
    });
}

function DeleteContainerDetails() {
    var IsValid = false;
    var DeleteRemarks = $("#DeleteRemarks").val();
    var ID = $("#DeletetrnEmptyContainerInWOGWContainerDetailsID").val();
     
    if (DeleteRemarks != null && DeleteRemarks != "" && DeleteRemarks != undefined) {
        IsValid = true;
    }
    else
    {
        IsValid = false;
        $("#DeleteRemarks").addClass("redborder");
        TosterAlert("Error", " Delete Remarks is required! ", "error!");
    }

    


    if (IsValid && ID != null && ID != "" && ID != undefined && ID != "0") {

        $.ajax({
            url: GetRootPath + "trnEmptyContainerInWOGW/DeleteContainerDetails/" + ID + "?DeleteRemarks=" + DeleteRemarks,
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                FillContainerDetailsGrid();
                TosterAlert("success", " Container Detail deleted Successfully! ", "success!");
                $("#DeleteRemarks").val('');
                $("#DeleteContainerDetails").modal('hide');
            }
        });
    }
    else
    {
        TosterAlert("Error", " There is Some technical issue, Please contact to system admin ", "error!");
    }
}

function EditContainerDetails(ID) {
    $("#trnEmptyContainerInWOGWContainerDetailsID").val($("#trnEmptyContainerInWOGWContainerDetailsID_" + ID).text());
    $("#trnDocumentGWContainerID").val($("#trnDocumentGWContainerID_" + ID).text());
    $("#ISOCodeID").val($("#ISOCodeID_" + ID).text());
    $("#AgentID").val($("#AgentID_" + ID).text());
    $("#LineID").val($("#LineID_" + ID).text());
    $("#ContNo").val($("#ContNo_" + ID).text());
    $("#ISOCode").val($("#ISOCode_" + ID).text());
    $("#ISOCodeSize").val($("#ISOCodeSize_" + ID).text());
    $("#spanISOCodeSize").text($("#ISOCodeSize_" + ID).text());
    $("#ISOCodeType").val($("#ISOCodeType_" + ID).text());
    $("#spanISOCodeType").text($("#ISOCodeType_" + ID).text());
    $("#Agent").val($("#Agent_" + ID).text());
    $("#Line").val($("#Line_" + ID).text());
    $("#GateInDate").val($("#GateInDate_" + ID).text());
    $("#spanGateInDate").text($("#GateInDate_" + ID).text());
    $("#GateOutDate").val($("#GateOutDate_" + ID).text());
    $("#spanGateOutDate").text($("#GateOutDate_" + ID).text());
    $("#Event").val($("#Event_" + ID).text());
    $("#EmptyInInvoiceNo").val($("#EmptyInInvoiceNo_" + ID).text());
    $("#spanEmptyInInvoiceNo").text($("#EmptyInInvoiceNo_" + ID).text());
    $("#EmptyInInvoiceDate").val($("#EmptyInInvoiceDate_" + ID).text());
    $("#spanEmptyInInvoiceDate").text($("#EmptyInInvoiceDate_" + ID).text());
    $("#EmptyOutInvoiceNo").val($("#EmptyOutInvoiceNo_" + ID).text());
    $("#spanEmptyOutInvoiceNo").text($("#EmptyOutInvoiceNo_" + ID).text());
    $("#EmptyOutInvoiceDate").val($("#EmptyOutInvoiceDate_" + ID).text());
    $("#spanEmptyOutInvoiceDate").text($("#EmptyOutInvoiceDate_" + ID).text());

    
}

function ClearContainerDetails()
{
    $("#trnEmptyContainerInWOGWContainerDetailsID").val('0');
    $("#trnDocumentGWContainerID").val('0');
    $("#ISOCodeID").val('0');
    $("#AgentID").val('0');
    $("#LineID").val('0');
    $("#ContNo").val('');
    $("#ISOCode").val('');
    $("#ISOCodeSize").val('');
    $("#spanISOCodeSize").text('');
    $("#ISOCodeType").val('');
    $("#spanISOCodeType").text('');
    $("#Agent").val('');
    $("#Line").val('');
    $("#GateInDate").val('');
    $("#spanGateInDate").text('');
    $("#GateOutDate").val('');
    $("#spanGateOutDate").text('');
    $("#Event").val('');
    $("#EmptyInInvoiceNo").val('');
    $("#spanEmptyInInvoiceNo").text('');
    $("#EmptyInInvoiceDate").val('');
    $("#spanEmptyInInvoiceDate").text('');
    $("#EmptyOutInvoiceNo").val('');
    $("#spanEmptyOutInvoiceNo").text('');
    $("#EmptyOutInvoiceDate").val('');
    $("#spanEmptyOutInvoiceDate").text('');
}

function DeleteContainerDetailsByID(ID)
{
    $("#DeletetrnEmptyContainerInWOGWContainerDetailsID").val(ID);
}