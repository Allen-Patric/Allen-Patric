var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));


function caesar(encodedSTR){

    var codeArr = encodedStr.split('');
    var decodedArr = [];

    var alphabet = ['A' , 'B' , 'C' , 'D', 'E' , 'F' , 'G' , 'H' , 'I' , 'J' , 'K', 'L' , 'M' , 'N' , 'O' ,'P' , 'Q' , 'R' , 'S' , 'T' , 'U' , 'V' , 'W' , 'X' , 'Y' , 'Z', 
    'A' , 'B' , 'C', 'D' , 'E' , 'F' , 'G' , 'H', 'I' , 'J' , 'K' , 'L' , 'M'];

    for(var i=o; i<codeArr.length;i++){
        if(alphabet.indexOf(codeArr[i])===-1)
        {
        decodedArr.push(codeArr[i]);
    }
    else{
        for(var j=0 ; j < alphabet.length ; j++)
        if(codeArr[i] ===alphabet[j]){
        decodedArr.push(alphabet[j+13]);
        }
    }
}
return decodedArr.join('')
}

caesar(Momma)

