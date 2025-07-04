$(document).ready(function () {
    
    Autocompletebox("CycleName", "CycleID", "TariffCombinations", "GetCycleName");
    Autocompletebox("LineName", "LineID", "TariffCombinations", "GetLineName/" + $("#CycleName").val());
    Autocompletebox("AgentName", "AgentID", "TariffCombinations", "GetAgentName/" + $("#CycleName").val());
    Autocompletebox("CHAName", "CHAID", "TariffCombinations", "GetCHAName/" + $("#CycleName").val());
    Autocompletebox("ForwarderName", "ForwarderID", "TariffCombinations", "GetForwarderName/" + $("#CycleName").val());
    Autocompletebox("ImporterExporter", "ImporterExporterID", "TariffCombinations", "GetImporterExporter/" + $("#CycleName").val());
    Autocompletebox("ConsolerName", "ConsolerID", "TariffCombinations", "GetConsolerName/" + $("#CycleName").val());

    if (doaction.toLowerCase() == "edit" || doaction.toLowerCase() == "add") {
        DisplayInactiveReason('IsActive', 'dvInActiveReason');
    }

    if (doaction.toLowerCase() == "edit") {
        debugger
        $("#CycleName").attr("readonly", true)
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


function GatePassValidationStep1() {

    debugger

    var isvalid = true;
    var MErrormsg = "";

    let CycleID = $("#CycleID").val() 

    if (CycleID != "" && CycleID != undefined && CycleID != "0" && CycleID != NaN) {
        isvalid = true
    } else {
        isvalid = false
        MErrormsg = "Please Select Cycle Name";
        $("#CycleName").addClass("redborder")
    }

    if (!isvalid) {
        TosterAlert("error", MErrormsg, "Required!");
    }
    return isvalid;

}

function GatePassValidationStep2() {

    var isvalid = true;
    var MErrormsg = "";
    var counter = 0;

    let LineID = $("#LineID").val()
    let AgentID = $("#AgentID").val()
    let CHAID = $("#CHAID").val()
    let ForwarderID = $("#ForwarderID").val()
    let ImporterExporterID = $("#ImporterExporterID").val()
    let ConsolerID = $("#ConsolerID").val()

    let LineName = $("#LineName").val()
    let AgentName = $("#AgentName").val()
    let CHAName = $("#CHAName").val()
    let ForwarderName = $("#ForwarderName").val()
    let ImporterExporter = $("#ImporterExporter").val()
    let ConsolerName = $("#ConsolerName").val()

    debugger

    if (LineName != "") {

        if (LineID == "" || LineID == "0") {
            isvalid = false;

            MErrormsg += "Please Enter Line Name <br />";
            $("#LineName").addClass("redborder")
        }
        else {
            isvalid = true;
        }
    }

    if (AgentName != "") {

        if (AgentID == "" || AgentID == "0") {
            isvalid = false;

            MErrormsg += "Please Enter Agent Name <br />";
            $("#AgentName").addClass("redborder")
        }
        else {
            isvalid = true;
        }
    }

    if (CHAName != "") {

        if (CHAID == "" || CHAID == "0") {
            isvalid = false;

            MErrormsg += "Please Enter CHA Name <br />";
            $("#CHAName").addClass("redborder")
        }
        else {
            isvalid = true;
        }
    }

    if (ForwarderName != "") {

        if (ForwarderID == "" || ForwarderID == "0") {
            isvalid = false;

            MErrormsg += "Please Enter Forwarder Name <br />";
            $("#ForwarderName").addClass("redborder")
        }
        else {
            isvalid = true;
        }

    }

    if (ImporterExporter != "") {

        if (ImporterExporterID == "" || ImporterExporterID == "0") {
            isvalid = false;

            MErrormsg += "Please Enter ImporterExporter Name <br />";
            $("#ImporterExporter").addClass("redborder")
        }
        else {
            isvalid = true;
        }   

    }

    if (ConsolerName != "") {

        if (ConsolerID == "" || ConsolerID == "0") {
            isvalid = false;
            MErrormsg += "Please Enter Consoler Name <br />";
            $("#ConsolerName").addClass("redborder")
        }
        else {
            isvalid = true;
        }

    }

    if (MErrormsg != "") {
        isvalid = false;
        TosterAlert("error", MErrormsg, "Required!");

        return isvalid;
    } else {

        if (isvalid) {
            if ((LineID != null && LineID != "" && LineID != undefined && LineID != "0") || (AgentID != null && AgentID != "" && AgentID != undefined && AgentID != "0") || (CHAID != null && CHAID != "" && CHAID != undefined && CHAID != "0") || (ForwarderID != null && ForwarderID != "" && ForwarderID != undefined && ForwarderID != "0") || (ImporterExporterID != null && ImporterExporterID != "" && ImporterExporterID != undefined && ImporterExporterID != "0") || (ConsolerID != null && ConsolerID != "" && ConsolerID != undefined && cons != "0")) {

                isvalid = true;

            } else {
                isvalid = false;

                MErrormsg += "Please Enter Any One Record";

            }
        }

        if (!isvalid) {
            TosterAlert("error", MErrormsg, "Required!");
        }


        return isvalid;
    }

}

function FinalSave() {

    $.ajax({
        url: GetRootPath + "TariffCombinations/AddTariffCombinationsDetails",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {

        }
    });

}