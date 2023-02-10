const sort = (a: string) => {
  if (typeof a !== 'string') {
    throw new Error('INVALID_ARGUMENT');
  }
  return a
    .toLowerCase()
    .split(' ')
    .map((element) => {
      return element.split('').sort().join('');
    })
      .sort(function (a1, a2) {return a1.length - a2.length})
    .join(' ');
};

export default sort;
