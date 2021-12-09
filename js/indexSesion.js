//variables

let stateSesion=JSON.parse(localStorage.getItem('stateSesion')) || false;

let user=JSON.parse(localStorage.getItem('user')) || '';

let linkAdmin=document.getElementById('linkAdmin');

let regBtn=document.getElementById('regBtn');

let userBtn=document.getElementById('userBtn');

let exitBtn=document.getElementById('exitBtn');

console.log(stateSesion);
console.log(user);
console.log(linkAdmin);
console.log(userBtn);
console.log(exitBtn);

if(stateSesion){
    linkAdmin.className='nav-item';
    regBtn.className='d-none';
    exitBtn.className='btn btn-dark';
    userBtn.innerHTML=user.name;
    userBtn.removeAttribute("href");
    exitBtn.addEventListener('click', closeSesion);    
}






function closeSesion(){
    if(stateSesion){
        stateSesion=false;
    localStorage.setItem('stateSesion', JSON.stringify(stateSesion));
    localStorage.removeItem('user');
    window.location.replace("index.html");
    }else{
        window.location.reload();
    }
    
}