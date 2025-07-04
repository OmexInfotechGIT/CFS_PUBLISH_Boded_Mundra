$(document).ready(function () {    
    var msg = $("#msg").val();
    if (msg != null && msg != undefined && msg != "") {
        TosterAlert("warning", msg, "Warning!");
    }
    Autocompletebox("CHAName", "CHAID", "Reports", "GetCHA");
    Autocompletebox("ForwarderName", "ForwarderID", "Reports", "GetForwarder");
    Autocompletebox("Importer", "ImporterID", "Reports", "GetIMPEXP/?For=IMPT");
    Autocompletebox("Exporter", "ExporterID", "Reports", "GetIMPEXP/?For=EXPT");
    Autocompletebox("NOC", "NOCID", "Reports", "GetNOC");
    Autocompletebox("Agent", "AgentID", "Reports", "GetAgent");
    Autocompletebox("Line", "LineID", "Reports", "GetLine");
    Autocompletebox("BatchNo", "BatchID", "Reports", "GetBatchNo");
    ReportCheck();
}); 
function Validate() {    
    var isvalid = true;
    if ($("#FromDate").val() != undefined && $("#ToDate").val() != undefined) {
        $.ajax({
            url: GetRootPath + "Reports/validateModel",
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
    }

    
    return isvalid;
}
function ReportCheck() {
    $("#IsAllReport").on('ifChanged', function (event) {
        debugger
        var IsAllReport = $("#IsAllReport:checked").val();
        if (IsAllReport == true || IsAllReport == "True" || IsAllReport == "true") {
            debugger;
            var d = $("#IsImportLoadedBal:checked").val();
            $('#IsCargoInward').iCheck('check');
            $('#IsCargoOutward').iCheck('check');
            $('#IsLoadedGateIn').iCheck('check');
            $('#IsLoadedContBal').iCheck('check');
            $('#IsEmptyContBal').iCheck('check');
            $('#IsExportContBal').iCheck('check');
            $('#IsLoadedGateOut').iCheck('check');
            $('#IsEmptyContGateIn').iCheck('check');
            $('#IsEmptyContGateOut').iCheck('check');
            $('#IsExportContStuff').iCheck('check');
            $('#IsExportContOut').iCheck('check');
            $('#IsCargoBal').iCheck('check');


        }
        else {
            $('#IsCargoInward').iCheck('uncheck');
            $('#IsCargoOutward').iCheck('uncheck');
            $('#IsLoadedGateIn').iCheck('uncheck');
            $('#IsLoadedContBal').iCheck('uncheck');
            $('#IsEmptyContBal').iCheck('uncheck');
            $('#IsExportContBal').iCheck('uncheck');
            $('#IsLoadedGateOut').iCheck('uncheck');
            $('#IsEmptyContGateIn').iCheck('uncheck');
            $('#IsEmptyContGateOut').iCheck('uncheck');
            $('#IsExportContStuff').iCheck('uncheck');
            $('#IsExportContOut').iCheck('uncheck');
            $('#IsCargoBal').iCheck('uncheck');

        }
    });
}
