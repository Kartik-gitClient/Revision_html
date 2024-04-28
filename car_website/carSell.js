let register = document.querySelector(".register");
let loginBtn = document.querySelector(".login");
let signBtn = document.querySelector(".sign");
let loginDiv = document.querySelector(".login-wrap");
let signDiv = document.querySelector(".sign-wrap");
let submit = document.querySelector(".submit");
let login=document.querySelector(".log");
let signEmail = document.querySelector(".s-email").value;
let Return=document.querySelector(".return")

let DataArray = [];
let DataObject={};

loginBtn.addEventListener("click", () => {
    register.style.visibility = "hidden";
    loginDiv.classList.toggle("visible")
});

signBtn.addEventListener("click", () => {
    register.style.visibility = "hidden";
    signDiv.classList.toggle("visible");
});

submit.addEventListener("click", () => {
   
    if ( signEmail === null) {
        alert("Please enter a valid email");
    } else{
        alert("User has registered");
        DataArray.push(DataObject);
        console.log(DataArray);
        console.log(DataObject);
    }
});

login.addEventListener("click", () => {
    let logEmail = document.querySelector(".l-email").value;
    if ( logEmail === "") {
        alert("Please enter a valid email");
    } else{
        alert("User has Logined");
        DataArray.push(DataObject);
        console.log(DataArray);
        console.log(DataObject);
    }
});

