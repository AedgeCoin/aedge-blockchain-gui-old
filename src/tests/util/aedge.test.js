const aedge = require('../../util/aedge');

describe('aedge', () => {
  it('converts number mojo to aedge', () => {
    const result = aedge.mojo_to_aedge(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to aedge', () => {
    const result = aedge.mojo_to_aedge('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to aedge string', () => {
    const result = aedge.mojo_to_aedge_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to aedge string', () => {
    const result = aedge.mojo_to_aedge_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number aedge to mojo', () => {
    const result = aedge.aedge_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string aedge to mojo', () => {
    const result = aedge.aedge_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = aedge.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = aedge.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = aedge.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = aedge.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = aedge.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = aedge.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
