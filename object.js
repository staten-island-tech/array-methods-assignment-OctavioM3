
const people = [
    {
        Name: 'Stevon',
        number: [1,2,3,4]
    },
    {
        Name: 'Chris',
        numbers: [5,6,7,8]
    },
];

people.forEach((people) => console.log(people.Name));

people.forEach((people) => people.numbers.forEach((numbers) => console.log(numbers)));