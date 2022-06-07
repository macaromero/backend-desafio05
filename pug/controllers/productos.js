const classContenedor = require('../class/classContenedor');
const claseProductos = new classContenedor;

const createProduct = (req, res) => {
    const {title, price, thumbnail} = req.body;

    if ((title !== "") && (price !== "") && (thumbnail !== "")) {
        const product = {
            title: title,
            price: price,
            thumbnail: thumbnail
        }

        const saveProducts = async (product) => {
            await claseProductos.save(product);
            const all = await claseProductos.getAll();
    
            if (all.length !== 0) {
                res.render('products.pug', {exists: true, all});
            } else {
                res.render('products.pug', {exists: false});
            };
        };

        try {
            saveProducts(product);
        } catch (error) {
            res.json({
                "Ocurrió un error": error
            });
        }
    } else {
        res.send("Todos los campos son obligatorios, volvé a intentarlo");
    };    
};

const getProducts = (req, res) => {
    const showAll = async () => {
        const all = await claseProductos.getAll();

        if (all.length !== 0) {
            res.render('products.pug', {exists: true, all});
        } else {
            res.render('products.pug', {exists: false});
        };
    };

    try {
        showAll();
    } catch (error) {
        res.json({
            "Ocurrió un error": error
        });
    };
};

module.exports = {createProduct, getProducts}