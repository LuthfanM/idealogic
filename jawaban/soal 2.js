let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let charCount = new Map();
for (let i = 0; i < paragraph.length; i++) {
  let char = paragraph.charAt(i).toLowerCase();
  if (charCount.has(char)) {
    charCount.set(char, charCount.get(char) + 1);
  } else {
    charCount.set(char, 1);
  }
}

// menampilkan hasil
for (let [char, count] of charCount) {
  console.log(char + "(" + count + ")");
}