activeTags = [];

$(".tag").click(function(){
    if ($(this).hasClass("active")) {
        ;
        $(this).removeClass("active");
        tag = $(this).html();
        activeTags.splice(activeTags.indexOf(tag), 1);
        $(".tag").each(function() {
            if (tag === $(this).html()) {
                $(this).removeClass("active");
            }
        });
        if (activeTags.length === 0) {
            $(".resume-item").show();
        } else {
            $(".resume-item").each(function () {
                tagsFound = true;
                resumeItem = $(this);
                activeTags.forEach(function(tag) {
                    tagFound = false;
                    resumeItem.find(".tag").each(function () {
                        if (tag === $(this).html()) {
                            tagFound = true;
                        }
                    });
                    if (!tagFound) {
                        tagsFound = false;
                    }
                });
                if (tagsFound) {
                    $(this).show();
                }
            });
        }
    } else {
        $(this).addClass("active");
        tag = $(this).html();
        activeTags.push(tag);
        $(".tag").each(function() {
            if (tag === $(this).html()) {
                $(this).addClass("active");
            }
        });
        $(".resume-item").each(function() {
            tagFound = false;
            $(this).find(".tag").each(function() {
                if (tag === $(this).html()) {
                    tagFound = true;
                }
            });
            if (!tagFound) {
                $(this).hide();
            }
        });
    }
});