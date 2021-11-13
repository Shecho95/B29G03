const Usuario = require('../models/Usuario');


const usersGet = (req, res) => {
    res.json({ msg: "get users controller" });
}

const usersPost = (req, res) => {
    Usuario.create(req.body)
      .then(result => res.json(result))
      .catch(err => {
        console.log('***There was an error creating a producto', JSON.stringify(result))
        return res.status(400).send(err)
      });

    //res.json({ msg: "Post users controller", name, author });
}

const usersGetBySKU = (req, res) => {
    res.json({ msg: "get by SKU users controller" });
}

const usersPut = (req, res) => {
    res.json({ msg: "put users controller" });
}

const usersDelete = (req, res) => {
    res.json({ msg: "delete users controller" });
}

module.exports = {
    usersGet, usersPost, usersGetBySKU, usersPut, usersDelete
}