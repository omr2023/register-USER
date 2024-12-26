let username = document.querySelector("#usernamee")

let gitusername = document.querySelector("#usernamm")

let email = document.querySelector("#email")

let password = document.querySelector("#passwordd")

let passwordid = document.querySelector("#password_id")

let registerBtn = document.querySelector("#sign_up")

// //////////////////////////////////////////////////////////

registerBtn.addEventListener("click" , function(e){
e.preventDefault()
    if (username.value ==="" ||gitusername.value==="" ||email.value==="" || password.value==="" ||passwordid.value==="" ){
        alert("please fill data")
    } else{
        localStorage.setItem("username" , username.value)

        localStorage.setItem("usernamm" , (gitusername.value))

        localStorage.setItem("email" , email.value)

        localStorage.setItem("password" , password.value)

        localStorage.setItem("passwordid" , passwordid.value )

        setTimeout(()=>{

            window.location = "login.html"
            
        })
    }
}, 1500)










