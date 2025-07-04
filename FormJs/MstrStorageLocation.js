$(document).ready(function () {
    Autocompletebox("txtBuilding", "BuildingRefID", "MstrStorageLocation", "GetBuilding", "GetChamberDetails");
    if (doaction.toLowerCase() == "edit" || doaction.toLowerCase() == "add") {
        DisplayInactiveReason('IsActive', 'dvInActiveReason');
    }

});

function GetChamberDetails() {
    Autocompletebox("txtChamber", "ChamberRefID", "MstrStorageLocation", "GetChamber/" + $("#BuildingRefID").val(), "GetFloorDetails");
}

function GetFloorDetails() {
    Autocompletebox("txtFloor", "FloorRefID", "MstrStorageLocation", "GetFloor/" + $("#ChamberRefID").val(), "GetPalletDetails");
}
function GetPalletDetails() {
    Autocompletebox("txtPallet", "PalletRefID", "MstrStorageLocation", "GetPallet/" + $("#FloorRefID").val());
}
function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}
$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }   
});

function EnableDetailsByID(ID)
{
    var Value = $("#" + ID).val();
    if (!$("#" + ID).prop("readonly")) {

        if (Value != "" && Value != null && Value != undefined && Value != "0") {
            if (ID == "BuildingRefID") {
                $("#txtChamber").prop("readonly", false);
                $("#txtChamber").val("");
                $("#txtFloor").prop("readonly", true);
                $("#txtFloor").val("");
                $("#txtPallet").prop("readonly", true);
                $("#txtPallet").val("");
            }
            else if (ID == "ChamberRefID") {
                $("#txtFloor").prop("readonly", false);
                $("#txtFloor").val("");
                $("#txtPallet").prop("readonly", true);
                $("#txtPallet").val("");
            }
            else if (ID == "FloorRefID") {
                $("#txtPallet").prop("readonly", false);
                $("#txtPallet").val("");
            }
            else {

            }
        }
        else
        {
            if (ID == "BuildingRefID") {
                $("#txtChamber").prop("readonly", true);
                $("#txtChamber").val("");
                $("#txtFloor").prop("readonly", true);
                $("#txtFloor").val("");
                $("#txtPallet").prop("readonly", true);
                $("#txtPallet").val("");
            }
            else if (ID == "ChamberRefID") {
                $("#txtFloor").prop("readonly", true);
                $("#txtFloor").val("");
                $("#txtPallet").prop("readonly", true);
                $("#txtPallet").val("");
            }
            else if (ID == "FloorRefID") {
                $("#txtPallet").prop("readonly", true);
                $("#txtPallet").val("");
            }
            else
            {

            }
        }
    }
}


