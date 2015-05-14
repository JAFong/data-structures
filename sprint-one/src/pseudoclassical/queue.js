var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,

  // but try not not reference your old code in writing the new style.
  this.qSize  = 0;
  this.first = 0;
  this.last = 0;
  this.storage = {};
};
Queue.prototype.enqueue = function(value){
  this.storage[this.last] = value;
  this.last++;
  this.qSize++;
};
Queue.prototype.dequeue = function(){
  if(this.qSize > 0){
    this.record = this.storage[this.first];
    delete this.storage[this.first];
    this.qSize--;
    this.first++;
    return this.record;
  }
};
Queue.prototype.size = function(){
  return this.qSize;
  // return this.last - this.first;
}
var newQueue = new Queue();
