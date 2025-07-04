(function($) {
    "use strict"

    // MAterial Date picker
    //$('#mdate').bootstrapMaterialDatePicker({
    //    weekStart: 0,
    //    time: false
    //});
    $('.timepicker').bootstrapMaterialDatePicker({
        format: 'HH:mm',
        time: true,
        date: false
    });
    $('.DateTimePicker').bootstrapMaterialDatePicker({
       
        format: JavaScriptProjectDateTimeFormat,
        shortTime : true
    });

    $('.DatePickers').bootstrapMaterialDatePicker({
        time: false,
        format: JavaScriptProjectDateFormat,
        shortTime : true
    });

})(jQuery);