const mongo = require('mongodb').MongoClient;
const url = "mongodb+srv://12q1:LdS!p8cED2.sBXs@cluster0-rxrft.mongodb.net/test";

exports.inputData = (data) => {
    mongo.connect(url, (err, client) => {
        if (err) {
            console.error(err)
            return
        }
        const db = client.db('node_assignment').collection('vehicle_data');
        data.createdat = new Date()
        db.insertOne(data, (err => {
            if (err) {
                console.error(err)
                return
            }
            console.log("data input into mongo")
        }))
    })
}

exports.searchQuery = (query) => {
    console.log("searching data")
    mongo.connect(url, (err, serve) => {
        if (err) {
            console.error(err)
        }
        const db = serve.db('node_assignment').collection('vehicle_data');
        //console.log(query)
        return db.find({})
            .toArray((err, res) => {
                if (err) console.log(err);
                res;
        });

    })
}