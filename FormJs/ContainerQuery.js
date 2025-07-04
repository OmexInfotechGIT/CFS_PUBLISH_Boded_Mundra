$(document).ready(function () {
    onchangecategory();
});

function onchangecategory()
{
     
    var Category = $("#Category").val();
    Autocompletebox("ContNo", "ContID", "containerQuery", "GetContNo/?Category=" + Category);

}

function exportToExcel() { 
    var IsValid = true;
    var ErrorMessage = "";
    var Category = $("#Category").val();
    var ContID = $("#ContID").val();

    if (Category == "" || Category == undefined || Category == null || Category == "Select") {
        IsValid = false;
        ErrorMessage = "Please select Category. <br/>"
    }
    else {
        IsValid = true;
    }

    if (ContID == "" || ContID == undefined || ContID == null || ContID == "0") {
        IsValid = false;
        ErrorMessage += "Please select Container. <br/>"
    }
    else {
        IsValid = true;
    }

    if (!(IsValid)) {
        TosterAlert("error", ErrorMessage, "Required!");
    }
    else {


        var location = 'data:application/vnd.ms-excel;base64,';
        var excelTemplate = $("#tab1").html();
        window.location.href = location + window.btoa(excelTemplate);
    }
}

function SearchwithContNo() {
    var IsValid = true;
    var ErrorMessage = "";
    var Category = $("#Category").val();
    var ContNo = $("#ContNo").val();
    var ContID = $("#ContID").val();

    if (Category == "" || Category == undefined || Category == null || Category == "Select") {
        IsValid = false;
        ErrorMessage = "Please select Category. <br/>"
    }
    else {
        IsValid = true;
    }

    if (ContID == "" || ContID == undefined || ContID == null || ContID == "0") {
        IsValid = false;
        ErrorMessage += "Please select Container. <br/>"
    }
    else {
        IsValid = true;
    }

    if (!(IsValid)) {
        TosterAlert("error", ErrorMessage, "Required!");
    }
    else {
        location.href = "?doaction=view&pg=1&IsSearch=" + true + "&Category=" + Category + "&ContID=" + ContID + "&ContNo=" + ContNo 
    }
}

function ClearContNo()
{
    $("#Category").val('');
    $("#ContNo").val('');
    $("#ContID").val('0');
    location.href = "?doaction=view&pg=1"
}