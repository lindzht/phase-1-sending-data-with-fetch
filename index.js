// Add your code here
const ul = document.createElement('ul');
ul.id = 'newID'
const body = document.querySelector('body')
body.append(ul)

const form = document.querySelector("form")
// console.log(form);

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    const newDogObject = {
        dogName: e.target.dogName.value,
        dogBreed: e.target.dogBreed.value
    }
    
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(newDogObject),
    })
    .then (response => response.json())
    .then (userObject => applyUsersToDOM(userObject))

    form.reset();
}
);


function applyUsersToDOM(userObject) {
    const li = document.createElement('li')
    li.textContent = userObject.dogName
    ul.append(li)
    
}






// const submitData = {
//     name: "TestName",
//     email: "test@test.com",
// }