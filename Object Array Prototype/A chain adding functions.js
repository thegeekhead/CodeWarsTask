//A Chain adding function

function add(x){
 var sum = function(y) {
  return add(x+y);
 };
 sum.valueOf = function(){
  return x;
 };
 return sum;
}