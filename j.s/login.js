let username = document.querySelector("#username")

let password = document.querySelector("#password")

let loginBtn = document.querySelector("#sign_in")

 let getUser = localStorage.getItem("username")

 let getPassword = localStorage.getItem("password")
// //////////////////////////////////////////////////////////

loginBtn.addEventListener("click" , function(e){
e.preventDefault()

if(username.value==="" || password.value===""){
    alert("Please enter data")
} else{
    if(getUser&&getUser.trim() ===username.value && getPassword && getPassword.trim()=== password.value){


setTimeout (()=>{
     window.location = "index.html"
}, 1500)

        
    }    else{
         
    }
}

})










