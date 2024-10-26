let inp = "a";

while (isNaN(parseInt(inp))) {
  inp = prompt("Enter a number");
}

rows = parseInt(inp);

for (let i = 1; i <= rows; i++) {
  s = "";
  for (let j = 0; j < i; j++) {
    s += 2 * j + 1;
    s += " ";
  }

  console.log(s);
}
