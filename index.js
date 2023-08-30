function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let x = 0; x < array.length; x++){
    for(let y = x+1; y < array.length; y++){
      if(array[x]+array[y]===target){
        return true;
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  O(n)
    O(n)
  O(1)


  O(n^2)

*/

/* 
  Add your pseudocode here

  for x = 0 in range array.length
    for y = x+1 in range array.length
      if array[x]+array[y] === target
        return true
  return false
        

*/

/*
  Add written explanation of your solution here
  the for loops iterate through the array comparing each index value once 
  then it checks to see if the array items at index x and y equal the target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("")

  console.log("Expecting: true");
  console.log("=>", hasTargetSum(["mad",2,2,30], 32))
}

module.exports = hasTargetSum;
