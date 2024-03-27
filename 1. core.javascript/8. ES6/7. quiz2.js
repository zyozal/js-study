const userList = [
  {
    account: "abc1234",
    userName: "대길이",
    job: "추노",
    address: "서울",
    hobbys: ["수영", "축구", "테니스"],
    salary: 5400000,
    age: 35,
  },
  {
    account: "banana",
    userName: "빠나나",
    job: "과일",
    address: "서울",
    hobbys: ["푸드파이팅", "테니스"],
    salary: 2700000,
    age: 18,
  },
  {
    account: "park1234",
    userName: "주차왕",
    job: "발렛파킹",
    address: "경기",
    hobbys: ["족구", "축구", "테니스", "영화감상"],
    salary: 3900000,
    age: 56,
  },
  {
    account: "fire",
    userName: "불꽃남자카리스마",
    job: "게이머",
    address: "서울",
    hobbys: ["독서", "테니스"],
    salary: 5900000,
    age: 42,
  },
];

function find(callback) {
  for (const user of userList) {
    if (callback(user)) {
      return user.userName;
    }
  }
}
// '서울'에 사는 첫 번째 사용자를 찾는 예시
const firstUserInSeoul = find((user) => user.address === "서울");
console.log("서울에 사는 첫 번째 사용자:", firstUserInSeoul);




function some(callback) {
  for (const user of userList) {
    if (callback(user)) {
      return true;
    } else {
      return false;
    }
  }
}

// 급여 5,000,000 이상인 사용자가 하나라도 있는지 확인하는 예시
const hasHighEarningUser = some((user) => user.salary >= 5000000);
console.log("연봉이 5,000,000 이상인 사용자가 있는가?:", hasHighEarningUser);




function every(callback) {
  for (const user of userList) {
    if (!callback(user)) {
      return false;
    }
  }
  return true;
}

// 모든 사용자가 '서울'에 사는지 확인하는 예시
const allUsersInSeoul = every((user) => user.address === "서울");
console.log("모든 사용자가 서울에 사는가?:", allUsersInSeoul);
