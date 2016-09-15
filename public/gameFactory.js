 app.factory('GameFactory', function($q, $http) {
  return {
    get: function(levelNumber) {
      return $q(function(resolve, reject) {
        $http.get('/api/game/level/'+levelNumber).then(function(res){
          resolve(res.data)
        }, function(err){
          reject(err)
        })
      })
    }
  }
 })
