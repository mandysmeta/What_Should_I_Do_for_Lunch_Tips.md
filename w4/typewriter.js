const sentence = "hello there from lighthouse labs";

//goal: animate sentence, showing one character at a time

for (const char of sentence) {
  process.stdout.write(char);
}
setTimeout(() => {
  // print the char here
  "h"
}, 10000) // <= 1s delay to make it noticeable. Can dial it down later.