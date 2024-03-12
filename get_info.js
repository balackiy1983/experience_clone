let obj = {
    firstName: 'Vitaliy',
    lastName: 'Balackiy',
    age: 40,
    getInfo() {
      for (let key in this) {
        if (typeof this[key] !== 'function') {
          console.log(`${key}: ${this[key]}`);
        }
      }
    }
  };
  
  
  obj.getInfo();
  
  obj.hobby = 'Soccer';
  
  obj.getInfo();