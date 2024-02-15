/*
REUSABILITY
ability of code to be used multiple times without modification.
*/
function calculateArea(shape) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (shape === 'circle') {
        var radius = args[0];
        var pi = 3.14;
        return pi * radius * radius;
    }
    else if (shape === 'rectangle') {
        var length_1 = args[0], width = args[1];
        return length_1 * width;
    }
    else if (shape === 'square') {
        var side = args[0];
        return side * side;
    }
    else if (shape === 'triangle') {
        var base = args[0], height = args[1];
        return (base * height) / 2;
    }
    else {
        throw new Error("Shape ".concat(shape, " is unknown!"));
    }
}
var circleArea = calculateArea('circle', 10);
console.log(circleArea);
var rectangleArea = calculateArea('rectangle', 10, 10);
console.log(rectangleArea);
/*
This example defines a single function calculateArea that takes a shape argument
and a variable number of arguments. Based on the shape argument, the function
performs the appropriate calculation and returns the result.
This approach is much more efficient since it eliminates
the need to repeat code for similar tasks. It is also more flexible and extensible,
as additional shapes can easily be added in the future.
*/
//Create A Calculator
function calculate(arithmetic) {
    var arg = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg[_i - 1] = arguments[_i];
    }
    var num1 = arg[0], num2 = arg[1];
    if (arithmetic === 'add') {
        return num1 + num2;
    }
    else if (arithmetic === 'sub') {
        return num1 - num2;
    }
    else if (arithmetic === 'multi') {
        return num1 * num2;
    }
    else if (arithmetic === 'div') {
        return num1 / num2;
    }
}
var add = calculate('add', 2, 2);
console.log('add: ', add);
var sub = calculate('sub', 33, 2);
console.log('sub:', sub);
var multi = calculate('multi', 4, 2);
console.log('multi:', multi);
var div = calculate('div', 444, 2);
console.log('div:', div);
