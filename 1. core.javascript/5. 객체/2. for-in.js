
var phone = {
  Comppany: '삼성',
  color: '펄 화이트',
  mordel: '갤럭시 s24 Ultra',
  price: 1200000
}
// 값이 아닌 키가 반복됨
for (var data in phone) {
  // console.log(data);
  console.log(phone[data]);
}

// 객체 프로퍼티 유무 확인
console.log('model' in phone);

if (!('memory' in phone)) {
  phone.memory = '32GB';
}
console.log(phone);