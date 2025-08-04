$(document).ready(function () {

    Autocompletebox("NOCNo", "trnDocumentID", "trnCargoRepacking", "GetNocNo","FillBOENo");
    if ($("#trnDocumentID").val() != "" || $("#trnDocumentID").val() != "0") {
        Autocompletebox("LotNo", "trnDocumentLotDetailsID", "trnCargoRepacking", "GetLotNo/" + $("#trnDocumentID").val(), "FillArea");
    }
    
    
    Autocompletebox("PackingType", "PackingTypeID", "trnCargoRepacking", "GetPackingType");

    Autocompletebox("WHLocation", "WHLocationID", "trnCargoRepacking", "GetWHLocation");

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

function FillBOENo() {
    Autocompletebox("BOENo", "trnDocumentLotDetailsID", "trnCargoRepacking", "GetBOENo/" + $("#trnDocumentID").val(), "FillArea");
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
     
    var Lot = $("#trnDocumentLotDetailsID").val();
     
    if (Lot != '' && Lot != "0") {

        $.ajax({

            url: GetRootPath + "trnCargoRepacking/GetAreaFill/" + Lot,
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
     
    var trnDocumentID = $("#trnDocumentID").val()
    var trnDocumentLotDetailsID = $("#trnDocumentLotDetailsID").val()
    var AreaDifference = $("#AreaDifference").val()
    var BalanceArea = $("#BalanceArea").val()
    var PackingTypeID = $("#PackingTypeID").val()
    var WHLocationID = $("#WHLocationID").val()

    if (trnDocumentID == "0" || trnDocumentID == "") {
        isvalid = false;
        Errormsg += "NOC is Required <br />";
        $("#NOCNo").addClass("redborder");
    } else {
        $("#NOCNo").removeClass("redborder");
    }

    if (trnDocumentLotDetailsID == "0" || trnDocumentLotDetailsID == "") {
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
    //        url: GetRootPath + "trnCargoRepacking/Action/" + trnDocumentLotDetailsID,
    //        type: "Post",
    //        data: $("form").serialize(),
    //        dataType: "text",
    //        async: false,
    //        success: function (data) {
    //            ;
    //            var Jobj = JSON.parse(data)
    //            if (Jobj.RedirectUrl)
    //                window.location.href = Jobj.RedirectUrl;
    //              //window.location = GetRootPath + "trnCargoRepacking/Action/" + data + "?doaction=edit";
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

            var repackval = $("#lsttrnCargoRepackingItems_" + i + "__RepackingPackages").val();
           
            if (repackval != "" && repackval!="0"&& repackval != undefined) {
                TotalRepackingPackages += parseInt(repackval);
             
                
                var packingType = $("#lsttrnCargoRepackingItems_" + i + "__NewPackingTypeID").val();
                var NewWHLocation = $("#lsttrnCargoRepackingItems_" + i + "__NewWHLocationID").val();
                if (packingType == "" || packingType == "0" || packingType == "0.00" || packingType == undefined) {
                    MErrormsg = "Please Enter New Packaging Type. <br />"
                    $("#lsttrnCargoRepackingItems_" + i + "__NewPackingType").addClass("redborder");
                }
                if (NewWHLocation == "" || NewWHLocation == "0" || NewWHLocation == undefined) {
                    MErrormsg += "Please Enter New WHLocation Type.<br />"
                    $("#lsttrnCargoRepackingItems_" + i + "__NewWHLocation").addClass("redborder");
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

    WeightCalculation("lsttrnCargoRepackingItems_" + num + "__RepackingPackages",
                      "lsttrnCargoRepackingItems_" + num + "__RepackingPieces",
                      "lsttrnCargoRepackingItems_" + num + "__DecPackages",
                      "lsttrnCargoRepackingItems_" + num + "__DecWeight",
                      "lsttrnCargoRepackingItems_" + num + "__RepackingWeight");
}
function ValidateForm() {

   

    var isvalid = true;
    var MErrormsg = "";
    var counter = 0;
    debugger
    $.ajax({
        url: GetRootPath + "trnCargoRepacking/validateModel",
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

btnPrevent();
document.addEventListener('keydown', function (event) {
    // Check if the pressed key is Enter
    if (event.key === 'Enter') {
        // Prevent the default action to avoid form submission
        event.preventDefault();

        // Get the currently focused element
        const focusedElement = document.activeElement;

        // Check which div contains the focused element
        if (focusedElement.closest('#divHeaderDetail')) {
            var btnHeaderClear = focusedElement.id;
            if (btnHeaderClear.includes("btnHeaderClear")) {
                const headerClear = document.getElementById('btnHeaderClear');
                headerClear.click();
            }
            else {
                // Find the submit button in LotDetails and trigger a click
                const btnHeaderSave = document.getElementById('btnHeaderSave');
                if (btnHeaderSave) {
                    btnHeaderSave.click();
                }
            }

        }        
        else if (focusedElement.closest('#divFinalSave')) {
            // Find the submit button in LotDetails and trigger a click
            var btnFinalClear = focusedElement.id
            if (btnFinalClear.includes("btnFinalClear")) {
                const btnclear = document.getElementById(btnFinalClear);
                if (btnclear) {
                    btnclear.click();
                }
            }
            else {
                const btnFinalSave = document.getElementById('btnFinalSave');
                if (btnFinalSave) {
                    btnFinalSave.click();
                }
            }

        }
        else if (focusedElement.closest('#divSearch')) {
            const btn = focusedElement.id;
            if (btn.includes("btnAdd")) {
                const btnAdd = document.getElementById(btn);
                if (btnAdd) {
                    btnAdd.click();
                }
            }
            else {
                const btnSearch = document.getElementById("btnSearch");
                if (btnSearch) {
                    btnSearch.click();
                }
            }
        }
        else if (focusedElement.closest('#divBack')) {
            const btn = focusedElement.id;
            if (btn.includes('btnEdit')) {
                const btnEdit = document.getElementById(btn);
                if (btnEdit) {
                    btnEdit.click();
                }
            }
            else {
                const btnBack = document.getElementById('btnBack');
                if (btnBack) {
                    btnBack.click();
                }
            }
            
        }
    }
});