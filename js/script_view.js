jQuery(document).ready(function() {

    var x;

    $(".scroll_left").click(function() {
        x = $('.product_other_images').scrollLeft() - 250;
        $('.product_other_images').animate({
            scrollLeft: x,
        })
    })
    $(".scroll_right").click(function() {
        x = 250 + $('.product_other_images').scrollLeft();
        $('.product_other_images').animate({
            scrollLeft: x,
        })
    })

    $(".otherImageContainer").mouseenter(function() {
        var s = $('#product_name').html() + "/" + $(this).attr('id');
        $("#main_image").attr("src", "../images/" + s + ".jpg");
        $(this).addClass("otherActive");
        $(this).siblings().removeClass("otherActive");
    })



});