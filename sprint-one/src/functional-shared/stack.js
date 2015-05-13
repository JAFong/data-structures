var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //
  var newStack = {};
  newStack.storage = {};
  newStack.listSize = 0;
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {

  push: function(value){
    this.storage[this.listSize] = value;
    this.listSize++;
  },
  pop:  function(){
    this.record = this.storage[this.listSize - 1];
    delete this.storage[this.listSize - 1];
    this.listSize--;
    return this.record;
  },
  size: function(){
    return Math.max(0, this.listSize);
    //return this.listSize;
  }
};


