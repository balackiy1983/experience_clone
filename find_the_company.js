const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName, obj = company) {
   
    if (obj.name === companyName) {
        
        return {
            name: obj.name,
            type: obj.type,
            uses: obj.uses,
            sells: obj.sells
        };
    }
    
    
    if (obj.clients) {
        for (const client of obj.clients) {
            const result = findValueByKey(companyName, client);
            if (result) {
                return result;
            }
        }
    }
    
    
    if (obj.partners) {
        for (const partner of obj.partners) {
            const result = findValueByKey(companyName, partner);
            if (result) {
                return result;
            }
        }
    }
    
    
    return null;
}


const foundCompany = findValueByKey('Клієнт 1.2');
console.log(foundCompany);
