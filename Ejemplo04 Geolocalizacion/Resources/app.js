(function() {
	var ventana= Ti.UI.createWindow({
		backgroundColor:'#black',
		title:'GPS'
	});
	//creamos un boton
	var boton=Ti.UI.createButton({
		color:'red',
		title:'Geolocalización',
		height:'auto',
		width:'auto',
	});
	var accelerometerAdded = false;
	//añadimos el evento click al boton y definimos la function
	boton.addEventListener('click', function() {
		//Para que se va a usar el GPS, 
		Ti.Geolocation.purpose = L('FSL GPS');
		//que tanta precision tiene el GPS
		Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_HIGH;
		//pedimos la posicion actual
		Ti.Geolocation.getCurrentPosition(function(e) {
			if(!e.error) {
							var lon = e.coords.longitude;
							var lat = e.coords.latitude;
							//mostramos la posicion
							Ti.UI.createAlertDialog({
							title:lon,
							message:lat
							}).show();
						 }
			else		 {//sino se pudo obtener la posicion mostramos un msg
							Ti.UI.createAlertDialog({
							title:'Error',
							message:'Imposible obtener coordenadas'					
							}).show();
						 }
		});
	});	
	
	var x = Titanium.UI.createLabel({
		text:'x:',
		top:10,
		left:10,
		font:{fontSize:14},
		color:'#555',
		width:300,
		height:'auto'
	});
	
	var y = Titanium.UI.createLabel({
		text:'y:',
		top:30,
		left:10,
		font:{fontSize:14},
		color:'#555',
		width:300,
		height:'auto'
	});
	
	var z = Titanium.UI.createLabel({
		text:'z:',
		top:50,
		left:10,
		font:{fontSize:14},
		color:'#555',
		width:300,
		height:'auto'
	});
	
	var accelerometerCallback = function(e) {
		x.text = 'x: ' + e.x;
		y.text = 'y:' + e.y;
		z.text = 'z:' + e.z;
	};
	
	Ti.Accelerometer.addEventListener('update', accelerometerCallback);
	accelerometerAdded = true;
	ventana.add(x); 
	ventana.add(y);	
	ventana.add(z);
	ventana.add(boton);
	ventana.open();
})();
