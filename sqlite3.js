var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('rapid-hapi');

db.serialize(function() {
	/*db.run("CREATE TABLE test (info TEXT)");

	var stmt = db.prepare("INSERT INTO test VALUES (?)");

	for (var i = 0; i < 10; i++) {
		stmt.run("Ipsum " + 1);
	}

	stmt.finalize();*/

	db.each("SELECT rowid AS id, info FROM test", function(err, row) {
		console.log(row.id + ": " + row.info);
	}) ;
});

db.close();