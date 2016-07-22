const expect = require('chai').expect;
const cowsay = require('../lib/cowsay');
const cow = `
  \\   ^__^
   \\  (oo)\\______
      (__)\\       )\\/\\
          ||-----ww||
          ||       ||`;

var sayThis = 'hello from cow';

describe('cowsay function', function() {
  it('should return a cow saying "hello from cow"', function() {
    expect(cowsay(sayThis)).to.eql('_'.repeat(sayThis.length) + '\n\n' + sayThis + '\n'+ '_'.repeat(sayThis.length) + '\n' + cow);
  });
});
