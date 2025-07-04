$(document).ready(function () {
    Autocompletebox("WeighRegNo", "MstrWeighBridgeID", "MstrWeighBridge", "GetMstrWeighBridge");
    Autocompletebox("txtWeighRegNo", "RefID", "MstrWeighBridge", "GetWeighBridge");
    Autocompletebox("txtPortName", "RefPortName", "MstrWeighBridge", "GetPortName");
    if (doaction.toLowerCase() == "edit" || doaction.toLowerCase() == "add") {
        DisplayInactiveReason('IsActive', 'dvInActiveReason');
    }
    $("#txtIPaddress").inputmask("ip");

    HideShow('rdbAUTOMATIC', 'dvOperationReason', doaction, Reason);
    HideShow('rdbMANUAL', 'dvOperationReason', doaction, Reason);

    if (doaction.toLowerCase() == "edit") {

        if ($("#txtOperationReason").val() != "" && $("#txtOperationReason").val() != null && $("#txtOperationReason").val() != undefined) {
            $("#dvOperationReason").show();
        }
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

function HideShow(RadioButtonID, InactivePanalID, IsEdit, Reason) {
    
    if (IsEdit.toLowerCase() == "add") {
        $("#" + InactivePanalID).hide();
    }
    
    setTimeout(function () {
        $("#" + RadioButtonID).on('ifChanged', function (event) {
            
            $("#" + InactivePanalID).show();
            $("#txtOperationReason").val(Reason);
            
        });
    }, 1000);
}