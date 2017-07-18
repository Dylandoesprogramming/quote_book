angular.module("quoteBook").controller("cntrl",function($scope,srvc){
  $scope.inputQuotes = {};
  $scope.quotes = srvc.getQuote();
  $scope.sortType = "descending";
  $scope.sortOrder = "-";

  $scope.changeSort = function(){
    if($scope.sortType === "descending"){
      $scope.sortOrder = "+";
      $scope.sortType = "ascending";
    }
    else{
      $scope.sortOrder = "-";
      $scope.sortType = "descending";
    }
  }
  for(var i= 0; i < $scope.quotes.length; i++){
    $scope.quotes[i].id = i;
  }

  $scope.removeQuote = function(quote){
    var index = $scope.quotes.indexOf(quote)
    return srvc.removeQuote(index);
  }
  $scope.addQuote = function(newQuote,author){
    console.log("trying to add")
    return srvc.addQuote(newQuote,author);
  }



});//end controller
