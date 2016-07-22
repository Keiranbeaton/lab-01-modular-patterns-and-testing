module.exports = function(sayWhat) {
  const sayTop = '_'.repeat(sayWhat.length) + '\n\n';
  const sayBottom = '_'.repeat(sayWhat.length) + '\n';

  const cow = `
  \\   ^__^
   \\  (oo)\\______
      (__)\\       )\\/\\
          ||-----ww||
          ||       ||`;
  return sayTop + sayWhat + '\n' + sayBottom + cow;
};
