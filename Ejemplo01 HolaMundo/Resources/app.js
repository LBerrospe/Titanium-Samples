// This is a single context application with mutliple windows in a stack
(function() {
	//determine platform and form factor and render approproate components
	var osname = Ti.Platform.osname;
	var ventana= Ti.UI.createWindow({
		backgroundColor:'#000000'
	});


	var mensaje = Ti.UI.createLabel({
		color:'#FFFFFF',
		text:'Hola mundo en '+ osname,
		height:'auto',
		width:'auto'
	});	
	ventana.add(mensaje);
	
	ventana.open();
})();
