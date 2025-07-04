$(document).ready(function () {
    Autocompletebox("ContNo", "trnContainerDestuffWorkOrderDetailsID", "trnContainerDestuffing", "GetContNo");
    Autocompletebox("Surveyor", "SurveyorID", "trnContainerDestuffing", "GetSurveyor");
    Autocompletebox("Contractor", "ContractorID", "trnContainerDestuffing", "GetContractor");
    Autocompletebox("Brand", "BrandID", "trnContainerDestuffing", "GetBrand");
    Autocompletebox("Origin", "OriginID", "trnContainerDestuffing", "GetOrigin");
    Autocompletebox("WHLocation", "WHLocationID", "trnContainerDestuffing", "GetWHLocation");
    Autocompletebox("PackingType", "PackingTypeID", "trnContainerDestuffing", "GetPackingType");
    Autocompletebox("ModelBillCommodity", "ModelBillCommodityID", "trnContainerDestuffing", "GetModelBillCommodity");
    Autocompletebox("EquipmentName", "EquipmentID", "trnContainerDestuffing", "GetEquipment");    
    var IsFnished = $("#IsFinished").val();
    if (IsFnished != null || IsFnished != "" || IsFnished != undefined) {
        if (IsFnished.toUpperCase()=="TRUE")
            $('#IsDestuffed').iCheck('disable');        
    }
    else {
        $('#IsDestuffed').iCheck('enable');
    }
});

function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}

$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

function SearchwithContainerGateIn() {
    var trnContainerDestuffWorkOrderDetailsID = $("#trnContainerDestuffWorkOrderDetailsID").val();
    if (trnContainerDestuffWorkOrderDetailsID != null && trnContainerDestuffWorkOrderDetailsID != undefined && trnContainerDestuffWorkOrderDetailsID != "" && trnContainerDestuffWorkOrderDetailsID != "0") {
        location.href = "?doaction=add&pg=1&IsSearch=" + true + "&trnContainerDestuffWorkOrderDetailsID=" + trnContainerDestuffWorkOrderDetailsID + "&ContNo=" + $("#ContNo").val();
    }
    else {
        $("#ContNo").addClass("redborder");
        TosterAlert("error", "Please select Cont No", "Required!");
    }
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

function ValidateForm() {

    var isvalid = true;
    var MErrormsg = "";
    var counter = 0;
    if (doaction != "Add") {
        $('[id^=hdnWoPkg_]').each(function () {
            debugger;
            var ID = (this.id).split("_")[1];
            var Wopkg = $("#hdnWoPkg_" + ID).val();
            var destuffpkg = $("#hdnDestuffPkg_" + ID).val();
            var WoWgt = $("#hdnWowgt_" + ID).val();
            var destuffWgt = $("#hdnDestuffwgt_" + ID).val();
            var BulkStatus = $("#hdnBULKSTATUS_" + ID).val();
            if (counter == 0) {
                if (BulkStatus.toUpperCase() == "NONBULK") {
                    if (parseFloat(Wopkg) > parseFloat(destuffpkg)) {
                        counter = 1;
                    }
                }
                else if (BulkStatus.toUpperCase() == "BULK") {
                    if (parseFloat(WoWgt) > parseFloat(destuffWgt)) {
                        counter = 2;
                    }
                }
            }
        });
        if ($("#IsFinished").val() == "true") {
            if (counter == 1) {
                if (confirm('You are destuffing less packages than declared, you should check the destuff checkbox to destuff this container')) {
                    isvalid = true;
                } else {
                    return false;
                }
            }
            if (counter == 2) {
                if (confirm('You are destuffing less Weight than declared, you should check the destuff checkbox to destuff this container')) {
                    isvalid = true;
                } else {
                    return false;
                }
            }
        }
    }
    $.ajax({
        url: GetRootPath + "trnContainerDestuffing/validateModel",
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

    
    var trnContainerGateInDetailsID = $("#trnContainerGateInDetailsID").val();
    var CargoType = $("#CargoType").val();
    $.ajax({
        url: GetRootPath + "trnContainerDestuffing/RemainIsPlugOn/" + trnContainerGateInDetailsID +"?CargoType="+CargoType,
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            $(".redborder").removeClass("redborder");
            if (data != "") {               
                if (confirm('This is a reefer container and not plugged in, are you sure to continue?')) {
                    isvalid = true;
                } else {
                    isvalid = false;                    
                }
            }
        }
    });
    if (!isvalid && (MErrormsg != "" && MErrormsg != undefined && MErrormsg != null)) {
        TosterAlert("error", MErrormsg, "Required!");
    }
    return isvalid;
}

function ClearContainerDestuffingGWItems() {
    $("#NoOfPallets").val("0");
    $("#ModelNoOfPkgs").val("0");
    $("#ModelNoOfPieces").val("0");
    $("#ModelWEIGHT").val("0");
    $("#WHLocation").val("");
    $("#WHLocationID").val("0");
    $("#AreaRequired").val("0");
    $("#PackingType").val("");
    $("#PackingTypeID").val("0");
    $("#ModelBillCommodity").val("");
    $("#ModelBillCommodityID").val("0");
    $("#EquipmentName").val("");
    $("#EquipmentID").val("0");
    $("#ChamberType").val("");
    $("#savebtn").text("Add");
    $("#trnContainerDestuffingItemsID").val("0");
}

function AddContainerDestuffingGWItems() {

    $.ajax({
        url: GetRootPath + "trnContainerDestuffing/validateModelPopUp",
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
                    url: GetRootPath + "trnContainerDestuffing/AddContainerDestuffingGWItems",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        ClearContainerDestuffingGWItems();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FillContainerDestuffingGWItemsGrid();
                        TosterAlert(msgType, msg, msgTitle);

                    }
                });
            }
        }
    });
}

function FillContainerDestuffingGWItemsGrid() {
    $("#ContainerDestuffingGWItems").html("");

    $.ajax({
        url: GetRootPath + "trnContainerDestuffing/FillContainerDestuffingGWItems",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#ContainerDestuffingGWItems").html(data);
                ClearContainerDestuffingGWItems();
            }
        }
    });
}

function DeleteContainerDestuffingGWItems(ID) {
    $.ajax({
        url: GetRootPath + "trnContainerDestuffing/deletetrnContainerDestuffingItems/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FillContainerDestuffingGWItemsGrid();
            var msgType = data.split("|")[0];
            var msg = data.split("|")[1];
            var msgTitle = data.split("|")[2];
            TosterAlert(msgType, msg, msgTitle);
        }
    });
}

function EditContainerDestuffingGWItems(ID) {
    $("#ModelNoOfPkgs").val($("#NoOfPackages_" + ID).text());
    $("#ModelNoOfPieces").val($("#NoOfPieces_" + ID).text());
    $("#ModelWEIGHT").val($("#Weight_" + ID).text());
    $("#trnContainerDestuffingItemsID").val(ID);
    $("#NoOfPallets").val($("#NoOfPallets_" + ID).text());
    $("#WHLocation").val($("#WHLocation_" + ID).text());
    $("#AreaRequired").val($("#AreaRequired_" + ID).text());
    $("#WHLocationID").val($("#WHLocationID_" + ID).text());
    $("#PackingType").val($("#PackingType_" + ID).text());
    $("#PackingTypeID").val($("#PackingTypeID_" + ID).text());
    $("#ModelBillCommodity").val($("#ModelBillCommodity_" + ID).text());
    $("#ModelBillCommodityID").val($("#ModelBillCommodityID_" + ID).text());
    $("#EquipmentName").val($("#EquipmentName_" + ID).text());
    $("#EquipmentID").val($("#EquipmentID_" + ID).text());
    $("#ChamberType").val($("#ChamberType_" + ID).text());
    $("#savebtn").text("Save");
}

function addtrnDocumentGWLotDetailsID(ID) {
    $("#trnDocumentGWLotDetailsID").val(ID);
    FillContainerDestuffingGWItemsGrid();

    // setTimeout(function () {
    Autocompletebox("WHLocation", "WHLocationID", "trnContainerDestuffing", "GetWHLocation");
    Autocompletebox("PackingType", "PackingTypeID", "trnContainerDestuffing", "GetPackingType");
    Autocompletebox("ModelBillCommodity", "ModelBillCommodityID", "trnContainerDestuffing", "GetModelBillCommodity");
    Autocompletebox("EquipmentName", "EquipmentID", "trnContainerDestuffing", "GetEquipment");
    //   }, 1000);
}

function ClearSearchDetails() {
    location.href = "?doaction=add&pg=1";
}