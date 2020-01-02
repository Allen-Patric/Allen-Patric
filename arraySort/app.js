const arr = [1 , 7 , 8 , 9 , 10 , 231, 3 , 432 , 4291 , 2]

/*arr.sort(function(a, b){
    return a - b
})
*/

/*arr.sort(function(a, b){

    return b - a

})*/

const names = ['dog', 'mom', 'wolf', 'dad', 'by', 'family', 'eaten']

/*names.sort(function(a , b){
    return a.length - b.length 
})
*/

/*names.sort(function(a, b){
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
})*/

const whatever = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

whatever.sort(function(a, b){

    return a.age - b.age

})

console.log(whatever)

console.log(names)

