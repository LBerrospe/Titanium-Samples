
(function() {
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
	
		var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
	
	var Window;
	if (isTablet) {
		Window = require('ui/tablet/ApplicationWindow');
	}
	else {
		if (osname === 'iphone') {
			Window = require('ui/handheld/ios/ApplicationWindow');
		}
		else if (osname == 'mobileweb') {
			Window = require('ui/handheld/mobileweb/ApplicationWindow');
		}
		else {
			Window = require('ui/handheld/android/ApplicationWindow');
		}
	}
	new Window().open();
})();
