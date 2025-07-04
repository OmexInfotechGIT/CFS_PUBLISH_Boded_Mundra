$(document).ready(function () {   
    Autocompletebox("ContainerNo", "hdnContainerNo", "containerhistory", "GETContainerNo");
});

function ContainerEventSearch() {
    debugger;
    var ContainerNo = $("#ContainerNo").val();
    var ContainerID = $("#hdnContainerNo").val();
    var Errormsg = "";
    var isvalid = true;
    if (ContainerID == null || ContainerID == "" || ContainerID == undefined || ContainerID == 0)
    {
        Errormsg += "Please select Container Number <br/>"
        $("#ContainerNo").addClass('redborder');
        isvalid = false;
    }
    else {
        $("#ContainerNo").removeClass('redborder');
    }
    if (isvalid == true) {
        location.href = "?Containernumber=" + ContainerNo + "&ContainerID=" + ContainerID + "&IsSearch=" + true;
    }
    if (Errormsg != "") {
        TosterAlert("error", Errormsg, "Required!");
    }
}

function ClearContainer()
{
     $("#ContainerNo").val('');
    $("#hdnContainerNo").val('0');
    location.href = "/containerhistory"
}