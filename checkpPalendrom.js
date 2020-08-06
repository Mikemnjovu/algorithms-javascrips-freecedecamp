var latters = [];
var word = "racecar";
var rword = "";

for (var i = 0; i < word.length; i++) {
  latters.push(word[i]);
  // console.log(latters);
}

for (var i = 0; i < word.longth; i++) {
  rword += latters.pop();
  // console.log(rword);
}

if (rword === word) {
  console.log(word + " is a palindrome");
} else {
  console.log(word + " is not a palindrome");

  console.log(rword);
}
