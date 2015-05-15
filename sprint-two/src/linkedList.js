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
    var findNumber = function(node) {
      if (target === 5) {
        debugger;
      }
      if (node.value === target) {
        return true;
      } else if (node.next) {
        findNumber(node.next);
      }
      // return false;
    };
    if (findNumber(list.head)) {
      return findNumber(list.head);
    }
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
