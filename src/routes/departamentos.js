let router = require("express").Router();
let connection = require("../database/connection");
let queries = require("../database/queries/departamentos");

router.get("/lista", (req, res) => {
  connection.query(queries.listar, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.render("templates/departamentos", { departamentos: result });
    }
  });
});

router.get("/editar/:id", (req, res) => {
  connection.query(queries.departamentos(req.params.id), (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.render("templates/editardepartamentos", { departamentos: result });
    }
  });
});

router.post("/editar/:id", (req, res) => {
  let data = {
    id: req.params.id,
    departamento: req.body.departamento,
    descripcion: req.body.descripcion,
  };

  connection.query(queries.actualizar(data), (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/departamentos/lista");
    }
  });
});

router.get("/eliminar/:id", (req, res) => {
  connection.query(queries.eliminar(req.params.id), (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/departamentos/lista");
    }
  });
});

router.get("/agregar", (req, res) => {
  res.render("templates/agregardepartamentos");
});

router.post("/agregar", (req, res) => {
  let data = {
    departamento: req.body.departamento,
    descripcion: req.body.descripcion,
  };

  connection.query(queries.agregar(data), (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/departamentos/lista");
    }
  });
});

module.exports = router;
