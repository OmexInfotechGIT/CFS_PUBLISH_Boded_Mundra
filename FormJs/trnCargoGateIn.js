$(document).ready(function () {
    Autocompletebox("WorkOrderNo", "WorkOrdersearchID", "trnCargoGateIn", "GETWorkOrderNo");
    Autocompletebox("Driver", "DriverID", "trnCargoGateIn", "GETDriver/" + $("#TransporterID").val(), "FuncationOnBlurForDriverDetails");
    Autocompletebox("LicenceNo", "LicenceNoID", "trnCargoGateIn", "GETLicenseNo/" + $("#TransporterID").val(), "FuncationOnBlurForLicenseDetails");
    Autocompletebox("FromLocation", "FromLocationID", "trnCargoGateIn", "GetLocationfrom");
    Autocompletebox("ISOCode", "ISOCodeID", "trnCargoGateIn", "GetISOCODE", "Callbackautocomplete2");
    DisplayInactiveReason('IsActive', 'dvInActiveReason');

    $(".showonlyinedit").hide();
    if (IsSearch == "true") {
        $("#WorkOrderNo").prop("readonly", true);
    }

    var DomesticContainerStatus = "";
    if (IsView == "True" || IsView == "true") {
        DomesticContainerStatus = $("#DomesticContainerStatus").text();
        if (DomesticContainerStatus == "Yes" || DomesticContainerStatus == "yes") {
            DomesticContainerStatus = true;
        }
        else
        {
            DomesticContainerStatus = false;
        }
    }
    else
    {
        DomesticContainerStatus = $("input[name='DomesticContainerStatus']:checked").val();
    }
     
    if (DomesticContainerStatus == true || DomesticContainerStatus == "true") {
        $("#dvDomesticContainer").show();
        $("#dvSaveButton").hide();
    }
    else {
        $("#dvDomesticContainer").hide();
        $("#dvSaveButton").show();
    }
    FillContainerDetailsGrid();
    CheckDomesticContainerStatus();
});

//setTimeout(function () {
function CheckDomesticContainerStatus() {
    $("input[name=DomesticContainerStatus]").on('ifChanged', function (event) {

        // var DomesticContainerStatus = $("input[name='DomesticContainerStatus']:checked").val();
        var DomesticContainerStatus = $("input[name='DomesticContainerStatus']").is(":checked");
        if (DomesticContainerStatus == true || DomesticContainerStatus == "true") {
            $("#dvDomesticContainer").show();
            $("#dvSaveButton").hide();
        }
        else {
            $("#dvDomesticContainer").hide();
            $("#dvSaveButton").show();
        }
    });
    //}, 1000);
}

function FuncationOnBlurForDriverDetails() {

    var ID = $("#DriverID").val();
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnCargoGateIn/GetDriverDetails/" + ID,
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

function FuncationOnBlurForLicenseDetails() {
    var TransporterID = $("#TransporterID").val();
    var ID = $("#LicenceNo").val();
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnCargoGateIn/GetLicenseDetails/" + ID + "?TransporterID=" + TransporterID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#Driver").val(data.split("|")[0]);
                    $("#DriverID").val(data.split("|")[3]);
                    $("#MobileNo").val(data.split("|")[1]);
                    $("#Address").val(data.split("|")[2]);
                }
                else {
                    $("#Driver").val("");
                    $("#DriverID").val("0");
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
    Autocompletebox("txtIMPORTERADDRESSNAME", "txtIMPORTERADDRESSID", "trnCargoGateIn", "GetIMPORTERADDRESS/" + $("#txtIMPORTERID").val());
    FillVCNDetails();
}

function SearchwithWorkOrderNo() {
    debugger;
    var WorkOrdersearchID = $("#WorkOrdersearchID").val();
    if (WorkOrdersearchID != null && WorkOrdersearchID != undefined && WorkOrdersearchID != "" && WorkOrdersearchID != "0") {
        var WOID = WorkOrdersearchID.split('_')[0];
        $.ajax({
            url: GetRootPath + "trnCargoGateIn/IsCheckOOCNoEnter/" + WOID ,
            type: "GET",
            dataType: "text",
            success: function (data) {                
                if (data != "" && data != null && parseInt(data) > 0) {                    
                    location.href = "?doaction=add&pg=1&IsSearch=" + true + "&WorkOrdersearchID=" + WorkOrdersearchID + "&WorkOrderNo=" + $("#WorkOrderNo").val();            
                }
                else {
                    TosterAlert("error", "Please first enter OOC No and OOC Date in Document Entry ", "Required!");
                }
            }
        });

        
    }
    else {
        $("#WorkOrderNo").addClass("redborder");
        TosterAlert("error", "Please select Vehicle info", "Required!");
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

function CargoGateInValidation(IsFinished) {

    var isvalid = true;
    var MErrormsg = "";
    var counter = 0;
    
    $("#IsFinished").val(IsFinished);
    
    $.ajax({
        url: GetRootPath + "trnCargoGateIn/validateModel",
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

               
                MErrormsg += Errormsg;
            }
        }
    });

    if (!isvalid) {
        TosterAlert("error", MErrormsg, "Required!");
    }
    return isvalid;
}

function AddContainerdetails() {
    $.ajax({
        url: GetRootPath + "trnCargoGateIn/validateSubModel",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "") {
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
            else {
                $(".redborder").removeClass("redborder");

                $.ajax({
                    url: GetRootPath + "trnCargoGateIn/AddContainerdetails",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        var ErrField = data.split("|")[3];
                        if (ErrField != "" && ErrField != null && ErrField != undefined)
                        {
                            $("#" + ErrField).addClass("redborder");
                            $("#" + ErrField).val("");
                        }
                        if (msgType == "Success" || msgType == "success") {
                            ClearContainerDetails();
                            FillContainerDetailsGrid();
                        }
                        else
                        {
                            TosterAlert(msgType, msg, msgTitle);
                        }
                    }
                });
            }
        }
    });
}

function FillContainerDetailsGrid() {
    $("#ContainerDetails").html("");

    $.ajax({
        url: GetRootPath + "trnCargoGateIn/FillContainerdetailsGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                
                $("#ContainerDetails").html(data);
                ClearContainerDetails();
                var SizeOfFirstContainer = $("#SizeOfFirstContainer").text();
                 
                if (SizeOfFirstContainer >= "40") {
                    $("#dvAddContainerDetails").hide();
                }
                else {
                    $("#dvAddContainerDetails").show();
                }
                
            }
            
        }
    });
}

function ClearContainerDetails() {
    $("#ContainerNumber").val('');
    $("#ISOCode").val('');
    $("#ISOCodeID").val('');
    $("#ISOCodeSizes").text('');
    $("#ISOCodeTypes").text('');
    $("#ISOCodeSize").text('');
    $("#ISOCodeType").text('');
    $("#GrossWeight").val('0');
    $("#TareWeight").val('0');
    $("#PayloadCapacity").val('0');
    $("#PhysicalSeal").val('');
    $("#DeclaredSeal").val('');
    $("#trnCargoGateInContainerDetailsID").val('0');
}

function EditContainerdetails(ID) {
    $("#dvAddContainerDetails").show();
    $("#ContainerNumber").val($("#ContainerNumber_" + ID).text());
    $("#ISOCode").val($("#ISOCode_" + ID).text());
    $("#ISOCodeID").val($("#ISOCodeID_" + ID).text());
    $("#ISOCodeSizes").text($("#Size_" + ID).text());
    $("#ISOCodeSize").val($("#Size_" + ID).text());
    $("#ISOCodeTypes").text($("#ContType_" + ID).text());
    $("#ISOCodeType").val($("#ContType_" + ID).text());
    $("#GrossWeight").val($("#GrossWeight_" + ID).text());
    $("#TareWeight").val($("#TareWeight_" + ID).text());
    $("#PayloadCapacity").val($("#PayloadCapacity_" + ID).text());
    $("#PhysicalSeal").val($("#PhysicalSeal_" + ID).text());
    $("#DeclaredSeal").val($("#DeclaredSeal_" + ID).text());
    $("#trnCargoGateInContainerDetailsID").val(ID);
    //$("#btnClear").css("display", "none");
}

function Callbackautocomplete2() {

    if ($("#ISOCodeID").val() != "" && $("#ISOCodeID").val() != undefined && $("#ISOCodeID").val() != null) {
        $.ajax({
            url: GetRootPath + "trnCargoGateIn/GetISOCodeSizeAndType/" + $("#ISOCodeID").val(),
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    var SizeOfFirstContainer = $("#SizeOfFirstContainer").text();
                    if (SizeOfFirstContainer == null || SizeOfFirstContainer == undefined || SizeOfFirstContainer == "") {
                        SizeOfFirstContainer = 0;
                    }
                    
                    $("#ISOCodeSize").val(data.split("|")[1]);
                    $("#ISOCodeType").val(data.split("|")[0]);
                    $("#ISOCodeSizes").text(data.split("|")[1]);
                    $("#ISOCodeTypes").text(data.split("|")[0]);
                    
                }
                else {
                    $("#ISOCodeSize").val("");
                    $("#ISOCodeType").val("");
                    $("#ISOCodeSizes").text("");
                    $("#ISOCodeTypes").text("");
                }
            }
        })
    }
    else {
        $("#ISOCodeSize").val("");
        $("#ISOCodeType").val("");
        $("#ISOCodeSizes").text("");
        $("#ISOCodeTypes").text("");
    }
}

function onblureweight() {

    var GrossWeight = $("#GrossWeight").val();
    var TareWeight = $("#TareWeight").val();

    if (GrossWeight == "" || GrossWeight == undefined || GrossWeight == null) {
        GrossWeight = "0";
    }

    if (TareWeight == "" || TareWeight == undefined || TareWeight == null) {
        TareWeight = "0";
    }

    

    if (parseFloat(GrossWeight) < parseFloat(TareWeight)) {
        $("#TareWeight").val("0");
        TosterAlert("error", "Tare Weight Can not greater than Gross Weight", "Required!");
    }
    $("#PayloadCapacity").val(parseFloat($("#GrossWeight").val()) - parseFloat($("#TareWeight").val()));
}

function DeleteContainerdetails(ID) {
    $.ajax({
        url: GetRootPath + "trnCargoGateIn/deleteContainerdetails/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FillContainerDetailsGrid();
            var msgType = data.split("|")[0];
            var msg = data.split("|")[1];
            var msgTitle = data.split("|")[2];
            TosterAlert(msgType, msg, msgTitle);
        }
    });
}

btnPrevent();
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
        if (focusedElement.closest('#dvAddContainerDetails')) {
            const btn = focusedElement.id;
            if (btn.includes('btnContClear')) {
                const btnContClear = document.getElementById(btn);
                if (btnContClear) {
                    btnContClear.click();
                }
            }
            else {
                const btnAddCont = document.getElementById('btnAddCont');
                if (btnAddCont) {
                    btnAddCont.click();
                }
            }
        }
        else if (focusedElement.closest('#divFinalSave')) {
            const btn = focusedElement.id;
            if (btn.includes('btnFinalClear')) {
                const btnFinalClear = document.getElementById(btn);
                if (btnFinalClear) {
                    btnFinalClear.click();
                }
            }
            else {
                const btnFinalSave = document.getElementById('btnFinalSave');
                if (btnFinalSave) {
                    btnFinalSave.click();
                }
            }
        }
        else if (focusedElement.closest('#divDetails')) {
            // Find the submit button in LotDetails and trigger a click
            const btn = focusedElement.id;
            if (btn.includes('btnDetailsClear')) {
                const btnDetailsClear = document.getElementById(btn);
                if (btnDetailsClear) {
                    btnDetailsClear.click();
                }
            }
            else {
                const SaveDoc = document.getElementById('SaveDoc');
                if (SaveDoc) {
                    SaveDoc.click();
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
            else if (btn.includes('btnEdit')) {
                const btnEdit = document.getElementById(btn);
                if (btnEdit) {
                    btnEdit.click();
                }
            }
            else if (btn.includes('btnHistory')) {
                const btnHistory = document.getElementById(btn);
                if (btnHistory) {
                    btnHistory.click();
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