//Este archivo es para la configuracion con firebase

(function() {
	// Inicializar Firebase
	const config = {
	apiKey:" AIzaSyCJMJhk0XagLsoSaKZH9faNIsdiSQf7gIk",
	authDomain: "fir-database-26701.firebaseapp.com",
	databaseURL: "https://fir-database-26701.firebaseio.com",
	storageBucket: "fir-database-26701.appspot.com",
	};

	firebase.initializeApp(config);

	//GET ELEMENTS
	const preObject = document.getElementById('pedro');
	

	
	// Creamos la referencia que nos llevara a la raiz de la base de datos
	const ref = firebase.database().ref().child('pedro');

	
	// Sincronizar object cambios
	ref.on('value', snap => {
		preObject.innerText = JSON.stringify(snap.val(), null, 3);
	});
	
	}());
