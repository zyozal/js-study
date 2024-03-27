
let x;
console.log(x);

// const: 상수 선언
const y = '메롱';
y = 'ggg';
console.log(y);


// 상수는 객체의 불변성을 유지할 수 있다.
const kim = {
  name: '김철수',
  age: 30
};
kim.age = 31;
kim.name = '마이클 킴';