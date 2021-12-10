$(document).ready(function(){

    
    $(".subjects-cards-item").click(function(){
        $(".container").animate({ opacity: "hide" }, "fast");
        var path = $(this).attr('id');
        $('#loadcontent').load(path);
        
        $('html, body').animate({
            scrollTop: $(".container").offset().top*0.95  // класс объекта к которому приезжаем
        }, 1000); // Скорость прокрутки
    });

    $("#All").click(function(){
        $(".container").animate({ opacity: "show" }, "fast");
        $('#loadcontent').empty();
        
        $('html, body').animate({
            scrollTop: $(".container").offset().top*0.95  // класс объекта к которому приезжаем
        }, 1000); // Скорость прокрутки
    });

    $("#sale").click(function(){
        $('[name="sale"]').trigger('click');
    });
    $("#saleyacht").click(function(){
        $('[name="saleyacht"]').trigger('click');
    });


    //фильтрация
    const filterBox = document.querySelectorAll('.subjects-cards-item');

    $(".subjects_filter a").click(function(){
        let filterClass = $(this).attr('data-f');

        filterBox.forEach(elem => {
            $(elem).fadeOut();
            if (filterClass == 'all') {
                $(elem).fadeIn();
            }
            if (elem.classList.contains(filterClass)) {
                $(elem).fadeIn();
            }
        });
    });

    //
    $(document).mouseup(function (e){
    var div = $(".popup_container-body");
    if(!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0)
            {
                $(".popup").fadeOut();
            }
        });

    //переход в попапе
    $("#next_popup").click(function(){
        $(".popup_container-body_end").css({
            'display':'inline'
        });
        $(".popup_container-body_start").css({
            'display':'none'
        });
        setTimeout(() => $(".popup").fadeOut(), 10000);
        setTimeout(() => {
        $(".popup_container-body_end").css({
            'display':'none'
        });
        $(".popup_container-body_start").css({
            'display':'inline'
        });},11000)
    });

});

//кнопка возврата к каталогу
function back(){
    $(".container").animate({ opacity: "show" }, "fast");
    $('#loadcontent').empty();
    
    $('html, body').animate({
        scrollTop: $(".container").offset().top*0.95  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
}

function Active(bl1, bl2, sw1, sw2) {
    //$('[data-f="all"]').trigger('click');
    $(bl1).css({
        'display':'inline'
    });
    $(bl2).css({
        'display':'none'
    });
    $(sw1).css({
        'opacity':'1'
    });
    $(sw2).css({
        'opacity':'0.5'
    });

    const filterBox = document.querySelectorAll('.subjects-cards-item');
    filterBox.forEach(elem => {
            $(elem).fadeIn();
    });
}

function sw1Active() {
        $(".card_info-attributes").css({
            'display':'inline'
        });
        $(".card_info-price").css({
            'display':'none'
        });
        $("#sw1").css({
            'opacity':'1'
        });
        $("#sw2").css({
            'opacity':'0.5'
        });
}

function sw2Active() {
        $(".card_info-price").css({
            'display':'inline'
        });
        $(".card_info-attributes").css({
            'display':'none'
        });
        $("#sw2").css({
            'opacity':'1'
        });
        $("#sw1").css({
            'opacity':'0.5'
        });
}

//popup

function open_popup(){
    let name = $(".card_head-name span").html();
    $(".popup_container-body .reserv").html(name);
    $(".popup").fadeIn();
}

function close_popup(){
    $(".popup").fadeOut();
}
