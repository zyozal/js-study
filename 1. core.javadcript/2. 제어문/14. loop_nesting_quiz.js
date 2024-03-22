// 가로길이, 세로길이
var width = 5;
var height = 3;

for(var i = 0; i < height; i++){
  var star = ""; // 사각형을 저장할 변수
  for(var j = 0; j < width; j++){
    star += "*";
  }
  console.log(star);
}
// Expacted: *****
          // *****
          // *****