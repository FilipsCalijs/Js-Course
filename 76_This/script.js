//'use strict'



//1) обычная функция this = window, но если стоит use strict, то будет ундефайнд
function showThis(a,b) {
    console.log(this);
    function sum(){
        console.log(this);
        return a+b;
    }

    console.log(sum());
}
showThis(2,3);

//2) контекст у методов обьекта, это и будет сам обьект

const obj ={
    a: 20,
    b:20,
    sum: function(){
        console.log(this);
    }
}
obj.sum();


const obj_2 ={
    num: 5,
    sayNamber: function() { //так как эта функция в обьекте, то и выведет this обьект с этим this
        const say = () => { //такой вид функции не имеет конструктора, и по сему не знает что такое thi и берет его у функ выши
         console.log(this.num); 
        };  
    

    say();
    }
};

obj_2.sayNamber();


//3) this  в конструкторах и классах - новый экзампляр обьекта!!!

function User(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hallo = function() {
        console.log("Hello " + this.name);
    }
}


let fil = new User('Fil', 23);
console.log(fil);

//4) ручная привящка this - call, apply, bind