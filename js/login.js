let username= document.getElementById('username');
var password=document.getElementById('password');
let hideShow=document.querySelector('.far')




hideShow.addEventListener('click',function(){
  if (password.getAttribute('type')=='password') {
    password.setAttribute('type','text')
    this.classList.remove('fa-eye-slash');
    this.classList.add('fa-eye')
  }else{
    password.setAttribute('type','password')
    this.classList.remove('fa-eye');
    this.classList.add('fa-eye-slash')
  }
})


username.addEventListener('focus',function(){
 
    let labelus = document.querySelector('.lbluser');
   let starUs=document.querySelector('.us');
   starUs.style.color='red';
    let line = document.querySelector('.user');
    labelus.style.color='#007AB4';
    
    labelus.style.transform="translateY(-15px)";
    labelus.style.fontSize='12px';
    line.style.backgroundColor='#007AB4';
    line.style.height='2px';
    
});
password.addEventListener('focus',function(){
    let labelus = document.querySelector('.lblps');
   let starUs=document.querySelector('.ps');
   starUs.style.color='red';
    let line = document.querySelector('.pass');
    labelus.style.color='#007AB4';
    
    labelus.style.transform="translateY(-15px)";
    labelus.style.fontSize='12px';
    line.style.backgroundColor='#007AB4';
    line.style.height='2px';
    
});


username.addEventListener('focusout',function(){
    if (username.value==0) {
        let msj=document.querySelector('.emessage');
        msj.innerHTML='We need an username to log you in';
    let labelus = document.querySelector('.lbluser');
    console.log(msj)
 console.log(password.value)
 
    let line = document.querySelector('.user');
    labelus.style.color='red';
    
   
    line.style.backgroundColor='red';
    
}
}) //We need a password to log you in



    password.addEventListener('focusout',function(){
        if (password.value==0) {
            let msj=document.querySelector('.epass');
        let labelus = document.querySelector('.lblps');
        document.querySelector('.word').innerHTML='';
        msj.innerHTML='We need an password to log you in';
     console.log(password.value)
     
        let line = document.querySelector('.pass');
        labelus.style.color='red';
        
       
        line.style.backgroundColor='red';
        
    }
    }) 
