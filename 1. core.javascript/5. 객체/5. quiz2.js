/*
Q. 회원의 아이디정보와 비밀번호 정보가 들어있는 객체 user가 있습니다. 
   아래 요구사항에 맞는 프로그램을 작성하고 브라우저에서 테스트하세요.
    var user = {
        kim1234:'kkk1234',
        lee4567:'lll4567',
        park9876:'ppp9876'
    }
- 요구사항
1. 사용자에게 아이디를 입력받으세요.
2. 입력된 아이디가 객체에 존재하는 key가 아니라면
   "존재하지 않는 회원입니다"를 출력하세요.
3. 아이디가 존재한다면 비밀번호를 입력받으세요.
4. 비밀번호가 입력한 아이디에 대응해서 일치한다면
   "로그인 성공"을 출력하고 반복문을 탈출하세요.
5. 비밀번호가 다르다면 "비밀번호가 틀렸습니다" 를 출력하세요.
6. 로그인이 성공할때까지 반복하세요.
*/

var userInfo = {
  userList: [{
          account: 'kim1234',
          password: 'kkk1234',
          username: '김두한'
      },
      {
          account: 'park9876',
          password: 'ppp9999',
          username: '박찬호'
      },
      {
          account: 'hong7766',
          password: 'hhh1234',
          username: '홍길동'
      },
  ]
};


// var loggedIn = false; // 로그인 상태를 나타내는 변수

// while (!loggedIn) { // 로그인 상태가 아닐 때 반복
//   var inputId = prompt("아이디를 입력하세요:");
//   var foundUser = null;

//   for (var i = 0; i < userInfo.userList.length; i++) {
//     if (userInfo.userList[i].account === inputId) {
//       foundUser = userInfo.userList[i];
//       break; // 일치하는 사용자를 찾으면 반복문 탈출
//     }
//   }

//   if (!foundUser) {
//     alert("존재하지 않는 회원입니다.");
//     continue; // 다시 반복
//   }

//   var inputPassword = prompt("비밀번호를 입력하세요:");

//   if (inputPassword === foundUser.password) {
//     alert("로그인 성공");
//     loggedIn = true; // 로그인 상태를 변경하여 반복문 종료
//   } else {
//     alert("비밀번호가 틀렸습니다.");
//   }
// }



// 위 객체에서 배열만 추출
var userList = userInfo.userList;

// 계정을 입력받고 해당 계정이 존재하는 계정인지를 확인
var inputAccount = 'hong7766'; // 사용자 입력한 계정명

// 회원목록 배열을 반복순회하여 입력한 계정명과 일치하는 계정이 있는지 체크
var foundUser = null;
for (var user of userList) {
  if (inputAccount === user.account) {
    foundUser = user;
    break;
  } 
}

if (foundUser !== null) {
  console.log('일단 너 회원가입했네?');
  // 비번 검증
  // 사용자에게 비번 입력받기
  var inputPassword = 'hhh1234';
  if (inputPassword === foundUser.password) {
    console.log(`${foundUser.username}님 로그인 성공!!`);
  } else {
    console.log('비번이 틀려써~~ ㅋ');
  }

} else {
  console.log('가입부터 하지?');
}


// 위 객체에서 배열만 추출
var userList = userInfo.userList;

while (true) {
  // 계정을 입력받고 해당 계정이 존재하는 계정인지를 확인
  var inputAccount = prompt('아이디를 입력하세요~'); // 사용자 입력한 계정명

  // 회원목록 배열을 반복순회하여 입력한 계정명과 일치하는 계정이 있는지 체크
  var foundUser = null;
  for (var user of userList) {
    if (inputAccount === user.account) {
      foundUser = user;
      break;
    }
  }

  if (foundUser !== null) {
    // console.log('일단 너 회원가입했네?');
    // 비번 검증
    // 사용자에게 비번 입력받기
    var inputPassword = prompt('비번을 입력하세요~');
    if (inputPassword === foundUser.password) {
      alert(`${foundUser.username}님 로그인 성공!!`);
      break;
    } else {
      alert('비번이 틀려써~~ ㅋ');
    }
  } else {
    alert('가입부터 하지?');
  }
}
