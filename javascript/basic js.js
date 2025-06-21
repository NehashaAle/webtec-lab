// Function to demonstrate basic JS constructs
function basicJsDemo() {
     // Function containing all constructs
     let numbers = [7, 12, -3, 5, 0, 9];
     let positiveCount = 0;
     let hasZero = false;
 
     // FOR loop with IF-ELSE
     console.log("Checking numbers:");
     for (let i = 0; i < numbers.length; i++) {
         if (numbers[i] > 0) {
             positiveCount++;
             console.log(`${numbers[i]} is positive`);
         } else if (numbers[i] === 0) {
             hasZero = true;
             console.log("Zero found!");
         } else {
             console.log(`${numbers[i]} is negative`);
         }
     }

    // 3. WHILE loop
    console.log("WHILE LOOP: Counting down from 5");
    let count = 5;
    while (count > 0) {
        console.log(count);
        count--;
    }

    // 4. DO-WHILE loop
    console.log("DO-WHILE: Counting up to 3");
    let x = 1;
    do {
        console.log(x);
        x++;
    } while (x <= 3);

}

// Call the function to execute all examples
basicJsDemo();