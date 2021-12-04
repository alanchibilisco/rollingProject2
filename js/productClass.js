 export class Product{

    constructor(code, category, description, model, brand, price, url){
        this.code=code;
        this.description=description;
        this.category=category;
        this.url=url;
        this.model=model;
        this.brand=brand;
        this.price=price;
    }

    set setCode(code){
        this.code=code;
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

    set setModel(model){
        this.model=model;
    }

    set setBrand(brand){
        this.brand=brand;
    }

    set setPrice(price){
        this.price=price;
    }
    
    get getCode(){
        return this.code;
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

    get getModel(){
        return this.model;
    }

    get getBrand(){
        return this.brand;
    }

    get getPrice(){
        return this.price;
    }



}