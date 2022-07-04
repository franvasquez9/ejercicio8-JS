function isTrue(){
    console.log("true");
}
isTrue()


function hola(){
    setTimeout(() => {
        console.log("Hola soy una promesa");
    }, 5000);
}
   hola();


function* generaIndices(){
    let id = 0;
    while(true){
        id = id + 2;
        if(id === 10){
            return id;
        }
        yield id; 
    }
    
}
const gen = generaIndices();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


