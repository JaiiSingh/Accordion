

$(".accordion-body").slideUp();
$(".accordion-list-header").on("click",function(){
    var isActive=$(this).hasClass("active");
    $(".accordion-body").slideUp();
    $(".accordion-btn").css("rotate","0deg");
    $(this).removeClass("active");
    if(!isActive){
        $(this).siblings(".accordion-body").slideDown("slow");
        $(this).find(".accordion-btn").css("rotate","180deg");
        $(this).addClass("active");
    }

});