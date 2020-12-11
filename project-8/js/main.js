
// Слайдер вызываем

jQuery(document).ready(function ($) {
	$('.my-slider').unslider({
		autoplay: true,
		arrows: false
	});
});

// Вызов видео по клику

var handler = function () {
	this.innerHTML = '<div class="wrepper-video"><iframe width="560" height="315" src="https://www.youtube.com/embed/NL_OVomQAYA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
};
document.querySelector('.video_click').addEventListener('click', function (e) { this.removeEventListener('click', handler, false); handler.apply(this, arguments); } , false);

// Блоки одинаковой высоты

function setEqualHeight(columns) {
	var tallestcolumn = 0;
	columns.each(function () {
		currentHeight = $(this).height();
		if (currentHeight > tallestcolumn) { tallestcolumn = currentHeight; }
	});
	columns.height(tallestcolumn);
}

$(document).ready(function () { setEqualHeight($(".product-block_list__bottom___head")); });