$(document).ready(function () {
//scrollspy
	$('body').scrollspy({ target: '#navbar' })

//scrollreveal
window.sr = ScrollReveal({ reset: true, mobile: true });

sr.reveal('.reveal', { duration: 2000 });
});


