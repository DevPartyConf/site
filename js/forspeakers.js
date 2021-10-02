// Sticky header
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
        $('.head').addClass("sticky");
        $('header').addClass("p-top");
    }
    else {
        $('.head').removeClass("sticky");
        $('header').removeClass("p-top");
    }
});
// Scroll top
$('.logo').click(function (e) {
    $.scrollTo('#index', 600);
    e.preventDefault();
});
// Toggle menu funciton
$('.toggle-menu').click(function () {
    $('.toggle-menu__sandwitch').toggleClass('active');
    $('header').toggleClass('active');
});