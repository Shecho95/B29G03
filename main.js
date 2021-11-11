// main.js

const Promise = require('bluebird')
const AppDAO = require('./dao')
const ProductRepository = require('./ProductRepository')

function main() {
  const dao = new AppDAO('./DataBase.db')
  const productRepo = new ProductRepository(dao)
  productRepo.createTable()
    .then(() => {
        const productos = [
        {
            Nombre: 'Outline',
            Descripcion: 'High level overview of sections',
            Categoria: "Hogar",
            Precio: 2
        },
        {
            Nombre: 'Outline2',
            Descripcion: 'Low level overview of sections',
            Categoria: "Aseo",
            Precio: 3
        }]
        return Promise.all(productos.map((producto) => {
            const { Nombre, Descripcion, Categoria, Precio } = producto
            return productRepo.create(Nombre, Descripcion, Categoria, Precio)
        }))
    })
    .then(() => productRepo.getAll())
    .then((productos) => {
       console.log('\nRetrieved project tasks from database')
       return new Promise((resolve, reject) => {
           productos.forEach((producto) => {
            console.log(`SKU = ${producto.SKU}`)
            console.log(`Nombre = ${producto.Nombre}`)
            console.log(`Descripcion = ${producto.Descripcion}`)
            console.log(`Categoria = ${producto.Categoria}`)
            console.log(`Precio = ${producto.Precio}`)
         })
       })
     })
    .catch((err) => {
       console.log('Error: ')
       console.log(JSON.stringify(err))
    })
}

main()