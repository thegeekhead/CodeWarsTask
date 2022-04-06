//Prefill an array

function prefill(n, v) {
  isValid(n);
  const arr = [];
  arr.length = n;
  arr.fill(v);
  return arr;
}

function isValid(n) {
  if ( typeof n === 'boolean' || !isFinite(n) || !Number.isInteger(Number(n)) || Number(n) < 0)
    {
      throw new TypeError(`${n} is invalid`)
    }
}