const arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

const fiveandGreaterOnly = arr.filter(function(num){

    if(num >= 5){
        return num
    }

})

console.log(fiveandGreaterOnly)

const evensOnly = arr.filter(function(num){

    if(num % 2 ===0){
        return num
    }

})

console.log(evensOnly)

const dumb = ['wolf', 'dog', 'family', 'by', 'hipster', 'coder', 'iloveyou']

const fiveCharactersOrFewerOnly = dumb.filter(function(i){

    if(i.length<= 5){
        return i
    }

})


console.log(fiveCharactersOrFewerOnly)

const illuminati = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

const illuminatiMembers = illuminati.filter(function(i){

    if(i.member === true){
        return i
    }

})

console.log(illuminatiMembers)

const age = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

const ofAge = age.filter(function(i){

    if(i.age >= 18)
    {
        return i }

})

console.log(ofAge)