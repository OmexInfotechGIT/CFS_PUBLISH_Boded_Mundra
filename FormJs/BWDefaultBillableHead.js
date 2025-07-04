$(document).ready(function () {

    Autocompletebox("CycleName", "hdnCycleName", "BWDefaultBillableHead", "GetCycle", "deliveryMdSelect");
    Autocompletebox("TariffHead", "hdnTariffHead", "BWDefaultBillableHead", "GetTariffHead/" + id);

    if (doaction.toLowerCase() == "edit" || doaction.toLowerCase() == "add") {
        DisplayInactiveReason('IsActive', 'dvInActiveReason');
    }

    fclLclSelect()

});

function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}

$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

function deliveryMdSelect() {

    let CycleName = $("#CycleName").val()

    if (CycleName != "") {

        $("#DeliveryMode").val('')
        Autocompletebox("DeliveryMode", "hdnDeliveryMode", "BWDefaultBillableHead", "GetDeliveryMode/" + $("#hdnCycleName").val(), "FclLcl");
    } else {
        $("#DeliveryMode").val('')
    }
}

function FclLcl() {

    let DeliveryMode = $("#DeliveryMode").val()

    if (DeliveryMode != "") {

        Autocompletebox("FclLcl", "hdnFclLcl", "BWDefaultBillableHead", "GetFclLcl");

    } else {
        $("#FclLcl").val('')
    }

}

function fclLclSelect() {

    let cycleName = $("#CycleName").val()
    let DeliveryMode = $("#DeliveryMode").val()

    if (cycleName == "EXPORT" && DeliveryMode == "BTT") {
        debugger
        $("#FclLcl").attr("readonly", true)
        $("#IsTrue").attr("checked", true)
    } else {
        $("#FclLcl").attr("readonly", false)
    }

}

function GatePassValidationStep1() {

    debugger

    var isvalid = true;
    var MErrormsg = "";

    let cycleNameID = $("#hdnCycleName").val()
    let DeliveryModeID = $("#hdnDeliveryMode").val()
    let FlcLclID = $("#hdnFclLcl").val()

    let CycleName = $("#CycleName").val();
    let DeliveryMode = $("#DeliveryMode").val();
    let FclLcl = $("#FclLcl").val();

    if (CycleName == "BONDED" || CycleName == "EXPORT") {

        if (cycleNameID == "" || cycleNameID == "0") {
            MErrormsg += "Please Select Cycle Name <br />";
            $("#CycleName").addClass("redborder")
            isvalid = false;

        } else {
            $("#CycleName").removeClass("redborder")
        }
    } else {
        MErrormsg += "Please Select Cycle Name <br />";
        $("#CycleName").addClass("redborder")
        isvalid = false;
    }

    if (DeliveryMode == "LOADED" || DeliveryMode == "DESTUFF" || DeliveryMode == "STUFFING" || DeliveryMode == "BTT") {

        if (DeliveryModeID == "" || DeliveryModeID == "0") {

            isvalid = false;
            MErrormsg += "Please Select Delivery Mode <br />";
            $("#DeliveryMode").addClass("redborder")

        } else {
            $("#DeliveryMode").removeClass("redborder")
        }
    } else {
        isvalid = false;
        MErrormsg += "Please Select Delivery Mode <br />";
        $("#DeliveryMode").addClass("redborder")
    }

    if (FclLcl == "FCL" || FclLcl == "LCL" || CycleName == "EXPORT" || DeliveryMode == "BTT") {

        if (cycleNameID != "2" && DeliveryModeID != "4") {

            if (FlcLclID == "" || FlcLclID == "0") {
                isvalid = false;
                MErrormsg += "Please Select Fcl Lcl";
                $("#FclLcl").addClass("redborder")

            } else {
                $("#FclLcl").removeClass("redborder")
            }
        }
    } else {

        isvalid = false;
        MErrormsg += "Please Select Fcl Lcl";
        $("#FclLcl").addClass("redborder");
    }

    if (!isvalid) {
        TosterAlert("error", MErrormsg, "Required!");
    }
    return isvalid;
    
}

function GatePassValidationStep2() {

    debugger

    var isvalid = true;
    var MErrormsg = "";

    let tariff = $("#hdnTariffHead").val()

    if (tariff != "0" && tariff != "") {
        $("#TariffHead").removeClass("redborder")
        isvalid = true;
    } else {
        isvalid = false;
        MErrormsg += "Please Enter Tariff Head";
        $("#TariffHead").addClass("redborder")
    }

    if (!isvalid) {
        TosterAlert("error", MErrormsg, "Required!");
    }
    else {
        $.ajax({
            url: GetRootPath + "BWDefaultBillableHead/AddTariffDetails",
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                
            }
        });
    }
    return isvalid;
  
}