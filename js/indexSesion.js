//variables

let stateSesion=JSON.parse(localStorage.getItem('stateSesion')) || false;

let user=JSON.parse(localStorage.getItem('user'));

let linkAdmin=document.getElementById('linkAdmin');

let userBtn=document.getElementById('userBtn');

let exitBtn=document.getElementById('exitBtn');

console.log(stateSesion);
console.log(user);
console.log(linkAdmin);
console.log(userBtn);
console.log(exitBtn);

if(stateSesion){
    linkAdmin.className='nav-item';
    exitBtn.className='btn btn-dark';
    userBtn.innerHTML=user.name;
    userBtn.removeAttribute("href");
    exitBtn.addEventListener('click', closeSesion);    
}






function closeSesion(){
    if(stateSesion){
        stateSesion=false;
    localStorage.setItem('stateSesion', JSON.stringify(stateSesion));
    window.location.reload();
    }else{
        window.location.reload();
    }
    
}