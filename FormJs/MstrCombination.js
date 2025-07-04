$(document).ready(function () {
    Autocompletebox("txtAgentName", "txtAgentID", "MstrCombination", "GetAgent");
    Autocompletebox("txtLineName", "txtLineID", "MstrCombination", "GetLine?ID=" + $("#txtAgentID").val());

    if (IsEdit.toLowerCase() == "true" || IsSearch.toLowerCase() == "true") {
        $("#txtAgentName").prop("readonly", true);
        $("#btnsearchclick").hide();
    }
    else {
        $("#txtAgentName").prop("readonly", false);
        $("#btnsearchclick").show();
    }
});
function SearchData() {
    location.href = "MstrCombination?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}
$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

function searchTaxExempted() {
    var AgentName = $("#txtAgentName").val();
    var AgentID = $("#txtAgentID").val();
    if (AgentID != null && AgentID != undefined && AgentID != "" && AgentID != "0") {
        location.href = "?pg=1&IsSearch=" + true + "&AgentID=" + AgentID + "&AgentName=" + AgentName;
    }
    else
    {
        $("#txtAgentName").addClass("redborder");
        TosterAlert("error", "Please Select Agent Name", "Required!");
    }
}

function EditLineDetails(ID) {
    if (ID > 0) {
        $("#txtLineName").val($("#hdntxtLineName_" + ID).text());
        $("#txtLineID").val($("#hdntxtLineID_" + ID).text());
        //$("#chkstatus").val($("#hdntxtStatus_" + ID).text());
        $("#txtLineName").prop("disabled", true);

        if ($("#hdntxtStatus_" + ID).text().toLowerCase() == "true") {
            $("#chkstatus").iCheck("check");
        }
        else {
            $("#chkstatus").iCheck("uncheck");
        }
        $("#MstrCombinationID").val(ID);
    }
}

function ClearLine() {
    $("#txtLineName").val('');
    $("#txtLineID").val('0');
    $("#chkstatus").iCheck("check");
    $("#MstrCombinationID").val('0');
    $("#txtLineName").prop("disabled", false);
}