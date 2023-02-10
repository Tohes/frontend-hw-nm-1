const intersection = (a, b) => {
  if (!a || !b) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }
  if (typeof a !== 'object' || typeof b != 'object') {
    throw new Error('INVALID_ARGUMENT');
  }
  if (
    !a.every((element) => {
      return typeof element === 'number';
    }) ||
    !b.every((element) => {
      return typeof element === 'number';
    })
  ) {
    throw new Error('INVALID_ELEMENT_IN_ARRAY');
  }
  return Array.from(new Set(a.filter(value => b.includes(value))));
};

export default intersection;
