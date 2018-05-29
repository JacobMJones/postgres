let lookup = process.argv[2];
const pg = require("pg");
const settings = require("./settings"); // settings.json
const client = new pg.Client({
    user: settings.user,
    password: settings.password,
    database: settings.database,
    host: settings.hostname,
    port: settings.port,
    ssl: settings.ssl
});

movieMod = require('./mod.js')(client);


movieMod.searchForActorByName(process.argv[2], (err, actors) => {
    if (err) {
        console.error("Got error", err);
        return;
    }
   console.log(actors);
})

client.connect((err) => {
    if (err) {
        return console.error("Connection Error", err);
    }

});

