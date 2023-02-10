const sum = (...args) => {
  if (
    !args.every((element) => {
      return typeof element === 'number';
    })
  ) {
    throw new Error('INVALID_ARGUMENT');
  }
  if (args.length < 2) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }
  return args.reduce((partialSum, a) => partialSum + a, 0);
};

export default sum;
