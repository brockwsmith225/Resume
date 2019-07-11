$(".tag").click(function(){
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        tag = $(this).html();
        $(".tag").each(function() {
            if (tag == $(this).html()) {
                $(this).removeClass("active");
            }
        });
    } else {
        $(this).addClass("active");
        tag = $(this).html();
        console.log(tag)
        $(".tag").each(function() {
            if (tag == $(this).html()) {
                $(this).addClass("active");
            }
        });
    }
});