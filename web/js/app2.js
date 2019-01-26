//Este archivo es para la configuracion con firebase

(function() {
	// Inicializar Firebase


	//GET ELEMENTS
	const preObject2 = document.getElementById('unai');
	
	// Creamos la referencia que nos llevara a la raiz de la base de datos
	const ref2 = firebase.database().ref().child('unai');
	
	// Sincronizar object cambios
	ref2.on('value', snap => {
		preObject2.innerText = JSON.stringify(snap.val(), null, 3);
	});
	
	}());
