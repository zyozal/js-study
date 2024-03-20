var yourHeight = +prompt('당신의 키를 입력하세요');


if (yourHeight >= 140) {
  var yourAge = +prompt('당신의 나이를 입력하세요');

  if (yourAge >= 8){
    alert('놀이기구에 탑승할 수 있습니다.');
  } else {
    alert('나이제한으로 인해 놀이기구에 탑승할 수 없습니다.');
  }
} else {
  alert('신장미달로 인해 놀이기구에 탑승할 수 없습니다.');
}

alert('즐거운 하루 되세요!')