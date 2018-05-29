module.exports = client => {
    const searchForActorByName = (name, cb) => {
        const query = "SELECT * FROM famous_people WHERE first_name ILIKE $1;";
        client.query(query, [`%${name}%`], (err, result) => {
            if (err) {
                return console.error("error running query", err);
            }
            cb(null, result.rows)
        });
    };
    return {searchForActorByName};
};