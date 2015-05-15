var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if (list.tail) {
      list.tail.next = newNode;
    }
    list.tail = newNode;
    if (list.head === null) {
      list.head = newNode;
    }
  };

  list.removeHead = function(){
    var record = list.head;
    delete list.head;
    list.head = record.next;
    return record.value;
  };

  list.contains = function(target){
    var result = false;
    var findNumber = function(node) {
      if (node.value === target) {
        result = true;
      } else if (node.next) {
        findNumber(node.next);
      }
      // return false;
    };
    findNumber(list.head);
    return result;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
