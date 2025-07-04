$(document).ready(function () {
    
    Autocompletebox("TruckNo", "WorkOrderID", "trnEmptyTruckOutWO", "GETTRUCKNO");
    //Autocompletebox("Driver", "DriverID", "trnEmptyTruckOutWO", "GETDriver/" + $("#TransporterID").val(), "FuncationOnBlure");
    //It's get all details from the LicenseNo
    Autocompletebox("Driver", "DriverID", "trnEmptyTruckOutWOGW", "GETDriver/" + $("#TransporterID").val());
    Autocompletebox("ContNo", "ContID", "trnEmptyTruckOutWO", "GetContainer/" + $("#trnEmptyTruckOutWOID").val() + "?trnEmptyTruckOutWOContainerID=" + $("#trnEmptyTruckOutWOContainerID").val(),"GetContainerDetails");

    $(".showonlyinedit").hide();
    filldatatable();

    $("#Containerplacedontruck").on('ifChanged', function (event) {
        if (doaction == "edit")
        { 
            if (event.target.checked == false) {
                $("#dvWeighmentDetails").hide();
                $("#dvSave").hide();
                $("#dvSave1").show();
            }
            else
            {
                $("#dvWeighmentDetails").show();
                $("#dvSave").show();
                $("#dvSave1").hide();
                Autocompletebox("ContNo", "ContID", "trnEmptyTruckOutWO", "GetContainer/" + $("#trnEmptyTruckOutWOID").val() + "?trnEmptyTruckOutWOContainerID=" + $("#trnEmptyTruckOutWOContainerID").val(), "GetContainerDetails");
            }
        }
    });
    if ($("#TransportationType").val() == "OWN") {
       
        //$("#Driver").autocomplete({
        //    disabled: false,
        //    change: function (event, ui) {
        //        if ($("#TransportationType").val() == "OWN") {
        //            if (!ui.item) {
        //                this.value = '';
        //            }
        //        }
        //    }
        //});
        //$("#LicenceNo").autocomplete({
        //    disabled: false,
        //    change: function (event, ui) {
        //        if ($("#TransportationType").val() == "OWN") {
        //            if (!ui.item) {
        //                this.value = '';
        //            }
        //        }
        //    }
        //});
         
        
        $("#MobileNo").attr("readonly", true);
        $("#Address").attr("readonly", true); 
        $("#Driver").attr("readonly", true);
        Autocompletebox("LicenceNo", "LicenceNoID", "trnEmptyTruckGateIn", "GETLicenseNo/" + $("#TransporterID").val(), "FuncationOnBlurForLicenseDetails");
    }
    else {
       
        $("#Driver").autocomplete({
            disabled: true,
            change: function (event, ui) {
                if ($("#TransportationType").val() == "OWN") {
                    if (!ui.item) {
                        this.value = '';
                    }
                }
            }
        });
        $("#LicenceNo").autocomplete({
            disabled: true,
            change: function (event, ui) {
                if ($("#TransportationType").val() == "OWN") {
                    if (!ui.item) {
                        this.value = '';
                    }
                }
            }
        });
        
         
        $("#MobileNo").attr("readonly", false);
        $("#Address").attr("readonly", false);
    }
});

function FuncationOnBlure() {

    var ID = $("#DriverID").val();
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnEmptyTruckOutWO/GetDriverDetails/" + ID,
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

    var ID = $("#LicenceNo").val();
    var TransporterID = $("#TransporterID").val();    
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnEmptyTruckGateIn/GetLicenseDetails/" + ID + "?TransporterID=" + TransporterID,
            type: "GET",
            dataType: "text",
            success: function (data) {                
                if (data != "" && data != null) {
                   
                    $("#MobileNo").attr("readonly", true);
                    $("#Address").attr("readonly", true);

                    $("#Driver").val(data.split("|")[0]);
                    $("#DriverID").val(data.split("|")[3]);
                    $("#MobileNo").val(data.split("|")[1]);
                    $("#Address").val(data.split("|")[2]);
                }
                else {                    
                    //$("#MobileNo").attr("readonly", false);
                    //$("#Address").attr("readonly", false);

                    $("#Driver").val("");
                    $("#DriverID").val("0");
                    $("#MobileNo").val("");
                    $("#Address").val("");
                }
            }
        });
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
    Autocompletebox("txtIMPORTERADDRESSNAME", "txtIMPORTERADDRESSID", "trnEmptyTruckOutWO", "GetIMPORTERADDRESS/" + $("#txtIMPORTERID").val());
    FillVCNDetails();
}

function SearchwithTruckNo() {
    var WorkOrderID = $("#WorkOrderID").val();
    if (WorkOrderID != null && WorkOrderID != undefined && WorkOrderID != "" && WorkOrderID != "0") {
        location.href = "?doaction=add&pg=1&IsSearch=" + true + "&WorkOrderID=" + WorkOrderID + "&TruckNo=" + $("#TruckNo").val();
    }
    else {
        $("#TruckNo").addClass("redborder");
        TosterAlert("error", "Please select Truck No", "Required!");
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
        url: GetRootPath + "trnEmptyTruckOutWO/validateModel",
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

function ClearEmptyTruckOutContainerDetails()
{
    $("#ContNo").val('');
    $("#ContID").val('0');
    $("#Size").val('');
    $("#spn_Size").text('');
    $("#Type").val('');
    $("#spn_Type").text('');
    $("#CargoType").val('');
    $("#spn_CargoType").text('');
    $("#RemarksForContainer").val('');
    $("#trnEmptyTruckOutWOContainerID").val('0');
    Autocompletebox("ContNo", "ContID", "trnEmptyTruckOutWO", "GetContainer/" + $("#trnEmptyTruckOutWOID").val() + "?trnEmptyTruckOutWOContainerID=" + $("#trnEmptyTruckOutWOContainerID").val(), "GetContainerDetails");
}

function GetContainerDetails()
{
    if ($("#ContID").val() != "" && $("#ContID").val() != undefined && $("#ContID").val() != null) {
        debugger;
        $.ajax({
            url: GetRootPath + "trnEmptyTruckOutWO/GetContainerDetails/?ContainerNumber=" + $("#ContNo").val() + "&ContID=" + $("#ContID").val(),
            type: "GET",
            dataType: "text",
            success: function (data) {
                debugger;
                if (data != "" && data != null) {
                    $("#Size").val(data.split("|")[0]);
                    $("#Type").val(data.split("|")[1]);
                    $("#CargoType").val(data.split("|")[2]);
                    $("#spn_Size").text(data.split("|")[0]);
                    $("#spn_Type").text(data.split("|")[1]);
                    $("#spn_CargoType").text(data.split("|")[2]);
                }
                else {
                    debugger;
                    $("#Size").val("");
                    $("#Type").val("");
                    $("#CargoType").val("");
                    $("#spn_Size").text("");
                    $("#spn_Type").text("");
                    $("#spn_CargoType").text("");
                }
            }
        })
    }
    else {
        debugger;
        $("#Size").val("");
        $("#Type").val("");
        $("#CargoType").val("");
        $("#spn_Size").text("");
        $("#spn_Type").text("");
        $("#spn_CargoType").text("");        
    }
}

function filldatatable() {
    $("#tblContainerDetails").html('');
    $.ajax({
        url: GetRootPath + "trnEmptyTruckOutWO/FillGrid/",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            if (data != "") {
                $("#tblContainerDetails").html(data);
                ClearEmptyTruckOutContainerDetails();
            }
            else {
                
            }
        }
    });
}

function validateContainerModel() {
    var isvalid = true;
    $.ajax({
        url: GetRootPath + "trnEmptyTruckOutWO/validateContainerModel",
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

    if (isvalid) {
        $.ajax({
            url: GetRootPath + "trnEmptyTruckOutWO/AddContainerDetails",
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                filldatatable();
                TosterAlert("success", " Record added Successfully! ", "success!");
            }
        });
    }
    if (isvalid) {
        $("#Isfinished").val(true);
    }
    return isvalid;
}

function EditContainerDetails(ID) {

    $("#trnEmptyTruckOutWOContainerID").val($("#trnEmptyTruckOutWOContainerID_" + ID).text());
    $("#trnEmptyTruckOutWOID").val($("#trnEmptyTruckOutWOID_" + ID).text());

    $("#ContNo").val($("#ContNo_" + ID).text());
    $("#ContID").val($("#ContIDWithCargoOrContainer_" + ID).text());

    $("#Size").val($("#Size_" + ID).text());
    $("#spn_Size").text($("#Size_" + ID).text());

    $("#Type").val($("#Type_" + ID).text());
    $("#spn_Type").text($("#Type_" + ID).text());

    $("#CargoType").val($("#CargoType_" + ID).text());
    $("#spn_CargoType").text($("#CargoType_" + ID).text());

    $("#RemarksForContainer").val($("#Remarks_" + ID).text());
    Autocompletebox("ContNo", "ContID", "trnEmptyTruckOutWO", "GetContainer/" + $("#trnEmptyTruckOutWOID").val() + "?trnEmptyTruckOutWOContainerID=" + $("#trnEmptyTruckOutWOContainerID").val(), "GetContainerDetails");
}

function deleteContainerDetails(ID) {
    if (ID != "" && ID != "0" && ID != null) {
        $.ajax({
            url: GetRootPath + "trnEmptyTruckOutWO/deleteContainerDetails/" + ID,
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                filldatatable();
                TosterAlert('success', ' Empty Truck Out Container Details Deleted Successfully! ', 'success!');
            }
        });
    }
}