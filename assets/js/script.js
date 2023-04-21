let equipo = ['Jose', 'Juanito', 'Andrecito'];
listaEquipo.innerHTML = equipo.join(', ');

let inputEval =
	/^[a-zA-ZÁÉÍÓÚÑáéíóúñ]+(([',. -][a-zA-ZÁÉÍÓÚÑáéíóúñ ])?[a-zA-ZÁÉÍÓÚÑáéíóúñ]*)*$/;

buttonAgregar.addEventListener('click', () => {
	// Solo se agrega si es que el nombre es válido
	if (agregarNombre.value !== '' && inputEval.test(agregarNombre.value)) {
		equipo.push(agregarNombre.value);
		listarEquipo(agregarNombre);
	} else {
		agregarNombre.value = '';
		alert('Debes ingresar un nombre válido');
	}
});
buttonBorrar.addEventListener('click', () => {
	// Solo borra si es que nombre ingresado existe dentro del array equipo
	if (equipo.includes(borrarNombre.value)) {
		let index = equipo.findIndex(
			(integrante) => integrante === borrarNombre.value
		);
		equipo.splice(index, 1);
		listarEquipo(borrarNombre);
	} else {
		borrarNombre.value = '';
		alert('Nombre ingresado no existe');
	}
});

let listarEquipo = (userInput) => {
	listaEquipo.innerHTML = equipo.join(', ');
	userInput.value = '';
};
