"use strict";angular.module("app",["ngRoute"]).config(["$routeProvider","$locationProvider",function(a,b){b.hashPrefix(""),a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/:id",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("app").controller("MainCtrl",["$scope","StoryService","$routeParams",function(a,b,c){var d=c.id||"start";b.hasOwnProperty(d)?a.data=b[d]:(a.data={},a.data.story=["Mistakes have been made!  :("],a.data.routes=null),angular.forEach(b,function(a){angular.forEach(a.routes,function(a){b.hasOwnProperty(a.to)||console.log("Can't find "+a.to)})})}]),angular.module("app").service("StoryService",function(){return{start:{story:["It's a Friday night","What do you do?"],routes:[{to:"party",text:"Party"},{to:"notparty",text:"Not Party"}]},party:{story:["Where's the party at?","You need to write the rest of the story."],routes:[]},notparty:{story:["You have a nap and dream about about an awesome party."],routes:[{to:"party",text:"Party"},{to:"start",text:"Not Party"}]}}});