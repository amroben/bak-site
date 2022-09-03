//GETTOTAL
//CREATE PRODUCTE
//SAVE LOCALSTORAGE
//CLEAR INPUT
//READ
//COUNT
//DELETE
//UPDATE
//SEARCH
//CLEAN DATA


let search=document.getElementById('search');
let title=document.getElementById('i1');
let price=document.getElementById('i2');
let taxes=document.getElementById('i3');
let ads=document.getElementById('i4');
let discount=document.getElementById('i5');
let total=document.getElementById('total');
let count=document.getElementById('i6');
let category=document.getElementById('i7');
let create=document.getElementById('creat');
let delet=document.getElementById('deleteall');
let tmp;
let mood='create'

//gettotal

function gettotal(){
    if(price.value !=''){
let result=(+price.value + +taxes.value + +ads.value) - +discount.value;
 total.innerHTML=result;
total.style.background='rgb(0, 102, 39)';
    }

    else{
        total.innerHTML='';
        total.style.background='rgb(139, 0, 7)'  }
}


//CREATE PRODUCTE

let datapro;
if(localStorage.product != null){
  datapro=JSON.parse(localStorage.product)

}
else{
    datapro=[];
}

create.onclick=function(){


    let newpro={
        title:title.value.toLowerCase(),
        price:price.value,
        taxes:taxes.value,
       ads:ads.value,
       discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value.toLowerCase(),
    
    }
    //SAVE LOCALSTORAGE

 if(title.value != '' && count.value<301 && price.value>0  && category.value != '') {
    if(mood==='create'){
    if(newpro.count > 1){
        for(let i=0;i < newpro.count;i++){
            datapro.push(newpro); }
    }
    else{
        datapro.push(newpro);    
    }
}
else{
datapro[tmp]=newpro;
mood='create'
create.innerHTML='create'
count.style.display='block'


}cleardata();}
      
    localStorage.setItem('product',JSON.stringify(datapro));
    
    show();
}


//CLEAR INPUT
function cleardata(){

    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML=''
    count.value='';
    category.value='';
 }


 //READ

 function show(){
    gettotal()
  
    let table='';
    
    for(let i=0;i<datapro.length;i++){
        table +=`<tr> 
        <td>${i+1} </td>
       <td>${datapro[i].title} </td>
       <td>${datapro[i].price}</td>
       <td>${datapro[i].taxes}</td>
       <td>${datapro[i].ads}</td>
       <td>${datapro[i].discount}</td>
       <td>${datapro[i].total}</td>
       <td>${datapro[i].category}</td>
       <td><button  onclick='up(${i})' id="update">update</button></td>
       <td><button onclick='deletepr(${i})'  id="delete">delete</button></td>
       </tr>`
    }
    let tbody=document.getElementById('tbody')
    tbody.innerHTML=table
   if(datapro.length>0){
    delet.style.display='block'
}
else{delet.style.display='none'}

    }
    
    show()


//DELETE PRO
function deletepr(i){
datapro.splice(i,1)
localStorage.setItem('product',JSON.stringify(datapro));
show()
}


//DELETE ALL

delet.onclick=function(){
    localStorage.clear();
    datapro.splice(0);
    show()}

//UPDATE
function up(i){
   
    title.value=datapro[i].title
    price.value=datapro[i].price
    taxes.value=datapro[i].taxes
    ads.value=datapro[i].ads
    discount.value=datapro[i].discount
    gettotal()
    count.style.display='none'
    category.value=datapro[i].category
    create.innerHTML='update'
    mood='update'
   tmp=i;
   scroll({
    left:0,
    top:0,
    behavior:'smooth'
   }) 
}


//SERACH

let searchmood='title';
function searchm(id){

   if(id== 'btnt' ) {
    searchmood='title'
   
   
    
   }
   else if(id == 'btnc' ) {
    searchmood='category'


   
}

search.placeholder='search by '+ searchmood
search.focus()
search.value=''
show()

}

function searchpro(value){
    let table='';
if(searchmood =='title'){
for(i=0;i<datapro.length;i++){
if(datapro[i].title.toLowerCase().includes(value)){
   
        table +=`<tr> 
        <td>${i} </td>
       <td>${datapro[i].title} </td>
       <td>${datapro[i].price}</td>
       <td>${datapro[i].taxes}</td>
       <td>${datapro[i].ads}</td>
       <td>${datapro[i].discount}</td>
       <td>${datapro[i].total}</td>
       <td>${datapro[i].category}</td>
       <td><button  onclick='up(${i})' id="update">update</button></td>
       <td><button onclick='deletepr(${i})'  id="delete">delete</button></td>
       </tr>`
    }   
} 
}else{
    for(i=0;i<datapro.length;i++){
        if(datapro[i].category.includes(value)){
           
                table +=`<tr> 
                <td>${i} </td>
               <td>${datapro[i].title} </td>
               <td>${datapro[i].price}</td>
               <td>${datapro[i].taxes}</td>
               <td>${datapro[i].ads}</td>
               <td>${datapro[i].discount}</td>
               <td>${datapro[i].total}</td>
               <td>${datapro[i].category}</td>
               <td><button  onclick='up(${i})' id="update">update</button></td>
               <td><button onclick='deletepr(${i})'  id="delete">delete</button></td>
               </tr>`

}


let tbody=document.getElementById('tbody')
    tbody.innerHTML=table
}
}  }
