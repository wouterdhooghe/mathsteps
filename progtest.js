var mathsteps = require('mathsteps');

var steps = mathsteps.simplifyExpression('2x + 2x + x + x');

steps.forEach(step => {
	console.log("before change: " + step.oldNode.toString());   // before change: 2 x + 2 x + x + x
	console.log("change: " + step.changeType);                  // change: ADD_POLYNOMIAL_TERMS
	console.log("after change: " + step.newNode.toString());    // after change: 6 x
	console.log("# of substeps: " + step.substeps.length);      // # of substeps: 3
});