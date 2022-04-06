//Get middle character

function getMiddle(s)
{
  var len,pos;
  if(s.length % 2 == 1) {
    pos = s.length/2;
    len=1;
  } else {
    pos = s.length/2 - 1;
    len = 2;
  }
  return s.substring(pos, pos+len);
}