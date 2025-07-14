$(document).ready(function () {
   
   /* Autocompletebox("MstrTariffHeadName", "MstrTariffHeadID", "MstrTallyHead", "GetTariffHead","IsTariffUsed");*/
});

function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}
$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

function IsTariffUsed() {    
    var MstrTariffHeadID = $("#MstrTariffHeadID").val();
    var MstrTallyHeadID = $("#MstrTallyHeadID").val();    
    $.ajax({
        url: GetRootPath + "MstrTallyHead/IsTariffUsed/" + MstrTariffHeadID + "?MstrTallyHeadID="+MstrTallyHeadID,
        type: "GET",
        dataType: "text",
        success: function (data) {            
            if (data != null && data != "" && data != undefined) {
                TosterAlert("warning", "TariffHead Already Added! ", "Warning!");
                $("#MstrTariffHeadID").val("0");
                $("#MstrTariffHeadName").val("");
            }
        }
    });
}

function CheckTallyCustomerIsUse() {
    var TallyCustomer = $("#TallyHeadName").val();
    var MstrTallyHeadID = $("#MstrTallyHeadID").val();    
    $.ajax({
        url: GetRootPath + "MstrTallyHead/IsTallyCustomerExsit/" + MstrTallyHeadID + "?TallyCustomer=" + TallyCustomer,
        type: "GET",
        dataType: "text",
        success: function (data) {            
            if (data != null && data != "" && data != undefined) {
                TosterAlert("warning", "Tally Customer Already Exist! ", "Warning!");                
                $("#TallyHeadName").val("");
            }
        }
    });
}
document.addEventListener('keydown', function (event) {
    // Check if the pressed key is Enter
    if (event.key === 'Enter') {
        // Prevent the default action to avoid form submission
        event.preventDefault();

        // Get the currently focused element
        const focusedElement = document.activeElement;

        // Check which div contains the focused element
        if (focusedElement.closest('#divHeader')) {
            // Find the submit button in HeaderDetails and trigger a click
            const btn = focusedElement.id;
            if (btn.includes("btnClear")) {
                const btnHeaderClear = document.getElementById(btn);
                btnHeaderClear.click();
            }
            else {
                const btnFinalSave = document.getElementById('btnSave');
                if (btnFinalSave) {
                    btnFinalSave.click();
                }
            }
        }
        else if (focusedElement.closest('#divBack')) {
            const btnBack = document.getElementById("btnBack");
            if (btnBack) {
                btnBack.click();
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
    }
});