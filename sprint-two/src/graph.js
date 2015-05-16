

var Graph = function(){

};
var GraphNode = function(){
  this.edges = [];
};
Graph.prototype.addNode = function(node){
  var newNode = new GraphNode();
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
  for(key in this){
    if(key === node){
      delete this[key];
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var truthy = false;
  var toInFrom =_.indexOf(this[fromNode].edges, toNode) > -1;
  var fromInTo = _.indexOf(this[toNode].edges, fromNode) > -1;
  if ( toInFrom && fromInTo ) {
    truthy = true;
  }
  return truthy;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  // var keys = Object.keys(this);
  this[fromNode].edges.push(toNode);
  this[toNode].edges.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var indexOne = _.indexOf(this[toNode].edges, fromNode);
  var indexTwo = _.indexOf(this[fromNode].edges, toNode);
  if ( indexOn && toIndex ) {
    this[toNode].edges.splice(indexOn, 1);
    this[fromNode].edges.splice(toIndex, 1);
  }
};

Graph.prototype.forEachNode = function(cb){
  for(var key in this){
    if(this.hasOwnProperty(key)){
      cb(key);
    }
  }
  // _.each(this, function(obj){
  //   if (this.hasOwnProperty(obj)) {
  //     cb(obj);
  //   }
  // });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



