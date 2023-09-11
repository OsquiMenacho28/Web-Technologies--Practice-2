$(function() {
    $('#carouselExampleCaptions').on('slid.bs.carousel', function() {
        var position = $('.carousel-item.active').index() + 1;
        $('#lblImageNumber').text(position);
    });
});