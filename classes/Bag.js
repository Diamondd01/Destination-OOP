class Bag {
constructor(weight,id,owner=null){
    this.weight=weight;
    this.id=id;
    this.owner=owner;
}; 
    getOwner() {
    return this.owner;
}
assignOwner(newOwner) { 
 this.owner= newOwner;
    }
}


module.exports = Bag;