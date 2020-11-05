console.log("entry Page js is running...")

const url = "http://localhost:3000"
const petDisplay = document.querySelector("#petsDisplay")

axios.get(`${url}/display-pets`)
    .then(function(response){
        let allPets = response.data
        console.log(allPets)
        allPets.forEach(function(obj){

            let div = document.createElement('div')
            let line = document.createElement('hr')
            let pName = document.createElement('p')
            let pAnimal = document.createElement('p')
            let pBreed = document.createElement('p')
            let pAge = document.createElement('p')
            let pColor = document.createElement('p')

            pName.innerHTML = `<b>Name:</b> ${obj.name}`
            pAnimal.innerHTML = `<b>Animal:</b> ${obj.animal}`
            pBreed.innerHTML = `<b>Breed:</b> ${obj.breed}`
            pAge.innerHTML = `<b>Age:</b> ${obj.age}`
            pColor.innerHTML = `<b>Color:</b> ${obj.color}`

            div.appendChild(pName)
            div.appendChild(pAnimal)
            div.appendChild(pBreed)
            div.appendChild(pAge)
            div.appendChild(pColor)
            div.appendChild(line)
            petDisplay.appendChild(div)

        })
    })
    .catch(function(err){
        console.log(err)
    })