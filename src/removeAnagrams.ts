function removeAnagrams(arr) {
  if (typeof arr !== 'object') {
    throw new Error('INVALID_ARGUMENT');
  }
  if (
      !arr.every((element) => {
        return typeof element === 'string';
      })
  ) {
    throw new Error('INVALID_ELEMENT_IN_ARRAY');
  }
  const dct = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!dct.get(arr[i].split('').sort().join(''))) {
      dct.set(arr[i].split('').sort().join(''), []);
    }
    let x = dct.get(arr[i].split('').sort().join(''));
    x.push(arr[i]);
    dct.set(arr[i].split('').sort().join(''), x);
  }
  const arrNew: string[] = [];
  const ks = Array.from(dct.keys());
  for (let i = 0; i < ks.length; i++) {
    if (dct.get(ks[i]).length == 1) {
      arrNew.push(dct.get(ks[i])[0]);
    }
  }
  return arrNew;
}

export default removeAnagrams;
