var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.listSize = 0;
  newQueue.first = 0;
  newQueue.last = 0;
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.last] = value;
    this.listSize++;
    this.last++;
  },
  dequeue: function() {
    if (this.listSize > 0) {
      var record = this.storage[this.first];
      delete this.storage[this.first];
      this.first++;
      this.listSize--;
      return record;
    }
  },
  size: function() {
    return this.listSize;
  }
};


