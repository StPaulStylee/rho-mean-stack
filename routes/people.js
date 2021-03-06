const router = require('express').Router();
const Person = require('../models/person');

router.get('/', function(req, res){
  // dataFromTheDatabase is the list of documents that match the query
  // all the people in the database
  Person.find({}).then(function(dataFromTheDatabase){
    console.log('Documents from mongo', dataFromTheDatabase);
    res.send(dataFromTheDatabase);
  });
});

router.post('/', function(req, res){
  var name = req.body.name;
  var hometown = req.body.hometown;
  var fav = req.body.favoriteMovie;
  console.log('name', name, 'hometown', hometown, 'favoriteMovie', fav);
  var personToSave = new Person({name: name, hometown: hometown, favoriteMovie: fav});
  personToSave.save().then(function(){
    console.log('saved a new person');
    res.send(201);
  });
});


module.exports = router;
