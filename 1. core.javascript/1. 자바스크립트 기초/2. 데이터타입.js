
var num = 27;
console.log(typeof num);

console.log(num / 5);

var foodName = '깐풍기';
console.log(foodName);

var element = '<nav>\n\t<ul>\n\t\t<li>딸기</li>\n\t</ul>\n</nav>';
console.log(element);

var elem = `
<nav>
	<ul>
		<li>메롱</li>
	</ul>
</nav>
`;
console.log(elem);

console.log('================');
var month = 4;
var day = 5;
var anni = '식목일';

var sentence = month + '월' + day + '일은' + anni + '입니다.';
console.log(sentence)

var sentence2 = `${month}월 ${day}일은 ${anni}입니다`
console.log(sentence2)


var userAge = 30;

// boolean: 논리
var flag = userAge > 19;
console.log(typeof flag);
console.log(flag)

// undefined: 아직 값이 없는 상태(고의로 값을 안 넣은게 아님)
// null: 일부러 값을 없앤 상태(고의로 값을 없앰)
var PetName;
console.log(PetName);

var myHobby = '산책';
myHobby = null;