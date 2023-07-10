
function isPalindrome(word) {
  //the function is to take in a string as a parameter.
  function isPalindrome(string) {
    // Write your algorithm here
  
    //first we find the length of the string
    const lengthOfString = string.length;
  
    //looping through half of the string (palindrome)
    for (let i = 0; i < lengthOfString / 2; i++) {
      //Now check if the last string and first are same
      if (string[i] !== string[lengthOfString - 1 - i]) {
        return "It is not a palindrome";
      }
    }
    return "It's a palindrome";
  }
  const prompt = require("prompt-sync")({sigint:true});
  const string = prompt("Enter a string: ");
  
  /* 
    Add your pseudocode here
  */
  // call the function
  const value = isPalindrome(string);
  
  console.log(value);
  
  /*
    Add written explanation of your solution here
  */
  // You can run `node index.js` to view these console logs
  if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));
    console.log("");
    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
  }
  
  module.exports = isPalindrome;
  module.exports = isPalindrome;
}