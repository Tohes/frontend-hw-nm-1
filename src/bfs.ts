const bfs = function (graph) {
  if (graph.constructor !== Object) {
    throw new Error('INVALID_ARGUMENT');
  }
  const p: any[] = [];
  const used = new Map();
  const q = ['A'];
  while (q.length > 0) {
    //(q);
    const x = q[0];
    p.push(x);
    q.shift();
    used.set(x, 1);
    graph[x].forEach((el) => {
      if (!used.get(el)) {
        q.push(el);
        used.set(el, 1);
      }
    });
  }
  return p;
}
export default bfs;
