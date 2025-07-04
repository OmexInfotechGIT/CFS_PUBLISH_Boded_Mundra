$(document).ready(function () {
    Autocompletebox("TruckNo", "trnEmptyTruckGateInID", "trnLoadedContainerOutGP", "GETTruckNo");
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

function DeleteReason(TableName, ID) {
    if (ID != "" && ID != null && ID != undefined) {
        $("#DeleteReason").val('');
        $("#trnEmptyTruckGateInID").val(ID);
    }
}


function DeleteWorkOrder() {
    var DeleteReason = $("#DeleteReason").val();
    var isvalid = true;
    $.ajax({
        url: GetRootPath + "trnLoadedContainerOutGP/validateDeleteModel/?DeleteReason=" + DeleteReason,
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
                var ID = $("#trnEmptyTruckGateInID").val();
                $.ajax({
                    url: GetRootPath + "" + ControllerName + "/delete/" + ID + "?Reason=" + DeleteReason + "",
                    type: "GET",
                    dataType: "text",
                    async: false,
                    success: function (data) {
                        $('#DeleteWorkOrder').modal('hide');
                        location.reload();
                    }
                });
            }
        }
    });
}


function SearchwithCargoGateIn() {
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
    $("#trnLoadedContainerOutGPTab").val(tabNo);
}

function addtrnDocumentLotDetailsID(ID) {
    $("#trnDocumentLotDetailsID").val(ID);

    FillCargoTruckOutwardCumGatepassGWDetails();
    // setTimeout(function () {
    Autocompletebox("ModelWHLocation", "ModelWHLocationID", "trnLoadedContainerOutGP", "GetLocation");
    Autocompletebox("ModelPackagingType", "ModelPackagingTypeID", "trnLoadedContainerOutGP", "GetPackingType");
    Autocompletebox("ModelBillCommodity", "ModelBillCommodityID", "trnLoadedContainerOutGP", "GetBillCommodity");
    Autocompletebox("ModelEquipmentUsed", "ModelEquipmentUsedID", "trnLoadedContainerOutGP", "GetEquipment");
    //  }, 1000);
}

function validateModel(tab) {

    var isvalid = true;
    var MErrormsg = "";
    $.ajax({
        url: GetRootPath + "trnLoadedContainerOutGP/validateModel",
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