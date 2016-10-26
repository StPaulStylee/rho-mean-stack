angular.module('meanApp')
       .controller('PeopleController', PeopleController);

function PeopleController($http) {
  console.log('PeopleController loaded');
  var controller = this;
  controller.people = [];

  controller.listPeople = function(){
    console.log('Listing people');
    $http.get('/people').then(function(response){
      console.log('GET response', response);
      controller.people = response.data;
    }, function(error){
      console.log('error making request', error);
    });
  };

  controller.personDetails = function () {
    $http.get('/people').then(function(reponse){
      contorller.people = response.data;
    }, function(error) {
      console.log('Error making GET request', error);
    });
  };

  controller.addPerson = function() {
    var data = {
      name: controller.name,
      hometown: controller.hometown,
      favoriteMovie: controller.fav
    };

    $http.post('/people', data).then(function(response){
      console.log('POST response', response);
    });
  };
}
