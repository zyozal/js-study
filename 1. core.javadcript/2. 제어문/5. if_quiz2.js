

// var numA = +prompt('정수A');
// var numB = +prompt('정수B');
// var numC = +prompt('정수C');


// if (numA === numB && numB === numC) {
//   alert('3개 값이 모두 같다');
// } else if (numA === numB || numB === numC || numC === numA) {
//   alert('2개 값이 같다.');
// } else {
//   alert('다른 값입니다.');
// }


// 두 수의 차이 구하기
var a = +prompt('정수A');
var b = +prompt('정수B');

var diff = (a > b) ? a = b : b -a;
alert(`두 값의 차이는 ${diff}입니다.`);


// 3개의 정수 중 최솟값 구하기
var a = +prompt('정수A');
var b = +prompt('정수B');
var c = +prompt('정수C');

// min: 최솟값을 저장해 놓을 변수
var min = a;
if (b < min) min = b;
if (c < min) min = c;

alert(`최솟값은 ${min}입니다`);