function convertToTitleCase(input) {
  let words = input.match(/[a-z0-9]+/gi);

  if (!words) {
    return "";
  }

  let output = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
  return output;
}

function convertToHyphenCase(input) {
  let output = input.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "-").toLowerCase();
  return output;
}

let inputan = "SELamAt PaGi Dunia!!";
let output1 = convertToTitleCase(inputan); 
let output2 = convertToHyphenCase(inputan);
console.log(output1);
console.log(output2);