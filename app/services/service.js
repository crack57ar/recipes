(function () {
    'use strict';

    angular
        .module('app')
        .factory('recipeService', Service);

    Service.$inject = ['$http', 'globalConfig'];

    function Service($http, globalConfig) {
        var url = "";
        return {
            getRecipes: function () {
                url = globalConfig.apiAddress + "/recipe";
                return $http.get(url);
            },
            getRecipe: function (id) {
                url = globalConfig.apiAddress + "/recipe/" + id;
                return $http.get(url);
            },
            createRecipe: function (recipe) {
                url = globalConfig.apiAddress + "/recipe";
                return $http.post(url, recipe);
            },
            updateRecipe: function (recipe) {
                url = globalConfig.apiAddress + "/recipe/" + recipe._id;
                return $http.put(url, recipe);
            },
            deleteRecipe: function (id) {
                url = globalConfig.apiAddress + "/recipe/" + id;
                return $http.delete(url);
            }
        };
    }
})();