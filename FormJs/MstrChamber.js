$(document).ready(function () {
    Autocompletebox("txtBuildingName", "BuildingRefID", "MstrChamber", "GetBuildingName");
    Autocompletebox("txtChamberCode", "CodeRefID", "MstrChamber", "GetChamberCode");
    Autocompletebox("txtChamberName", "RefID", "MstrChamber", "GetChamberName");
    if (doaction.toLowerCase() == "edit" || doaction.toLowerCase() == "add") {
        DisplayInactiveReason('IsActive', 'dvInActiveReason');
    }
    calculateCBM();
    calculateSquareFT();
    
});

function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}
$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

function calculateCBM() {
    var width = "", height = "", length = "", CBM = 0;
    $('#txtCFT').val('')
    $('#hdnCFT').val('')
    $('#txtActualSize').val('');
    width = $('#txtWidth').val();
    height = $('#txtHeight').val();
    length = $('#txtLength').val();

    //alert("width : " + width + "\n height : " + height + "\n length : " + length);
    if (width == null || width == "" || width == undefined)
        width = 0;
    if (height == null || height == "" || height == undefined)
        height = 0;
    if (length == null || length == "" || length == undefined)
        length = 0;

    CFT = (parseFloat(length) * parseFloat(width) * parseFloat(height));

    $('#txtCFT').val(CFT);
    $('#hdnCFT').val(CFT);
    $('#txtActualSize').val(CFT);

}

function calculateSquareFT() {
    var width = "", length = "", SquareFT = 0;
    $('#txtSquareFeet').val('')
    $('#hdnSquareFeet').val('')
    width = $('#txtWidth').val();
    length = $('#txtLength').val();
    var Floor = $('#txtFloor').val();

    if (width == null || width == "" || width == undefined)
        width = 0;
    if (length == null || length == "" || length == undefined)
        length = 0;
    if (Floor == null || Floor == "" || Floor == undefined)
        Floor = 0;

    SquareFT = (parseFloat(length) * parseFloat(width) * parseFloat(Floor));

    $('#txtSquareFeet').val(SquareFT);
    $('#hdnSquareFeet').val(SquareFT);

}
$('#txtNoOfPallet').on('paste', function (event) {
    if (event.originalEvent.clipboardData.getData('Text').match(/[^\d]/)) {
        event.preventDefault();
    }
});