
var begin=10, end=0, step=1; 

var n = begin;


while (n >= end) {
  console.log(`${n}!!`);
  n -= step;
}

console.log('=======================');


var level = 5;
var n = 1;

while (n <= 9) {
  console.log(`${level} x ${n} = ${level * n}`);
  n++;
}


console.log('=======================');

// 10 ~ 34까지의 정수를 1씩 증가하면서 출력
var m = 10; // begin

while (m <= 34) {
  if(m % 2 === 1){// 홀수만 출력
    console.log(m);
  }
  m++;
}

console.log('=======================');

// 1 ~ 10 까지의 누적합
var total = 0;

var i = 1;

while (i <= 10) {
  total += i;
  i++;
}

console.log(total);