const express = require ('express');
const app = express();
const PORT = 8080;
const main = require('./routes/main');
const products = require('./routes/productos');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set('views', './views');
app.set('view engine', 'pug');



app.use('/productos', products);
app.use('/', main);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});