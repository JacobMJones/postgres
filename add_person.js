let first_name = process.argv[2];
let last_name = process.argv[3];
let birthdate = process.argv[4];


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

const addActor = require('./knexaddmod.js')(client);
addActor.insertActor(first_name, last_name, birthdate);