var button = document.getElementById('button')

var number = document.getElementById('number')

var count = 0;

button.addEventListener('click', (event) =>{

    count +=1; 

    console.log(count)

    localStorage.setItem('clicks', count)



}
)

localStorage.getItem('clicks')