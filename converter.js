let unit = "kilograms";
let value = 890;

switch (unit) {
  case "kilometers":
    console.log(`${value} km is ${value * 1000} m.`);
    break;
  case "hours":
    console.log(`${value} hours is ${value * 60} min.`);
    break;
  case "kilograms":
    console.log(`${value} kg is ${value * 1000} grams`);
    break;
  default:
    console.log("Unknown unit of measure");
}