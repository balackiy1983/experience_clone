let services = {
    "Haircut": "60 hrn",
    "Barbering": "80 hrn",
    "Shampooing": "100 hrn"
};

services['Break glass'] = "200 hrn";

services.price = function() {
    let total = 0;
    for (let service in this) {
        if (typeof this[service] === "string") {
            total += parseInt(this[service]);
        }
    }
    return total;
};

services.minPrice = function() {
    let min = Number.MAX_VALUE;
    for (let service in this) {
        if (typeof this[service] === "string") {
            let price = parseInt(this[service]);
            if (price < min) {
                min = price;
            }
        }
    }
    return min;
};

services.maxPrice = function() {
    let max = Number.MIN_VALUE;
    for (let service in this) {
        if (typeof this[service] === "string") {
            let price = parseInt(this[service]);
            if (price > max) {
                max = price;
            }
        }
    }
    return max;
};

console.log("Total cost of services: " + services.price() + " hrn");
console.log("Minimum cost of service: " + services.minPrice() + " hrn");
console.log("Maximum cost of service: " + services.maxPrice() + " hrn");