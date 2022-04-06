//Partition On

function partitionOn(pred, items) {
  var even = items.filter(pred);
  var odd = items.filter(function (a) {return !pred(a)});
  items.length = 0;
  items.push.apply(items, odd.concat(even));
  return odd.length;
}