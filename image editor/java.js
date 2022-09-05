let sat=document.getElementById('saturite');
let con=document.getElementById('contrast');
let bri=document.getElementById('brightness');
let sepia=document.getElementById('sepia');
let gray=document.getElementById('grayscale');
let blur=document.getElementById('blur');
let hue=document.getElementById('hue-rotate');
let upload=document.getElementById('upload');
let dow=document.getElementById('download');
let img=document.getElementById('im');
let reset=document.querySelector('span');
let imgbox=document.querySelector('.img-box');
let can=document.getElementById('canvas');
let ctx=can.getContext('2d',)





function resetcol(){
    img.style.filter='none'
    
    sat.value= '100'
    con.value= '100'
    bri.value= '100'
    sepia.value= '0'
    gray.value= '0'
    blur.value= '0'
    hue.value= '0'
}




window.onload=function(){
   reset.style.display='none';
   dow.style.display='none';
  imgbox.style.display='none';


}


upload.onchange=function(){
    resetcol()
    reset.style.display='block';
    dow.style.display='block';
   imgbox.style.display='block';
 let file=new FileReader(upload);
   file.readAsDataURL(upload.files[0])
   file.onload=function(){
    img.src=file.result
   }
 img.onload=function(){
    can.width=img.width
    can.height=img.height

    ctx.drawImage(img,0,0,can.width,can.height )
    img.style.display='none';
 }

}

let filters=document.querySelectorAll('ul li input');
filters.forEach(filter=>{
  filter.addEventListener('input',function(){
   ctx.filter=`saturate(${sat.value}%) 
   contrast(${con.value}%) 
   brightness(${bri.value}%)
   sepia(${sepia.value}%)
   blur(${blur.value}px)
   grayscale(${gray.value})
   hue-rotate(${hue.value}deg)`
   ctx.drawImage(img,0,0,can.width,can.height ) })
   
})

dow.onclick=function(){
    dow.href=can.toDataURL()
}
