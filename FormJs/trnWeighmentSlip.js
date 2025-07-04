$(document).ready(function () {  
    Mode = $("input[name='Mode']:checked").val();

    Autocompletebox("TruckNo", "trnWorkOrderID", "trnWeighmentSlip", "GETTruckNo?mode=" + Mode);
    Autocompletebox("ContainerNo", "ContainerID", "trnWeighmentSlip", "GETContainerNo?mode=" + Mode, "GetTrucKNoByContNo");

    Equipment = $("input[name='Equipment']:checked").val();
    if (Equipment == "Truck") {
        $("#dvContainerDetails").hide();
        $("#dvContainerTareWeight").show();
        $("#dvTruckTareWeight").show();
    }
    else {
        $("#ContainerDetails").show();
        $("#dvContainerTareWeight").show();
        $("#dvTruckTareWeight").hide();
    }

    var WeighmentModeNo = $("#WeighmentModeNo").val();
    if (Equipment == "Truck") {
        var TNo = $("#TruckNo").val();
        $("#ContainerTareWeight").prop("readonly", true);
        if (WeighmentModeNo == "SECOND") {
            debugger;
            if (Mode == "Gate Out" && SearchType == "Truck") {
                if (TNo != "" && TNo != null && TNo != undefined) {

                    $("#TruckTareWeight").prop("readonly", true);
                    $("#spanTrucktareWeight").text("*");
                    if (!TNo.includes("Cargo")) {
                        $("#ContainerTareWeight").prop("readonly", false);
                    }
                }
            }
            else {
                if (TNo != "" && TNo != null && TNo != undefined) {

                    //$("#TruckTareWeight").prop("readonly", true);
                    $("#spanTrucktareWeight").text("*");
                }
                else {
                    $("#TruckTareWeight").prop("readonly", false);
                    $("#spanTrucktareWeight").text("*");
                }
            }

        }
        else {

            if (Mode == "Gate Out" && SearchType == "Truck") {

                if (TNo != "" && TNo != null && TNo != undefined) {
                    $("#TruckTareWeight").prop("readonly", false);
                    $("#spanTrucktareWeight").text("*");
                }
                else {
                    $("#TruckTareWeight").prop("readonly", true);
                    $("#spanTrucktareWeight").text("");
                }
            }
            else {
                $("#TruckTareWeight").prop("readonly", true);
                $("#spanTrucktareWeight").text("");
            }

        }
    }
    if (SearchType == 'Container') {
        if ($("#ContainerTareWeight").val() > 0) {
            $("#ContainerTareWeight").prop("readonly", true);
        }
        else {
            $("#ContainerTareWeight").prop("readonly", false);
        }

    }
    $("#WeighmentScaleWeight").val("0");
    $("#DisplayLabelScaleWeight").val("0");
    DisableSearchBox();
    rdoMode();
});

// setTimeout(function () {
function rdoMode() {    
    $("input[name=Mode]").on('ifChanged', function (event) {
        Mode = $("input[name='Mode']:checked").val();

        $("#ContainerNo").val('');
        $("#TruckNo").val('');
        $("#trnWorkOrderID").val(0);
        $("#ContainerID").val(0);
        $("#TruckNo").removeAttr('disabled');
        $("#ContainerNo").removeAttr('disabled');

        Autocompletebox("TruckNo", "trnWorkOrderID", "trnWeighmentSlip", "GETTruckNo?mode=" + Mode);
        Autocompletebox("ContainerNo", "ContainerID", "trnWeighmentSlip", "GETContainerNo?mode=" + Mode, "GetTrucKNoByContNo");

    });
    var WeighmentModeNo = $("#WeighmentModeNo").val();
    $("input[name=Equipment]").on('ifChanged', function (event) {
        Equipment = $("input[name='Equipment']:checked").val();
        if (Equipment == "Truck") {
            $("#dvContainerDetails").hide();
            $("#dvContainerTareWeight").show();
            $("#dvTruckTareWeight").show();

            if (WeighmentModeNo == "SECOND") {

                if (Mode != "Gate Out" && SearchType != "Truck") {
                    $("#TruckTareWeight").val("0");
                }

            }
            else {
                $("#GrossWeight").val("0");
            }
        }
        else {
            $("#dvContainerDetails").show();
            $("#dvContainerTareWeight").show();
            $("#dvTruckTareWeight").hide();
            $("#TruckTareWeight").val("0");


        }
        $("#WeighmentScaleWeight").val("0");
        $("#DisplayLabelScaleWeight").val("0");
        CalculateWeight()
    });

    if (WeighmentModeNo == "SECOND") {

        if (Mode == "Gate Out") {

            $("input[name=Equipment]").iCheck('disable');

            //$("input[name=Equipment]").iCheck('disable');
        }        
        else {
            $("input[name=Equipment]").iCheck('disable');
        }

    }
    //if (WeighmentModeNo == "SECOND")
    //{

    //    if (Mode == "Gate Out") {
    //        if (SearchType == "Container")
    //        {
    //            if (doaction == "edit")
    //            {
    //                $("input[name=Equipment]").iCheck('disable');
    //            }
    //            else
    //            {
    //                $("input[id=rbContainer]").iCheck('enable');
    //            }
    //        }
    //        else
    //        {
    //            $("input[name=Equipment]").iCheck('disable');
    //        }
    //        //$("input[name=Equipment]").iCheck('disable');
    //    }
    //    else
    //    {
    //        $("input[name=Equipment]").iCheck('disable');
    //    }

    //}

    //}, 100);
}

function FuncationOnBlure() {

    var ID = $("#DriverID").val();
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnWeighmentSlip/GetDriverDetails/" + ID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#LicenceNo").val(data.split("|")[0]);
                    $("#MobileNo").val(data.split("|")[1]);
                    $("#Address").val(data.split("|")[2]);
                }
                else {
                    $("#LicenceNo").val("");
                    $("#MobileNo").val("");
                    $("#Address").val("");
                }
            }
        })
    }
}

function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}

$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

function Callbackautocomplete() {
    Autocompletebox("txtIMPORTERADDRESSNAME", "txtIMPORTERADDRESSID", "trnWeighmentSlip", "GetIMPORTERADDRESS/" + $("#txtIMPORTERID").val());
    FillVCNDetails();
}

function SearchwithID() {
    var SearchID = "";
    var SearchNo = "";
    var SearchType = "";
    var TruckID = $("#trnWorkOrderID").val();
    var TruckNo = $("#TruckNo").val();
    var ContainerID = $("#ContainerID").val();
    var ContainerNo = $("#ContainerNo").val();
    var Mode = $("input[name='Mode']:checked").val();

    if (Mode.toLowerCase() == "gate out") {
        if (TruckID != null && TruckID != undefined && TruckID != "" && TruckID != "0") {
            TType = TruckNo.split('-')[1];
        }
        else {
            TType = ContainerNo.split('-')[1];
        }

    }
    if (Mode.toLowerCase() == "gate out" && (TType.toLowerCase() == "exportsts")) {
        if ((TruckID != null && TruckID != undefined && TruckID != "" && TruckID != "0") && (ContainerID != null && ContainerID != undefined && ContainerID != "" && ContainerID != "0")) {

            SearchID = ContainerID;
            SearchNo = ContainerNo;
            SearchType = "Container";

            location.href = "?doaction=add&pg=1&IsSearch=" + true + "&SearchID=" + SearchID + "&SearchNo=" + SearchNo
                + "&SearchType=" + SearchType + "&Mode=" + Mode + "&TruckID=" + TruckID + "&TruckNo=" + TruckNo;
        }
        else {
            $("#ContainerNo").addClass("redborder");
            TosterAlert("error", "Please select Container No.", "Required!");
        }
    }
    else if ((TruckID != null && TruckID != undefined && TruckID != "" && TruckID != "0") && (TruckNo != "" && TruckNo != null && TruckNo != undefined) && (ContainerID != null && ContainerID != undefined && ContainerID != "" && ContainerID != "0")) {

        if (TType.toLowerCase() == "export" && (ContainerID != null && ContainerID != undefined && ContainerID != "" && ContainerID != "0")) {
            SearchID = ContainerID;
            SearchNo = ContainerNo;
            SearchType = "Container";

            location.href = "?doaction=add&pg=1&IsSearch=" + true + "&SearchID=" + SearchID + "&SearchNo=" + SearchNo
                + "&SearchType=" + SearchType + "&Mode=" + Mode + "&TruckID=" + TruckID + "&TruckNo=" + TruckNo;
        }
        else if (TType.toLowerCase() == "exportsts" && (ContainerID != null && ContainerID != undefined && ContainerID != "" && ContainerID != "0")) {
            SearchID = ContainerID;
            SearchNo = ContainerNo;
            SearchType = "Container";

            location.href = "?doaction=add&pg=1&IsSearch=" + true + "&SearchID=" + SearchID + "&SearchNo=" + SearchNo
                + "&SearchType=" + SearchType + "&Mode=" + Mode + "&TruckID=" + TruckID + "&TruckNo=" + TruckNo;
        }
    }
    else if (TruckID != null && TruckID != undefined && TruckID != "" && TruckID != "0") {
        SearchID = TruckID;
        SearchNo = TruckNo;
        SearchType = "Truck";

        location.href = "?doaction=add&pg=1&IsSearch=" + true + "&SearchID=" + SearchID + "&SearchNo=" + SearchNo + "&SearchType=" + SearchType + "&Mode=" + Mode;

    }
    else if (ContainerID != null && ContainerID != undefined && ContainerID != "" && ContainerID != "0") {
        SearchID = ContainerID;
        SearchNo = ContainerNo;
        SearchType = "Container";
        location.href = "?doaction=add&pg=1&IsSearch=" + true + "&SearchID=" + SearchID + "&SearchNo=" + SearchNo + "&SearchType=" + SearchType + "&Mode=" + Mode;
    }
    else {
        $("#TruckNo").addClass("redborder");
        $("#ContainerNo").addClass("redborder");
        TosterAlert("error", "Please select atleast one No.", "Required!");
    }
}

function checkvaluefortxtbox(ID) {
    var GrossWeight = parseFloat($("#GrossWeight_" + ID).val());
    if (GrossWeight == "") {
        GrossWeight = "0";
    }
    var TareWeight = parseFloat($("#TareWeight_" + ID).val());
    if (TareWeight == "") {
        TareWeight = "0";
    }

    if (GrossWeight < TareWeight) {
        $("#TareWeight_" + ID).val("0");
        TosterAlert("error", "Tare Weight is not greater than Gross Weight", "Required!");
    }
    setPayloadCapacity(ID);
}

function setPayloadCapacity(ID) {
    var GrossWeight = parseFloat($("#GrossWeight_" + ID).val());
    if (GrossWeight == "") {
        GrossWeight = "0";
    }
    var TareWeight = parseFloat($("#TareWeight_" + ID).val());
    if (TareWeight == "") {
        TareWeight = "0";
    }
    $("#PayloadCapacity_" + ID).text((GrossWeight - TareWeight).toFixed(2));
}

function GatePassValidation() {

    var isvalid = true;
    var MErrormsg = "";
    var counter = 0;

    $.ajax({
        url: GetRootPath + "trnWeighmentSlip/validateModel",
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
            else {

                var Grosscounter = 0;
                var Tarecounter = 0;
                var Errormsg = "";
                $("input[name=chkContNo]").each(function () {
                    if ($(this).is(":checked")) {
                        if (this.id != "" && this.id != null) {
                            var IDVal = $("#" + this.id).val();
                            var GrossWeight = $("#GrossWeight_" + IDVal).val();
                            var TareWeight = $("#TareWeight_" + IDVal).val();

                            if (GrossWeight == null || GrossWeight == "" || GrossWeight == undefined || GrossWeight == "0") {
                                isvalid = false;
                                $("#GrossWeight_" + IDVal).addClass("redborder");
                                if (Grosscounter == 0) {
                                    Errormsg += "Please Enter Gross Weight <br />";
                                }
                                Grosscounter++;
                            }
                            else {
                                $("#GrossWeight_" + IDVal).removeClass("redborder");
                            }

                            if (TareWeight == null || TareWeight == "" || TareWeight == undefined || TareWeight == "0") {
                                isvalid = false;
                                $("#TareWeight_" + IDVal).addClass("redborder");
                                if (Tarecounter == 0) {
                                    Errormsg += "Please Enter Tare Weight <br />";
                                }
                                Tarecounter++;
                            }
                            else {
                                $("#TareWeight_" + IDVal).removeClass("redborder");
                            }
                        }
                        counter++;
                    }
                });

                //if (counter == 0) {
                //    Errormsg += "Please Check atleast One Container <br />";
                //    isvalid = false;
                //}

                MErrormsg += Errormsg;
            }
        }
    });

    if (!isvalid) {
        TosterAlert("error", MErrormsg, "Required!");
    }
    return isvalid;
}

function CalculateWeight() {
    var Mode = $("input[name='Mode']:checked").val();
    var TType = $("#TType").val();
    var TNo = $("#TruckNo").val();
    var WeighmentScaleWeight = $("#DisplayLabelScaleWeight").val();
    var GrossWeight = $("#GrossWeight").val();
    var TruckTareWeight = $("#TruckTareWeight").val();
    var ContainerTareWeight = $("#ContainerTareWeight").val();
    var NetWeight = $("#NetWeight").val();
    var WeighmentModeNo = $("#WeighmentModeNo").val();
    if (WeighmentScaleWeight == "" && WeighmentScaleWeight == null && WeighmentScaleWeight == undefined) {
        WeighmentScaleWeight = 0;
    }
    if (GrossWeight == "" && GrossWeight == null && GrossWeight == undefined) {
        GrossWeight = 0;
    }
    if (TruckTareWeight == "" && TruckTareWeight == null && TruckTareWeight == undefined) {
        TruckTareWeight = 0;
    }
    if (ContainerTareWeight == "" && ContainerTareWeight == null && ContainerTareWeight == undefined) {
        ContainerTareWeight = 0;
    }
    if (NetWeight == "" && NetWeight == null && NetWeight == undefined) {
        NetWeight = 0;
    }

    if (WeighmentModeNo == "SECOND") {

        if (Mode == "Gate Out") {
            if (TType.toLowerCase() == "export" || TType.toLowerCase() == "exportsts" || TType.toLowerCase() == "cargo") {
                $("#GrossWeight").val(parseFloat(WeighmentScaleWeight).toFixed(2));
                GrossWeight = parseFloat(WeighmentScaleWeight).toFixed(2);
            }

        }
        else {
            $("#TruckTareWeight").val(parseFloat(WeighmentScaleWeight).toFixed(2));
            TruckTareWeight = (parseFloat(WeighmentScaleWeight).toFixed(2));
        }
    }
    else {
        if (Mode == "Gate Out" && SearchType == "Truck" && TType.toLowerCase() == "export") {
            if (TNo != "" && TNo != null && TNo != undefined) {

                $("#TruckTareWeight").val(parseFloat(WeighmentScaleWeight).toFixed(2));
                TruckTareWeight = (parseFloat(WeighmentScaleWeight).toFixed(2));
            }
        }
        if (Mode == "Gate Out" && TType.toUpperCase() == "EXPORTSTS") {
            TruckTareWeight = (parseFloat(WeighmentScaleWeight).toFixed(2)) - (parseFloat(ContainerTareWeight).toFixed(2));
            $("#TruckTareWeight").val(TruckTareWeight);
        }

        $("#GrossWeight").val(parseFloat(WeighmentScaleWeight).toFixed(2));
        GrossWeight = parseFloat(WeighmentScaleWeight).toFixed(2);
    }
    $("#WeighmentScaleWeight").val(parseFloat(WeighmentScaleWeight).toFixed(2));

    NetWeight = (parseFloat(GrossWeight) - parseFloat(TruckTareWeight) - parseFloat(ContainerTareWeight)).toFixed(2);
    $("#NetWeight").val(NetWeight);
    $("#spnNetWeight").text(NetWeight);

}

function ClearSearch() {
    location.href = "?doaction=add";
}

function DisableSearchBox() {
    var TruckID = $("#trnWorkOrderID").val();
    var TruckNo = $("#TruckNo").val();
    var ContainerID = $("#ContainerID").val();
    var ContainerNo = $("#ContainerNo").val();
    var TNO = $("#TruckNo").val();
    var TType = "";
    var TruckNo = "";
    if (Mode == "Gate Out") {
        TType = TNO.split('-')[1];
        TruckNo = TNO.split('-')[0];
    }
    if (TruckID != "" && TruckID != null && TruckID != undefined && TruckID != "0") {
        GetWeighmentStatus();
        if (TType.toLowerCase() == "export" && Mode.toLowerCase() == "gate out") {            
            $("#ContainerNo").attr('disabled', false);
        }
        else if (TType.toUpperCase() == "EXPORTSTS" && Mode.toLowerCase() == "gate out") {

            $("#ContainerNo").attr('disabled', false);
        }
        else {
            $("#ContainerNo").attr('disabled', true);
        }
    }
    else {
        $("#ContainerNo").removeAttr('disabled');
    }
    if (ContainerID != "" && ContainerID != null && ContainerID != undefined && ContainerID != "0") {
        if (TNO != "" && TNO != undefined && TNO != null) {
            if (TType.toLowerCase() == "export" && Mode.toLowerCase() == "gate out") {

                $("#TruckNo").attr('disabled', false);
            }
        }
        else {
            $("#TruckNo").attr('disabled', true);
        }
    }
    else {
        $("#TruckNo").removeAttr('disabled');
    }

    if (($("#WeighmentStatus").val() == "SECOND") && (isready != true) && (TruckID != "" && TruckID != null && TruckID != undefined && TruckID != "0") && (TType.toLowerCase() == "export" && Mode.toLowerCase() == "gate out")) {
        SearchwithIDforExport();
    }
}
function GetWeighmentStatus() {    
    var Mode = $("input[name='Mode']:checked").val();
    var truckNo = "";
    truckNo = $("#TruckNo").val();
    var TType = "";
    if (Mode == "Gate Out") {
        TType = truckNo.split('-')[1];
    }
    var trnWorkOrderID = "0";
    trnWorkOrderID = $("#trnWorkOrderID").val();
    if (Mode == "Gate Out" && TType.toUpperCase() == "EXPORT") {
        if (truckNo != "" && trnWorkOrderID == "0") {
            Autocompletebox("ContainerNo", "ContainerID", "trnWeighmentSlip", "GETContainerNo?mode=" + Mode + "&truckID=" + trnWorkOrderID + "&t1=" + truckNo, "GetTrucKNoByContNo");
        }
        if (truckNo != "" && trnWorkOrderID > "0") {


            $.ajax({
                url: GetRootPath + "trnWeighmentSlip/GetWeighmentStatus/" + trnWorkOrderID + "?TType=" + TType,
                type: "GET",
                dataType: "text",
                success: function (data) {
                    debugger;
                    if (data != "" && data != null) {                        
                        $("#WeighmentStatus").val(data);
                        if (data == "SECOND") {                            
                            $("#ContainerNo").attr('disabled', false);
                            Autocompletebox("ContainerNo", "ContainerID", "trnWeighmentSlip", "GETContainerNo?mode=" + Mode + "&truckID=" + trnWorkOrderID + "&t1=" + truckNo, "GetTrucKNoByContNo");
                        }
                        else {
                            $("#ContainerNo").attr('disabled', true);

                        }
                    }
                    else {
                    }
                }
            });
        }
    }
    else if (Mode == "Gate Out" && TType.toUpperCase() == "EXPORTSTS") {
        Autocompletebox("ContainerNo", "ContainerID", "trnWeighmentSlip", "GETContainerNo?mode=" + Mode + "&truckID=" + trnWorkOrderID + "&t1=" + truckNo, "GetTrucKNoByContNo");
    }
}
function SearchwithIDforExport() {

    var SearchID = "";
    var SearchNo = "";
    var SearchType = "";
    var TType = "";
    var TruckID = $("#trnWorkOrderID").val();
    var TruckNo = $("#TruckNo").val();
    var ContainerID = $("#ContainerID").val();
    var ContainerNo = $("#ContainerNo").val();
    var Mode = $("input[name='Mode']:checked").val();
    if (Mode.toLowerCase() == "gate out") {
        TType = TruckNo.split('-')[1];
    }
    if ((TruckID != null && TruckID != undefined && TruckID != "" && TruckID != "0") && (TruckNo != "" && TruckNo != null && TruckNo != undefined) && (ContainerID != null && ContainerID != undefined && ContainerID != "" && ContainerID != "0")) {

        if (TType.toLowerCase() == "export" && (ContainerID != null && ContainerID != undefined && ContainerID != "" && ContainerID != "0")) {
            SearchID = ContainerID;
            SearchNo = ContainerNo;
            SearchType = "Container";

            location.href = "?doaction=add&pg=1&IsSearch=" + true + "&SearchID=" + SearchID + "&SearchNo=" + SearchNo
                + "&SearchType=" + SearchType + "&Mode=" + Mode + "&TruckID=" + TruckID + "&TruckNo=" + TruckNo;
        }
    }
    else if (TruckID != null && TruckID != undefined && TruckID != "" && TruckID != "0") {
        SearchID = TruckID;
        SearchNo = TruckNo;
        SearchType = "Truck";

        location.href = "?doaction=add&pg=1&IsSearch=" + true + "&SearchID=" + SearchID + "&SearchNo=" + SearchNo + "&SearchType=" + SearchType + "&Mode=" + Mode;

    }
    else if (ContainerID != null && ContainerID != undefined && ContainerID != "" && ContainerID != "0") {
        SearchID = ContainerID;
        SearchNo = ContainerNo;
        SearchType = "Container";
        location.href = "?doaction=add&pg=1&IsSearch=" + true + "&SearchID=" + SearchID + "&SearchNo=" + SearchNo + "&SearchType=" + SearchType + "&Mode=" + Mode;
    }
    else {

    }
}
function Validation() {

    var isvalid = true;
    var MErrormsg = "";
    var counter = 0;

    $.ajax({
        url: GetRootPath + "trnWeighmentSlip/validateModel",
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

function GetTrucKNoByContNo() {
    var ID = $("#ContainerID").val();
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnWeighmentSlip/GetTrucKNoByContNo/" + ID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#TruckNo").val(data);
                }
                else {
                    if (Mode.toLowerCase() != "gate out" && $("#TruckNo").val().split('-')[1] != "EXPORT") {
                        $("#TruckNo").val("");
                    }
                }
            }
        })
    }
    else {
        if (Mode.toLowerCase() != "gate out" && $("#TruckNo").val().split('-')[1].toLowerCase() != "EXPORT") {
            $("#TruckNo").val("");
        }

    }
}

document.addEventListener('keydown', function (event) {
    // Check if the pressed key is Enter
    if (event.key === 'Enter') {
        // Prevent the default action to avoid form submission
        event.preventDefault();

        // Get the currently focused element
        const focusedElement = document.activeElement;

        // Check which div contains the focused element
        if (focusedElement.closest('#divHeaderDetails')) {
            // Find the submit button in HeaderDetails and trigger a click
            const btn = focusedElement.id;
            if (btn.includes('btnHeaderClear')) {
                const btnHeaderClear = document.getElementById(btn);
                if (btnHeaderClear) {
                    btnHeaderClear.click()
                }
            }
            else {
                const btnHeaderSearch = document.getElementById('btnHeaderSearch');
                if (btnHeaderSearch) {
                    btnHeaderSearch.click();
                }
            }
        }
        else if (focusedElement.closest('#divDetails')) {
            // Find the submit button in LotDetails and trigger a click
            const btn = focusedElement.id;
            if (btn.includes('btnClearDetails')) {
                const btnClearDetails = document.getElementById(btn);
                if (btnClearDetails) {
                    btnClearDetails.click();
                }
            }
            else {
                const btnSaveDetails = document.getElementById('btnSaveDetails');
                if (btnSaveDetails) {
                    btnSaveDetails.click();
                }
            }
        }        
        else if (focusedElement.closest('#divSearch')) {
            const btn = focusedElement.id;
            if (btn.includes("btnAdd")) {

                const btnAdd = document.getElementById("btnAdd");
                if (btnAdd) {
                    btnAdd.click();
                }
            }
            else {
                const btnSearch = document.getElementById(btn);
                if (btnSearch) {
                    btnSearch.click();
                }
            }
        }
        else if (focusedElement.closest('#divBack')) {
            const btn = focusedElement.id;
            if (btn.includes('btnPrint')) {
                const btnPrint = document.getElementById(btn);
                if (btnPrint) {
                    btnPrint.click();
                }
            }
            else {
                const btnBack = document.getElementById("btnBack");
                if (btnBack) {
                    btnBack.click();
                }
            }
        }
    }
});