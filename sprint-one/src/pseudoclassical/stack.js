var Stack = function() {
  this.storage = {};
  this.len = 0;

};

Stack.prototype.push = function(value) {
  this.storage[this.len++] = value;
};

Stack.prototype.pop = function() {
  if (this.len > 0) {
    var popped = this.storage[--this.len];
    delete this.storage[this.len];
    return popped;
  }
};

Stack.prototype.size = function() {
  return this.len;
};
