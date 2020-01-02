var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

const ofAge = peopleArray.filter(function(i){

    if(i.age > 18){
      return i
    }

})

const alphabetical = ofAge.sort(function(a, b){
    if(a.firstName < b.firstName){ return -1; }
    if(a.firstName > b.firstName) { return 1; }
    return 0;
})

const sorted = alphabetical.map(function(people){
    return '<li>' + people.firstName + ' ' + people.lastName + ' ' + 'is ' + people.age + '</li>'
})

console.log(sorted)