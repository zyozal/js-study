
var foodList = ['닭꼬치', '볶음밥', '짜장면', '족발'];

// indexOf(): 배열의 특정 요소(데이터)가 몇번 인덱스에 있는지 알려줌
var target = '짜장면';

var index = foodList.indexOf(target);
console.log(`index: ${index}`);

// includes(): 특정 데이터가 있는지 없는지 논리로 확인
var flag = foodList.includes(target);
console.log(`flag: ${flag}`);

// slice(): 배열을 원하는 범위만큼 분할
var sliced = foodList.slice(1, 3);
console.log(sliced);
// slice를 해도 복사본에서 추출을 하는 개념이라 원본은 변하지 않음

// reverse(): 배열을 역정렬 
// 원본이 변경됨
var nums = [10, 20, 30, 40, 50]
var numsCopy = nums.slice();

numsCopy.reverse();

console.log(nums);
console.log(numsCopy);

// concat(): 배열을 결합
var arr1 = [10, 20, 30];
var arr2 = [99, 999];

var concated = arr1.concat(arr2);
console.log(concated);

// splice(): 배령의 삭제 및 삽입
console.log(foodList);

foodList.splice(1, 2);
console.log(foodList);

foodList.splice(0, 1, '파스타', '보쌈');
console.log(foodList);