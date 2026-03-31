const contextReturner=function(){
    return this.location.pathname;

}

class Dog{
    constructor(name,breed){
        this.name=name;
        this.breed=breed;
        this.bark="WOOF!!WOOF!!"
    }
    warn(){
        console.log(`This dog ${this.name} is of breed ${this.breed} and barks ${this.bark}`)
    }
}
const mutina=new Dog("Mutina","lion");
console.log(mutina);
console.log(globalThis)