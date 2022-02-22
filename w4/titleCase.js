//function goal: takes in string & capitalize first letter
const titleCase = function(text) {

  //if empty, return empty
  if (text === "") {
    return "";
  }
  //map() works on every element and returns value
  let sentence = text.split(" ").map(text => {
    //first letter of each word upperCase
    const firstLetter = text[0][0].toUpperCase();
    //rest of word to lowerCase
    const restOfWord = text.slice(1).toLowerCase();

    return firstLetter + restOfWord;
  });
  //join array and trim white space
  return sentence.join(" ");
};
console.log(titleCase("this is an example")); //should return "This Is An Example"
console.log(titleCase("test")); //should return "Test"
console.log(titleCase("i r cool")); //should return "I R Cool"
console.log(titleCase("WHAT HAPPENS HERE")); //should return "What Happens Here"
console.log(titleCase("")) //should return ""
console.log(titleCase("A")) //should return "A"