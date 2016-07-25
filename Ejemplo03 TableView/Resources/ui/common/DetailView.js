function DetailView() {
	var self = Ti.UI.createView();
	var lbl = Ti.UI.createLabel({
		text:'Please select an item',
		height:'auto',
		width:'auto',
		color:'#000'
	});
	self.add(lbl);
	//agrega el evento itemselected y crea una funcion anonima 
	self.addEventListener('itemSelected', function(e) {
		//damos el nombre y el precio que nos fue pasado en e
		lbl.text = e.name+': $'+e.price;
	});
	
	return self;
};

module.exports = DetailView;
