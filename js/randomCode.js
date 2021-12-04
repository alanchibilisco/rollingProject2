let regCode=JSON.parse(localStorage.getItem('regCodeKey')) || [];
let repeated;

export function random(){
    do{
        let code=parseInt(Math.random()*999999);
        repeated=repeatedCode(code);
        if(!repeated){
            regCode.push(code);
            return code;
        }else{
            repeated=false;
        }
    }while(!repeated);
}


function repeatedCode(code){
    for (let i=0; i<regCode.length; i++){
        if(code===regCode[i]){
            repeated=true;
            break;
        }
    }
    return repeated;
}

export function regCodeLocalStorage(){
    localStorage.setItem('regCodeKey',JSON.stringify(regCode));
}