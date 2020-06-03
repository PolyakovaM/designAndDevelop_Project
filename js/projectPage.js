const aboutProjDescription = document.querySelector('.project_description');

window.addEventListener('scroll', function(){
	if (document.documentElement.scrollTop > 1300) {
		aboutProjDescription.style.position = 'absolute';
		aboutProjDescription.style.bottom = '100px';
	} else {
		aboutProjDescription.style.position = 'fixed';
		aboutProjDescription.style.bottom = 0;
	}
})

console.log(78888)