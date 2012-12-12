    function DatasetCtrl($scope, $http) {
        $http.get('/test_set.json').success(function(data) {
            //console.log('data',data,typeof data)
            console.log(data[0].text);
            data = _.sortBy(data, function(d) {
                return d.text
            })
            $scope.rows = data
        })

        $scope.orderName = 'text'
    }