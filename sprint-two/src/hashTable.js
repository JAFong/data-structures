var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  debugger;
  this._storage[i] = v;
//   this._storage.set(i, v);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // var result = this._storage.get(i);
  // return result;
  var result = this._storage[i];
  return result;
};

HashTable.prototype.remove = function(k){
  // debugger;
  var i = getIndexBelowMaxForKey(k, this._limit);
  //iteratae through each key in the limitedArray aka this._storage
    //if if the index of object = i
      //delete k
  for(var key in this._storage){
    if(this.hasOwnProperty(key)){
      delete this._storage[i];
    }
 }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
