class ProductRepository {
    constructor(dao) {
      this.dao = dao
    }
  
    createTable() {
      const sql = `
      CREATE TABLE IF NOT EXISTS "Productos" (
        "SKU"	INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
        "Nombre"	TEXT,
        "Descripcion"	TEXT,
        "Categoria"	TEXT,
        "Precio"	NUMERIC)`
      return this.dao.run(sql)
    }

    create(Nombre, Descripcion, Categoria, Precio ) {
        return this.dao.run(
          'INSERT INTO Productos (Nombre, Descripcion, Categoria, Precio) VALUES (?, ?, ?, ?)',
          [Nombre, Descripcion, Categoria, Precio])
    }
    
    update(Productos) {
        const { SKU, Nombre, Descripcion, Categoria, Precio } = Productos
        return this.dao.run(
          `UPDATE Productos
          SET Nombre = ?,
            Descripcion = ?,
            Categoria = ?,
            Precio = ?
          WHERE SKU = ?`,
          [Nombre, Descripcion, Categoria, Precio, SKU]
        )
    }

    delete(SKU) {
        return this.dao.run(
          `DELETE FROM Productos WHERE SKU = ?`,
          [SKU]
        )
    }

    getBySKU(SKU) {
        return this.dao.get(
          `SELECT * FROM Productos WHERE SKU = ?`,
          [SKU])
    }

    getAll() {
        return this.dao.all(`SELECT * FROM Productos`)
      }
  }
  
  module.exports = ProductRepository;