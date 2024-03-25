var count = +prompt('정수:'); // 회전수
var mark = ''; // 기호 누적

var i = 1;
while (i <= count) {
  if (i % 2 === 1) {
    mark += '+';
  } else {
    mark += '-';
  }
  i++;
}
alert(mark);