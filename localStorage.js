
// const form = document.querySelector('form');
function loadData(e){
    console.log(e);
    let name = e.target.name.value;
    let email = e.target.Email.value;
    let number = e.target.phone.value;
    let userData = JSON.parse(localStorage.getItem("userdata"))??[];
    userData.push({
        name:name,
        email:email,
        phone:number
    })
    localStorage.setItem("userdata",JSON.stringify(userData));
    // form.reset();
    window.location.href="index3.html";
    e.preventDefault();
    
}


document.addEventListener("submit",loadData);
// display()