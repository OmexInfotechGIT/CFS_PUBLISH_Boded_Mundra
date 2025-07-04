$(document).ready(function () {
    Autocompletebox("txtTransporterName", "TransporterID", "MstrTruck", "GetMstrVendor/" + $("#MstrTruckID").val());
    Autocompletebox("txtTruckNo", "txtWeight", "MstrTruck", "MstrTruckDetail/" + MstrTruckID + "?MstrTruckDetailID=" + MstrTruckDetailID);

    DisplayInactiveReason('IsActive', 'dvSubInActiveReason')
    $("#txtTransporterName").blur(function () {
        if ($("#txtTransporterName").val() == "" || $("#txtTransporterName").val() == null || $("#txtTransporterName").val() == undefined) {
            $("#TransporterID").val("0");
        }
    });
    if (doaction == "edit") {
        $("#txtTransporterName").prop("readonly", true);
        $("#SaveTruck").hide();
        $("#cancle").hide();
    }
    else {
        $("#txtTransporterName").prop("readonly", false);
        $("#SaveTruck").show();
        $("#cancle").show();
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


function EditTruckDetail(ID) {
    if (ID > 0) {
        //$("#MstrTruckDetailID").val($("#TruckDetailID_" + ID).text());
        //$("#txtTruckNo").val($("#TruckNo_" + ID).text());
        ///*$("#hdnWeight").val($("#txtTruckNo_" + ID).text());*/
        //$("#hdnWeight").val($("#hdnWeight_" + ID).text());
        //$("#txtWeight").val($("#hdnWeight_" + ID).text());
        //$("#InActiveReason").val($("#InActiveReason_" + ID).text());
        
        $("#txtTruckNo").val($("#TruckNo_" + ID).text());
        $("#txtWeight").val($("#Weight_" + ID).text());
        $("#IsActive").val($("#hdntxtStatus_" + ID).text());
        $("#InActiveReason").val($("#InActiveReason_" + ID).text());
        $("#MstrTruckDetailID").val($("#TruckDetailID_" + ID).text());

        $("#txtTruckNo").prop("readonly", true);
        $("#txtWeight").prop("readonly", true);

        if ($("#hdntxtStatus_" + ID).text() == "True")
        {
            $("#IsActive").iCheck("check");
        }
        else {
            $("#IsActive").iCheck("uncheck");
        }
    }
}

function ClearTruckDetails() {
    $("#MstrTruckDetailID").val("0");
    $("#txtTruckNo").val("");
    $("#txtWeight").val("0");
    $("#InActiveReason").val("");
    $("#dvSubInActiveReason").hide();
    $("#IsActive").iCheck("check");


    $("#txtTruckNo").prop("readonly", false);
    $("#txtWeight").prop("readonly", false);
}

function checkoruncheckactive() {
    $('#IsActive').on('ifChecked', function (event) {
        $("#Activestatus").val(true);
    }); 

    $('#IsActive').on('ifUnchecked', function (event) {
        $("#Activestatus").val(false);
    });
}

function validate(){


    var TransporterID = $("#TransporterID").val();
    var TransporterName = $("#txtTransporterName").val();
    if (TransporterID == "" || TransporterID == null || TransporterID == undefined || TransporterID == "0") {
        $("#txtTransporterName").addClass("redborder");
        TosterAlert("error", " Please select Transporter ", "Required!");
        return false;
    }
    location.href = "?pg=1&doaction=edit&TransporterID=" + TransporterID + "&TransporterName=" + TransporterName;
    return true;
}


function Validation() {
    
    var isvalid = true;

    $.ajax({
        url: GetRootPath + "MstrTruck/validateModel",
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
                    TosterAlert("error", Errormsg, "Required!");
                }
            }
        }
    });

    if (isvalid) {
        ChangeActiveStatus();
    }

    return isvalid;
}


function ChangeActiveStatus() {
    if ($("#IsActive").is(":checked")) {
        $("#IsActive").val("true");
    }
    else {
        $("#IsActive").val("false");
    }
}