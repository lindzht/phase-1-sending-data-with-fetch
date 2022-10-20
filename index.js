// Add your code here


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
    }
    .then (response => response.json()),
    .then 
    );

    form.reset();
}
);







// const submitData = {
//     name: "TestName",
//     email: "test@test.com",
// }