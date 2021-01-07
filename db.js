const mysql = require('mysql');
const settings = require('./settings.json');
const util = require('util');
const db;

function connectDatabase(){
    if(!db){
        db = mysql.createConnection(settings);

        db.connect(function(err){
            if(!err){
                console.log('Ya estas conectado a la basde de datos!');
            } else {
                console.log('Error conectando a la base de datos!');
            }
        });
    }
    db.query = util.promisify(db.query);
    return db;
}

module.exports = connectDatabase();