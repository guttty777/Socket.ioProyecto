const departamentos = {
  listar: `SELECT * FROM departamentos WHERE departamentos.estado = 1`,

  departamentos: (id) => {
    return `SELECT * FROM departamentos WHERE departamentos.id=${id}`;
  },

  actualizar: (data) => {
    return `UPDATE departamentos SET 
    departamento='${data.departamento}',
        descripcion='${data.descripcion}'
      
        WHERE departamentos.id=${data.id}`;
  },

  eliminar: (id) => {
    return `UPDATE departamentos SET estado = 0 WHERE departamentos.id=${id}`;
  },

  agregar: (data) => {
    return `INSERT INTO departamentos
        (id, departamento, descripcion,estado) VALUES
        (NULL, '${data.departamento}', '${data.descripcion}', 1)`;
  },
};

module.exports = departamentos;
