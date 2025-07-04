$(document).ready(function () {

    

    Autocompletebox("trnDocumentNo", "trnDocumentID", "trnEmptyContainerOutWO", "GETDocumentNo");    
    Autocompletebox("ToLocation", "ToLocationID", "trnEmptyContainerOutWO", "GetLocationTo");

    var trnDocumentID = $("#trnDocumentID").val();
    if (trnDocumentID != null && trnDocumentID != "" && trnDocumentID != undefined && trnDocumentID!="0" && doaction == "add") {
        document.getElementById("LiftOnBy").selectedIndex = 0;
        document.getElementById("LiftOffBy").selectedIndex = 1;
        document.getElementById("TransportationBy").selectedIndex = 1;
    }
    $('#IsEmptyGateOutprocess').iCheck('disable');
    if ($("#TransportationBy").val() == "Own") {
        //Autocompletebox("TransporterName", "TransporterID", "trnEmptyContainerOutWO", "GetTransporter");
        Autocompletebox("TransporterName", "TransporterID", "trnEmptyContainerOutWO", "GetTransporter", "GetTransporterCode");
        $("#TransporterCode").attr("readonly", true);
    }

    Autocompletebox("VCN", "VCNID", "trnEmptyContainerOutWO", "GetVCNCode", "GetVCNCodeDetails");
    Autocompletebox("Consoler", "ConsolerID", "trnEmptyContainerOutWO", "GetConsoler","FillBillto");    
    Autocompletebox("BillTo", "BillToID", "trnEmptyContainerOutWO", "GetBillTo/?ImporterID=" + $("#ExporterID").val() + "&ConsolerID=" + $("#ConsolerID").val() + "&CHAID=" + $("#CHAID").val() + "&ForwarderID=" + $("#ForwarderID").val());

    $("#GateOutMode").val("By Road")

    
    if (doaction == "edit") {

        var FRBundlingStatus = $("#FRBundlingStatus").val();

        if (FRBundlingStatus == "No") {
            $("#Bundle20").prop("readonly", true);
            $("#Bundle4045").prop("readonly", true);
        }
        else {
            $("#Bundle20").prop("readonly", false);
            $("#Bundle4045").prop("readonly", false);
        }
    }    
    var ContStatus = $("#ContainerStatus").val();
    if (ContStatus != "" && ContStatus != null && ContStatus != undefined) {
        if (ContStatus.toUpperCase().trim() == "EXPORT") {
            $("#lbltrnDocumentNo").text("Empty Container GatePass No");
        }
        else {
            $("#lbltrnDocumentNo").text("NOC No");
        }
    } 
});

function FillBillto() {
    var ConsolerID = $("#ConsolerID").val();
    if (ConsolerID != "" && ConsolerID != null && ConsolerID != "0" && ConsolerID != undefined) {
        Autocompletebox("BillTo", "BillToID", "trnEmptyContainerOutWO", "GetBillTo/?ImporterID=" + $("#ExporterID").val() + "&ConsolerID=" + $("#ConsolerID").val() + "&CHAID=" + $("#CHAID").val() + "&ForwarderID=" + $("#ForwarderID").val());
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
    Autocompletebox("txtIMPORTERADDRESSNAME", "txtIMPORTERADDRESSID", "trnEmptyContainerOutWO", "GetIMPORTERADDRESS/" + $("#txtIMPORTERID").val());
    FillVCNDetails();
}

function SearchwithtrnDocumentNo() {
    
    var trnDocumentID = $("#trnDocumentID").val();
    var ContainerStatus = $("#ContainerStatus").val();
    if (trnDocumentID != null && trnDocumentID != undefined && trnDocumentID != "" && trnDocumentID != "0") {
        location.href = "?doaction=add&pg=1&IsSearch=" + true + "&trnDocumentID=" + trnDocumentID + "&trnDocumentNo=" + $("#trnDocumentNo").val() + "&ContainerStatus=" + ContainerStatus;
    }
    else {
            $("#trnDocumentNo").addClass("redborder");
        if (ContainerStatus.toUpperCase() == "EXPORT") {            
            TosterAlert("error", "Please select Empty Container GateIn Pass No", "Required!");
        }
        else {            
            TosterAlert("error", "Please select NOC No", "Required!");
        }
        
    }
}

function ClearSearchDetails() {
    location.href = "?doaction=add&pg=1";
}

function checkvaluefortxtbox(ID) {
    var GrossWeight = parseFloat($("#GrossWeight_" + ID).val());
    if (GrossWeight == "") {
        GrossWeight = "0";
    }
    var TareWeight = parseFloat($("#TareWeight_" + ID).val());
    if (TareWeight == "") {
        TareWeight = "0";
    }

    if (GrossWeight < TareWeight) {
        $("#TareWeight_" + ID).val("0");
        TosterAlert("error", "Tare Weight is not greater than Gross Weight", "Required!");
    }
    setPayloadCapacity(ID);
}

function setPayloadCapacity(ID) {
    var GrossWeight = parseFloat($("#GrossWeight_" + ID).val());
    if (GrossWeight == "") {
        GrossWeight = "0";
    }
    var TareWeight = parseFloat($("#TareWeight_" + ID).val());
    if (TareWeight == "") {
        TareWeight = "0";
    }
    $("#PayloadCapacity_" + ID).text((GrossWeight - TareWeight).toFixed(2));
}

function Validation() {

    var isvalid = true;
    var MErrormsg = "";
    var counter = 0;

    $.ajax({
        url: GetRootPath + "trnEmptyContainerOutWO/validateModel",
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
    if (isvalid) {
        $("#IsEmptyGateOutprocess").iCheck("enable");
    }
    return isvalid;
}

function onchangeFRBundlingStatus() {
    var FRBundlingStatus = $("#FRBundlingStatus").val();

    if (FRBundlingStatus == "No") {
        $("#Bundle20").val("0");
        $("#Bundle4045").val("0");
        $("#Bundle20").prop("readonly", true);
        $("#Bundle4045").prop("readonly", true);
    }
    else {
        $("#Bundle20").val("0");
        $("#Bundle4045").val("0");
        $("#Bundle20").prop("readonly", false);
        $("#Bundle4045").prop("readonly", false);
    }
}

function onchangeLift() {
    var LiftOnBy = $("#LiftOnBy").val();
    var LiftOffBy = $("#LiftOffBy").val();
    var TransportationBy = $("#TransportationBy").val();

    if (LiftOnBy == "Party" && LiftOffBy == "Party" && TransportationBy == "Party") {
        $('#IsEmptyGateOutprocess').iCheck('check');
        
    }
    else {
        $.ajax({
            url: GetRootPath + "trnEmptyContainerOutWO/GetTeriffCharge",
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                if (data != null) {
                    if (data > 0) {
                        $('#IsEmptyGateOutprocess').iCheck('uncheck');
                    }
                    else {
                        $('#IsEmptyGateOutprocess').iCheck('check');
                    }
                }
            }
        });
    }

    if ($("#TransportationBy").val() == "Own") {
        $("#TransporterName").autocomplete({
            disabled: false
        });
        Autocompletebox("TransporterName", "TransporterID", "trnEmptyContainerOutWO", "GetTransporter", "GetTransporterCode");
        $("#TransporterName").val('');
        $("#TransporterID").val('0');
        $("#TransporterCode").attr("readonly", true);
        $("#TransporterCode").val('');
    }
    else {
        $("#TransporterName").autocomplete({
            disabled: true
        });
        $("#TransporterName").val('');
        $("#TransporterID").val('0');
        $("#TransporterCode").attr("readonly", false);
        $("#TransporterCode").val('');
    }
}

function GetTransporterCode() {

    $.ajax({
        url: GetRootPath + "trnEmptyContainerOutWO/GetTransporterCode/" + $("#TransporterID").val(),
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            if (data != 0) {
                $("#TransporterCode").val(data)
            }
        }
    });

}

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
            url: GetRootPath + "trnEmptyContainerOutWO/updatestatus",
            type: "POST",
            data: postdata,
            success: function (data) {
                location.reload();
            }
        });
    }
    else {
        $("#myModalActiveInactives").modal('show');
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
            url: GetRootPath + "trnEmptyContainerOutWO/updatestatus",
            type: "POST",
            data: postdata,
            success: function (data) {
                location.reload();
            }
        });
    }
}
$('#ContainerStatus').change(function () {        

    var ContStatus = $("#ContainerStatus").val();
    if (ContStatus != "" && ContStatus != null && ContStatus != undefined) {
        if (ContStatus.toUpperCase().trim() == "EXPORT") {
            $("#lbltrnDocumentNo").text("Empty Container GatePass No");                     
        }
        else {
            $("#lbltrnDocumentNo").text("NOC No");
        }
    } 

    Autocompletebox("trnDocumentNo", "trnDocumentID", "trnEmptyContainerOutWO", "GETDocumentNo?InType=" + ContStatus);
});

function GetVCNCodeDetails() {

    $.ajax({
        url: GetRootPath + "trnEmptyContainerOutWO/GetVCNCodeDetails/" + $("#VCNID").val(),
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            $(".redborder").removeClass("redborder");
            if (data != "") {

                data = data.split('|')
                $("#VesselName").val(data[0])
                $("#VoyNo").val(data[1])
                $("#CutOffDate").val(data[2])
            }
        }
    });


}
