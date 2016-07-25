//Master View Component Constructor
function MasterView() {
	var self = Ti.UI.createView({
		backgroundColor:'white'
	});
	//un arreglo para la tabla
	var tableData = [
		{title:'Apples', price:'1.25', hasChild:true, color: '#000'},
		{title:'Grapes', price:'1.50', hasChild:true, color: '#000'},
		{title:'Oranges', price:'2.50', hasChild:true, color: '#000'},
		{title:'Bananas', price:'1.50', hasChild:true, color: '#000'},
		{title:'Pears', price:'1.40', hasChild:true, color: '#000'},
		{title:'Kiwis', price:'1.00', hasChild:true, color: '#000'}
	];
	//creamos la vista de tabla
	var table = Ti.UI.createTableView({
		//le asignamos el arreglo
		data:tableData
	});
	//agregamos la tabla a nuestra ventana
	self.add(table);
	
	//Agregamos un Listener a nuestra tabla que se active con un click
	table.addEventListener('click', function(e) {
		//invocamos el evento itemSelected que esta definido en detailView
		//pasandole los valores title y price del elemento seleccionado
		self.fireEvent('itemSelected', {
			name:e.rowData.title,
			price:e.rowData.price
		});
	});
	
	return self;
};

module.exports = MasterView;