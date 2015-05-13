var Queue = function(){
  var someInstance = {};
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  var first = 0;
  var last = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[last] = value;
    last++;
    size++;
  };

  someInstance.dequeue = function(){
    // if (size > 0) {
    //   var record = storage[Object.keys(storage)[0]];
    //   delete storage[Object.keys(storage)[0]];
    //   size--;
    //   return record;
    // }
    if(size > 0){
      var record = storage[first];
      delete storage[first];
      first++;
      size--;
      return record;
    }
   };

  someInstance.size = function(){
    // return Math.max(0, size)
    return size;

  };

  return someInstance;
};

// 0 : a
//
