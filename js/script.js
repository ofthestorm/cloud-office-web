$(function () {

    //scrollbar适应当前高度
    var window_height = $(window).height();
    $('.pre-scrollable').css("max-height", window_height);

    //sidebar click
    $('.nav-sidebar li').click(function () {
        $(this).addClass("sidebar-active").siblings('li').removeClass("sidebar-active");

        switch ($(this).index()) {
            case 0: {
                $('#attendance').removeClass("hide").siblings('.module').addClass("hide");
            }break;
            case 1: {
                $('#leave').removeClass("hide").siblings('.module').addClass("hide");
            }break;
            case 2: {
                $('#overtime').removeClass("hide").siblings('.module').addClass("hide");
            }break;
            default: break;
        }
    });

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
    $('.form_date').datetimepicker({
        language:  'zh-CN',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });

    //收藏文件
    $('.star').click(function () {
        if($(this).hasClass("glyphicon-star-empty")){
            $(this).removeClass("glyphicon-star-empty");
            $(this).addClass("glyphicon-star");
            //todo:点击收藏
        } else {
            $(this).removeClass("glyphicon-star");
            $(this).addClass("glyphicon-star-empty");
            //todo:取消收藏
        }
        i++;
    });
    $('.download').click(function () {
        //todo:下载文件
    })
    $('.remove').click(function () {
        //todo:移除星标文件
    })
    $('.delete').click(function () {
        //todo:删除自己上传的文件
    })

    //文件路径
    $("#path").change(function () {
        $("#docPath").val($(":file").val());
    });
})


