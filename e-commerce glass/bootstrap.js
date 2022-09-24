let iconc=document.querySelector('#c');
let cart=document.querySelector('.cart');
let close=document.querySelector('#close');



iconc.onclick = function (){

   
    cart.classList.add('active');
 };

 close.onclick = function (){

   
    cart.classList.remove('active');
 };
 

//card working js
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
  ready() ; 
}
//make func

function ready(){
    var remove = document.getElementsByClassName('remove');
console.log('done')
for(var i = 0; i < remove.length;i++){
 var button = remove[i]
button.addEventListener('click' ,removeitem )
}

var quin =document.getElementsByClassName('cart-')
for(var i = 0; i < quin.length;i++){
var input= quin[i];
input.addEventListener('change',quchanged);
}
//add to cart
var addc= document.getElementsByClassName('add')
for(var i = 0; i < addc.length;i++){
 var button = addc[i]
 button.addEventListener('click', addCartClicked)
}
//buy
document.getElementsByClassName('btn')[0].addEventListener('click',buyButtonClicked)
}

function buyButtonClicked(){
alert('your order is placed')
var cartcontent = document.getElementsByClassName('con')[0]
while(cartcontent.hasChildNodes() ){
   cartcontent.removeChild(cartcontent.firstChild) 
}
updatetotal();
}


function removeitem (event){
    var btnclick = event.target;
    btnclick.parentElement.remove();
    updatetotal();
}

function quchanged(event){
var input = event.target
if(isNaN (input.value) ||input.value <=0 ){
    input.value =1;
}
updatetotal()
}


//add to cart
function addCartClicked(event){
var button = event.target
var shop = button.parentElement
var title =shop.getElementsByClassName('por-t')[0].innerText
var price =shop.getElementsByClassName('price')[0].innerText
var imgpro =shop.getElementsByClassName('img-p')[0].src
addproducttocard(title,price,imgpro)
updatetotal()
}



function addproducttocard(title,price,imgpro){
    var cartshop = document.createElement('div')
    cartshop.classList.add('box')

    var cartitem =document.getElementsByClassName('con')[0]
    var cartitemname = cartitem.getElementsByClassName('p-name')
    for(var i = 0; i < cartitemname.length;i++){
        if ( cartitemname[i].innerText == title){
            alert('you have already add this item to cart')
            return ;
       }
   
        
    }

    

var cartboxcontent=`
<img width="100%" class="ci" src="${imgpro} ">
        <div class="details">
        <div class="titpro">${title}</div>
         <div class="cp">${price}</div>
         <input type="number" value="1" class="cart-">
        </div>
        <i class='bx bx-trash-alt remove' ></i>
`
 cartshop.innerHTML = cartboxcontent
cartitem.append(cartshop)
cartshop.getElementsByClassName('remove')[0].addEventListener('click',removeitem  )
cartshop.getElementsByClassName('cart-')[0].addEventListener('change',quchanged  )
}

//update total

function  updatetotal(){
    var cartcontent = document.getElementsByClassName('con')[0]
    var cartboxs = document.getElementsByClassName('box')
    var total = 0;
    for(var i = 0; i < cartboxs.length;i++){
        var cartbox = cartboxs[i];
        var priceEl = cartbox.getElementsByClassName('cp')[0];
        var quEl = cartbox.getElementsByClassName('cart-')[0];
        var price= parseFloat(priceEl.innerText.replace('$',""));
        var qu =quEl.value;
        total = total + (price * qu);
    } 
       total=Math.round(total*100)/100;
       
        document.getElementsByClassName('tp')[0].innerText = '$' + total;
    
    
    };

   



