


var num = Math.floor(Math.random() * 50) + 1;

while (true) { 
  var user = +prompt('1 ~ 50 사이의 무작위 숫자를 입력하세요')
  if (user > 50 || user < 1) {
    alert('1 ~ 50 사이의 숫자만 입력하세요')
    continue;
  } 
  if (num === user){
    alert('정답입니다!');
    break;
    } else if (num > user) {
    alert('up');
    } else if (num < user){
    alert('down');
    }
  }

// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.

var initCount; // 사용자의 총 입력 기회

while (true) {
  // 난이도 선택
  var level = +prompt(
    '난이도를 선택하세요!\n# [1. 상(3번의 기회) | 2. 중(6번의 기회) | 3. 하(10번의 기회)]'
  );

  if (level === 1) {
    initCount = 3;
  } else if (level === 2) {
    initCount = 6;
  } else if (level === 3) {
    initCount = 10;
  } else {
    alert('난이도를 숫자로 다시 입력해주세요');
    continue;
  }

  break;
}





// 정답 생성
var secret = Math.floor(Math.random() * 100) + 1;

var countDown = initCount; // 입력기회 횟수

while (true) {
  // 사용자의 입력값
  var answer = +prompt(`숫자를 입력하세요! [1 ~ 100] ${secret}`);
  countDown--;

  // 정답 판정
  if (secret === answer) {
    alert(`정답입니다!`);
    break;
  } else if (secret > answer) {
    alert(`UP!!`);
  } else {
    alert(`DOWN!!`);
  }

  // 카운트다운 게임 종료 조건
  if (countDown <= 0) {
    alert(`기회가 모두 소진되었습니다. 정답은 ${secret}이지렁 ㅎㅎㅎ`);
    break;
  } else {
    alert(`${countDown}번의 기회가 남았습니다.`);
  }
}

// 사용자들은 입력 기회가 5번으로 제한된다.
// 즉, 5번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.

// 사용자는 게임 시작전에 난이도를 설정할 수 있다.
// 난이도는 상, 중, 하 난이도가 존재하며 난이도별 입력 횟수제한이 다르다.





// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.

// 난이도 상수
const HIGH = 1,
  MIDDLE = 2,
  LOW = 3;

var initCount; // 사용자의 총 입력 기회

while (true) {
  while (true) {
    // 난이도 선택
    var level = +prompt(
      '난이도를 선택하세요!\n# [1. 상(3번의 기회) | 2. 중(6번의 기회) | 3. 하(10번의 기회)]'
    );

    if (level === HIGH) {
      initCount = 3;
    } else if (level === MIDDLE) {
      initCount = 6;
    } else if (level === LOW) {
      initCount = 10;
    } else {
      alert('난이도를 숫자로 다시 입력해주세요');
      continue;
    }

    break;
  }

  // 정답 생성
  var secret = Math.floor(Math.random() * 100) + 1;

  var countDown = initCount; // 입력기회 횟수

  var min = 1,
    max = 100;

  while (true) {
    // 사용자의 입력값
    var answer = +prompt(`숫자를 입력하세요! [${min} ~ ${max}]`);

    // 입력값이 범위안의 값인지 체크
    if (answer < min || answer > max) {
      alert('범위 안의 값을 입력하시오?!');
      continue;
    }
    
    countDown--;


    // 정답 판정
    if (secret === answer) {
      alert(`정답입니다!`);
      break;
    } else if (secret > answer) {
      alert(`UP!!`);
      min = answer + 1;
    } else {
      alert(`DOWN!!`);
      max = answer - 1;
    }

    // 카운트다운 게임 종료 조건
    if (countDown <= 0) {
      alert(`기회가 모두 소진되었습니다. 정답은 ${secret}이지렁 ㅎㅎㅎ`);
      break;
    } else {
      alert(`${countDown}번의 기회가 남았습니다.`);
    }
  }

  // 게임 재시작 여부 확인
  var exitFlag = confirm('한판 더 하쉴?');
  if (!exitFlag) {
    alert('잘가 게임 고만해 이제~');
    break;
  }
}

// 사용자들은 입력 기회가 5번으로 제한된다.
// 즉, 5번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.

// 사용자는 게임 시작전에 난이도를 설정할 수 있다.
// 난이도는 상, 중, 하 난이도가 존재하며 난이도별 입력 횟수제한이 다르다.
