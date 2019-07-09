$(".skill").click(function(){
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        tag = $(this).html();
        $(".skill").each(function() {
            if (tag == $(this).html()) {
                $(this).removeClass("active");
            }
        });
    } else {
        $(this).addClass("active");
        tag = $(this).html();
        console.log(tag)
        $(".skill").each(function() {
            if (tag == $(this).html()) {
                $(this).addClass("active");
            }
        });
    }
});