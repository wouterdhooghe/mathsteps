var test;
test = "hello"
console.log(test);
var mathsteps = require('mathsteps');

var steps = mathsteps.simplifyExpression('2x + 2x^(2+1) + x + x');

steps.forEach(step => {
	console.log("before change: " + step.oldNode.toString()); 
	console.log("change: " + step.changeType); 
	console.log("after change: " + step.newNode.toString());
	console.log("# of substeps: " + step.substeps.length); 
});

console.log(3+4);

