document.getElementById('aB').onclick = function(){
    
    const num1 = document.getElementById('a1').value
    const num2 = document.getElementById('a2').value
    
    const h1 = document.createElement('h1')

    h1.textContent = +num1 + +num2

    document.getElementsByTagName("body")[0].append(h1)
}

document.getElementById('sB').onclick = function(){
    
    const snum1 = document.getElementById('s1').value
    const snum2 = document.getElementById('s2').value
    
    const h2 = document.createElement('h2')

    h2.textContent = +snum1 - +snum2


    document.getElementsByTagName("body")[0].append(h2)
}

document.getElementById('mB').onclick = function(){
    
    const mnum1 = document.getElementById('m1').value
    const mnum2 = document.getElementById('m2').value
    
    const h3 = document.createElement('h3')

    h3.textContent = +mnum1 * +mnum2

    document.getElementsByTagName("body")[0].append(h3)
}