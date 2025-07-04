$(document).ready(function () {
    debugger;
    Autocompletebox("WorkOrderNo", "WorkOrdersearchID", "trnTruckDestuffing", "GETWorkOrderNo");
    /*Autocompletebox("TruckNo", "trnCargoGateInID", "trnTruckDestuffing", "GetTruckNo");*/
    Autocompletebox("Surveyor", "SurveyorID", "trnTruckDestuffing", "GetSurveyor");
    Autocompletebox("Contractor", "ContractorID", "trnTruckDestuffing", "GetContractor");
    Autocompletebox("Brand", "BrandID", "trnTruckDestuffing", "GetBrand");
    Autocompletebox("Origin", "OriginID", "trnTruckDestuffing", "GetOrigin");
    Autocompletebox("ModelWHLocation", "ModelWHLocationID", "trnTruckDestuffing", "GetLocation");
    Autocompletebox("ModelPackagingType", "ModelPackagingTypeID", "trnTruckDestuffing", "GetPackingType");
    Autocompletebox("ModelBillCommodity", "ModelBillCommodityID", "trnTruckDestuffing", "GetBillCommodity");
    Autocompletebox("ModelEquipmentUsed", "ModelEquipmentUsedID", "trnTruckDestuffing", "GetEquipment");
    Autocomplete(); 
});

function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}

function ClearSearchDetails() {
    location.href = "?doaction=add&pg=1";
}

$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

function SearchwithCargoGateIn() {
    debugger;
    var WorkOrdersearchID = $("#WorkOrdersearchID").val();
    if (WorkOrdersearchID != null && WorkOrdersearchID != undefined && WorkOrdersearchID != "" && WorkOrdersearchID != "0") {
        location.href = "?doaction=add&pg=1&IsSearch=" + true + "&WorkOrdersearchID=" + WorkOrdersearchID + "&WorkOrderNo=" + $("#WorkOrderNo").val();
    }
    else {
        $("#WorkOrderNo").addClass("redborder");
        TosterAlert("error", "Please select Vehicle info", "Required!");
    }
}

 
function changestepValue(tabNo) {
    $("#trnTruckDestuffingTab").val(tabNo);
}

function addtrnDocumentGWLotDetailsID(ID) {
    $("#trnDocumentGWLotDetailsID").val(ID);
    
    FillTruckDestuffingGWDetails();
    //setTimeout(function () {
    //Autocompletebox("ModelWHLocation", "ModelWHLocationID", "trnTruckDestuffing", "GetLocation");
    //Autocompletebox("ModelPackagingType", "ModelPackagingTypeID", "trnTruckDestuffing", "GetPackingType");
    //Autocompletebox("ModelBillCommodity", "ModelBillCommodityID", "trnTruckDestuffing", "GetBillCommodity");
    //    Autocompletebox("ModelEquipmentUsed", "ModelEquipmentUsedID", "trnTruckDestuffing", "GetEquipment");
    //}, 1000);
    Autocomplete();
}

function ValidateForm(tab) {

    changestepValue(tab)

    var isvalid = true;
    var MErrormsg = "";
    var counter = 0;
    if ($("#trnTruckDestuffingDetailsID").val() == "" || $("#trnTruckDestuffingDetailsID").val() == undefined || $("#trnTruckDestuffingDetailsID").val() == null) {
        $("#trnTruckDestuffingDetailsID").val(0);
    }
    $.ajax({
        url: GetRootPath + "trnTruckDestuffing/validateModel",
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

function FillTruckDestuffingGWDetails() {
    $("#TruckDestuffingDetails").html("");
    
    $.ajax({
        url: GetRootPath + "trnTruckDestuffing/FillTruckDestuffingGWDetails",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#TruckDestuffingDetails").html(data);
                ClearTruckDestuffingGWDetails();
            }
        }
    });
}

function AddTruckDestuffingGWDetails() {
    changestepValue(2);
    if ($("#savebtn").text() == "Add") {
        //$("#trnTruckDestuffingID").val(0);
        $("#trnTruckDestuffingDetailsID").val(0);
    }
    
    $.ajax({
        url: GetRootPath + "trnTruckDestuffing/validateSubModel",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "") {
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
                $(".redborder").removeClass("redborder");

                $.ajax({
                    url: GetRootPath + "trnTruckDestuffing/AddTruckDestuffingGWDetails",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        ClearTruckDestuffingGWDetails();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FillTruckDestuffingGWDetails();
                        TosterAlert(msgType, msg, msgTitle);

                    }
                });
            }
        }
    });
}
function EditTruckDestuffingGWDetails(ID) {
    $("#ModelAreaUOM").text($("#TotalAvailablePackages_" + ID).text());
    $("#ModelTillDateOccupiedArea").text($("#TotalAgreedPackages_" + ID).text());
    $("#ModelTotalAgreedArea").text($("#TillDateOccupiedPallets_" + ID).text());
    $("#ModelPackages").val($("#Packages_" + ID).text());
    $("#ModelPieces").val($("#Weight_" + ID).text());
    $("#ModelWeight").val($("#Pieces_" + ID).text());
    $("#ModelAreaRequired").val($("#AreaRequired_" + ID).text());
    $("#ModelWHLocation").val($("#WHLocation_" + ID).text());
    $("#ModelPackagingType").val($("#PackagingType_" + ID).text());
    $("#ModelBillCommodity").val($("#BillCommodity_" + ID).text());
    $("#ModelEquipmentUsed").val($("#EquipmentUsed_" + ID).text());
    $("#savebtn").text("Save");
    $("#trnTruckDestuffingDetailsID").val(ID);
}
function ClearTruckDestuffingGWDetails() {
    $("#ModelAreaUOM").text("");
    $("#ModelTillDateOccupiedArea").text("");
    $("#ModelTotalAgreedArea").text("");
    $("#ModelPackages").val("0");
    $("#ModelPieces").val("0");
    $("#ModelWeight").val("0");
    $("#ModelAreaRequired").val("0");
    $("#ModelWHLocation").val("");
    $("#ModelPackagingType").val("");
    $("#ModelBillCommodity").val("");
    $("#ModelEquipmentUsed").val("");
    $("#savebtn").text("Add");
    $("#trnTruckDestuffingDetailsID").val("");
}

function DeleteTruckDestuffingGWDetails(ID) {
    $.ajax({
        url: GetRootPath + "trnTruckDestuffing/DeleteTruckDestuffingGWDetails/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FillTruckDestuffingGWDetails();
            var msgType = data.split("|")[0];
            var msg = data.split("|")[1];
            var msgTitle = data.split("|")[2];
            TosterAlert(msgType, msg, msgTitle);
        }
    });
}

function Autocomplete() {  
    Autocompletebox("ModelWHLocation", "ModelWHLocationID", "trnTruckDestuffing", "GetLocation");
    Autocompletebox("ModelPackagingType", "ModelPackagingTypeID", "trnTruckDestuffing", "GetPackingType");
    Autocompletebox("ModelBillCommodity", "ModelBillCommodityID", "trnTruckDestuffing", "GetBillCommodity");
    Autocompletebox("ModelEquipmentUsed", "ModelEquipmentUsedID", "trnTruckDestuffing", "GetEquipment");
}

document.addEventListener('keydown', function (event) {
    // Check if the pressed key is Enter
    if (event.key === 'Enter') {
        // Prevent the default action to avoid form submission
        event.preventDefault();

        // Get the currently focused element
        const focusedElement = document.activeElement;

        // Check which div contains the focused element
        if (focusedElement.closest('#divHeaderDetails')) {
            // Find the submit button in HeaderDetails and trigger a click
            const btn = focusedElement.id;
            if (btn.includes('btnHeaderClear')) {
                const btnHeaderClear = document.getElementById(btn);
                if (btnHeaderClear) {
                    btnHeaderClear.click()
                }
            }
            else {
                const btnHeaderSave = document.getElementById('btnHeaderSave');
                if (btnHeaderSave) {
                    btnHeaderSave.click();
                }
            }
        }
        else if (focusedElement.closest('#divTable')) {
            const btnAddBOEItem = document.getElementById('btnAddBOEItem');
            if (btnAddBOEItem) {
                btnAddBOEItem.click();
            }
        }
        else if (focusedElement.closest('#divFinalSave')) {
            const btn = focusedElement.id;
            if (btn.includes('btnFinalClear')) {
                const btnFinalClear = document.getElementById(btn);
                if (btnFinalClear) {
                    btnFinalClear.click();
                }
            }
            else {
                const btnFinalSave = document.getElementById('btnFinalSave');
                if (btnFinalSave) {
                    btnFinalSave.click();
                }
            }
        }
        else if (focusedElement.closest('#divDetails')) {
            // Find the submit button in LotDetails and trigger a click
            const btn = focusedElement.id;
            if (btn.includes('btnFinalClear')) {
                const btnFinalClear = document.getElementById(btn);
                if (btnFinalClear) {
                    btnFinalClear.click();
                }
            }
            else
            {                
                const btnContinue = document.getElementById('btnContinue');
                if (btnContinue) {
                    btnContinue.click();                    
                }
            }            
        }
        else if (focusedElement.closest('#divSearch')) {
            const btn = focusedElement.id;
            if (btn.includes("btnAdd")) {

                const btnAdd = document.getElementById("btnAdd");
                if (btnAdd) {
                    btnAdd.click();
                }
            }
            else {
                const btnSearch = document.getElementById(btn);
                if (btnSearch) {
                    btnSearch.click();
                }
            }
        }
        else if (focusedElement.closest('#divBack')) {
            const btn = focusedElement.id;
            if (btn.includes('btnPrint')) {
                const btnPrint = document.getElementById(btn);
                if (btnPrint) {
                    btnPrint.click();
                }
            }
            else {
                const btnBack = document.getElementById("btnBack");
                if (btnBack) {
                    btnBack.click();
                }
            }
        }
    }
});