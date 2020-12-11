// Вызов видео по клику

var handler = function () {
	this.innerHTML = '<div class="video_top__wrapper___video"><iframe src="https://www.youtube.com/embed/c0-i8TSD6VM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
};
document.querySelector('.video_top__wrapper').addEventListener('click', function (e) { this.removeEventListener('click', handler, false); handler.apply(this, arguments); } , false);
