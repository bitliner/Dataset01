    angular.module('datasetServices', ['ngResource']).
    factory('Dataset', function($resource) {
    	return $resource('phones/:phoneId.json', {}, {
    		query: {
    			method: 'GET',
    			params: {
    				phoneId: 'phones'
    			},
    			isArray: true
    		}
    	});
    });