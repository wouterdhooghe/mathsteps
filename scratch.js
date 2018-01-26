var sub0 = math.parse('3x');
var sub1 = math.parse('5y');
var sub2 = math.parse('3');
var sub3 = new math.expression.node.ConstantNode(3);

var node = math.parse('x^2 + 5*x');

replacex = function (sub, node) {
    
return node.map(function (node, path, parent) {
  if (node.isSymbolNode && node.name === 'x') {
      console.log('elo');
    return sub;
  }
  else {
      console.log('lookmore');
      replacex(sub, node);
    return node;
  }
});

};

transformed = replacex(sub0,node);
transfo.innerHTML = transformed;