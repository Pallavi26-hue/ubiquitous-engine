(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {

  $scope.itemsforlunch = "";
  $scope.totalItemsLunch = 0;

  
 $scope.CheckItems = function(){

    var totalItems = 0;
    $scope.totalItemsLunch = totalItems;
    return "hello";
    };

    function calculateNumberOfWords(string){
      return str.split(' ').length;
      console.log(calculateNumberOfWords(string))
    };

  

  
    
      
  

  }
      

      
      
    
    
    })(); 