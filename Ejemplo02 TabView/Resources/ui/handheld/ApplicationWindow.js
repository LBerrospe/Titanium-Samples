function ApplicationWindow(title) {
	var ventana = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
	
	var button = Ti.UI.createButton({
		height:44,
		width:200,
		title:'Abrir ventana',
		top:20
	});
	ventana.add(button);
	
	button.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		ventana.containingTab.open(Ti.UI.createWindow({
			title: L('Hija de ' + title),
			backgroundColor: 'white'
		}));
	});
	
	return ventana;
};

module.exports = ApplicationWindow;
