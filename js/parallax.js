var parallax = document.getElementsByClassName("parallaxBackground");
var parallaxCenter = document.getElementsByClassName("parallaxBackgroundCenter");
var parallaxText = document.getElementsByClassName("parallaxText");
var parallaxTextCenter = document.getElementsByClassName("parallaxTextCenter");
var currScrollPos = document.documentElement.scrollTop;

window.onscroll = onScroll;

function onScroll() {
	currScrollPos = document.documentElement.scrollTop;

	for (i = 0; i < parallax.length; i++) {
		parallax[i].style.backgroundPosition = '0px ' + -currScrollPos / 3 + 'px';
	}
	for (i = 0; i < parallaxCenter.length; i++) {
		parallaxCenter[i].style.backgroundPosition = 'center calc(50% - ' + currScrollPos / 3 + 'px)';

	}
	for (i = 0; i < parallaxText.length; i++) {
		parallaxText[i].style.transform = 'translate(0px, ' + currScrollPos / 3 + '%)';

	}
	for (i = 0; i < parallaxTextCenter.length; i++) {
		parallaxTextCenter[i].style.transform = 'translate(-50%, ' + (-50 + (currScrollPos / 3)) + '%)';
	}
}
