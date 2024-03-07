function padEnd(str, char, num) {
    let newStr = str;
    while (newStr.length < num) {
        newStr += char;
    }
    return newStr;
}

function padStart(str, char, num) {
    let newStr = str;
    while (newStr.length < num) {
        newStr = char + newStr;
    }
    return newStr;
}

function pad(str, char, num, isStart) {
    let newStr = str;
    if (isStart) {
        while (newStr.length < num) {
            newStr = char + newStr;
        }
    } else {
        while (newStr.length < num) {
            newStr += char;
        }
    }
    return newStr;
}

console.log(padEnd("qwerty", "+", 10));
console.log(padStart("qwerty", "+", 10));
console.log(pad("qwerty", "+", 10, true));
console.log(pad("qwerty", "+", 10, false));
