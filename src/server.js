let express = require("express");
let app = express();
let path = require("path");
let hbs = require("express-handlebars");
let cors = require("cors");
let bodyparser = require("body-parser");
let PORT = 8689;

//CONFIGURACION DE HANDLEBARS COMO MOTOR DE PLANTILLAS
app.engine("hbs", hbs({ defaultLayout: "base", extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "/public")));
require('dotenv').config()
//MIDDLEWARES
app.use(cors());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: false }));

//ENRUTADORES
let indexRouter = require("./routes/index");
let empleadoRouter = require("./routes/empleado");
let departamentosRouter = require("./routes/departamentos");

app.use("/index", indexRouter);
app.use("/empleados", empleadoRouter);
app.use("/departamentos", departamentosRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
