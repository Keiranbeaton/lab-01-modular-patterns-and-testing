const cowsay = require('../cowsay');
const expect = require('chai').expect;

describe('the cowsay function', function() {
  it('should return what the cow says', function() {
    expect(cowsay(text)).to.eql.('the cow says' + text);
  });
});
