$(document).ready(function(){
  $('.owl-kitchen').slick({
    slidesToShow: 2,
    autoplay: true,
    arrows: true,
    focusOnSelect: true,
    prevArrow: '<div id="prev" class="btn btn-juliet slick-prev"><i class="fal fa-arrow-left" aria-hidden="true"></i></div>',
    nextArrow: '<div id="next" class="btn btn-juliet slick-next"><i class="fal fa-arrow-right" aria-hidden="true"></i></div>',
    responsive: [
        {
            breakpoint: 568,
            settings: {
                slidesToShow: 1,
                arrows: false,
                padding: 5,
            }
        },{
            breakpoint: 1024,
            settings: {
                arrows: false,
                padding: 5,
            }
        }],
  });
  $('.owl-deco').slick({
    slidesToShow: 2,
    autoplay: true,
    arrows: true,
    focusOnSelect: true,
    prevArrow: '<div id="prev" class="btn btn-juliet slick-prev"><i class="fal fa-arrow-left" aria-hidden="true"></i></div>',
    nextArrow: '<div id="next" class="btn btn-juliet slick-next"><i class="fal fa-arrow-right" aria-hidden="true"></i></div>',
    responsive: [
        {
            breakpoint: 568,
            settings: {
                slidesToShow: 1,
                arrows: false,
                padding: 5,
            }
        },{
            breakpoint: 1024,
            settings: {
                arrows: false,
                padding: 5,
            }
        }],
  });
  $('.owl-furniture').slick({
    slidesToShow: 2,
    autoplay: true,
    arrows: true,
    focusOnSelect: true,
    prevArrow: '<div id="prev" class="btn btn-juliet slick-prev"><i class="fal fa-arrow-left" aria-hidden="true"></i></div>',
    nextArrow: '<div id="next" class="btn btn-juliet slick-next"><i class="fal fa-arrow-right" aria-hidden="true"></i></div>',
    responsive: [
        {
            breakpoint: 568,
            settings: {
                slidesToShow: 1,
                arrows: false,
                padding: 5,
            }
        },{
            breakpoint: 1024,
            settings: {
                arrows: false,
                padding: 5,
            }
        }],
  });
  $('.owl-landscape').slick({
    slidesToShow: 2,
    autoplay: true,
    arrows: true,
    focusOnSelect: true,
    prevArrow: '<div id="prev" class="btn btn-juliet slick-prev"><i class="fal fa-arrow-left" aria-hidden="true"></i></div>',
    nextArrow: '<div id="next" class="btn btn-juliet slick-next"><i class="fal fa-arrow-right" aria-hidden="true"></i></div>',
    responsive: [
        {
            breakpoint: 568,
            settings: {
                slidesToShow: 1,
                arrows: false,
                padding: 5,
            }
        },{
            breakpoint: 1024,
            settings: {
                arrows: false,
                padding: 5,
            }
        }],
  });
});