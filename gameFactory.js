 app.factory('GameFactory', function($q) {
  var LEVELS = [
    {
      appTitle: 'Coding Languages',
      words: [
        {name:"java", percent:55},
        {name:"angularjs", percent:30},
        {name:"python", percent:10}
      ]
    },{
      appTitle: 'Vegetables',
      words: [
        {name:"potato", percent:25},
        {name:"carrot", percent:25},
        {name:"cabbage", percent:25},
        {name:"leek", percent:25}
      ]
    },{
      appTitle: 'Car make',
      words: [
        {name:"vw", percent:35},
        {name:"ford", percent:19},
        {name:"ferrafi", percent:23}
      ]
    }
  ]
  return {
    get: function(levelNumber) {
      return $q(function(resolve, reject) {
        if (LEVELS[levelNumber]) resolve(LEVELS[levelNumber])
        else reject("level not found")
      })
    }
  }
 })
