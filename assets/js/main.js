// Parallax de los elementos
	
	let logo = document.getElementById('logo');
	let shape1 = document.getElementById('shape1');
	let shape2 = document.getElementById('shape2');
	let shape3 = document.getElementById('shape3');
	let shape4 = document.getElementById('shape4');
	let shape5 = document.getElementById('shape5');
	let shape6 = document.getElementById('shape6');
	let shape7 = document.getElementById('shape7');
	let shape8 = document.getElementById('shape8');
	let shape9 = document.getElementById('shape9');
	let shape10 = document.getElementById('shape10');
	let shape11 = document.getElementById('shape11');
	let shape12 = document.getElementById('shape12');
	let shape13 = document.getElementById('shape13');
	let shape14 = document.getElementById('shape14');
	let shape15 = document.getElementById('shape15');
	let humo = document.getElementById('humo');



window.addEventListener('scroll', function() {
	var value = window.scrollY;

	logo.style.bottom = value * - 1 + 'px';
	shape2.style.left = value * - 0.5 + 'px';
	shape3.style.bottom = value * - 0.1 + 'px';
	shape4.style.bottom = value * - 0.5 + 'px';
	shape5.style.bottom = value * - 0.2 + 'px';
	shape6.style.bottom = value * - 0.5 + 'px';
	shape7.style.bottom = value * - 0.2 + 'px';
	shape8.style.left = value * + 0.5 + 'px';
	shape9.style.left = value * - 0.5 + 'px';
	shape12.style.left = value * - 1 + 'px';
	humo.style.top = value * - 0.3 + 'px';

 	

})