var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage.push(item);
};

setPrototype.contains = function(item){
  var itemIndex =  _.indexOf(this._storage, item);
  if(itemIndex > -1){
    return true;
  } else{
    return false;
  }
};

setPrototype.remove = function(item){
  var itemIndex =  _.indexOf(this._storage, item);
  if(itemIndex > -1){
    this._storage.splice(itemIndex, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
