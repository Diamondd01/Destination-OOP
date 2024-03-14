const Bag = require("../../classes/Bag.js")

describe ('Bag',()=>{
    let bag; 

    beforeEach(()=> {
        bag = new Bag(5,'123');
    });

    it('should create an instance of Bag class',() => {
            expect(bag).toBeInstanceOf(Bag);
    });
});


describe ('Bag',()=>{
    let bag; 

    beforeEach(()=> {
        bag = new Bag(5,'123');
    });

    it('should assign correct weight and ID',() => {
            expect(bag.weight).toEqual(5);
            expect(bag.id).toEqual('123')
    });
});

describe ('Bag',()=>{
    let bag; 

    beforeEach(()=> {
        bag = new Bag(5,'123',null);
    });

    it('should initialize owner with null',() => {
            expect(bag.owner).toBeNull();
        
    });
});


describe ('Bag',()=>{
    let bag; 
    let owner = {name:'james', age: 27};

    beforeEach(()=> {
        bag = new Bag(5,'123',initialOwner);
    });

    it('should get initial owner with getOwner',() => {
        owner = bag.getOwner();
            expect(owner).toEqual(owner);
        
    });
});

describe ('Bag',()=>{
    let bag; 
    let initialOwner = {name:'james', age:27};

    beforeEach(()=> {
        bag = new Bag(5,'123',initialOwner);
    });

    it('should get initial owner with getOwner',() => {
        let owner = bag.getOwner;
            expect(owner).toEqual(initialOwner);
        
    });
});
describe ('Bag',()=>{
    let bag; 
    let newOwner = {name:'jayla', age:26};

    beforeEach(()=> {
       
    });

    it('should update owner with newOwner',() => {
        bag = new Bag(5,'123');
        bag.assignOwner(newOwner)
            expect(bag.getOwner()).toEqual(newOwner);
        
    });
});