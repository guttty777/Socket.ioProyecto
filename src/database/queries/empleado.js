const empleado = {
  listar: `SELECT * FROM empleado WHERE empleado.estado = 1`,

  empleado: (id) => {
    //  return `SELECT categorias.categoria AS categoria,
    // producto.id AS id,
    //  nombre,
    //  descripcion,
    //  unidades
    //  FROM producto Where producto.id=${id}
    //  LEFT JOIN categoria
    //  ON producto.categoria = categoria.id`;

     return `SELECT * FROM empleado WHERE empleado.id=${id}`;
  },

  actualizar: (data) => {
    return `UPDATE empleado SET 
        nombre='${data.nombre}',
        departamento='${data.departamento}',
        correo='${data.correo}',
        edad=${data.edad}
        WHERE empleado.id=${data.id}`;
  },

  eliminar: (id) => {
    return `UPDATE empleado SET estado = 0 WHERE empleado.id=${id}`;
  },

  agregar: (data) => {
    return `INSERT INTO empleado
        (id, nombre, departamento, correo, edad, estado) VALUES
        (NULL, '${data.nombre}', '${data.departamento}', '${data.correo}', '${data.edad}', 1)`;
  },
};

module.exports = empleado;
