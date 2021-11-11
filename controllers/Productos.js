const Producto = require('../models/Producto');

const productsGet = (req, res) => {
    res.json({ msg: "get Products controller" });
}

const productsPost = (req, res) => {
   // const {Nombre, Descripcion, Categoria, Precio} = req.body;

    Producto.create(req.body)
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({msg: error.message});
      });
       
    //res.json({ msg: "Post Products controller", Nombre});
}

const productsGetBySKU = (req, res) => {
    res.json({ msg: "get by SKU Products controller" });
}

const productsPut = (req, res) => {
    res.json({ msg: "put Products controller" });
}

const productsDelete = (req, res) => {
    res.json({ msg: "delete Products controller" });
}

module.exports = {
    productsGet, productsPost, productsGetBySKU, productsPut, productsDelete
}