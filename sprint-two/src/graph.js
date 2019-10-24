// Instantiate a new graph
var Graph = function() {
  this.nodes = new Map(); //{1: 42, 2: 43};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (!this.contains(node)) {
    this.nodes.set(node, new Map());
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.has(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var edges = this.nodes.get(node);
  if (edges) {
    edges.forEach((nil, edge) => {
      this.removeEdge(node, edge);
    });
    this.nodes.delete(node);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var edges = this.nodes.get(fromNode);
  return !(edges === undefined || !edges.has(toNode));
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var fromEdges = this.nodes.get(fromNode);
  var toEdges = this.nodes.get(toNode);
  if (!(fromEdges === undefined || toEdges === undefined)) {
    fromEdges.set(toNode, null);
    toEdges.set(fromNode, null);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromEdges = this.nodes.get(fromNode);
  var toEdges = this.nodes.get(toNode);
  if (!(fromEdges === undefined || toEdges === undefined)) {
    fromEdges.delete(toNode);
    toEdges.delete(fromNode);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb, ...args) {
  this.nodes.forEach((nil, node) => cb(node, ...args));
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Creation: O(1) Constant
 * addNode: O(1) Constant
 * contains: O(1) Constant
 * removeNode: O(n) Linear
 * hasEdge: O(1) Constant
 * addEdge: O(1) Constant
 * removeEdge: O(1) Constant
 * forEachNode: O(n) Linear
 */


