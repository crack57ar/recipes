(function () {
    'use strict';

    angular
        .module('app')
        .controller('recipeController', Controller);

    Controller.$inject = ['$scope', '$rootScope', 'recipeService', '$state', '$stateParams'];

    function Controller($scope, $rootScope, recipeService, $state, $stateParams) {
        $scope.recipes = [];

        if ($state.current.name == "recipes") {
            $rootScope.Title = "Recipe Listing";
            recipeService.getRecipes().then(function (res) {
                $scope.recipes = res.data;
            }).catch(function (err) {
                console.log(err);
            });

            $scope.deleteRecipe = function (id) {
                if (confirm('Are you sure to delete?')) {
                    recipeService.deleteRecipe(id).then(function (res) {
                        if (res.data == "deleted") {
                            $state.go("recipes", {}, { reload: true });
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            };
        } else if ($state.current.name == "edit") {
            $rootScope.Title = "Edit recipe";
            var id = $stateParams.id;
            recipeService.getRecipe(id).then(function (res) {
                $scope.recipe = res.data;
            }).catch(function (err) {
                console.log(err);
            });

            $scope.saveData = function (recipe) {
                if ($scope.recipeForm.$valid) {
                    recipeService.updateRecipe(recipe).then(function (res) {
                        if (res.data == "updated") {
                            $state.go("recipes");
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            };
        } else if ($state.current.name == "create") {
            $rootScope.Title = "Create recipe";
            $scope.saveData = function (recipe) {
                $scope.IsSubmit = true;
                if ($scope.recipeForm.$valid) {
                    recipeService.createRecipe(recipe).then(function (res) {
                        if (res.data == "created") {
                            $state.go("recipes");
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            };
        }
    }
})();