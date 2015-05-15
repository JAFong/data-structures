var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var newNode = {};
  newNode.value = value;
  newNode.children =  [];
  _.extend(newNode, treeMethods);
  this.children.push(newNode);
};

treeMethods.contains = function(target){
  var result = false;
  var findNode = function findNode(childArray){
    for(var child = 0; child < childArray.length; child++){
      if(childArray[child].value === target){
        result = true;
        return;
      } else if(childArray[child].children){
        findNode(childArray[child].children);
      }
    }
  };
  findNode(this.children);
  return result;
  // var findNode = function(node) {
  //   if (node.value === target) {
  //     hasTarget = true;
  //     return;
  //   } else if (node.children.length > 0) {
  //     _.each(node.children, function(child){
  //       findNode(child);
  //     });
  //   }
  // };
  // findNode(this);
  // return hasTarget;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
