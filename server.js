const express = require('express')
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());




app.get('/', function (req, res) {
    res.send('Welcome to my page...!Here i am learning node js with prince bhaiya. ')
})





const personRoutes=require('./routes/personRoutes')

app.use('/person',personRoutes);

const menuitemRoutes=require('./routes/menuitemRoutes')

app.use('/menu',menuitemRoutes);



app.listen(3000, () => {
    console.log("listening on port 3000!");
})