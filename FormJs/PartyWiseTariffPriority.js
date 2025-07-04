$(document).ready(function () {
    Autocompletebox("Line", "LineID", "PartyWiseTariffPriority", "GetCustomer");
    Autocompletebox("CHA", "CHAID", "PartyWiseTariffPriority", "GetCustomer");
    Autocompletebox("Importer", "ImporterID", "PartyWiseTariffPriority", "GetCustomer");
    Autocompletebox("Agent", "AgentID", "PartyWiseTariffPriority", "GetCustomer");
    Autocompletebox("Exporter", "ExporterID", "PartyWiseTariffPriority", "GetCustomer");
    Autocompletebox("Consoler", "ConsolerID", "PartyWiseTariffPriority", "GetCustomer");
    Autocompletebox("Forwarder", "ForwarderID", "PartyWiseTariffPriority", "GetCustomer");
    Autocompletebox("BillToParty", "BillToPartyID", "PartyWiseTariffPriority", "GetCustomer");

    const urlParams = new URLSearchParams(window.location.search);
    debugger;
    var doaction = $("#doaction").val();
    if (doaction != "edit" ) {
        // Check if the 'InvoiceType' parameter exists
        if (urlParams.has('InvoiceType')) {
            // Extract the value of 'InvoiceType'
            const invoiceType = urlParams.get('InvoiceType');
            $("#InvoiceType").val(invoiceType);
        } else {
            $("#InvoiceType").val("Bond");
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
function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val()) + "&InvoiceType=" + encodeURIComponent($("#InvoiceType").val());
}
function Validation() {
    debugger;
    var Errormsg = "";    
    var isvalid = true;
    $.ajax({
        url: GetRootPath + "PartyWiseTariffPriority/validateModel",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            $(".redborder").removeClass("redborder");
            if (data != "") {
                isvalid = false;
                Errormsg += data.split("|")[0];
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
        isvalid = false;
    }
    return isvalid;
}