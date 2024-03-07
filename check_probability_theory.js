function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        let number = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

        if (number % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    console.log("Number of numbers generated:", count);
    console.log("Even numbers:", evenCount);
    console.log("Odd numbers:", oddCount);
    console.log("Percentage of even to odd:", (evenCount / count * 100).toFixed(2) + "%");
}

checkProbabilityTheory(100);
