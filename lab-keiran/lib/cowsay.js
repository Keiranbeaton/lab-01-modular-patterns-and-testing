module.exports = function(sayWhat) {
  let sayTop = '_'.repeat(sayWhat.length) + '\n\n';
  let sayBottom = '_'.repeat(sayWhat.length) + '\n';

  let cow = '
    \\   ^__^
     \\  (oo)\\______
        (__)\\       )\\/\\
            ||-----ww||
            ||       ||';
  return sayTop + sayWhat + '\n' + sayBottom + cow;
};
