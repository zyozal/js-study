var pets = ['멍멍이','야옹이','쩝쩝이'];

console.log(pets);

// push(): 배열 맨 끝에 데이터 추가
pets.push('징징이');
pets.push('어흥이', '거부기', '닭둘기');

console.log(pets);

// pop(): 배열 맨 끝 데이터 삭제
pets.pop();
console.log(pets);

// shift(): 배열의 맨 첫데이터 삭제
// unshift(): 배열의 맨 첫번째에 추가

pets.shift();
console.log(pets);

pets.unshift('뽕뽕이');
console.log(pets);