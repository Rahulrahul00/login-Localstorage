

const loginForm = document.querySelector('.loginForm');
const registerForm = document.querySelector('.registerForm');

const registerLink = document.querySelector('.registerLink');
const loginLink = document.querySelector('.loginLink');


registerLink.onclick=()=>{

    registerForm.classList.add('come');
    loginForm.classList.add('come');
}

loginLink.onclick=()=>{

    registerForm.classList.remove('come');
    loginForm.classList.remove('come');
}


let saveData = ()=> {
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    
   

    // console.log("Name:", name);
    // console.log("Email:", email);
    // console.log("Password:", password);

    // localStorage.setItem("name",name);
    // localStorage.setItem("email",email);
    // localStorage.setItem("password",password);
   

    let userData = [];

    userData = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : [];
    
    if(userData.some((v)=>{

        return v.email == email ;
    })){
        alert("Invalid email, please enter another email");
        return;
    }else if(name === "" || email === "" || password === ""){
        alert("Fill it completely");
        return;
    }else {

        userData.push({
            "name" : name,
            "email" : email,
            "password" : password
        })
    }

    localStorage.setItem("user", JSON.stringify(userData));

    alert("Registration Successful");
    
}

let logData = ()=>{

 
let logEmail,logPass;
     logEmail = document.getElementById("logEmail").value;
     logPass = document.getElementById("logPass").value;
    

     let eyeicon = document.getElementById("eyeicon");

     eyeicon.onclick = function (){
       if(password.type == "password"){
           password.type = "text";
       }else{
           password.type = "password";
       }
     }
   

      console.log(eyeicon);

    let userData =[];

    userData = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : [];

    if(userData.some((v)=>{

        return v.email == logEmail && v.password == logPass;
    })){
        alert("Login Successful")
        window.location.href="crud.html";
    

    let currentUser = userData.fliter((v)=>{
           return v.email == logEmail && v.password == logPass;
    })[0]

    localStorage.setItem("name", currentUser.name);
    localStorage.setItem("email", currentUser.email);
   

         
}else{
    alert("Login Failed");
}

 
 

}

  //  password show hidden

  



