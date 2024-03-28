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
    value: 800000000,
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



// 1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**

let totalInDaejeon2023 = 0;
for (const trs of traders) {
  if (trs.year === 2023 && trs.trader.city === '대전') {
    totalInDaejeon2023 += trs.value;
  }
}
console.log(`2023년 대전 총 거래액: ${totalInDaejeon2023}`);


let userDaejeonTotal = 0; // 변수여서 let 사용
const userDaejeon = traders
.filter(user => user.year === 2023 && user.trader.city === '대전')
.map(user => user.value)
.forEach(user => userDaejeonTotal += user)
console.log(userDaejeonTotal);



// 2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.**

const nameListInBusan = [];
for (const trs of traders) {
  if (trs.trader.city === '부산') {
    nameListInBusan.push(trs.trader.name);
  }
}
console.log('부산 거래자 이름리스트: ', nameListInBusan);


const userBusan = traders
.filter(user => user.trader.city === '부산')
.map(user => user.trader.name);
console.log(userBusan);



// 3. **모든 거래 중 가장 높은 거래액을 가진 거래의 거래자 정보(이름, 도시)와 거래액을 출력해주세요.**
const highestTransaction = traders.reduce((max, trs) => max.value < trs.value ? trs : max);

console.log(`가장 높은 거래액 정보 - 이름: ${highestTransaction.trader.name}, 도시: ${highestTransaction.trader.city}, 거래액: ${highestTransaction.value}`);


// 가장 높은 거래액을 저장할 변수 초기화
let maxTradeValue = 0;
let maxTradeInfo = null;

// traders 배열을 순회하면서 가장 높은 거래액을 가진 거래를 찾음
traders.forEach(trade => {
  if (trade.value > maxTradeValue) {
    maxTradeValue = trade.value;
    maxTradeInfo = {
      name: trade.trader.name,
      city: trade.trader.city,
    };
  }
});

// 최종 결과 출력
console.log(`가장 높은 거래액을 가진 거래자: ${maxTradeInfo.name} (${maxTradeInfo.city}), 거래액: ${maxTradeValue}원`);

// traders 배열에서 가장 높은 거래액을 가진 거래를 찾음
const maxTrade = traders.reduce((max, user) => {
  return user.value > max.value ? user : max;
}, traders[0]); // 초기값으로 traders 배열의 첫 번째 요소를 사용

// 최종 결과 출력
console.log(`가장 높은 거래액을 가진 거래자: ${maxTrade.trader.name} (${maxTrade.trader.city}), 거래액: ${maxTrade.value}원`);



// 4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요. 예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**
const totalCityValue = {};

traders
.filter(user => user.trader.city)
.map(user => user.value && user.trader.city)
console.log(totalCityValue);


const totalByCity = {};  // { 서울: 500000, 대전: 30032030, ... }

for (const trs of traders) {
  const city = trs.trader.city;
  if (totalByCity[city]) { // 이 도시는 한번 누적된 적이 있음
    totalByCity[city] += trs.value;
  } else {  // 이 도시는 한번도 나온적이 없던 도시임
    totalByCity[city] = trs.value;
  }
}
console.log(totalByCity);




// 도시별 총 거래액을 저장할 객체 초기화
let cityTotalSales = {};

// traders 배열을 순회하면서 각 도시별 총 거래액 계산
traders.forEach(trade => {
  const city = trade.trader.city;
  const sales = trade.value;

  // 이미 해당 도시의 총 거래액이 계산되어 있다면 더하고, 없으면 새로운 키와 값을 추가
  cityTotalSales[city] = (cityTotalSales[city] || 0) + sales;
});

// 결과 출력
console.log(cityTotalSales);


// 5. **거래액이 700000원 이상인 거래를 모두 찾아, 해당 거래의 연도별로 분류해주세요. 결과는 `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태가 되어야 합니다.**

// 6. **각 거래자별로 그들이 진행한 거래의 평균 거래액을 계산해주세요. 결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.**

// 7. **2022년과 2023년 각각에서 가장 많은 거래를 한 거래자의 이름과 그 거래 횟수를 출력해주세요.**

// 8. **모든 거래 중 거래액이 중간값인 거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.**

// 9. **각 도시에서 진행된 거래의 수를 계산해주세요. 결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**

// 10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후, 정렬된 리스트를 출력해주세요. 각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**

