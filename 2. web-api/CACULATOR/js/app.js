// 실행코드 (함수 호출, 이벤트 등록.. 핸들러정의)

// 이벤트 핸들러 바인딩
$addBtn.addEventListener('click', e => {
  calculate(ADD);
});
$subtractBtn.addEventListener('click', e => {
  calculate(SUB);
});
$multiplyBtn.addEventListener('click', e => {
  calculate(MUL);
});
$divideBtn.addEventListener('click', e => {
  calculate(DIV);
});