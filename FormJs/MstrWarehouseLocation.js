$(document).ready(function () {
    if (doaction != "add") {
        $(".readonlyField").attr("readonly", true);
        FillLocations();
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


function validateModel(tab) { 
    $("#tab").val(tab);
    var isvalid = true;
    $.ajax({
        url: GetRootPath + "MstrWarehouseLocation/validateModel",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            $(".redborder").removeClass("redborder");
            if (data != "") {
                isvalid = false;
                var Errormsg = data.split("|")[0]; 
                if (Errormsg != "") {
                    TosterAlert("error", Errormsg, "Required!");
                }
            }
        }
    }); 
    return isvalid;
} 

function FillLocations() { 
    $.ajax({
        url: GetRootPath + "MstrWarehouseLocation/FillLocations/" + $("#MstrWarehouseLocationID").val() + "?doaction=" + doaction,
        type: "GET",
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#locationDetails").html(data); 
            } 
        }
    })
}

function CheckLocationName(locationname) { 

    $.ajax({
        url: GetRootPath + "MstrWarehouseLocation/CheckLocationName/" + $("#MstrWarehouseLocationID").val() + "?locationname=" + locationname,
        type: "GET",
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                if (data == "EXISTS") {
                    TosterAlert("error", "Location name already exists");
                    $("#LocationName").val("");
                }
            } 
        }
    })
}

function CheckColumnPrefix(ColumnPrefix) {    
    $.ajax({
        url: GetRootPath + "MstrWarehouseLocation/CheckColumnPrefix/" + $("#MstrWarehouseLocationID").val() + "?ColumnPrefix=" + ColumnPrefix,
        type: "GET",
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                if (data == "EXISTS") {
                    TosterAlert("error", "Column Prefix already exists");
                    $("#ColumnPrefix").val("");
                }
            } 
        }
    })
}

function CheckRowPrefix(RowPrefix) { 

    $.ajax({
        url: GetRootPath + "MstrWarehouseLocation/CheckRowPrefix/" + $("#MstrWarehouseLocationID").val() + "?RowPrefix=" + RowPrefix,
        type: "GET",
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                if (data == "EXISTS") {
                    TosterAlert("error", "Row Prefix already exists");
                    $("#RowPrefix").val("");
                }
            } 
        }
    })
}