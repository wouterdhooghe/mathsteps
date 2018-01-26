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

var math = require('mathjs');

var a = math.chain(3)
      .add(4)
      .multiply(2)
      .done();
 console.log(a);  // 14

 var node1 = math.parse(a);
 console.log(node1);

 console.log(node1.toString);

 console.log();
console.log('Traverse the expression tree of expression "3 * x + 2"');
var node1 = math.parse('3 * x^2 + Sin(2)');
node1.traverse(function (node, path, parent) {
  switch (node.type) {
    case 'OperatorNode': console.log(node.type, node.op);    break;
    case 'ConstantNode': console.log(node.type, node.value); break;
	case 'SymbolNode':   console.log(node.type, node.name);  break;
	case 'FunctionNode':   console.log(node.type, node.name);  break;
    default:             console.log(node.type);
  }
});

// transform an expression tree
console.log();
console.log('Replace all symbol nodes "x" in expression "x^2 + 5*x" with a constant 3');
var node2 = math.parse('x^2 + 5*x^x*x*x*x');
var transformed = node2.transform(function (node, path, parent) {
  if (node.isSymbolNode && parent.op == '*') {
    return new math.expression.node.ConstantNode(3);
  }
  else {
    return node;
  }
});
console.log(transformed.toString());
// outputs: '(3 ^ 2) + (5 * 3)'