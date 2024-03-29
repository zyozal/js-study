const employee = {
  empName: '뽀로로',
  age: 10,
  hireDate: '20200130',
  birthDate: '20151231'
};

const {empName, hireDate} = employee;
console.log(empName, hireDate);


function foo({empName, age}) {
  console.log(`이름은 ${empName}`);
  console.log(`나이는 ${age}`);
}

const age = 10;
const {age: empAge, birthDate} = employee;
console.log(empAge);


// const divStyle = {
//   'font-size': '18px',
//   'backgrond-color': 'red'
// };

// const {'font-size': fontSize, 'backgrond-color':}


const dog = {
  kind: '말티즈',
  name: '해피',
  age: 3,
  injection: false
};

const {kind, age: petAge, ...rest} = dog;
console.log(kind);
console.log(petAge);
console.log(rest);


// 객체 안전 복사
const copyDog = {...dog};

const copyDog2 = {
  ...dog,
  age: 20,
  favorite: ['산책']
};
console.log(copyDog2);