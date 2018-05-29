let lookup = process.argv[2];
console.log('lookup', lookup);

const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});


client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  console.log('connection accepted');
  console.log('lookup', lookup);
  client.query(`SELECT * FROM famous_people WHERE first_name LIKE '%${lookup}%'`, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log('results', result.rows); 
    client.end();
  });
});
