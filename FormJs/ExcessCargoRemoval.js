$(document).ready(function () {

    Autocompletebox("SpaceCertificateNo", "trnSpaceCertificateGWID", "ExcessCargoRemoval", "GetNoCNo", "FillBatchNo");

    Autocompletebox("ApprovedBy", "ApprovedById", "ExcessCargoRemoval", "GetUserList");
    Autocompletebox("CheckedBy", "CheckedById", "ExcessCargoRemoval", "GetUserList");
    Autocompletebox("AcknowledgedBy", "AcknowledgedById", "ExcessCargoRemoval", "GetUserList");
    Autocompletebox("CRUpdatedBy", "CRUpdatedById", "ExcessCargoRemoval", "GetUserList");

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
    Autocompletebox("BatchNo", "BatchID", "ExcessCargoRemoval", "GetBatchNo/" + $("#trnSpaceCertificateGWID").val());
}

function validateModel() {

    var isvalid = true;
    var Errormsg = "";

    let trnSpaceCertificateGWID = $("#trnSpaceCertificateGWID").val();
    let BatchID = $("#BatchID").val();
    let ReasonRemoval = $("#ReasonRemoval").val();
    let ApprovalMailDate = $("#ApprovalMailDate").val();
    let CRUpdatedById = $("#CRUpdatedById").val();
    let ApprovedBy = $("#ApprovedBy").val();

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


    if (ReasonRemoval == "0" || ReasonRemoval == "") {
        isvalid = false;
        Errormsg += "Reason For Removal is Required <br />";
        $("#ReasonRemoval").addClass("redborder");
    } else {
        $("#ReasonRemoval").removeClass("redborder");
    }

    if (ApprovalMailDate == "" || ApprovalMailDate == null || ApprovalMailDate == undefined) {
        isvalid = false;
        Errormsg += "Approval Mail Date is Required <br />";
        $("#ApprovalMailDate").addClass("redborder");
    } else {
        $("#ApprovalMailDate").removeClass("redborder");
    }

    if (CRUpdatedById == "0" || CRUpdatedById == "") {
        isvalid = false;
        Errormsg += "Updated By is Required <br />";
        $("#CRUpdatedBy").addClass("redborder");
    } else {
        $("#CRUpdatedBy").removeClass("redborder");
    }

    if (ApprovedBy == "" || ApprovedBy == null || ApprovedBy == undefined) {
        isvalid = false;
        Errormsg += "ApprovedBy is Required <br />";
        $("#ApprovedBy").addClass("redborder");
    } else {
        $("#ApprovedBy").removeClass("redborder");
    }

    if (!isvalid) {
        TosterAlert("error", Errormsg, "Required!");
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