(function() {
	//determine platform and form factor and render approproate components
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
	
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
	
	var ventana;
	if (isTablet) {
		ventana = require('ui/tablet/ApplicationWindow');
	}
	else {
		ventana = require('ui/handheld/ApplicationWindow');
	}

	var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
	new ApplicationTabGroup(ventana).open();
})();
