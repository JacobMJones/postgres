module.exports = client => {

    const searchForActorByName = (name, cb) => {
        console.log('in client name is', name);
        console.log('in search for actor');
        //const query = "SELECT * FROM famous_people WHERE first_name ILIKE $1;";
        client.select('*').from('famous_people').where({first_name: name}).asCallback(function(err, result){
       
            if(err){
                throw err        
            }
            debugger;
            cb(null, result)

        });
       // client.destroy();
    }
    return {searchForActorByName};
};