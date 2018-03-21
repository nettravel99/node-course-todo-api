const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to Mongodb Server');

    }
    console.log('Connected to MongoDB server');
    // const db = client.db('TodoApp'); db     .collection('Todos')     .insertOne({
    //         text: 'Something to do',         completed: false     }, (err,
    // results) => {         if (err) {             return console.log("Unable to
    // insertOne Todo", err);         } console.log(JSON.stringify(results.ops,
    // undefined, 2));     }); Add to the USERS database

    const db = client.db("USERS");
    db
        .collection("USERS")
        .insertOne({
            name: "George",
            age: 30,
            location: 'California'
        }, (err, results) => {
            if (err) {
                return console.log("Error:", err);
            }

            console.log(JSON.stringify(results.ops, undefined, 2))

        });

    client.close();

})