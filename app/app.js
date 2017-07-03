(function () {
    'use strict';

    angular.module('app', [
        "ui.router"
    ])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider.state("recipes", {
                url: "/",
                templateUrl: "/views/recipe/index.html",
                controller: "recipeController"
            }).state("create", {
                url: "/create",
                templateUrl: "/views/recipe/create.html",
                controller: "recipeController"
            }).state("edit", {
                url: "/edit/:id",
                templateUrl: "/views/recipe/create.html",
                controller: "recipeController"
            }).state("details", {
                url: "/details/:id",
                templateUrl: "/views/recipe/details.html",
                controller: "recipeController"
            });
        })
        .constant("globalConfig", {
            apiAddress: 'http://localhost:3000/api'
        });
})();