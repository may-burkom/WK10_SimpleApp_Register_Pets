console.log("home.js is running...")

const petForm = document.querySelector("#petForm")
const viewPetBtn = document.querySelector("#viewPets")
const regComplete = document.querySelector("#regComplete")

petForm.addEventListener("submit", function(event){
    console.log("submit button hit")
    event.preventDefault()

    let formData = new FormData(petForm)
    console.log(formData)

    axios.post("http://localhost:3000/register-pet", formData)
        .then(function(response){
            console.log(response.data)
            petForm.reset()
            let msg = document.createElement('h4')
            msg.innerHTML = `Your pet ${response.data.name}, has been registered. Click the link below to see.`
            regComplete.appendChild(msg)
        })
        .catch(function(err){
            console.log(err)
        })
})