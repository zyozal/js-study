const userList = [
  {
    account: "abc1234",
    userName: "대길이",
    job: "추노",
    address: "서울",
    hobbys: ["수영", "축구", "테니스"],
  },
  {
    account: "banana",
    userName: "빠나나",
    job: "과일",
    address: "서울",
    hobbys: ["푸드파이팅", "테니스"],
  },
  {
    account: "park1234",
    userName: "주차왕",
    job: "발렛파킹",
    address: "경기",
    hobbys: ["족구", "축구", "테니스", "영화감상"],
  },
  {
    account: "fire",
    userName: "불꽃남자카리스마",
    job: "게이머",
    address: "서울",
    hobbys: ["독서", "테니스"],
  },
];
console.log('=========================');



function map(callback) {
  const mappedArray = []; // 필터링된 회원들을 다시 담을 배열
  for (const user of userList) { // 안걸러도 돼서 if 안 써도 됨
    mappedArray.push(callback(user));
  }
  return mappedArray;
}

// 이름만 추출해서 배열에 담기
const nameList = map(user => user.userName);
console.log(nameList);



// 주소만 추출해서 배열에 담기
const addressList = map(user => user.address);
console.log(addressList);

// 회원 첫번째 취미들만 추출
const firstHobbyList = map(user => user.hobbys[0]);
console.log(firstHobbyList);

// 모든 회원의 이름과 계정을 연결해서 배열에 담아줘
const nameidList = map(user => `${user.userName}(${(user.account)})`);
console.log(nameidList);