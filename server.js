
var express = require("express"),
    fs = require("fs"),
    path = require("path"),
    bodyParser = require("body-parser"),
    MongoClient = require("mongodb").MongoClient,
    assert = require('assert'),
    cors = require("cors"),
    shortid = require('shortid');

var url = 'mongodb://45.55.214.123:27017';
var db;


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');


var findDocuments = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('cards');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs);
        callback(docs);
    });
};

app.use(express.static("./public/"));

//START DATABASE!
MongoClient.connect(url, function(err, database) {
    assert.equal(null, err);
    db = database;
    console.log("Connected successfully to server");

});


var image_name;

app.get("/", cors(), function(req, res){
    //UNCOMMENT BELOW TO CLEAR DB
    //db.collection('cards').remove({});
    console.log(req.method);
    console.log(__dirname);
    if (req.url === '/'){
        res.render('index');
    }

});
app.post("/", cors(), function(req, res){

    console.log("posted");

    // var body = [];
    // req.on('data', function(chunk){
    //     body.push(chunk);
    // }).on('end', function(){
    //     body = Buffer.concat(body).toString();
    //     var base64Data = body.replace(/data:image\/png;base64,/g,"");
    //
    //     var newBody = JSON.parse(base64Data);
    //
    //     //console.log(newBody);
    //
    //     var image_path = __dirname+"/public/images/";
    //     image_name = shortid.generate();
    //     db.collection('cards').insert( { _id: image_name, link: newBody.myLink} );
    //
    //     findDocuments(db, function(docs){
    //         console.log(docs);
    //         db.close;
    //     });
    //
    //
    //     fs.writeFile(image_path + image_name + "-front"+'.png', newBody.front, 'base64', function(err){
    //         if (err){
    //             console.log(err);
    //         }else{
    //             console.log("saved image");
    //             res.send(image_name);
    //         }
    //     });
    //     fs.writeFile(image_path + image_name + "-back"+ '.png', newBody.back, 'base64', function(err){
    //         if (err){
    //             console.log(err);
    //         }else{
    //             console.log("saved image");
    //         }
    //     });
    //     fs.writeFile(image_path + image_name + "-inside"+'.png', newBody.inside, 'base64', function(err){
    //         if (err){
    //             console.log(err);
    //         }else{
    //             console.log("saved image");
    //         }
    //     })
    })
    //res.redirect('/users/'+ image_name);


});
app.post("/redirect/", function(req, res){
    res.redirect('/users/'+ image_name);

});
// app.get("/users/:image_name", function(req, res){
//     var id = req.params.image_name;
//     var image_path = "/images/";
//
//     db.collection('cards').find({_id: id}).toArray(function(err, docs) {
//         assert.equal(err, null);
//         console.log("Found the following records");
//
//         console.log("DOCS:", docs);
//
//         res.render('cardTemplate', {
//             frontImage: image_path + id + "-front.png" ,
//             backImage: image_path +id + "-back.png" ,
//             insideImage: image_path +id + "-inside.png",
//             myLink: docs[0].link
//         });
//
//     });
    
    //console.log(myLink);


   
    
});

app.post("/users/:image_name", function(req, res){
    res.redirect('/');
    image_name ="";
});


app.listen(3000, function(req, res){
    console.log("We are listening on port 3000!");

});

