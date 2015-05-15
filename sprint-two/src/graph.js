

var Graph = function(){

};
var Node = function(){

};
Graph.prototype.addNode = function(node){
  // this[node] = {};
  // this[node].value = node;
  //
  var newNode = new Node();
  this[node] = newNode;
};
Graph.prototype.contains = function(node){
  for(var key in this){
    if(key === node){
      return true;
    } else{
      return false;
    }
  }
  // _.each(this, function() {
  //   // if (obj.value === node) {
  //   //   return true;
  //   // } return false;
  // });
  //
  // var truthy = false;
  // return truthy;

};

Graph.prototype.removeNode = function(node){
};

Graph.prototype.hasEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



