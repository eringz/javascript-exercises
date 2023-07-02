class Brand
{
    constructor(brand)
    {
        this.brand = brand;
    }

    showBrand()
    {
        return this.brand;
    }
}

class Model extends Brand
{
    constructor(brand, model){
        super(brand);
        this.model = model;
    }

    showModel(){
        console.log(`My laptop is ${this.showBrand()} ${this.model}`);
    }
}

let my_laptop = new Model('Asus', 'ROG Strix G17');
my_laptop.showModel();