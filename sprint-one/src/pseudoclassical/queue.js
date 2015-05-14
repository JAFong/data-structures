var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,

  // but try not not reference your old code in writing the new style.
  this.qSize  = 0;
  this.first = 0;
  this.last = 0;
  this.storage = 0;
};
Queue.prototype.enqueue = function(value){
  this.storage[this.first] = value;
  this.last++;
  this.qSize++;
};
Queue.prototype.dequeue = function(){
  if(this.qSize > 0){
    this.record = this.storage[this.last];
    delete this.storage[this.last];
    this.qSize--;
    this.first++;
    return this.record;
  }
};
Queue.prototype.size = function(){
  return this.qSize;
}
var newQueue = new Queue();
