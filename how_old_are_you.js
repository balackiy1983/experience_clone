let age = prompt("Enter age:");

if (!isNaN(age) && age >= 0) {
    if (age % 10 == 1 && age % 100 != 11) {
        console.log(age + "рік");
    } else if (age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 10 || age % 100 >= 20)) {
        console.log(age + "роки");
    } else {
        console.log(age + "років");
    }
} else {
    console.log("Please enter non-negative number.");
}