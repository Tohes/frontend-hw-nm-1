function pow(...a) {
  if(a.length > 1 && typeof a == 'object'){
    if (a.every((element) => {
      return typeof element === 'number';
    })
    ) {
      return Math.pow(a[0], a[1]);
    }
    else{
      throw new Error('INVALID_ARGUMENT');
    }
  }
  return function (...b) {
    if (typeof a[0] === 'number' && typeof b[0] === 'number'
    ) {
      return Math.pow(a[0], b[0]);
    } else {
      throw new Error('INVALID_ARGUMENT');
    }
  };
}
export default pow;
