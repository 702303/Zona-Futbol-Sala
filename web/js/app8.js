//Este archivo es para la configuracion con firebase

(function() {
	// Inicializar Firebase


	//GET ELEMENTS
	const preObject = document.getElementById('saturno');
	
	// Creamos la referencia que nos llevara a la raiz de la base de datos
	const ref = firebase.database().ref().child('saturno');
	
	// Sincronizar object cambios
	ref.on('value', snap => {
		preObject.innerText = JSON.stringify(snap.val(), null, 3);
	});
	
	}());
