$(document).ready(function () {
    Autocompletebox("txtUomCode", "RefID", "MstrUom", "GetUom");
    Autocompletebox("txtUomName", "RefID", "MstrUom", "getUomName");
    if (doaction.toLowerCase() == "edit" || doaction.toLowerCase() == "add") {
        DisplayInactiveReason('IsActive', 'dvInActiveReason');
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

function calculateCBM() {
    var width = "", height = "", length = "";
    $('#txtCFT').val('')
    $('#hndCFT').val('')

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

    CFT = (parseFloat(length) * parseFloat(width) * parseFloat(height)).toFixed(2);

    $('#txtCFT').val(CFT);
    $('#hndCFT').val(CFT);
}