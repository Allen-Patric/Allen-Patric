const arr= [2, 5 , 100]

const dNResult = arr.map(function(num){
    return num * 2


})

console.log(dNResult)

const sR = arr.map(function(num){
     return JSON.stringify(num)
})

console.log(sR)

const names = ["john", "JACOB", "jinGleHeimer", "schmidt"]

const cResult = names.map(function(i){
    return i.toUpperCase()
})


console.log(cResult)

const actors = 
[{
    name: "Angelina Jolie",
    age: 80
},
{
    name: "Eric Jones",
    age: 2
},
{
    name: "Paris Hilton",
    age: 5
},
{
    name: "Kayne West",
    age: 16
},
{
    name: "Bob Ziroll",
    age: 100
}
]

const aResult = actors.map(function(i){

    return i.name

})

console.log(aResult)

const Matrix = actors.map(function(i){
    if(i.age < 20){

        console.log(i.name + ' is under age!!')

    }
    else{
        console.log(i.name + ' can go to The Matrix')
    }
})
