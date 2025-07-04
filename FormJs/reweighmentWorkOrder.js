$(document).ready(function () {
    //Initial time set Values and Elements 
    FNInitElements();
    var doaction = $("#doaction").val();
    if (doaction == "view") {
        SetViewsElement();
    }else if (doaction == "edit") {
        SetEditsElement();
    }

    $("#WHVType").change(function () {
        var status = this.value;
        if (status != "OTHVH") {
            Autocompletebox("WHContNO", "trnDocumentGWContID", "reweighmentWorkOrder", "GetWHContainerNo/", "GetWHContainerDetails");
            Autocompletebox("WHTruckNO", "TruckID", "reweighmentWorkOrder", "GetWHTruckNo/", "GetWHTruckDetails");
        }

    });
});

function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}

$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

// Load Time Set Values and Elements
function FNInitElements() {
    $("#WHVCategory").children("option[value^=WRH]").hide();
    $("#WHVCategory").children("option[value^=EXT]").hide();
    $("#WHVCategory").children("option[value^=EMT]").hide();

    $("#WHVCategory").prop("disabled", true);
    $("#WHInvoiceMode").prop("disabled", true);
    $("#MANUALSSRNO").prop("disabled", true);

    $('#WHCASHInvoiceNO').attr('readonly', true);
    $('#WHCASHInvoiceDate').attr('readonly', true);
    $('#WHSlipNO').attr('readonly', true);
    $('#WHSlipDate').attr('readonly', true);

    //Container Block Fields Read only
    $("#WHContNO").prop("disabled", true);
    $('#WHCNSize').attr('readonly', true);
    $('#WHCNType').attr('readonly', true);
    $('#WHCARGOType').attr('readonly', true);
    $('#WHCONTArrivalDate').attr('readonly', true);
    $("#WHCONTMode").prop("disabled", true);

    //Truck/Cargo Fields Read only
    $('#WHTruckArrivalDate').attr('readonly', true);
}

// This is For Vehicle Type Change Event,(Element Id : WHVType)
function MEWHVType() {
    var WHVType = $("#WHVType").val();
    $("#WHVCategory").prop("disabled", false);
    $("#WHInvoiceMode").prop("disabled", false);
    $("#MANUALSSRNO").prop("disabled", false);

    if (WHVType == "CNT") { // CNT Means Container
        $("#WHVCategory").val("0");
        $("#dvTruckDetails").hide();
        $("#dvContaineDetails").show();
        $("#dvInvoiceDetails").show();

        // Category Option Show and Hide
        $("#WHVCategory").children("option[value^=WRH]").show();
        $("#WHVCategory").children("option[value^=EXT]").show();
        $("#WHVCategory").children("option[value^=EMT]").show();

        //Truck/Cargo Details Reset
        $('#WHTruckNO').val("");
        $('#TruckID').val("0");
        $('#WHTruckArrivalDate').val("");

        $("#WHInvoiceMode").children("option[value^=SSR]").show();
        Autocompletebox("WHContNO", "trnDocumentGWContID", "reweighmentWorkOrder", "GetWHContainerNo/", "GetWHContainerDetails");
    }
    else if (WHVType == "CRG") {  //CRG Means Cargo
        $("#dvContaineDetails").hide();
        $("#dvTruckDetails").show();
        $("#dvInvoiceDetails").show();

        // Category Option Show and Hide
        $("#WHVCategory").children("option[value^=WRH]").show();
        $("#WHVCategory").val("WRH");
        $("#WHVCategory").children("option[value^=EXT]").hide();
        $("#WHVCategory").children("option[value^=EMT]").hide();

        $("#WHInvoiceMode").children("option[value^=SSR]").show();

        //Container Details Reset
        $('#WHContNO').val("");
        $('#trnDocumentGWContID').val("0");
        $('#WHCNSize').val("");
        $('#WHCNType').val("");
        $('#WHCARGOType').val("");
        $('#WHCONTArrivalDate').val("");
        $("#WHCONTMode").val("0");

        $('#WHCASHInvoiceNO').val("");
        $('#WHCASHInvoiceDate').val("");
        $('#WHSlipNO').val("");
        $('#WHSlipDate').val("");
        Autocompletebox("WHTruckNO", "TruckID", "reweighmentWorkOrder", "GetWHTruckNo/", "GetWHTruckDetails");
    }
    else if (WHVType == "OTHVH") { //OTHVH Means Other Vehicle
        $("#WHVCategory").val("0");
        //$("#WHVCategory").prop("disabled", false);
        $("#dvInvoiceDetails").hide();

        $("#dvContaineDetails").show();
        $("#dvTruckDetails").show();
        $("#WHInvoiceMode").prop("disabled", false);


        //Container Details Reset
        $('#WHContNO').val("");
        $('#trnDocumentGWContID').val("0");
        $('#WHCNSize').val("");
        $('#WHCNType').val("");
        $('#WHCARGOType').val("");
        $('#WHCONTArrivalDate').val("");
        $("#WHCONTMode").val("0");

        //Container Block Fields Read only
        $("#WHContNO").prop("disabled", false);
        $('#WHCNSize').attr('readonly', false);
        $('#WHCNType').attr('readonly', false);
        $('#WHCARGOType').attr('readonly', false);
        $('#WHCONTArrivalDate').attr('readonly', false);
        $("#WHCONTMode").prop("disabled", false);
        
        //Truck/Cargo Details Reset
        $('#WHTruckNO').val("");
        $('#TruckID').val("0");
        $('#WHTruckArrivalDate').val("");

        $('#WHCASHInvoiceNO').val("");
        $('#WHCASHInvoiceDate').val("");
        $('#WHSlipNO').val("");
        $('#WHSlipDate').val("");

        //Truck/Cargo Fields Read only
        $('#WHTruckArrivalDate').attr('readonly', false);

        $("#WHInvoiceMode").children("option[value^=SSR]").hide();

        // Category Option Show and Hide
        $("#WHVCategory").children("option[value^=WRH]").hide();
        $("#WHVCategory").children("option[value^=EXT]").hide();
        $("#WHVCategory").children("option[value^=EMT]").hide();

        $('#WHContNO').autocomplete('destroy');
        $('#WHTruckNO').autocomplete('destroy');
    }
    else {
        $("#WHVCategory").val("0");
        $("#dvContaineDetails").hide();
        $("#dvTruckDetails").hide();
        $("#dvInvoiceDetails").hide();
        $("#WHInvoiceMode").children("option[value^=SSR]").show();

        //$("#WHVCategory").prop("disabled", true);
        $("#WHInvoiceMode").prop("disabled", true);
        $("#MANUALSSRNO").prop("disabled", true);

        $("#WHVCategory").children("option[value^=WRH]").hide();
        $("#WHVCategory").children("option[value^=EXT]").hide();
        $("#WHVCategory").children("option[value^=EMT]").hide();

        //Container Details Reset
        $('#WHContNO').val("");
        $('#trnDocumentGWContID').val("0");
        $('#WHCNSize').val("");
        $('#WHCNType').val("");
        $('#WHCARGOType').val("");
        $('#WHCONTArrivalDate').val("");
        $("#WHCONTMode").val("0");

        //Truck/Cargo Details Reset
        $('#WHTruckNO').val("");
        $('#TruckID').val("0");
        $('#WHTruckArrivalDate').val("");

        $('#WHCASHInvoiceNO').val("");
        $('#WHCASHInvoiceDate').val("");
        $('#WHSlipNO').val("");
        $('#WHSlipDate').val("");
    }
}

// This is For Invoice Mode Change Event,(Element Id : WHInvoiceMode)
function MEWHInvoiceMode() {
    var WHInvoiceMode = $("#WHInvoiceMode").val();

    if (WHInvoiceMode == "SSR") {
        $("#dvMANUALSSRNO").show();
    }
    else {
        $("#dvMANUALSSRNO").hide();
    }
}

// Fill Container Details
function GetWHContainerDetails() {
    var ID = $("#trnDocumentGWContID").val();
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "reweighmentWorkOrder/FillWHContainerDetails/" + ID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $('#WHCNSize').val(data.split('|')[0]);
                    $('#WHCNType').val(data.split('|')[1]);
                    $('#WHCARGOTypeID').val(data.split('|')[2]);
                    $('#WHCARGOType').val(data.split('|')[3]);
                    $('#WHCONTArrivalDate').val(data.split('|')[4]);
                    var d = data.split('|')[5];
                    $('#WHCONTMode').val(d.trim());
                    $('#hdnTruckID').val(d.trim());
                    $('#WHCASHInvoiceNO').val(data.split('|')[6]);
                    $('#WHCASHInvoiceDate').val(data.split('|')[7]);
                    $('#WHSlipNO').val(data.split('|')[8]);
                    $('#WHSlipDate').val(data.split('|')[9]);
                }
                else {
                    $('#WHCNSize').val("");
                    $('#WHCNType').val("");
                    $('#WHCARGOType').val("");
                    $('#WHCONTArrivalDate').val("");
                    $("#WHCONTMode").val("0");

                    $('#WHCASHInvoiceNO').val("");
                    $('#WHCASHInvoiceDate').val("");
                    $('#WHSlipNO').val("");
                    $('#WHSlipDate').val("");
                }
            }
        })
    }
}

// Fill Truck/Cargo Details
function GetWHTruckDetails() {
    var ID = $("#TruckID").val();
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "reweighmentWorkOrder/FillWHTruckDetails/" + ID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $('#WHTruckArrivalDate').val(data.split('|')[0]);
                    $('#WHCASHInvoiceNO').val(data.split('|')[1]);
                    $('#WHCASHInvoiceDate').val(data.split('|')[2]);
                    $('#WHSlipNO').val(data.split('|')[3]);
                    $('#WHSlipDate').val(data.split('|')[4]);
                }
                else {
                    $('#WHTruckArrivalDate').val("");
                    $('#WHCASHInvoiceNO').val("");
                    $('#WHCASHInvoiceDate').val("");
                    $('#WHSlipNO').val("");
                    $('#WHSlipDate').val("");
                }
            }
        })
    }
}


// This is For Category Type Change Event,(Element Id : WHVCategory)
function MEWHVCategory() {
    debugger;
    var WHVCategory = $("#WHVCategory").val();
    $("#WHContNO").prop("disabled", false);

    if (WHVCategory != "" || WHVCategory != null || WHVCategory != undefined || WHVCategory != "0") {
        Autocompletebox("WHContNO", "trnDocumentGWContID", "reweighmentWorkOrder", "GetWHContainerNo/?WHVCategory=" + WHVCategory, "GetWHContainerDetails");
    }
    else {
        $("#WHContNO").prop("disabled", true);
    }
}

// This is For Final Save Validation
function validateModel() {
    var isvalid = true;

    var Errormsg = "";

    $.ajax({
        url: GetRootPath + "reweighmentWorkOrder/validateModel",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            $(".redborder").removeClass("redborder");
            if (data != "") {
                isvalid = false;
                Errormsg = data.split("|")[0];
                var ErrorFields = data.split("|")[1].split(",");

                if (ErrorFields != null && ErrorFields.length > 0) {
                    for (var Q = 0; Q < ErrorFields.length; Q++) {
                        $("#spn_" + ErrorFields[Q]).text('');
                        $("#spn_" + ErrorFields[Q]).next().addClass("redborder");
                    }
                }

            }
        }
    });

    if (Errormsg != "") {
        TosterAlert("error", Errormsg, "Required!");
        return false;
    }
    return isvalid;
}

//Set Elements During Edit Time
function SetViewsElement() {
    var WHVType = $("#WHVType").val();

    if (WHVType == "CNT") { // CNT Means Container
        $("#dvTruckDetails").hide();
        $("#dvContaineDetails").show();
        $("#dvInvoiceDetails").show();

    }
    else if (WHVType == "CRG") {  //CRG Means Cargo
        $("#dvContaineDetails").hide();
        $("#dvTruckDetails").show();
        $("#dvInvoiceDetails").show();
    }
    else { //OTHVH Means Other Vehicle
        $("#dvContaineDetails").show();
        $("#dvTruckDetails").show();
        $("#dvInvoiceDetails").show();
    }

    MEWHInvoiceMode();
}

function SetEditsElement() {
    var WHVType = $("#WHVType").val();
    $("#WHVCategory").prop("disabled", false);
    $("#WHInvoiceMode").prop("disabled", false);
    $("#MANUALSSRNO").prop("disabled", false);

    if (WHVType == "CNT") { // CNT Means Container
        $("#dvTruckDetails").hide();
        $("#dvContaineDetails").show();
        $("#dvInvoiceDetails").show();

    }
    else if (WHVType == "CRG") {  //CRG Means Cargo
        $("#dvContaineDetails").hide();
        $("#dvTruckDetails").show();
        $("#dvInvoiceDetails").show();
    }
    else if (WHVType == "OTHVH")
    {
        $("#dvContaineDetails").show();
        $("#dvTruckDetails").show();
        $("#dvInvoiceDetails").hide();
    }
    else { //OTHVH Means Other Vehicle
        $("#dvContaineDetails").show();
        $("#dvTruckDetails").show();
        $("#dvInvoiceDetails").show();
    }

    MEWHInvoiceMode();
}

// Here Check Wheater Manual SSR is Unique Or Not
function CheckManualSSRExists() {
    var MANUALSSRNO = $("#MANUALSSRNO").val();
    var isvalid = true;
    var Errormsg = "";

    if (MANUALSSRNO != "" || MANUALSSRNO != null || MANUALSSRNO != undefined)
    {
        $.ajax({
            url: GetRootPath + "reweighmentWorkOrder/CheckManualSSRExists",
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                $(".redborder").removeClass("redborder");
                if (data == "True") {
                    isvalid = false;
                    Errormsg = "Please Provide Unique Manual SSR Number!";
                    $("#MANUALSSRNO").val('');
                    $("#MANUALSSRNO").addClass("redborder");
                }
            }
        });
    }
   
    if (Errormsg != "") {
        TosterAlert("error", Errormsg, "Required!");
        return false;
    }

    return isvalid;

}