let arr = [
    {
        userName:"Vitaliy",
        lastName:"Balackiy",
        email:"balackiy1983@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@gmail.ru"
    },
];

let validEmails = arr.filter(function(item) {
    return /^(?:[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*)@(?:gmail\.com|yahoo\.com)$/.test(item.email);
});

console.log(validEmails);
