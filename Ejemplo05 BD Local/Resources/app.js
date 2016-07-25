/**
 * @author Firestorm
 */

(function() {
	//crea/abre la BD
	var db = Ti.Database.open('FSL');
	var conferencias = new Array();
	var res;
	var ventana = Ti.UI.createWindow({
		backgroundColor : 'white'
	});
	//Tiramos la tabla y la creamos para la siguiente ejecucion de la aplicacion
	db.execute('DROP TABLE if exists conferencias;');
	db.execute('CREATE TABLE conferencias(nombre TEXT);');
	//insertamos registros
	db.execute('INSERT INTO conferencias VALUES(?)','Linus Torvalds');
	db.execute('INSERT INTO conferencias VALUES(?)', 'Richard Stallman');
	db.execute('INSERT INTO conferencias VALUES(?)', 'Maddog');
	db.execute('INSERT INTO conferencias VALUES(?)', 'Miguel de Icaza');
	//cerramos la BD solo por ejemplo.
	db.close();
	
	db = Ti.Database.open('FSL');
	//ejecutamos la consulta y lo guardamos en un ResultSet res
	res = db.execute('SELECT nombre FROM conferencias');
	//recorremos todas las posiciones validas del ResultSet
	while (res.isValidRow()) {
		//Agregamos un nuevo valor a nuestro arreglo
		conferencias.push({
			title : res.fieldByName('nombre')
		});
		//tenemos que mover el puntero al proximo registro
		res.next();
	}
	//cerramos el RS y la conexion en el orden adecuado.
	res.close();
	db.close();
	var tv = Ti.UI.createTableView({
		//poblamos un TableView con los datos de la consulta
		data : conferencias
	});

	ventana.add(tv);
	ventana.open();
})();
