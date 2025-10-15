$(document).ready(function () {

    Autocompletebox("NOCNo", "trnDocumentID", "trnCargoLocationTransfer", "GetNoCNo","FillBOENo");
    if ($("#trnDocumentID").val() != "" || $("#trnDocumentID").val() != "0") {
        Autocompletebox("BOENo", "trnDocumentLotDetailsID", "trnCargoLocationTransfer", "GetBOENo/" + $("#trnDocumentID").val());
    }

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
    $("#trnDocumentLotDetailsID").val('0');
    $("#BOENo").val('');
    Autocompletebox("BOENo", "trnDocumentLotDetailsID", "trnCargoLocationTransfer", "GetBOENo/" + $("#trnDocumentID").val());
}

function LocationTransferBoeValid(BalVal, curVal, boxInfo, thisBox, Count) {
    debugger
    if (BalVal < curVal) {
        TosterAlert("warning", `Enter ${boxInfo} is grater then Balance ${boxInfo}`, "warning!");
        thisBox.value = "0.00";
    }

    let TotalTransferPakages = 0;
    let TotalTransferPieces = 0;
    let TotalTransferWeight = 0;

    for (let i = 0; i < Count; i++) {
        if (boxInfo === "Packages") {
            TotalTransferPakages += parseFloat($("#TransferPackages_" + i).val()) || 0;
        }

        if (boxInfo === "Pieces") {
            TotalTransferPieces += parseFloat($("#TransferPieces_" + i).val()) || 0;
        }

        if (boxInfo === "Weight") {
            TotalTransferWeight += parseFloat($("#TransferWeight_" + i).val()) || 0;
        }
    }

    if (boxInfo === "Packages") {
        $("#TotalTransferPakages").text(TotalTransferPakages.toFixed(2));
        $("#hdnTotalTransferPakages").val(TotalTransferPakages.toFixed(2));
    }

    if (boxInfo === "Pieces") {
        $("#TotalTransferPieces").text(TotalTransferPieces.toFixed(2));
        $("#hdnTotalTransferPieces").val(TotalTransferPieces.toFixed(2));
    }

    if (boxInfo === "Weight") {
        $("#TotalTransferWeight").text(TotalTransferWeight.toFixed(2));
        $("#hdnTotalTransferWeight").val(TotalTransferWeight.toFixed(2));
    }
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

function ValidateForm() {
    var isvalid = true;
    var MErrormsg = "";
    var counter = 0;
    debugger
    $.ajax({
        url: GetRootPath + "trnCargoLocationTransfer/validateModel",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            debugger
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

    $('input[id^="TransferWeight_"]').each(function () {
        const val = parseFloat($(this).val()) || 0;   // weight value

        if (val > 0) {
            // number part nikalna (TransferWeight_78 => 78)
            const idx = this.id.split('_')[1];

            if ($("#NewLocationID_" + idx).val() == "0" || $("#NewLocationID_" + idx).val() == undefined || $("#NewLocationID_" + idx).val() == null || $("#NewLocationID_" + idx).val() == "") {
                isvalid = false;
                $("#NewLocationID_" + idx).addClass("redborder");

                if (!MErrormsg.toLowerCase().includes("please enter new location")) {
                    MErrormsg += "Please Enter New Location";
                }
            } else {
                $("#NewLocationID_" + idx).removeClass("redborder");
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