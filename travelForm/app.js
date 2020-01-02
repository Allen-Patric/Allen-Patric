const form = document['myForm']

form.addEventListener("submit", (event) => {

    event.preventDefault()
    
    const firstName = form.firstName.value

    const lastName = form.lastName.value
    
    const age = form.age.value

    const gender = form.gender.value

    const location = form.location.value
    
    const diet = []

        for(let i = 0 ; i < form.dietR.length; i++){

            if(form.dietR[i].checked){

                diet.push(form.dietR[i].value)

            }

        }

        alert('First Name: ' + firstName + 'Last Name: ' + lastName + 'Age: ' +
        age + 'Gender : ' + gender + 
       'Location: ' + location + 'Diet Restriction: ' + diet)
})

