

var n1 = 10;
var n2 = '20';

console.log(n1 + n2);

var n3 = n1 + '';
console.log(typeof n3);

var n4 = n2 - n1 - 5 - '3';
console.log(n4);

var n5 = n1 * n2;
console.log(n5);

var n6 = 'hello' * 3;
console.log(n6);

console.log('====================');


var n7 = +'99';
console.log(true + true);
console.log(true + false);
console.log(false + false);
console.log('====================');

// falsy: '', undefined, null, 0, NaN 외우쟈!

if (0) console.log('hello-1');
if ('') console.log('hello-2');
if (undefined) console.log('hello-2');
if (null) console.log('hello-2');
if (NaN) console.log('hello-2');




if (99) console.log('hello-2');
if (0.5) console.log('hello-2');


for (var i = 1; i <= 10; i++) {
  if (i % 2) {
    console.log(`${i}는 홀수입니다`);
  } else {
    console.log(`${i}는 짝수입니다`);
  }
} 


var apple = 10;
if (apple) {
  console.log('사과가 있습니다');
} else {
  console.log('사과가 없습니다');
}