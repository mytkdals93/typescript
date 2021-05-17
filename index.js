console.log('Hello TypeScript!');
// Implicit Types
var helloWorld = "Hello, World!";
// helloWorld = 5;
//Explicit types
var firstName = 'John';
var age = 30;
var x = ["Hello", 10];
//Enums
var Contients;
(function (Contients) {
    Contients[Contients["North_America"] = 0] = "North_America";
    Contients[Contients["South_America"] = 1] = "South_America";
    Contients[Contients["Africa"] = 2] = "Africa";
    Contients[Contients["Asia"] = 3] = "Asia";
    Contients[Contients["Europe"] = 4] = "Europe";
    Contients[Contients["Antritca"] = 5] = "Antritca";
    Contients[Contients["Austalia"] = 6] = "Austalia";
})(Contients || (Contients = {}));
var regine = Contients.Africa; //2
