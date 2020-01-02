const submit = document.getElementById('submit')

submit.addEventListener('click', (event) =>{
    event.preventDefault()

    const goomba = document.getElementById('goomba').value

    const bomb = document.getElementById('bomb').value

    const cheep = document.getElementById('cheep').value


    const h2 = document.createElement('h2')

    h2.textContent = goomba * 5 + bomb * 7 + cheep * 11 + " Coins" 

        final.appendChild(h2)





}
)