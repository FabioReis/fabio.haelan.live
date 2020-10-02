$(function () {
    $('#close-gallery').click(function () {
        $('#carouselGalleryControls').addClass("carousel-hidden", 500, function () {
            $(".loading").fadeIn("slow");
        })
    })

    $('.gallery-item').click(function () {
        $('#carouselGalleryControls').removeClass("carousel-hidden", 500)
        setTimeout(() => {
            $(".loading").fadeOut("slow");
        }, 1000);
    })

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
})