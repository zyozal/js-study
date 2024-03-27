// // 함수 선언문(정의문)
// function add(n1, n2) {
//   return n1 + n2;
// }

// // 함수 표현식
// const add = function(n1, n2) {
//   return n1 + n2
// };

// 화살표 함수
const add = (n1, n2) =>  n1 + n2;

const r1 = add(10, 20);
console.log(`r1: ${r1}`);


const sayHello = () => console.log('안녕하세요');

sayHello();

const kim = {
  name: '김철수',
  greeting: sayHello,
  dance: () => console.log('춤을 신나게 춥니다')
};

kim.dance();
kim.greeting();

const pow = n => n**2;

console.log(pow(5));

