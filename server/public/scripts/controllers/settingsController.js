colorBlocks.controller('SettingsController',['$scope', 'DataFactory',function($scope,DataFactory) {
  console.log("settings controller running");

  $scope.dataFactory = DataFactory;
  $scope.colorOptions = $scope.dataFactory.colorOptions

  $scope.submitNewColor = function(){
    console.log("color we have is ",$scope.selectedColor);
    $scope.dataFactory.addColor($scope.selectedColor);
    $scope.selectedColor ="";
  };

}]);
