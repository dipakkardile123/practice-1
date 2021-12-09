
for (var a = 2; a < 100; a++) {
  var b = 2;
  var total = 1;
  while (b < a) {
    if (a % b == 0) {
      total = total + b;
    }
    b++;
  }
  if (total == a) console.log(a, "is perfect number");
}
