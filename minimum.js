function min(a, b, c) {
  if (a < b && a < c) {
    console.log(a, "is minimum");
  } else if (b < a && b < c) {
    cosole.log(b, "b is minimum");
  } else {
    console.log(c, "is minimum");
  }
}
min(23, 44, 55);
