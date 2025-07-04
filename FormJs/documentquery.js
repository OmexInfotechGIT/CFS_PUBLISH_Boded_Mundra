$(document).ready(function () {    
    Autocompletebox("BondNo", "BondID", "documentquery", "GetBondNo");
    Autocompletebox("InBoeNo", "InBoeID", "documentquery", "GetInBOENo/" + $("#NocID").val());
    //Autocompletebox("ExBoeNo", "ExBoeID", "documentquery", "GetShippingNo");
    //Autocompletebox("IGMNo", "IGMID", "documentquery", "GetShippingNo");
    //Autocompletebox("ITEMNo", "ITEMID", "documentquery", "GetShippingNo");
    Autocompletebox("NocNo", "NocID", "documentquery", "GetNOCNo", "GetNocByInBoeNo");
    //Autocompletebox("SBNO", "SBID", "documentquery", "GetShippingNo");
    //Autocompletebox("INVNO", "INVID", "documentquery", "GetShippingNo");
    //Autocompletebox("ContNO", "ContID", "documentquery", "GetShippingNo");

});

function GetNocByInBoeNo() {
    Autocompletebox("InBoeNo", "InBoeID", "documentquery", "GetInBOENo/" + $("#NocID").val());
}

function SearchDocumentQuery() {

    var Errormsg = "";
    let NocNo = $("#NocNo").val();
    let NocID = $("#NocID").val();
    let InBoeNo = $("#InBoeNo").val();
    let InBoeID = $("#InBoeID").val();
    let BondNo = $("#BondNo").val();
    let BondID = $("#BondID").val();

    var DownloadExcelFile = false;
    if ($("input[name='DownloadExcelFile']:checked").val() == "true") {

        DownloadExcelFile = true;
    }

    if ((InBoeID == null && NocID == null) || (InBoeID == "0" && NocID == "0") || (InBoeID == "" && NocID == "") || (InBoeID == undefined && NocID == undefined)) {
        isVaild = false;
        $("#InBoeNo").addClass("redborder");
        $("#NocNo").addClass("redborder");
        Errormsg += "Please Select In-BOE No Or NOC No <br/>"
    }

    if (Errormsg != "") {
        TosterAlert("error", Errormsg, "Required!");
    }
    else {
        location.href = "?IsSearchDocQuery=" + true + "&NocID=" + NocID + "&NocNo=" + NocNo + "&InBoeID=" + InBoeID + "&InBoeNo=" + InBoeNo + "&BondNo=" + BondNo + "&BondID=" + BondID + "&DownloadExcelFile=" + DownloadExcelFile;
    }
}

function ClearSearchData() {

    $("#BondNo").val("");
    $("#BondID").val("");
    $("#InBoeNo").val("");
    $("#InBoeID").val("");
    $("#ExBoeNo").val("");
    $("#InBoeID").val("");
    $("#IGMNo").val("");
    $("#IGMID").val("");
    $("#ITEMNo").val("");
    $("#ITEMID").val("");
    $("#NocNo").val("");
    $("#NocID").val("");
    $("#SBNO").val("");
    $("#SBID").val("");
    $("#INVNO").val("");
    $("#INVID").val("");
    $("#ContNO").val("");
    $("#ContID").val("");
    location.href = "?IsSearchDocQuery=" + false;
}

function GetOutCargoDetails(ID) {
    if (parseInt(ID) > 0) {
        debugger;
        $.ajax({
            url: GetRootPath + "documentquery/GetOutCargoDetails/" + ID,
            type: "GET",
            success: function (data) {
                if (data != null && data != "") {
                    debugger;
                    $("#tblOutCargoDetails").html(data);
                }
                else {
                    $("#tblOutCargoDetails").html("");
                }
            }
        });        
    }
}