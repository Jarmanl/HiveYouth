var app = angular.module('custom',[]);

app.controller('nameMe' , function($scope){

})

app.directive('navMenu',function(){
  return{
    restrict:'E',
    templateUrl:'/html/nav-menu.html'
  };
});
