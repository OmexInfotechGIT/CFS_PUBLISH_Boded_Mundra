$(document).ready(function () {
    
    Autocompletebox("trnDocumentNo", "trnDocumentID", "trnContainerDestuffWorkOrder", "GetNOC");
    Autocompletebox("Surveyor", "SurveyorID", "trnContainerDestuffWorkOrder", "GetSurveyor");
    Autocompletebox("Vendor", "VendorID", "trnContainerDestuffWorkOrder", "GetVendor");
    Autocompletebox("ContainerNo", "trnContainerGateInDetailsID", "trnContainerDestuffWorkOrder", "GetContainer/" + $("#trnContainerDestuffWorkOrderID").val(), "GetContainerDetails");  
    FillGrid();
    FillDOCGrid();    
});
function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}
$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

function validateModel()
{
    var isvalid = true;
    var MErrormsg = "";
    
    var trnContainerDestuffWorkOrderID = 0;
    trnContainerDestuffWorkOrderID = $("#trnContainerDestuffWorkOrderID").val();

    if (doaction.ToLowercase != "add" && parseInt(trnContainerDestuffWorkOrderID)>0) {
              
            if (confirm('You are Sure you want save Destuffing Work Order.')) {
                isvalid = true;
            } else {
                return false;
            }        
    }
    $.ajax({
        url: GetRootPath + "trnContainerDestuffWorkOrder/validateModel",
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
                    MErrormsg = Errormsg;
                }
            }
        }
    });
    if (!isvalid) {
        TosterAlert("error", MErrormsg, "Required!");
    }
    return isvalid;
}
function validateModelForContainer()
{ 
    var isvalid = true;
    var MErrormsg = "";
    $.ajax({
        url: GetRootPath + "trnContainerDestuffWorkOrder/validateModelForContainer",
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
    if (!isvalid) {
        //TosterAlert("error", MErrormsg, "Required!");
    }
    else {
        $.ajax({
            url: GetRootPath + "trnContainerDestuffWorkOrder/AddConatinerDetails",
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                
                if (data != "" && data != null) {
                    var msgtype = data.split('|')[0];
                    var msg = data.split('|')[1];
                    var msgtxt = data.split('|')[2];
                    TosterAlert(msgtype, msg, msgtxt);   
                    FillGrid();
                    FillDOCGrid();
                }
            }
        });
    }
    return isvalid;
    
}
function GetContainerDetails() {
    var trnContainerGateInDetailsID = $("#trnContainerGateInDetailsID").val();
    if (trnContainerGateInDetailsID != 0 || trnContainerGateInDetailsID != null || trnContainerGateInDetailsID != undefined) {
        $.ajax({
            url: GetRootPath + "trnContainerDestuffWorkOrder/GetContainerDetails/" + trnContainerGateInDetailsID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#txtISOCode").val(data.split('|')[0]);
                    $("#txtContSize").val(data.split('|')[1]);
                    $("#txtContType").val(data.split('|')[2]);
                    $("#txtCargoType").val(data.split('|')[3]);
                    $("#txtContLevel").val(data.split('|')[4]);
                    $("#txtBillCommodity").val(data.split('|')[5]);                    
                    $("#txtGateInDate").val(data.split('|')[6]);
                    $("#txtDeclaredSeal").val(data.split('|')[7]);
                    $("#txtPhysicalSeal").val(data.split('|')[8]);
                    $("#txtIMO").val(data.split('|')[9]);
                    $("#txtUN").val(data.split('|')[10]);
                    $("#txtTEMP").val(data.split('|')[11]);
                    $("#txtWeighmentSatus").val(data.split('|')[12]);
                    $("#txtDestuffStatus").val(data.split('|')[13]);
                }
                else {
                    
                }
            }
        })
    }
}
function FillGrid() {
    $.ajax({
        url: GetRootPath + "trnContainerDestuffWorkOrder/FillGrid/",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {

            ClearContDetails();
            $("#tblContDetails").html(data);

        }
    });
}
function FillDOCGrid() {
    $.ajax({
        url: GetRootPath + "trnContainerDestuffWorkOrder/FillDOCGrid/",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {            
            $("#DocDeatils").html(data);

        }
    });
}
function EditContdetails(ID) {    
    $("#ContainerNo").val($("#ContainerNo_" + ID).text());
    $("#trnContainerGateInDetailsID").val($("#trnContainerGateInDetailsID_" + ID).text());
    $("#txtISOCode").val($("#ISOCode_" + ID).text());
    $("#txtContSize").val($("#ContSize_" + ID).text());
    $("#txtContType").val($("#ContType_" + ID).text());
    $("#txtCargoType").val($("#CargoType_" + ID).text());
    $("#txtContLevel").val($("#ContLevel_" + ID).text());
    $("#txtBillCommodity").val($("#BillCommodity_" + ID).text());
    $("#txtGateInDate").val($("#GateInDate_" + ID).text());
    $("#txtDeclaredSeal").val($("#DeclaredSeal_" + ID).text());
    $("#txtPhysicalSeal").val($("#PhysicalSeal_" + ID).text());
    $("#txtIMO").val($("#IMO_" + ID).text());
    $("#txtUN").val($("#UN_" + ID).text());
    $("#txtTEMP").val($("#TEMP_" + ID).text());
    $("#txtWeighmentSatus").val($("#WeighmentStatus_" + ID).text());
    $("#txtDestuffStatus").val($("#DestuffStatus_" + ID).text());
    $("#txtDestuffWOStatus").val($("#DestuffWOStatusTick_" + ID).text());
    $("#trnContainerDestuffWorkOrderDetailsID").val($("#trnContainerDestuffWorkOrderDetailsID_" + ID).text());
}

function ClearContDetails() {
    $("#ContainerNo").val("");
    $("#trnContainerGateInDetailsID").val("0");
    $("#trnContainerDestuffWorkOrderDetailsID").val("0");
    $("#txtISOCode").val("");
    $("#txtContSize").val("");
    $("#txtContType").val("");
    $("#txtCargoType").val("");
    $("#txtContLevel").val("");
    $("#txtBillCommodity").val("");
    $("#txtGateInDate").val("");
    $("#txtDeclaredSeal").val("");
    $("#txtPhysicalSeal").val("");
    $("#txtIMO").val("0");
    $("#txtUN").val("0");
    $("#txtTEMP").val("0");
    $("#txtWeighmentSatus").val("");
    $("#txtDestuffStatus").val("");
    $("#txtDestuffWOStatus").val("");
}
function DeleteContDetails(ID) {
    
    if (ID != "" && ID != "0" && ID != null) {
        $.ajax({
            url: GetRootPath + "trnContainerDestuffWorkOrder/DeleteContDetails/" + ID,
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {                
                FillGrid();
                FillDOCGrid();
                TosterAlert('success', ' Container Detail deleted Successfully! ', 'success!');
            }
        });
    }
}