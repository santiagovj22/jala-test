const mysqlConnection = require('./database');

class TranslateWord {

    async saveData (req,res) {
        const {id,lang,text, text_translate} = req.body;
        const traductor = [id,lang,text,text_translate]
        const insertData = 'INSERT INTO translate(id,lang, text, text_translate) VALUES(?,?,?,?)';
        mysqlConnection.query(insertData, traductor, (err,results,fields) => {
            if(!err) {
                res.send({message: 'Add data succesfully'}).status(200)
            } else {
                return console.log(err);
            }
        });
    };


}
module.exports = new TranslateWord();