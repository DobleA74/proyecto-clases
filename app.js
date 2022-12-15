const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})
app.use(express('public'));
const publicFolderPath = path.resolve(__dirname, './public');
app.use (express.static(publicFolderPath));

app.listen(3030, ()=>{
    console.log('Servidor corriendo en el puerto 3030');
})