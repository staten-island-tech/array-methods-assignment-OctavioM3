
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
people.forEach((element) => console.log(element.number));

people.forEach((number) => {
    console.log(number)
});

const logArrayElements = (element) => {
    console.log(`${element}`);
};

[people.number].forEach(logArrayElements);