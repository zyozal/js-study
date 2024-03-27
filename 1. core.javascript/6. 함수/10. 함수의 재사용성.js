
const NOR_FOUND = -1;

// 배열 안에 특정 요소의 인덱스를 찾아 반환하는 함수
function myIndexOf(array, searchElement) {
  for (var i = 0; i <array.length; i++) {
    if (searchElement === array[i]) {
      return i;
    }
  }
  return NOR_FOUND;
}

function myIncludes(array, searchElement) {
  return myIndexOf(array, searchElement) !== NOR_FOUND;
}



var foods = ['족발', '피자', '파스타', '김치찌개'];

var idx = myIndexOf(foods, '피자');
console.log(`index: ${idx}`);

var flag = myIncludes(foods, '족발');
console.log(`flag: ${flag}`);