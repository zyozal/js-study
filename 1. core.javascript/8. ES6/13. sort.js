
// 배열 데이터 정렬하기
const nums = [3,4,15,1,6,2];
console.log(nums);

nums.sort((a, b) => a - b); // 오름차
console.log(nums);

nums.sort((a, b) => b - a); // 내림차
console.log(nums);

nums.reverse(); // 내림차
console.log(nums);



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


console.log('======================');

userList.sort((a, b) => a.age - b.age); // 나이 오름차
userList.sort((a, b) => b.salary - a.salary); // 급여 내림차
userList.sort((a, b) => {
  if (a.userName > b.userName) return -1;
  else if (a.userName < b.userName) return -1;
  else return 0;
}); // 이름 오름차

console.log(userList);