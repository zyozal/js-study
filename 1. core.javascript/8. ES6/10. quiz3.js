const traders = [
  {
    trader: {
      name: "김철수", // traders[0].trader.name
      city: "대전",
    },
    year: 2023,
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022,  // traders[1].year
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
];

// 연습 1: 2022년에 발생한 모든 거래를 찾아
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요


const user2022 = traders
.filter(user => user.year === 2022)
.map(user => ({name: user.trader.name, city: user.trader.city}));
console.log(user2022);
// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.

const mappedCityList = traders.map(user => user.trader.city);
const mappedCityListArray = [...new Set(mappedCityList)]
console.log(mappedCityListArray);


// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요.

const userDaejeon = traders
.filter(user => user.trader.city === '대전')
.map(user => ({name: user.trader.name, city: user.trader.city}));
console.log(userDaejeon);

// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.

const mappedNameList = traders.map(user => user.trader.name);
console.log(mappedNameList);


// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.

let userSeoulTotal = 0; // 변수여서 let 사용
const userSeoul = traders
.filter(user => user.trader.city === '서울')
.map(user => user.value)
.forEach(user => userSeoulTotal += user)
console.log(userSeoulTotal);



const total = traders
.filter(user => user.trader.city === '서울')
.reduce((total, user) => total + user.value, 0);
console.log(`총액: ${total}`);
