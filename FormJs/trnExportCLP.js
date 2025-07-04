$(document).ready(function () {
    Autocompletebox("ContNo", "trnExportStufingWOContainerDetailsID", "trnexportclp", "GetContNo", "GETContDetail");
    Autocompletebox("VCNNo", "VCNID", "trnexportclp", "GetVCNNO", "FillVCNDetails");
    Autocompletebox("CargoType", "CargoTypeID", "trnexportclp", "GetNatureofCargo");
    Autocompletebox("Contractor", "ContractorID", "trnexportclp", "GetContractor");
    Autocompletebox("Surveyor", "SurveyorID", "trnexportclp", "GetSurveyor");
    FillContDetails();
});
function GETContDetail() {
    var StuffingWODate = "";
    var ID = $("#trnExportStufingWOContainerDetailsID").val();
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnexportclp/GetContDetails/" + ID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {                    
                    $("#Size").text(data.split("|")[0]);
                    $("#Type").text(data.split("|")[1]);
                    $("#hdnSize").val(data.split("|")[0]);
                    $("#hdnType").val(data.split("|")[1]);
                    $("#StuffingWODate").val(data.split("|")[2]);
                    $("#dvStuffingWODate").css("display", "");
                    $("#spnStuffingWODate").text("Stuffing Wo Date : " + data.split("|")[2]);
                    $("#IsEmptyContWT").val(data.split("|")[3]);
                    $("#IsBondOrCPExpired").val(data.split("|")[4]);
                    var IsEmptyContWT = $("#IsEmptyContWT").val();                    
                    if (IsEmptyContWT == "1") {
                        $("#WEIGHMENTREQUIRED").val("No");                        
                        $("#WEIGHMENTREQUIRED").css("pointer-events", "none");
                        $("#WEIGHMENTREQUIRED").css("background-color", "#eee");                        
                    }
                    else {
                        $("#WEIGHMENTREQUIRED").val("");
                        $("#WEIGHMENTREQUIRED").css("pointer-events", "");
                        $("#WEIGHMENTREQUIRED").css("background-color", "");
                    }                    
                }
                else {
                    $("#Size").text("");
                    $("#Type").text("");
                    $("#hdnSize").val("");
                    $("#hdnType").val("");
                }
            }
        })

        $.ajax({
            url: GetRootPath + "trnexportclp/GetContLabel/" + ID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#GrossCapacity").val(data.split("|")[0]);
                    $("#EmptyContTareWeight").val(data.split("|")[1]);
                    $("#PayloadCapacity").val(data.split("|")[2]);
                    $("#WeighmentSlipNo").val(data.split("|")[3]);
                    $("#WeighmentDate").val(data.split("|")[4]);
                    $("#GrossWeight").val(data.split("|")[5]);
                    $("#TruckTareWeight").val(data.split("|")[6]);
                    $("#ContTareWeight").val(data.split("|")[7]);
                    $("#NetWeight").val(data.split("|")[8]);
                    $("#InvoiceNo").val(data.split("|")[9]);
                    $("#InvoiceDate").val(data.split("|")[10]);

                }
                else {
                    $("#GrossCapacity").val("");
                    $("#EmptyContTareWeight").val("");
                    $("#PayloadCapacity").val("");
                    $("#WeighmentSlipNo").val("");
                    $("#WeighmentDate").val("");
                    $("#GrossWeight").val("");
                    $("#TruckTareWeight").val("");
                    $("#ContTareWeight").val("");
                    $("#NetWeight").val("");
                    $("#InvoiceNo").val("");
                    $("#InvoiceDate").val("");
                }
            }
        })


        //$.ajax({
        //    url: GetRootPath + "trnexportclp/GetContLabel/" + ID,
        //    type: "GET",
        //    dataType: "text",
        //    success: function (data) {
        //        if (data != "" && data != null) {
        //            $("#GrossCapacity").val(data.split("|")[0]);
        //            $("#EmptyContTareWeight").val(data.split("|")[1]);
        //            $("#PayloadCapacity").val(data.split("|")[2]);
        //            $("#WeighmentSlipNo").val(data.split("|")[3]);
        //            $("#WeighmentDate").val(data.split("|")[4]);
        //            $("#GrossWeight").val(data.split("|")[5]);
        //            $("#TruckTareWeight").val(data.split("|")[6]);
        //            $("#ContTareWeight").val(data.split("|")[7]);
        //            $("#NetWeight").val(data.split("|")[8]);                    
        //            $("#InvoiceNo").val(data.split("|")[9]);
        //            $("#InvoiceDate").val(data.split("|")[10]);

        //        }
        //        else {   
        //            $("#GrossCapacity").val("");
        //            $("#EmptyContTareWeight").val("");
        //            $("#PayloadCapacity").val("");
        //            $("#WeighmentSlipNo").val("");
        //            $("#WeighmentDate").val("");
        //            $("#GrossWeight").val("");
        //            $("#TruckTareWeight").val("");
        //            $("#ContTareWeight").val("");
        //            $("#NetWeight").val("");
        //            $("#InvoiceNo").val("");
        //            $("#InvoiceDate").val("");
        //        }
        //    }
        //})
    }
}
$('#WEIGHMENTREQUIRED').on('keydown keypress keyup', function (e) {
    var keyCode = e.keyCode || e.which;
    if ($("#IsEmptyContWT").val() == "1") {
        if (keyCode === 38 || keyCode === 40 || keyCode == 37 || keyCode == 39) {
            e.preventDefault();
            return false;
        }
    }
    return true;
});
function FillContDetails() {
    var ID = $("#trnExportStufingWOContainerDetailsID").val();
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnexportclp/GetContDetails/" + ID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#Size").text(data.split("|")[0]);
                    $("#Type").text(data.split("|")[1]);
                    $("#hdnSize").val(data.split("|")[0]);
                    $("#hdnType").val(data.split("|")[1]);
                }
                else {
                    $("#Size").text("");
                    $("#Type").text("");
                    $("#hdnSize").val("");
                    $("#hdnType").val("");
                }
            }
        })

        $.ajax({
            url: GetRootPath + "trnexportclp/FillLabelDetails/" + ID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#dvLabelDetails").html(data);
                }
                else {
                    $("#dvLabelDetails").html('');
                }
            }
        })

        $.ajax({
            url: GetRootPath + "trnexportclp/GetContLabel/" + ID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#GrossCapacity").val(data.split("|")[0]);
                    $("#EmptyContTareWeight").val(data.split("|")[1]);
                    $("#PayloadCapacity").val(data.split("|")[2]);
                    $("#WeighmentSlipNo").val(data.split("|")[3]);
                    $("#WeighmentDate").val(data.split("|")[4]);
                    $("#GrossWeight").val(data.split("|")[5]);
                    $("#TruckTareWeight").val(data.split("|")[6]);
                    $("#ContTareWeight").val(data.split("|")[7]);
                    $("#NetWeight").val(data.split("|")[8]);
                    $("#InvoiceNo").val(data.split("|")[9]);
                    $("#InvoiceDate").val(data.split("|")[10]);

                }
                else {
                    $("#GrossCapacity").val("");
                    $("#EmptyContTareWeight").val("");
                    $("#PayloadCapacity").val("");
                    $("#WeighmentSlipNo").val("");
                    $("#WeighmentDate").val("");
                    $("#GrossWeight").val("");
                    $("#TruckTareWeight").val("");
                    $("#ContTareWeight").val("");
                    $("#NetWeight").val("");
                    $("#InvoiceNo").val("");
                    $("#InvoiceDate").val("");
                }
            }
        })

    }
}
function FillVCNDetails() {
    var ID = $("#VCNID").val();
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnexportclp/GetVESSELNAMEAndVOYNO/" + ID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#VesselName").text(data.split("|")[0]);
                    $("#VOYNo").text(data.split("|")[1]);
                    $("#CutoffDate").text(data.split("|")[2]);
                    $("#hdnVesselName").val(data.split("|")[0]);
                    $("#hdnVOYNo").val(data.split("|")[1]);
                    $("#hdnCutoffDate").val(data.split("|")[2]);
                }
                else {
                    $("#txtVESSELNAME").text("");
                    $("#VOYNo").text("");
                    $("#CutoffDate").text("");
                    $("#hdnVesselName").val("");
                    $("#hdnVOYNo").val("");
                    $("#hdnCutoffDate").val("");
                }
            }
        })
    }
}
function Validation() {
    var isvalid = true;
    var MErrormsg = "";
    var counter = 0;    
    var IsBondOrCPExpired = $("#IsBondOrCPExpired").val();
    if (parseInt(IsBondOrCPExpired) > 0) {
        if (confirm(" Your bond or CP validity has expired. Are you sure you want to continue? ")) {
            isvalid = true;
        }
        else {
            isvalid = false;
        }
    }
    $.ajax({
        url: GetRootPath + "trnexportclp/validateModel",
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
            else {
                //$.ajax({
                //    url: GetRootPath + "trnexportclp/Action",
                //    type: "Post",
                //    data: $("form").serialize(),
                //    dataType: "text",
                //    async: false,
                //    success: function (data) {
                //        if (data != "") {
                //            var msgtype = data.split('|')[0];
                //            var msg = data.split('|')[1];
                //            var msgtxt = data.split('|')[2];
                //            TosterAlert(msgtype, msg, msgtxt);
                //        }
                //    }
                //});
            }
        }
    });

    if (!isvalid) {
        if (MErrormsg != null && MErrormsg != "") {
            TosterAlert("error", MErrormsg, "Required!");
        }
    }
    return isvalid;
}
function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}

$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});
function DeleteReason(ID) {
    if (ID != null && ID != "" && ID != undefined) {
        $("#trnExportCLPID").val(ID);
        $("#DeleteReason").val('');
    }
}
function DeleteECLPStuff() {
    var DeleteReason = $("#DeleteReason").val();
    var IsValid = true;
    $.ajax({
        url: GetRootPath + "trnExportCLP/VaildDeteleModel?DeleteReason=" + DeleteReason,
        type: "Post",
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
                var ID = $("#trnExportCLPID").val();
                $.ajax({
                    url: GetRootPath + "trnExportCLP/delete/" + ID + "?Reason=" + DeleteReason + "",
                    type: "GET",
                    dataType: "text",
                    async: false,
                    success: function (data) {
                        $('#DeleteECLPStuff').modal('hide');
                        location.reload();
                    }
                });
            }
        }
    });
}
function GetReExportDetails(ID) {    
    $.ajax({
        url: GetRootPath + "trnexportclp/GetReExportDetails/" + ID,
        type: "GET",
        success: function (data) {
            if (data != null && data != "") {
                $("#tbReExportDetails").html(data);
            }
        }
    });
}
function GetBillCommodity()
{
    var ID = $("#trnExportCLPID").val();
    if (parseInt(ID) > 0) {
        $.ajax({
            url: GetRootPath + "trnexportclp/GetBillCommodity/" + ID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#BillCommodity").val(data.split('|')[0]);
                    $("#BillCommodityID").val(data.split('|')[1]);
                }
                else {
                    $("#BillCommodity").val();
                    $("#BillCommodityID").val();
                }
            }
        });
    }    
}