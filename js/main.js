$(document).ready(function () {
  // ! слайдер на главной странице
  $('.slider').bxSlider({
    controls: false,
  });
  // ! слайдер продукта
  // $('.product-item__slider').bxSlider({
  //   pagerCustom: 'product-item__colors',
  //   controls: false,
  // });
  // ! выбор размера
  $('.sizes-list__item').click(function () {
    $(this).toggleClass('active');
    $(this).siblings().removeClass('active');
  });
});
