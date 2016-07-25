function ApplicationWindow() {
	var MasterView = require('ui/common/MasterView'),
		DetailView = require('ui/common/DetailView');
	var self = Ti.UI.createWindow({
		title:'Products',
		exitOnClose:true,
		navBarHidden:false,
		backgroundColor:'#ffffff'
	});
	var masterView = new MasterView();
	self.add(masterView);

	masterView.addEventListener('itemSelected', function(e) {
	//en el momento que se seleccione un item creamos una
	//vista a detalle
		var detailView = new DetailView();
		var detailContainerWindow = Ti.UI.createWindow({
			title:'Product Details',
			navBarHidden:false,
			backgroundColor:'#ffffff'
		});
		detailContainerWindow.add(detailView);
		//llamamos al evento itemselected
		detailView.fireEvent('itemSelected',e);
		detailContainerWindow.open();
	});
	
	return self;
};

module.exports = ApplicationWindow;
