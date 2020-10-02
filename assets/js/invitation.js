$(function () {
    $(document).keyup(function (e) {
        if (e.which == 39) {
            $('.carousel-control-next').trigger('click');
        } else if (e.which == 37) {
            $('.carousel-control-prev').trigger('click');
        }
    });

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