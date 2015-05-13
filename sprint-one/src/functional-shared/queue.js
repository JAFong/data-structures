var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  _.extend(newQueue, queueMethods);
  newQueue.qSize = 0;
  newQueue.first = 0;
  newQueue.last = 0;
  newQueue.storage = {};
  return newQueue;

};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.last] = value;
    this.qSize++;
    this.last++;
  },
  dequeue: function(){
    if(this.qSize > 0){
      this.record = this.storage[this.first];
      delete this.storage[this.first];
      this.first++;
      this.qSize--;
      return this.record;
    }
  },
  size: function(){
    return this.qSize;
  }
};



