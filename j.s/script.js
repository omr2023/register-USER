
// let userinufo = document.querySelector("#user_inufo")

// let userdata = document.querySelector("#user")

// let links = document.querySelector("#links")

// if(localStorage.getItem("username")){
//     links.remove()
//     userdata.innerHTML = localStorage.getItem("username")
// }
// ///////////////////////////////////////////////

let searchMood = 'title';

function getsearchmood(id)
{
    let search = document.getElementById("earch")
if(id == 'serchTitle'){
    searchMood = 'title';
} 
}

function searchData(value){

    if(searchMood == 'title'){

        for(let i =0 ; i <product-box.length ; i++){
            if(product-box[i].product-title.includes(value)){
                console.log(i)
            }
        }


    }
}











// ///////////////////////////////////////////////////////////////


const cartIcon = document.querySelector("#cart-icon")
const cart = document.querySelector(".cart")
const closecart = document.querySelector("#cart-close")

cartIcon.addEventListener("click" , () =>{
    cart.classList.add("active")
})

closecart.addEventListener("click" , () =>{
    cart.classList.remove("active")
})

// START WHEN THE DOCUMINT IS REDY

if(document.readyStats== "loading"){
    document.addEventListener('DOMContentLoaded' , start)
} else{
    start()
}
// ===================================== start==================

function start(){
    addEvents()
}
// /////////////////////////////// UpdAte & RERENDR//////////////

function update(){
    addEvents()
    updateTotal()

}
// ///////////////////////////// AAD EVENTS /////////////////////
function addEvents(){
    let cartRmove_btns = document.querySelectorAll('.cart-remove')
    console.log(cartRmove_btns)
    cartRmove_btns.forEach(btn =>{
        btn.addEventListener("click" , handle_removeCartItem)
    })
    let cartQuantity_inputs = document.querySelectorAll('.cart-quantity')
    cartQuantity_inputs.forEach(input =>{
        input.addEventListener("change" , handle_changeItQuantity)
    })

    let addcart_btn = document.querySelectorAll(".add-cart")
    addcart_btn.forEach(btn =>{
        btn.addEventListener("click" , handle_addCartItem)
    })
}

//===========================  HADLE EVENTS FUNCTION  ============
let itemsAdded =[]
function handle_addCartItem(){
    let product = this.parentElement
    let title = product.querySelector(".product-title").innerHTML;
    let price = product.querySelector(".product-price").innerHTML;
    let imgSrc = product.querySelector(".product-img").src;
    console.log(title , price , imgSrc)
    let newToAdd = {
        title,
        price,
        imgSrc,
    }

if(itemsAdded.find(el => el.title == newToAdd.title)){
    alert("THIS IUTM IS ALREADY EXIST")
} else{
    itemsAdded.push(newToAdd)
}

    let cartBoxlement = cartBoxComponet(title , price , imgSrc)
    let newNode = document.createElement("div")
    newNode.innerHTML = cartBoxlement
    const cartContent = cart.querySelector(".cart-contant")
    cartContent.appendChild(newNode)
    update()
}

function handle_removeCartItem(){
    this.parentElement.remove()
    itemsAdded = itemsAdded.filter(el=>el.title !=this.parentElement.querySelector(".cart-porduct-title").innerHTML )

    update()
}
function handle_changeItQuantity(){
    if(isNaN(this.value) || this.value<1){
        this.value = 1
    }
    this.value = Math.floor(this.value)
    update()
}

// ////////////////////   ///////////////// ///////////////

function updateTotal(){
    let cartBoxes = document.querySelectorAll('.catr-box')
    const totalElement = cart.querySelector('.total-price')
    let total = 0;
    cartBoxes.forEach(cartBox =>{
        let priceElement = cartBox.querySelector(".cart-price")
        let price = parseFloat(priceElement.innerHTML.replace("$" , ""))
        let quantity = cartBox.querySelector(".cart-quantity").value
        total += price * quantity

    })
    total = total.toFixed(2)

    // total = Math.round(total * 100) / 100

    totalElement.innerHTML = "$" + total
}

//====================================================
function  cartBoxComponet(title , price , imgSrc){
    return`
                <div class="catr-box">
                <img src="${imgSrc}" alt="" class="cart-img">
                <div class="deltail-box">
                    <div class="cart-porduct-title">${title}</div>
                    <div class="cart-price">${price}</div>
                    <input type="number" value="1" class="cart-quantity">
                </div>
                <!-- REMOV CART -->
                <i class='bx bxs-trash-alt cart-remove'></i>
                </div>

`
}


























































































