//A Function within a function

function always (n) {
  return function() {
    return n;
  }
}