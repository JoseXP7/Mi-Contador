let sumar = document.querySelector('#sumar')
let reset = document.querySelector('#reset')
let restar = document.querySelector('#restar')
let mostrar = document.querySelector('#mostrar')
let easter = document.querySelector('#easter')
let surprise = document.querySelector('#surprise')
let easteregg = document.querySelector('#audio')

let contador = 86
mostrar.innerHTML = contador

const sumarContador = () => {
	contador++
	mostrar.innerHTML = contador

	switch (contador) {
		case 10:
			mostrar.classList.add('text-primary')
			break;
		case 30:
			mostrar.classList.remove('text-primary')
			mostrar.classList.add('text-success')
			break;
		case 60:
			surprise.innerHTML = 'Estas cerca...'
			mostrar.classList.add('text-danger')
			break;
		case 80:
			surprise.classList.add('egg')
			surprise.innerHTML = '87!!!'
			break;
		case 87:
			mostrar.classList.remove('text-secondary')
			mostrar.classList.add('text-light', 'synthwave')
			easter.classList.add('web')
			surprise.innerHTML = '¡Synthwave Time!'
			surprise.classList.add('egg')
			easteregg.play()
		default:
			console.log('Parece que funciona')
			break;
	}
}

const restarContador = () => {
	contador--
	mostrar.innerHTML = contador
}

const reiniciarContador = () => {
	contador = 0
	mostrar.innerHTML = contador
	surprise.innerHTML = 'Usa los botones'
	mostrar.classList.remove('text-light', 'synthwave', 'text-primary', 'text-danger', 'text-success')
	easter.classList.remove('web')
	surprise.classList.remove('text-light')
	surprise.classList.remove('egg')
	easteregg.pause()
	easteregg.currentTime = 0
}

sumar.addEventListener('click', sumarContador)
reset.addEventListener('click', reiniciarContador)
restar.addEventListener('click', restarContador)
//josephcode_87 - I am the only one