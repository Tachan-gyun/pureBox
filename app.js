/* FUNCIONALIDAD EXPRESS */
const express = require ('express');
const app = express ();
const path = require ('path');

/* METHOD OVERRIDE */
const methodOverride= require('method-override');

/*SESSION*/
const session = require('express-session');

/* RUTAS */

const mainRoutes = require('./routes/mainRoutes');

/* CONFIG EJS */

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* RUTAS */

app.use('/', mainRoutes);


/* CONFIGURACION DE ARCHIVOS PUBLICOS */

app.use(express.static('public'))

/* ARCHIVO JS */

app.get('/JS', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './JS/script.js'))
});


/* SERVIDOR */
const PORT= process.env.PORT || 3000

app.listen(PORT, (req,res)=>{
    console.log('listening to port http://localhost:'+ PORT)
})