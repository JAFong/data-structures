var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  someInstance.push = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.pop = function(){
    if(size >0){
      var record = storage[size - 1];
      delete storage[size - 1];
      size--;
      return record;
    }

  };

  someInstance.size = function(){
    // return Math.max(0, size);
    return size;
  };

  return someInstance;
};
