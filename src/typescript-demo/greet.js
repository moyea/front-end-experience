var Greeter = (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        return "<h1>" + this.greeting + "</h1>";
    };
    Greeter.hello = function () {
    };
    return Greeter;
}());
var greeter = new Greeter("Hello,World!");
document.body.innerHTML = greeter.greet();
//# sourceMappingURL=greet.js.map