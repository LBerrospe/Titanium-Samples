/**
 * @author Firestorm
 */

function crearTabs(Window) {
	//crear grupo de tabs
	var tabs = Ti.UI.createTabGroup();
	
	//crear ventanas nuevas, notese que este Window es el que se recibe y lo que mandamos es el titulo de la ventana 
	var win1 = new Window('Primer ventana'),
		win2 = new Window('Segunda ventana');
	
	//crear tabs
	var tab1 = Ti.UI.createTab({
		title: 'Tab1',
		icon: '/images/KS_nav_ui.png',
		window: win1
	});
	var tab2 = Ti.UI.createTab({
		title: 'Tab2',
		icon: '/images/KS_nav_views.png',
		window: win2
	});
	
	//decimos en que tab estan las ventanas
	//sin esto no se puede devolver de una ventana a la anterior
	win1.containingTab = tab1;
	win2.containingTab = tab2;
	//añadimos tab1 y tab2 al TabGroup
	tabs.addTab(tab1);
	tabs.addTab(tab2);
	
	return tabs;
};

module.exports = crearTabs;