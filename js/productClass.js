 export class Product{

    constructor(code, name, description, category, url){
        this.code=code;
        this.name=name;
        this.description=description;
        this.category=category;
        this.url=url;
    }

    set setCode(code){
        this.code=code;
    }

    set setName(name){
        this.name=name;
    }

    set setDescription(description){
        this.description=description;
    }

    set setCategory(category){
        this.category=category;
    }

    set setURL(url){
        this.url=url;
    }

    get getCode(){
        return this.code;
    }

    get getName(){
        return this.name;
    }

    get getDescription(){
        return this.description;
    }

    get getCategory(){
        return this.category;
    }

    get getURL(){
        return this.url;
    }



}