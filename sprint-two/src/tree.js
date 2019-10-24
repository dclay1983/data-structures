var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (this.value === target) { return true; }
  for (var node of this.children) {
    if (node.contains(target)) { return true; }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * creation = O(1) constant
 * addChild = O(1) constant
 * contains = O(n) linear
 */
