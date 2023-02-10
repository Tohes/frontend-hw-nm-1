function go(v, g, used, p) {
  p.push(v);
  g[v].forEach((to) => {
    if (!used.get(to)) {
      go(to, g, used, p);
    }
  });
}
const dfs = function (graph) {
  if (graph == null) {
    throw new Error('INVALID_ARGUMENT');
  }
  if (graph.constructor !== Object) {
    throw new Error('INVALID_ARGUMENT');
  }
  const used = new Map();
  const p: any[] = [];
  go('A', graph, used, p);
  return p;
};

export default dfs;
