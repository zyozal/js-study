

var arr = [10, 20, 30, 40];
console.log(typeof arr);

console.log(arr[1]);

console.log(arr[2] ** 2);

arr[1] = 999;
arr[3]++;

console.log(arr);

// 배열 데이터 수 확인
console.log(arr.length);


// 배열 데이터 순회
console.log('==============');

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for ~ of 반복문 (배열 전용 반복문)
var weekDays = ['월','화','수','목','금','토','일']
console.log('================');

// for (var i = 0; i < weekDays.length; i++) {
//   console.log(`${weekDays[i]}요일`);
// }

for (var day of weekDays) {
  console.log(`${day}요일`);
}

// 배열 생성 관례: 이름 복수형, ~List 어미 ex) fruits, fruitList 