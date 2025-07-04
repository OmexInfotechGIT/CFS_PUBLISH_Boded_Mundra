$(document).ready(function () {
    Autocompletebox("TruckNo", "trnEmptyTruckGateInID", "trnCargoTruckOutwardCumGatepass", "GETWorkOrderNo");    
    Autocompletebox("Surveyor", "SurveyorID", "trnCargoTruckOutwardCumGatepass", "GetSurveyor");
    Autocompletebox("Contractor", "ContractorID", "trnCargoTruckOutwardCumGatepass", "GetContractor");
    Autocompletebox("Brand", "BrandID", "trnCargoTruckOutwardCumGatepass", "GetBrand");
    Autocompletebox("Origin", "OriginID", "trnCargoTruckOutwardCumGatepass", "GetOrigin");
    Autocompletebox("ModelWHLocation", "ModelWHLocationID", "trnCargoTruckOutwardCumGatepass", "GetLocation");
    Autocompletebox("ModelPackagingType", "ModelPackagingTypeID", "trnCargoTruckOutwardCumGatepass", "GetPackingType");
    Autocompletebox("ModelBillCommodity", "ModelBillCommodityID", "trnCargoTruckOutwardCumGatepass", "GetBillCommodity");
    Autocompletebox("ModelEquipmentUsed", "ModelEquipmentUsedID", "trnCargoTruckOutwardCumGatepass", "GetEquipment");
    Autocompletebox("ISOCode", "ISOCodeID", "trnCargoGateIn", "GetISOCODE", "Callbackautocomplete2");
    var DomesticContainerStatus = "";
    if (IsView == "True" || IsView == "true" || IsView == true) {
        DomesticContainerStatus = $("#DomesticContainerStatus").text();
        if (DomesticContainerStatus == "Yes" || DomesticContainerStatus == "yes") {
            DomesticContainerStatus = true;
        }
        else {
            DomesticContainerStatus = false;
        }
    }
    else {
        DomesticContainerStatus = $("input[name='DomesticContainerStatus']:checked").val();
    }
    if (DomesticContainerStatus == true || DomesticContainerStatus == "true") {
        Autocompletebox("ContainerNumber", "hdntrnEmptyTruckGateInDomesticID", "trnCargoTruckOutwardCumGatepass", "GetContainer/" + $("#trnCargoTruckOutwardCumGatepassID").val() + "", "GetContainerDetail");
        $("#dvDomesticContainer").show();
        $("#dvSaveButton").hide();
    }
    else {
        $("#dvDomesticContainer").hide();
        $("#dvSaveButton").show();
    }
    FillContainerDetailsGrid();
    MyContainerStatus();
});


//setTimeout(function () {
function MyContainerStatus() {
    $("input[name=DomesticContainerStatus]").on('ifChanged', function (event) {

        var DomesticContainerStatus = $("input[name='DomesticContainerStatus']:checked").val();
        if (DomesticContainerStatus == true || DomesticContainerStatus == "true") {
            $("#dvDomesticContainer").show();
            Autocompletebox("ContainerNumber", "hdntrnEmptyTruckGateInDomesticID", "trnCargoTruckOutwardCumGatepass", "GetContainer/" + $("#trnCargoTruckOutwardCumGatepassID").val() + "", "GetContainerDetail");
            $("#dvSaveButton").hide();
        }
        else {
            $("#dvDomesticContainer").hide();
            $("#dvSaveButton").show();
        }
    });
}
//}, 1000);

function GetContainerDetail() {
    var trnEmptyTruckGateInDomesticID = $("#hdntrnEmptyTruckGateInDomesticID").val();
    $.ajax({
        url: GetRootPath + "trnCargoTruckOutwardCumGatepass/GetContainerDetail/" + trnEmptyTruckGateInDomesticID,
        type: "GET",
        dataType: "text",
        success: function (data) {
            if (data != null && data != "") {

                $("#ISOCodeDoc").text(data.split("|")[0]);
                $("#hdnISOCodeDoc").val(data.split("|")[0]);
                $("#ISOCodeSizes").text(data.split("|")[1]);
                $("#ISOCodeSize").val(data.split("|")[1]);
                $("#ISOCodeTypes").text(data.split("|")[2]);
                $("#ISOCodeType").val(data.split("|")[2]);
                $("#PhysicalSeal").val(data.split("|")[3]);
                $("#DeclaredSeal").val(data.split("|")[4]);
                $("#hdnCargoType").val(data.split("|")[5]);
            }
            else {
                $("#ISOCodeDoc").text('');
                $("#ISOCodeSizes").text('');
                $("#ISOCodeTypes").text('');
                $("#PhysicalSeal").val('');
                $("#DeclaredSeal").val('');
                $("#hdnCargoType").val('');
            }
        }
    });
}

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
    var trnEmptyTruckGateInsearchID = $("#trnEmptyTruckGateInID").val();
    if (trnEmptyTruckGateInsearchID != null && trnEmptyTruckGateInsearchID != undefined && trnEmptyTruckGateInsearchID != "" && trnEmptyTruckGateInsearchID != "0") {
        location.href = "?doaction=add&pg=1&IsSearch=" + true + "&trnEmptyTruckGateInsearchID=" + trnEmptyTruckGateInsearchID + "&TruckNo=" + $("#TruckNo").val();
    }
    else {
        $("#TruckNo").addClass("redborder");
        TosterAlert("error", "Please select Truck No", "Required!");
    }
}


function changestepValue(tabNo) {
    $("#trnCargoTruckOutwardCumGatepassTab").val(tabNo);
}

function addtrnDocumentGWLotDetailsID(ID) {
    $("#trnDocumentGWLotDetailsID").val(ID);

    FillCargoTruckOutwardCumGatepassGWDetails();
    //setTimeout(function () {
    Autocompletebox("ModelWHLocation", "ModelWHLocationID", "trnCargoTruckOutwardCumGatepass", "GetLocation");
    Autocompletebox("ModelPackagingType", "ModelPackagingTypeID", "trnCargoTruckOutwardCumGatepass", "GetPackingType");
    Autocompletebox("ModelBillCommodity", "ModelBillCommodityID", "trnCargoTruckOutwardCumGatepass", "GetBillCommodity");
    Autocompletebox("ModelEquipmentUsed", "ModelEquipmentUsedID", "trnCargoTruckOutwardCumGatepass", "GetEquipment");
    //}, 1000);

}

function ValidateForm(tab) {   
    changestepValue(tab)

    var isvalid = true;
    var MErrormsg = "";
    var counter = 0;
    if ($("#trnCargoTruckOutwardCumGatepassDetailsID").val() == "" || $("#trnCargoTruckOutwardCumGatepassDetailsID").val() == undefined || $("#trnCargoTruckOutwardCumGatepassDetailsID").val() == null) {
        $("#trnCargoTruckOutwardCumGatepassDetailsID").val(0);
    }
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
        url: GetRootPath + "trnCargoTruckOutwardCumGatepass/validateModel",
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
        if (MErrormsg != null && MErrormsg != "") {
            TosterAlert("error", MErrormsg, "Required!");
        }
    }
    return isvalid;
}

function FillCargoTruckOutwardCumGatepassGWDetails() {
    $("#CargoTruckOutwardCumGatepassDetails").html("");

    $.ajax({
        url: GetRootPath + "trnCargoTruckOutwardCumGatepass/FillCargoTruckOutwardCumGatepassGWDetails",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#CargoTruckOutwardCumGatepassDetails").html(data);
                ClearCargoTruckOutwardCumGatepassGWDetails();
            }
        }
    });
}

function AddCargoTruckOutwardCumGatepassGWDetails() {
    changestepValue(2);
    if ($("#savebtn").text() == "Add") {
        //$("#trnCargoTruckOutwardCumGatepassID").val(0);
        $("#trnCargoTruckOutwardCumGatepassDetailsID").val(0);
    }
    $.ajax({
        url: GetRootPath + "trnCargoTruckOutwardCumGatepass/validateSubModel",
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
                    url: GetRootPath + "trnCargoTruckOutwardCumGatepass/AddCargoTruckOutwardCumGatepassGWDetails",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        ClearCargoTruckOutwardCumGatepassGWDetails();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FillCargoTruckOutwardCumGatepassGWDetails();
                        TosterAlert(msgType, msg, msgTitle);

                    }
                });
            }
        }
    });
}
function EditCargoTruckOutwardCumGatepassGWDetails(ID) {
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
    $("#trnCargoTruckOutwardCumGatepassDetailsID").val(ID);
}
function ClearCargoTruckOutwardCumGatepassGWDetails() {
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
    $("#trnCargoTruckOutwardCumGatepassDetailsID").val("");
}

function DeleteCargoTruckOutwardCumGatepassGWDetails(ID) {
    $.ajax({
        url: GetRootPath + "trnCargoTruckOutwardCumGatepass/DeleteCargoTruckOutwardCumGatepassGWDetails/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FillCargoTruckOutwardCumGatepassGWDetails();
            var msgType = data.split("|")[0];
            var msg = data.split("|")[1];
            var msgTitle = data.split("|")[2];
            TosterAlert(msgType, msg, msgTitle);
        }
    });
}

//setTimeout(function () { 
function Automatic() {
    Autocompletebox("ModelWHLocation", "ModelWHLocationID", "trnCargoTruckOutwardCumGatepass", "GetLocation");
    Autocompletebox("ModelPackagingType", "ModelPackagingTypeID", "trnCargoTruckOutwardCumGatepass", "GetPackingType");
    Autocompletebox("ModelBillCommodity", "ModelBillCommodityID", "trnCargoTruckOutwardCumGatepass", "GetBillCommodity");
    Autocompletebox("ModelEquipmentUsed", "ModelEquipmentUsedID", "trnCargoTruckOutwardCumGatepass", "GetEquipment");
}
//}, 2000);


function AddContainerdetails() {
    $.ajax({
        url: GetRootPath + "trnCargoTruckOutwardCumGatepass/validateSubModel",
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
                    url: GetRootPath + "trnCargoTruckOutwardCumGatepass/AddContainerdetails",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        var ErrField = data.split("|")[3];
                        if (ErrField != "" && ErrField != null && ErrField != undefined) {
                            $("#" + ErrField).addClass("redborder");
                            $("#" + ErrField).val("");
                        }
                        if (msgType == "Success" || msgType == "success") {
                            ClearContainerDetails();
                            FillContainerDetailsGrid();
                            TosterAlert(msgType, msg, msgTitle);
                        }
                        else {
                            TosterAlert(msgType, msg, msgTitle);
                        }
                    }
                });
            }
        }
    });
}

function FillContainerDetailsGrid() {

    $("#ContainerDetails").html("");

    $.ajax({
        url: GetRootPath + "trnCargoTruckOutwardCumGatepass/FillContainerdetailsGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {

                $("#ContainerDetails").html(data);
                ClearContainerDetails();                
            }

        }
    });
}

function ClearContainerDetails() {    
    $("#ContainerNumber").val('');
    $("#ISOCode").val('');
    $("#ISOCodeID").val('');
    $("#ISOCodeSizes").text('');
    $("#ISOCodeTypes").text('');
    $("#ISOCodeSize").text('');
    $("#ISOCodeType").text('');
    $("#GrossWeight").val('0');
    $("#TareWeight").val('0');
    $("#PayloadCapacity").val('0');
    $("#ISOCodeDoc").text('');
    $("#trnCargoTruckOutwardCumGatepassContainerDetailsID").val('0');
    $("#PhysicalSeal").val('');
    $("#DeclaredSeal").val('');
    $("#hdntrnEmptyTruckGateInDomesticID").val('0');
    Autocompletebox("ContainerNumber", "hdntrnEmptyTruckGateInDomesticID", "trnCargoTruckOutwardCumGatepass", "GetContainer/" + $("#trnCargoTruckOutwardCumGatepassID").val(), "GetContainerDetail");
}

function EditContainerdetails(ID) {
    debugger;
    $("#dvAddContainerDetails").show();
    $("#ContainerNumber").val($("#ContainerNumber_" + ID).text());
    $("#hdntrnEmptyTruckGateInDomesticID").val($("#ContainerID_" + ID).text());
    $("#ISOCode").val($("#ISOCode_" + ID).text());
    $("#ISOCodeID").val($("#ISOCodeID_" + ID).text());
    $("#ISOCodeSizes").text($("#Size_" + ID).text());
    $("#ISOCodeSize").val($("#Size_" + ID).text());
    $("#ISOCodeTypes").text($("#ContType_" + ID).text());
    $("#ISOCodeType").val($("#ContType_" + ID).text());
    $("#GrossWeight").val(parseInt($("#GrossWeight_" + ID).text()));
    $("#TareWeight").val(parseInt($("#TareWeight_" + ID).text()));
    $("#PayloadCapacity").val(parseInt($("#PayloadCapacity_" + ID).text()));

    $("#PhysicalSeal").val($("#PhysicalSeal_" + ID).text());
    $("#DeclaredSeal").val($("#DeclaredSeal_" + ID).text());
    $("#trnCargoTruckOutwardCumGatepassContainerDetailsID").val(ID);
    Autocompletebox("ContainerNumber", "hdntrnEmptyTruckGateInDomesticID", "trnCargoTruckOutwardCumGatepass", "GetContainer/" + $("#trnCargoTruckOutwardCumGatepassID").val() + "?CargoTruckOutwardCumGatepassContainerDetailsID=" + $("#trnCargoTruckOutwardCumGatepassContainerDetailsID").val(), "GetContainerDetail");
    GetContainerDetail();

}

function Callbackautocomplete2() {
    var ISOCode = $("#ISOCode").val();
    var ISOCodeDoc = $("#ISOCodeDoc").text();
    if (ISOCode != ISOCodeDoc) {
        TosterAlert("warning", " You select differnt ISO Code ", "warning!");
    }
}

function onblureweight() {

    var GrossWeight = $("#GrossWeight").val();
    var TareWeight = $("#TareWeight").val();

    if (GrossWeight == "" || GrossWeight == undefined || GrossWeight == null) {
        GrossWeight = "0";
    }

    if (TareWeight == "" || TareWeight == undefined || TareWeight == null) {
        TareWeight = "0";
    }



    if (parseFloat(GrossWeight) < parseFloat(TareWeight)) {
        $("#TareWeight").val("0");
        TosterAlert("error", "Tare Weight Can not greater than Gross Weight", "Required!");
    }
    $("#PayloadCapacity").val(parseFloat($("#GrossWeight").val()) - parseFloat($("#TareWeight").val()));
}

function DeleteContainerdetails(ID) {
    $.ajax({
        url: GetRootPath + "trnCargoTruckOutwardCumGatepass/deleteContainerdetails/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FillContainerDetailsGrid();
            var msgType = data.split("|")[0];
            var msg = data.split("|")[1];
            var msgTitle = data.split("|")[2];
            TosterAlert(msgType, msg, msgTitle);
        }
    });
}