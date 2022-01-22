const { read } = require("fs");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("-== Aplikasi penjumlahan ==-");
readline.question("Give me input x value? ", (x) => {
  readline.question("Give me input y value? ", (y) => {
    console.log(`Penjumlahan dari ${x} + ${y} = ?`);
    readline.close();
  });
});