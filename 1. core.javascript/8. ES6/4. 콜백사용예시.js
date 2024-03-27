// 정수 n을 전달하면 1 ~ n까지의 모든 짝수를 출력
function showEvenNumber(n) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      nums.push(i);
    }
  }
  console.log(nums);
}

function showOddNumber(n) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      nums.push(i);
    }
  }
  console.log(nums);
}

function showOddOrEvenNumber(n, isOdd) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === isOdd) {
      nums.push(i);
    }
  }
  console.log(nums);
}

function showTripleNumber(n, x) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % x === 0) {
      nums.push(i);
    }
  }
  console.log(nums);
}

// showOddOrEvenNumber(7, 1);

// 콜백을 이용한 솔루션
// 정수 n을 전달하면 1 ~ n까지의 정수를 조건에 맞게 출력
function showNumber(n, condition) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (condition(i)) {
      nums.push(i);
    }
  }
  console.log(nums);
}

showNumber(50, function(i){
  return i % 2 === 0;
});









function makeCook(recipeName, recipeCode) {
  console.log('나만의 레시피');
  console.log(`요리이름: ${recipeName}`);
  // 실제 레시피 출력은 만들어서 전달해주세요
  recipeCode();

  console.log('참 쉽죠~');
}

makeCook('라면', () => {
  console.log('1. 아리수 끓이기');
  console.log('2. 대파 양파 청양고추 팍팍');
  console.log('3. 냠냠');
})