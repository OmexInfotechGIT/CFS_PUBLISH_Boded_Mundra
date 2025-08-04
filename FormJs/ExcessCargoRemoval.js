
$(document).ready(function () {

    Autocompletebox("trnDocumentNo", "trnDocumentID", "ExcessCargoRemoval", "GetNoCNo");

    //Autocompletebox("ApprovedBy", "ApprovedById", "ExcessCargoRemoval", "GetUserList");
    //Autocompletebox("CheckedBy", "CheckedById", "ExcessCargoRemoval", "GetUserList");
    //Autocompletebox("AcknowledgedBy", "AcknowledgedById", "ExcessCargoRemoval", "GetUserList");
    //Autocompletebox("CRUpdatedBy", "CRUpdatedById", "ExcessCargoRemoval", "GetUserList");    
    var IsChecked = $("#hdnCheckedByCheck").val();
    if (IsChecked == "True") {
        $("#IsCheckedone").show();
    }
    else {
        $("#IsCheckedone").hide();
    }    
    $("#CRUpdatedBy").val($("#LoginUser").val());
    $("#CRUpdatedById").val($("#LoginUserID").val());

    $('[id^=RemovalPKGS_]').each(function () {
        var RemovalPKGS = parseInt($(this).val());
        if (RemovalPKGS == 0) {
            $(this).val('');
        }
    });
    $('[id^=RemovalPIECES_]').each(function () {
        var RemovalPIECES = parseInt($(this).val());
        if (RemovalPIECES == 0) {
            $(this).val('');
        }
    });
    $('[id^=RemovalWEIGHT_]').each(function () {
        var RemovalWEIGHT = parseInt($(this).val());
        if (RemovalWEIGHT == 0) {
            $(this).val('');
        }
    });
})

function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}

$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

//function validateModel() {

//    var isvalid = true;
//    var Errormsg = "";

//    let trnDocumentID = $("#trnDocumentID").val();
//    let BatchID = $("#BatchID").val();
//    let ReasonRemoval = $("#ReasonRemoval").val();
//    let ApprovalMailDate = $("#ApprovalMailDate").val();
//    let CRUpdatedById = $("#CRUpdatedById").val();
//    let ApprovedBy = $("#ApprovedBy").val();

//    if (trnDocumentID == "0" || trnDocumentID == "") {
//        isvalid = false;
//        Errormsg += "NOC is Required <br />";
//        $("#trnDocumentNo").addClass("redborder");
//    } else {
//        $("#trnDocumentNo").removeClass("redborder");
//    }

//    if (BatchID == "0" || BatchID == "") {
//        isvalid = false;
//        Errormsg += "BatchNo is Required <br />";
//        $("#BatchNo").addClass("redborder");
//    } else {
//        $("#BatchNo").removeClass("redborder");
//    }


//    if (ReasonRemoval == "0" || ReasonRemoval == "") {
//        isvalid = false;
//        Errormsg += "Reason For Removal is Required <br />";
//        $("#ReasonRemoval").addClass("redborder");
//    } else {
//        $("#ReasonRemoval").removeClass("redborder");
//    }

//    if (ApprovalMailDate == "" || ApprovalMailDate == null || ApprovalMailDate == undefined) {
//        isvalid = false;
//        Errormsg += "Approval Mail Date is Required <br />";
//        $("#ApprovalMailDate").addClass("redborder");
//    } else {
//        $("#ApprovalMailDate").removeClass("redborder");
//    }

//    if (CRUpdatedById == "0" || CRUpdatedById == "") {
//        isvalid = false;
//        Errormsg += "Updated By is Required <br />";
//        $("#CRUpdatedBy").addClass("redborder");
//    } else {
//        $("#CRUpdatedBy").removeClass("redborder");
//    }

//    if (ApprovedBy == "" || ApprovedBy == null || ApprovedBy == undefined) {
//        isvalid = false;
//        Errormsg += "ApprovedBy is Required <br />";
//        $("#ApprovedBy").addClass("redborder");
//    } else {
//        $("#ApprovedBy").removeClass("redborder");
//    }

//    if (!isvalid) {
//        TosterAlert("error", Errormsg, "Required!");
//    }
//}
function Validation() {

    var isvalid = true;
    var MErrormsg = "";
    var counter = 0;

    $.ajax({
        url: GetRootPath + "ExcessCargoRemoval/validateModel",
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
    if (isvalid) {
        $("#IsEmptyGateOutprocess").iCheck("enable");
    }
    return isvalid;
}
function checkitems(type, num) {
    var msg = "";
    var isvalid = true;
    if (type == "RemovalPKGS") {
        var RemNoOfPackageVal = parseFloat($("#RemovalPKGS_" + num).val()).toFixed(2);
       
        if (RemNoOfPackageVal == null && RemNoOfPackageVal == undefined && RemNoOfPackageVal == "") {
            RemNoOfPackageVal = 0.00;
        }
        var BalPackageVal = parseFloat($("#hdnBALPKGS_" + num).val()).toFixed(2);

        if (BalPackageVal == null && BalPackageVal == undefined && BalPackageVal == "") {
            BalPackageVal = 0.00;
        }

        if (parseFloat(RemNoOfPackageVal) <= 0.00) {
            $("#RemovalPKGS_" + num).val("0.00");
            msg += "Enter Package is grater than 0";
            isvalid = false;
        }
        else if (parseFloat(BalPackageVal) < parseFloat(RemNoOfPackageVal))
        {
            $("#RemovalPKGS_" + num).val("0.00");
            msg += "Enter Package is lower than Balance Packages";
            isvalid = false;
        }
    }
    else if (type == "RemovalPIECES") {
        var RemovalPIECESVal = parseFloat($("#RemovalPIECES_" + num).val()).toFixed(2);

        if (RemovalPIECESVal == null && RemovalPIECESVal == undefined && RemovalPIECESVal == "") {
            RemovalPIECESVal = 0.00;
        }
        var BALPIECESVal = parseFloat($("#hdnBALPIECES_" + num).val()).toFixed(2);

        if (BALPIECESVal == null && BALPIECESVal == undefined && BALPIECESVal == "") {
            BALPIECESVal = 0.00;
        }

        if (parseFloat(RemovalPIECESVal) <= 0.00) {
            $("#RemovalPIECES_" + num).val("0.00");
            msg += "Enter Pieces is grater than 0";
            isvalid = false;
        }
        else if (parseFloat(BALPIECESVal) < parseFloat(RemovalPIECESVal)) {
            $("#RemovalPIECES_" + num).val("0.00");
            msg += "Enter Pieces is lower than Balance Pieces";
            isvalid = false;
        }
    }
    else if (type == "RemovalWEIGHT") {
        var RemovalWEIGHTValue = parseFloat($("#RemovalWEIGHT_" + num).val()).toFixed(2);

        if (RemovalWEIGHTValue == null && RemovalWEIGHTValue == undefined && RemovalWEIGHTValue == "") {
            RemovalWEIGHTValue = 0.00;
        }
        var BalWEIGHTVal = parseFloat($("#hdnBALWEIGHT_" + num).val()).toFixed(2);

        if (BalWEIGHTVal == null && BalWEIGHTVal == undefined && BalWEIGHTVal == "") {
            RemNoOfPackageVal = 0.00;
        }

        if (parseFloat(RemovalWEIGHTValue) <= 0.00) {
            $("#RemovalWEIGHT_" + num).val("0.00");
            msg += "Enter Weight is grater than 0";
            isvalid = false;
        }
        else if (parseFloat(BalWEIGHTVal) < parseFloat(RemovalWEIGHTValue)) {
            $("#RemovalWEIGHT_" + num).val("0.00");
            msg += "Enter Package is lower than Balance Weight";
            isvalid = false;
        }
    }

    if (!isvalid) {
        TosterAlert("warning", msg, "Warning!");
    }
}


setTimeout(function () {
    $("#CheckedByCheck").on('ifChanged', function (event) {        
        if (event.target.checked == true) {         
            $("#CheckedBy").val($("#LoginUser").val());
            $("#CheckedById").val($("#LoginUserID").val());
            $("#hdnCheckedByCheck").val("true");
        }
        else {   
            $("#CheckedBy").val("");
            $("#CheckedById").val("0");
            $("#hdnCheckedByCheck").val(false);
        }
    });

    $("#AcknowledgedByCheck").on('ifChanged', function (event) {        
        if (event.target.checked == true) {
            $("#AcknowledgedBy").val($("#LoginUser").val());
            $("#AcknowledgedById").val($("#LoginUserID").val());
            $("#hdnAcknowledgedByCheck").val("true");           
        }
        else {
            $("#AcknowledgedBy").val("");
            $("#AcknowledgedById").val("0");
            $("#hdnAcknowledgedByCheck").val(false);            
        }
    });


}, 1000);

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
            const btnBack = document.getElementById('btnBack');
            if (btnBack) {
                btnBack.click();
            }
        }
    }
});