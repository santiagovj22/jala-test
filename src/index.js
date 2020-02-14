const express = require('express');
const app = express();
const cors = require('cors');
require('./database');

app.set(('port'), process.env.PORT || 3000);

app.use(express.json())
app.use(cors());

app.use(require('./routes'))

app.get('/', (req,res) => {
    res.send('principal');
})

app.listen(app.get('port'), () => {
    console.log(`Server Listenning ${app.get('port')}`);
})