const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'santiago1998',
    database: 'miprueba',
    multipleStatements:true
});

mysqlConnection.connect((err) => {
    if (err){
        console.log(err);
        return;
    } else {
        console.log('DB is connected')
    }
});

module.exports = mysqlConnection;