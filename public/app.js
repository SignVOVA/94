var app = angular.module('myApp', ['chart.js', 'ngRoute'])

 app.controller('gameController', function($scope, GameFactory) {

  var wordsToGuess = []
  var levelNumber = 0

  $scope.words = []
  $scope.won = false
  $scope.total = 0

  $scope.labels = []
  $scope.data = []

  $scope.nextLevel = function() {
    GameFactory.get(levelNumber).then(function(word) {
      wordsToGuess = word.words
      $scope.title = word.appTitle
    })
   }

   $scope.addWord = function(guessWord) {
      var tmpWord = wordsToGuess.filter(function(word) {
        return word.name ===  guessWord.toLowerCase()
      })


      if (tmpWord.length > 0) {
        tmpWord = tmpWord[0]
        $scope.words.push(tmpWord)
        $scope.total += tmpWord.percent
        $scope.labels.push(tmpWord.name)
        $scope.data.push(tmpWord.percent)

        if (guessedAllCorrectly()) {
          levelNumber = levelNumber+1
          $scope.nextLevel()
          $scope.words = []
          $scope.total = 0
          $scope.labels = []
          $scope.data = []
          $scope.won = false
        }
      }
   }

   guessedAllCorrectly = function() {
    $scope.won = $scope.words.length === wordsToGuess.length
    return $scope.won
   }

   $scope.nextLevel()
 })


app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        //templateUrl: 'path/to/html' //normally we will use a template url
        templateUrl : "pages/default.html"
      })
      .when('/game', {
        templateUrl : "pages/game.html",
        controller  : 'gameController'
      })
      .otherwise({
          redirectTo: '/'
}) })
