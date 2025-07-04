$(document).ready(function () {

    Autocompletebox("SpaceCertificateNo", "trnSpaceCertificateGWID", "trnCargoRepackingGW", "GetNoCNo","FillBatchNo");
    if ($("#trnSpaceCertificateGWID").val() != "" || $("#trnSpaceCertificateGWID").val() != "0") {
        Autocompletebox("BatchNo", "BatchID", "trnCargoRepackingGW", "GetBatchNo/" + $("#trnSpaceCertificateGWID").val(), "FillLotNo");
        Autocompletebox("LotNo", "trnDocumentGWLotDetailsID", "trnCargoRepackingGW", "GetLotNo/" + $("#trnSpaceCertificateGWID").val() + "?BatchId=" + $("#BatchID").val(), "FillArea");
    }
    
    
    Autocompletebox("PackingType", "PackingTypeID", "trnCargoRepackingGW", "GetPackingType");

    Autocompletebox("WHLocation", "WHLocationID", "trnCargoRepackingGW", "GetWHLocation");

   // totalWeight()

})

function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}

$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

function FillBatchNo() {
    $("#BatchID").val('0');
    $("#trnDocumentGWLotDetailsID").val('0');
    $("#BatchNo").val('');
    $("#LotNo").val('');
    FillArea();
    Autocompletebox("BatchNo", "BatchID", "trnCargoRepackingGW", "GetBatchNo/" + $("#trnSpaceCertificateGWID").val(), "FillLotNo");
}
function FillLotNo() {
    Autocompletebox("LotNo", "trnDocumentGWLotDetailsID", "trnCargoRepackingGW", "GetLotNo/" + $("#trnSpaceCertificateGWID").val() + "?BatchId=" + $("#BatchID").val(), "FillArea");
}

function GetFinalNocBalanceArea() {
   
    var NocDefference = parseFloat($("#AreaDifference").val());

    var NocBalance = parseFloat($("#BalanceArea").val());

    var FinalNocBalance = parseFloat(parseFloat(NocBalance) + parseFloat(NocDefference)).toFixed(2);

    if (!isNaN(FinalNocBalance)) {

        $("#FinalBalanceArea").val(FinalNocBalance)
    }
    if (isNaN(FinalNocBalance) || parseFloat( FinalNocBalance ) <=0) {
        TosterAlert("error",  "Area Difference And Balance Area Difference should be greater than zero!");
        $("#AreaDifference").addClass("redborder");
    }
    else {
        $("#AreaDifference").removeClass("redborder");
    }
}

 

function FillArea() {
    //var SbInvoiceID = $("#hdnSbInvoiceNo").val();
     
    var Lot = $("#trnDocumentGWLotDetailsID").val();
     
    if (Lot != '' && Lot != "0") {

        $.ajax({

            url: GetRootPath + "trnCargoRepackingGW/GetAreaFill/" + Lot,
            type: "POST",
            datatype: "text",
            success: function (data) {
                if (data != "" && data != null) {
                     
                    $("#BookingAreaUom").val(data.split("|")[4]);
                    $("#AreaBooked").val(data.split("|")[3]);
                    $("#AreaReleased").val(data.split("|")[1]);
                    $("#AreaReceived").val(data.split("|")[2]);
                    $("#BalanceArea").val(( parseFloat(data.split("|")[2]) - parseFloat(data.split("|")[1])).toFixed(2));
                    $("#AreaDifference").val('0');
                    $("#FinalBalanceArea").val($("#BalanceArea").val());

                } else {
                    $("#BookingAreaUom").val('');
                    $("#AreaBooked").val('0');
                    $("#AreaReleased").val('0');
                    $("#AreaReceived").val('0');
                    $("#BalanceArea").val('0');
                    $("#AreaDifference").val('0');
                    $("#FinalBalanceArea").val('0');
                }
            }
        });
    } else {
        $("#BookingAreaUom").val('');
        $("#AreaBooked").val('0');
        $("#AreaReleased").val('0');
        $("#AreaReceived").val('0');
        $("#BalanceArea").val('0');
        $("#AreaDifference").val('0');
        $("#FinalBalanceArea").val('0');
         
    }

}

function validateModel() {    

    var isvalid = true;

   
    var Errormsg = "";
     
    var trnSpaceCertificateGWID = $("#trnSpaceCertificateGWID").val()
    var BatchID = $("#BatchID").val()
    var trnDocumentGWLotDetailsID = $("#trnDocumentGWLotDetailsID").val()
    var AreaDifference = $("#AreaDifference").val()
    var BalanceArea = $("#BalanceArea").val()
    var PackingTypeID = $("#PackingTypeID").val()
    var WHLocationID = $("#WHLocationID").val()

    if (trnSpaceCertificateGWID == "0" || trnSpaceCertificateGWID == "") {
        isvalid = false;
        Errormsg += "NOC is Required <br />";
        $("#SpaceCertificateNo").addClass("redborder");
    } else {
        $("#SpaceCertificateNo").removeClass("redborder");
    }

    if (BatchID == "0" || BatchID == "") {
        isvalid = false;
        Errormsg += "BatchNo is Required <br />";
        $("#BatchNo").addClass("redborder");
    } else {
        $("#BatchNo").removeClass("redborder");
    }

    if (trnDocumentGWLotDetailsID == "0" || trnDocumentGWLotDetailsID == "") {
        isvalid = false;
        Errormsg += "LotNo is Required <br />";
        $("#LotNo").addClass("redborder");
    } else {
        $("#LotNo").removeClass("redborder");
    }
   
    if (BalanceArea!=""&& BalanceArea!=undefined ) {
        BalanceArea = parseFloat(BalanceArea);
    }
    else {
        BalanceArea = parseFloat(0);
    }

    if (AreaDifference != "" && AreaDifference != undefined) {
        AreaDifference = parseFloat(AreaDifference);
    }
    else {
        AreaDifference = parseFloat(0);
    }

   

    if (PackingTypeID == "0" || PackingTypeID == "") {
        isvalid = false;
        Errormsg += "New Packing Type is Required <br />";
        $("#PackingType").addClass("redborder");
    } else {
        $("#PackingType").removeClass("redborder");
    }

    if (WHLocationID == "0" || WHLocationID == "") {
        isvalid = false;
        Errormsg += "WH Location is Required <br />";
        $("#WHLocation").addClass("redborder");
    } else {
        $("#WHLocation").removeClass("redborder");
    }
    var FinalNocBalance = parseFloat(parseFloat(BalanceArea) + parseFloat(AreaDifference));
    ;
    if (isNaN(FinalNocBalance) || parseFloat(FinalNocBalance) <= 0) {
        isvalid = false;
        Errormsg += "Area Difference And Balance Area Difference should be greater than zero!";
        $("#AreaDifference").addClass("redborder");
    }
    else {
        $("#AreaDifference").removeClass("redborder");
    }
    if (!isvalid) {
        //$("#Isfinished").val(true);
        TosterAlert("error", Errormsg, "Required!");
    }
    return isvalid;
    //$("#example2  tbody").remove();
    //;
    //if(isvalid){
    //    $.ajax({
    //        url: GetRootPath + "trnCargoRepackingGW/Action/" + trnDocumentGWLotDetailsID,
    //        type: "Post",
    //        data: $("form").serialize(),
    //        dataType: "text",
    //        async: false,
    //        success: function (data) {
    //            ;
    //            var Jobj = JSON.parse(data)
    //            if (Jobj.RedirectUrl)
    //                window.location.href = Jobj.RedirectUrl;
    //              //window.location = GetRootPath + "trnCargoRepackingGW/Action/" + data + "?doaction=edit";
    //        },
    //    });
    //}
}

function validateModelCargoRapackingDetails() {

    var isvalid = true;
    isvalid = validateModel();
    var MErrormsg = "";
    var TotalRepackingPackages = 0;
    var ItemCount = $("#ItemCount").val();

    if (ItemCount != "" && ItemCount!="0" && ItemCount!=undefined) {
      
       
        for (var i = 0; i < parseInt(ItemCount); i++) {

            var repackval = $("#lsttrnCargoRepackingGWItems_" + i + "__RepackingPackages").val();
           
            if (repackval != "" && repackval!="0"&& repackval != undefined) {
                TotalRepackingPackages += parseInt(repackval);
             
                
                var packingType = $("#lsttrnCargoRepackingGWItems_" + i + "__NewPackingTypeID").val();
                var NewWHLocation = $("#lsttrnCargoRepackingGWItems_" + i + "__NewWHLocationID").val();
                if (packingType == "" || packingType == "0" || packingType == "0.00" || packingType == undefined) {
                    MErrormsg = "Please Enter New Packaging Type. <br />"
                    $("#lsttrnCargoRepackingGWItems_" + i + "__NewPackingType").addClass("redborder");
                }
                if (NewWHLocation == "" || NewWHLocation == "0" || NewWHLocation == undefined) {
                    MErrormsg += "Please Enter New WHLocation Type.<br />"
                    $("#lsttrnCargoRepackingGWItems_" + i + "__NewWHLocation").addClass("redborder");
                }
            }
            

        }

    }
    
    if (TotalRepackingPackages <= 0) {
         
        MErrormsg += "Please enter repacking packages!";
    }
    if (MErrormsg != "") {
        isvalid = false;
        TosterAlert("error", MErrormsg);
    }
    
    return isvalid;

}

function RepackingWeight(weight, packages) {


    var ParPackage = (weight / packages);

    var RepackingPackages = parseFloat($("#RepackingPackage").val());

    var RepackingWeight = 0;

    if ($.isNumeric(RepackingPackages)) {

        RepackingWeight = ParPackage * RepackingPackages;
    }

    if (!isNaN(RepackingWeight)) {
        $("#RepackingWeight").text(RepackingWeight.toFixed(2));
    }
    else {
        $("#RepackingWeight").text(0)
    }
}

function CalculateWeight(num) {

    WeightCalculation("lsttrnCargoRepackingGWItems_" + num + "__RepackingPackages",
                      "lsttrnCargoRepackingGWItems_" + num + "__RepackingPieces",
                      "lsttrnCargoRepackingGWItems_" + num + "__DecPackages",
                      "lsttrnCargoRepackingGWItems_" + num + "__DecWeight",
                      "lsttrnCargoRepackingGWItems_" + num + "__RepackingWeight");
}