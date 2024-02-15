/*
REUSABILITY
ability of code to be used multiple times without modification.
*/

function calculateArea(shape:string, ...args:number[]){
	if(shape === 'circle'){
		const [radius] = args;
		const pi = 3.14;
		return pi * radius * radius;
	}
	else if(shape === 'rectangle'){
		const [length,width] = args;
		return length * width;
	}
	else if(shape === 'square'){
		const [side] = args;
		return side * side;
	}
	else if(shape === 'triangle'){
		const [base,height] = args;
		return (base * height )/2
	}
	else{
		throw new Error (`Shape ${shape} is unknown!`);
	}
}

const circleArea = calculateArea('circle', 10);
console.log(circleArea)

const rectangleArea = calculateArea('rectangle',10,10)
console.log(rectangleArea)

/*
This example defines a single function calculateArea that takes a shape argument
and a variable number of arguments. Based on the shape argument, the function 
performs the appropriate calculation and returns the result.
This approach is much more efficient since it eliminates 
the need to repeat code for similar tasks. It is also more flexible and extensible, 
as additional shapes can easily be added in the future.
*/


//Create A Calculator

function calculate(arithmetic,...arg):string | number{
	const [num1,num2] = arg;

	if(arithmetic === 'add'){
		return num1 + num2 
	}
	else if(arithmetic === 'sub'){
		return num1 - num2 
	}
	else if(arithmetic ==='multi'){
		return num1 * num2;
	}
	else if(arithmetic ==='div'){
		return num1 / num2;
	}
}

const add = calculate('add',2,2);
console.log('add: ',add);

const sub = calculate('sub',33,2);
console.log('sub:',sub);

const multi = calculate('multi',4,2);
console.log('multi:',multi);

const div = calculate('div',444,2);
console.log('div:',div);








