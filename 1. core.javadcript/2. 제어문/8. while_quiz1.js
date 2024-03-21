var a = +prompt('정수A');
var b = +prompt('정수B');

var total = 0;
var i = a;

while (i <= b) {
  total += i;
  i++;
}

alert(total);