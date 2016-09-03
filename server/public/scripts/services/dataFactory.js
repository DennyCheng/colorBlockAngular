colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");

  //private scope
  //current array of colors (base set)
  var colors = ['red', 'blue', 'papayawhip', 'green'];

  var colorOptions = ["Bisque","Black","DarkMagenta","DarkOrchid","Salmon","Turquoise"]

  var addColor = function(inputColor){
    colors.push(inputColor);

  };


  //publicScope(enables controllers to have access to private scope variables)
  return{
  colorOptions:colorOptions,
  colors:colors,
  addColor: function(inputColor){
    console.log("we are at the return scope");
    console.log(colors);
    addColor(inputColor)
    //takes the inputColor and calls the addColor private function
  }
};

}]);
