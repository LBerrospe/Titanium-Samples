function ApplicationWindow() {
	var MasterView = require('ui/common/MasterView'),
		DetailView = require('ui/common/DetailView');
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
	//creamos las ventanas de tipo MasterView y DetailView
	var masterView = new MasterView(),
		detailView = new DetailView();
	var masterContainerWindow = Ti.UI.createWindow({
		title:'Products'
	});
	masterContainerWindow.add(masterView);
	var detailContainerWindow = Ti.UI.createWindow({
		title:'Product Details'
	});
	detailContainerWindow.add(detailView);
	
	//el nav bar agrupa a master y detail para que se pueda
	//mover entre ellas
	var navGroup = Ti.UI.iPhone.createNavigationGroup({
		window:masterContainerWindow
	});
	self.add(navGroup);
	//llamamos al evento itemselected
	masterView.addEventListener('itemSelected', function(e) {
		detailView.fireEvent('itemSelected',e);
		navGroup.open(detailContainerWindow);
	});
	
	return self;
};

module.exports = ApplicationWindow;
