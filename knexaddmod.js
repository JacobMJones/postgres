module.exports = client => {

    const insertActor = (first_name, last_name, birthdate) => {
        console.log('new actor stuff', first_name, last_name, birthdate);
        client('famous_people').insert([{
            first_name: first_name,
            last_name: last_name,
            birthdate: birthdate
        }]).asCallback(function (err, result) {

            if (err) {
                throw err
            }
           // client.destroy();
        });
    };
    return {
        insertActor
    }
}

//is a shortcut for insertActor: insertActor