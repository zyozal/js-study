

// createCalculator를 호출하면 반환되는 헬퍼함수는 
// 3가지의 기능을 갖고 있는데


const createCalculator = () => {
  let total = 0;
  return{
    add: num => total += num,
    subtract: num => total -= num,
    getTotal: () => total
  };
};

const calculator = createCalculator();


console.log(calculator.add(5)); // 5
console.log(calculator.subtract(2)); // 3
console.log(calculator.add(14)); // 17
console.log(calculator.add(21)); // 38
console.log(calculator.subtract(29)); // 9
console.log(calculator.getTotal()); // 9