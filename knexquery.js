let lookup = process.argv[2];
const knex = require("knex");
const settings = require("./settings"); // settings.json

var client = require('knex')({
  client: 'pg',
  connection: {
    password: settings.password,
    database: settings.database,
    host: settings.hostname,
    port: settings.port,
    ssl: settings.ssl,
    user: settings.user
  }
});

movieDb = require('./knexmod.js')(client);
movieDb.searchForActorByName(lookup, (err, actors) => {
    if (err) {
        console.error("Got error", err);
        return;
    }
   console.log(actors);
})
