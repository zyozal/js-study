// js는 정수 나눗셈이어도 실수 결과값이 나옴
console.log(27 / 5);

// 나머지 연산
console.log(27 % 5);

// 뒤에 숫자가 더 크면 앞에 숫자가 그대로 나머지, 몫은 0
console.log(4 % 10);

console.log(5 % 0); // 나눗셈 불가
console.log(0 % 5); // 몫과 나머지 전부 0

// 제곱 연산
console.log(3 ** 4);

console.log('================');

// 증감 연산자
var x = 3; 
x++;
console.log(`x: ${x}`);

// 전위 연산, 후위 연산
var n1 = 10;
var n2 = n1++;
console.log(`n1: ${n1}, n2: ${n2}`);

var n3 = 10;
var n4 = ++n3;
console.log(`n3: ${n3}, n4: ${n4}`);


var xx = 5;
xx++; // 속도 빠름 1 올리고 내릴 때는 ++ -- 쓰는 게 나음
xx = xx + 1; // 1 말고 다른 거 일 때

xx += 1; // xx = xx + 1; 
xx -= 1; // xx = xx - 1;
xx * 3; // 값 5
xx *= 3; // 15 =을 해야 xx에 대입됨
console.log(`xx: ${xx}`);