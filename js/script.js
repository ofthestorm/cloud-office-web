

$(function () {
    //window height
    var window_height = $(window).height();
    $('.pre-scrollable').css("max-height", window_height);

    //sidebar click event
    //拿到上一层，对每个子元素判断
    $('#side-attendance').bind("click",function (event) {
        $('#attendance').removeClass("hide");
    })
    $('#side-leave').bind("click",function (event) {
        $('#leave').removeClass("hide");
    })

    function hideOrShow(id) {
        if($(id).hasClass("hide")) {

        }
    }

    //datetime picker
    $('.form_datetime').datetimepicker({
        language:  'zh-CN',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        forceParse: 0,
        showMeridian: 1
    });
})


