 //const numbers = [1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 , 10 , 11, 12 ,13, 14 ,2013903148923981]
/*
const result = numbers.reduce(function(final, num){

    final += num
    return final

})
*/

/*const result = numbers.reduce(function(final, num){
    final +=num
    return final
})  


console.log(JSON.stringify(result))*/

/*var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const result = voters.reduce(function(final, voter){
    if(voter.voted){
        final++
    }
    return final
}, 0) */

/*var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const result = wishlist.reduce(function(final, cost){
    final +=cost.price
    return final
})*/

/*var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

const result = arrays.reduce(function(final, array){

    final += array

    return final


})*/

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const result = voters.reduce(function(final, voter){
    if(voter.age < 50 && voter.age > 30 && voter.voted){
        final.midVotes++
    } else if(voter.age < 50 && voter.age <30){
        final.mids++
    }
    else if(voter.age >= 50){
            final.olds++}

    else if(voter.age >= 50 && voter.voted){
        final.oldVotes++}

    else if(voter.age > 1 && voter.age < 31){
        final.youth++}

    else if(voter.age > 1 && voter.age < 31 && voter.voted){
            final.youngVotes++
        }

    return final
}, 

{youngVotes: 0,
youth: 0,
midVotes: 0,
mids: 0,
oldVotes: 0,
olds: 0 })


console.log(result)

