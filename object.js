const people = [
    {
        Name: 'Stevon',
        number: [1,2,3,4]
    },
    {
        Name: 'Chris',
        number: [5,6,7,8]
    },
];

people.forEach((people) => console.log(people.Name));
people.forEach((element) => console.log(element.number));

const logElement = (element, index) => {
    console.log(`a[${index}] = ${element}`);
  };
  
  [number].forEach(logElement);
  // Logs:
  // a[0] = 2
  // a[1] = 5
  // a[3] = 9