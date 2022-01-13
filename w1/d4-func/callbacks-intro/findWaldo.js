// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) { 
  for (let index = 0; index < names.length; index++) {
  console.log (index)
    let name = names[index];
    if (name === "Waldo") {
      found(name, i);   // execute callback
    }
  }
}

const actionWhenFound = function(name, index) {
  console.log(`Found ${name} at index `, index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


//1.✔️ Copy the waldo searching code above into the JS file
//2.✔️ Run it via terminal to make sure that it is working as expected
//3. Modify the actionWhenFound function to **let it receive and use the index**
//4. Modify the findWaldo function so that it passes the index array to the callback
//5. Refactor the function findWaldo to use the forEach() method instead of a for loop.