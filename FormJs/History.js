function ShowHistory(forh, forhID, doaction) {
    var url = "History/getData?doaction=" + doaction + "&forh=" + forh + "&forhID=" + forhID;
    $.ajax({
        url: url,
        type: "GET",
        async: false,
        success: function (data) {

            if (data != null) {
                $('#GetHistory').html(data);
            }
        }
    });
}

function ShowMoreHistory(forh, forhID, doaction, forhHID) {

    var url = "History/getData?doaction=" + doaction + "&forh=" + forh + "&forhID=" + forhID + "&forhHID=" + forhHID;
    $.ajax({
        url: url,
        type: "GET",
        async: false,
        success: function (data) {

            if (data != null) {
                $('#GetMoreHistory').html(data);
            }
        }
    });
}
