(function(){
  'use strict'

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.message = "";
    $scope.messageColor="";

    $scope.displayProperMessage = function (commaSeparatedDishes){
        var dishArray = [];
        // inputText should be a comma separated string
        // Check if input text is empty or has whitespaces
        if (commaSeparatedDishes==null){
          $scope.message = "Please enter data first";
          $scope.messageColor="red";
        }
        else if (commaSeparatedDishes=="") {
          $scope.message = "Please enter data first";
          $scope.messageColor="red";
        }
        else {
          // Split comma separated strings into an array
          var count=0;
          dishArray=commaSeparatedDishes.split(',');
          for (var i =0;i<dishArray.length;i++){
            if (dishArray[i].trim()!=""){
              count++;
            }
          }
          if (count == 0){
            $scope.message = "Please enter data first";
            $scope.messageColor="red";
          }
          else if (count <= 3 ){
            $scope.message = "Enjoy!";
            $scope.messageColor="green";
          }
          else {
            $scope.message = "Too much!";
            $scope.messageColor="green";
          }
        }
    };

  };
})();
