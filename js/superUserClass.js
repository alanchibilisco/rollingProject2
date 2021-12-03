class SuperUser{
   
   
    constructor(name, password){
        this.name=name;
        this.password=password;
    }

   get getName(){
       return this.name;
   }

   
}

let superUser=new SuperUser('admin', 'admin');


 function superUserLocalStorage(){
    localStorage.setItem('superUserKey', JSON.stringify(superUser));
}

superUserLocalStorage();
//console.log(superUser);