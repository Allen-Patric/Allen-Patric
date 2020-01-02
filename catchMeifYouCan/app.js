/*try{
    function sum(x, y){

        if(typeof sum === Number){
        return x+y
        }
        else{
            throw 'dude!'
        }
        
       }
      sum(3,5)

}

catch(err){
    console.log(err)

}*/

var user = {username: "sam", password: "123abc"};

try{ function login(username, password){
    if(username === user.username && password === user.password){
        console.log('login successful!')
    }
    throw 'damn it!'
}
    login('sam', '123abc')
  
}

catch(err){
    console.log(err)
}   
