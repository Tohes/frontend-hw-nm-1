// {resolve} from "eslint-import-resolver-typescript";

function planEvent(f, t) {
  if (!(typeof f == 'function') || !(typeof t == 'number')) {
    throw new Error('INVALID_ARGUMENT');
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(f());
    }, t);
  });
}

export default planEvent;
