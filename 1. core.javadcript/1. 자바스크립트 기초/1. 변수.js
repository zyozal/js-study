var result; // 변수 선언
//     = 은 '저장해라, 집어 넣어라'라는 의미
result = 10 + 20; // 값을 변수에 할당(대입)

var multiple = result * 3; // 90
console.log(multiple);

var fruit;
fruit = '자몽';
console.log(fruit);

var food = '볶음밥';
food = '돈까스'; // 변경할 때는 var 쓰면 안됨
console.log(food);

// 변수 이름 규칙
// var 7number; // 불가능
var num7ber; // 가능

// var user name; // 불가능
var current_login_user_phone_number; // snake case
var currentLoginUserPhoneNumber; // camel case

var apple;
var APPLE;
var Apple;

var $myPetName_; // 특문 $, _ 가능

// var for; // 불가능

var myMoney = 1000;

const $orange = '#ffa808';

console.log($orange);