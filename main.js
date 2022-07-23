
class Mkulima{
    constructor(){
    this.orders = [];
    this.products = [];
    this.farms = [];
    this.addFarm = (farmId, name, farmer, phone, address) => { 
    this.farms.push({farmId,name,farmer,phone,address})}
    
    this.removeFarm = (farmId) => { 
    let specific = this.farms.find(item => item.farmId ===farmId);
    let farm_index = this.farms.indexOf(specific);
    this.farms.splice(farm_index, 1);}
    
    this.updateFarm = function(farmId, name, farmer, phone, address){ 
    let specificFarm = this.farms.find(item => item.farmId ===farmId)
    specificFarm.farmId =farmId;
    specificFarm.name =name;
    specificFarm.farmer =farmer;
    specificFarm.phone =phone;
    specificFarm.address =address;}
    
    this.getFarm = (farmId)=>{ 
    console.log(this.farms.find(object=>object.Id===farmId))}
    
    this.addProduct = (productId, name, price) => { 
    this.product.push({productId,name,price})}
    
    
    this.removeProduct = (productId) => { 
    let specific = this.product.find(item => item.productId ===productId);
    let productIndex = this.product.indexOf(specific);
    this.product.splice(productIndex, 1);}
    
    this.updateProduct = function(productId,name, price){ 
    let specificProduct = this.product.find(item => item.productId ===productId)
    specificProduct.productId = productId;
    specificProduct.name = name;
    specificProduct.price = price;}
    
    this.getProduct = (Id)=>{
    console.log(this.product.find(object=>object.productId===Id))
    }
    
    this.printProducts = ()=>{ 
    console.log()}
    
    this.calculateOrderCost = (productId,quantity)=>{ 
    let product = this.product.find(object=>object.productId===productId);
    console.log(`${quantity} ${product.name} for KES ${quantity*product.price}`);}
    }
    }
    
    let farmers = new Mkulima();
    farmers.addFarm("326","Sukuma","Hilda","07344555", "22 main street,kile");
    farmers.addFarm("345","Spinach","Fiona","072344444", "22 main street,kile");
    farmers.addFarm("122","Tomato","Becky","09433333", "22 main street,kile");
    console.log(farmers.farms);
    
    farmers.removeFarm("326");
    console.log();
    
