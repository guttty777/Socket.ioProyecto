let router = require("express").Router();
let connection = require("../database/connection");
let queries = require("../database/queries/empleado");

router.get("/lista", (req, res) => {
  connection.query(queries.listar, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.render("templates/empleados", { empleados: result });
    }
  });
});

router.get("/editar/:id", (req, res) => {
  connection.query(queries.empleado(req.params.id), (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.render("templates/editar", { empleado: result });
    }
  });
});

router.post("/editar/:id", (req, res) => {
  let data = {
    id: req.params.id,
    nombre: req.body.nombre,
    departamento: req.body.departamento,
    correo: req.body.correo,
    edad: req.body.edad,
  };

  connection.query(queries.actualizar(data), (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/empleados/lista");
    }
  });
});

router.get("/eliminar/:id", (req, res) => {
  connection.query(queries.eliminar(req.params.id), (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/empleados/lista");
    }
  });
});

router.get("/agregar", (req, res) => {
  res.render("templates/agregar");
});

router.post("/agregar", (req, res) => {
  let data = {
    nombre: req.body.nombre,
    departamento: req.body.departamento,
    correo: req.body.correo,
    edad: req.body.edad,
  };

  connection.query(queries.agregar(data), (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/empleados/lista");
    }
  });
});

module.exports = router;
