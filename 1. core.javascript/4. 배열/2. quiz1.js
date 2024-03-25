var scores = [83, 90, 100, 57];

var total = 0;

for (var i = 0; i < scores.length; i++) {
  total += scores[i];
}
var average = total / scores.length;
console.log(total, average);