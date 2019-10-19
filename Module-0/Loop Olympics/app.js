//Write a for loop that prints to the console the numbers 0 through 9.
for( var i = 0 ; i < 9 ; i++ );
    console.log(i)
//Write a for loop that prints to the console 9 through 0.
for( var i = 9 ; i > 0 ; i-= 1 );
    console.log(i)
//Write a for loop that prints these fruits to the console.
var fruit = ["banana", "orange", "apple", "kiwi"]
    for( var i = 0 ; i > fruit.length ; i++); 
            console.log(fruit)
//Write a for loop that will push the numbers 0 through 9 to an array.
var numbers = [0, 1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9]
    for( var i = 0 ; i < numbers.length ; i++ ) { 
        itemsIds.push(data[i].item);
    }
console.log(numbers); 
//Write a for loop that prints to the console only even numbers 0 through 100.
for( var i = 0 ; i < 100 ; i++ );
{ 
    if(i % 2 === 0)
    {console.log('even')}
}
//Write a for loop that will push every other fruit to an array.
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

for(var i = 0 ; i <fruit.lenght ; i++); 
    if( i % 2 ===0) 
    {
        console.log(i) 
    }
//Write a loop that will print out all the names of the people of the people array
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
//Write a loop that pushes the names into a names array, and the occupations into an occupations array.
//Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to another array starting with "Singer".