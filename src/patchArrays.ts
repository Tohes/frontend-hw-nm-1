// @ts-nocheck

const patchArrays = (): void => {
  Array.prototype.count = function () {
    return this.length;
  }
  Array.prototype.insert = function (x, y) {
    if(typeof x !== 'number'){
      throw new Error('INVALID_ARGUMENT');
    }
    this.splice(x, 0, y);
    return this
  }
  Array.prototype.remove = function (x) {
    this.splice(this.indexOf(x), 1);
    return this;
  }
}

export default patchArrays;
