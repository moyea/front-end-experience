class Greeter{
    constructor(public greeting:string){}
    greet(){
        return "<h1>" + this.greeting + "</h1>";
    }
    static hello(){
    }
}

var greeter = new Greeter("Hello,World!");
document.body.innerHTML = greeter.greet();