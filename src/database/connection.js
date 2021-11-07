let mysql = require("mysql");
let cnx = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  multipleStatements: true,
});

cnx.connect((err) => {
  if (!err) {
    console.log(`Database connection successfull`);
  } else {
    console.log(`An error has ocurred: ${err}`);
  }
});

module.exports = cnx;
