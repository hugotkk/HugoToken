const HugoToken = artifacts.require('HugoToken');
const { BN } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');

// The tutorial is not update
// I just checkout to know how to test the bignumber in https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/test/token/ERC20/ERC20.test.js

contract('HugoToken', (accounts) => {
    beforeEach(async () => {
        this.token = await HugoToken.new();
    });
    describe('token attribute', () => {
        it('has the correct name', async () => {
            expect(await this.token.name()).to.equal('Hugo');
        });
        it('has the correct symbol', async () => {
            expect(await this.token.symbol()).to.equal('HUGE');
        });
        it('has the correct decimals', async () => {
            expect(await this.token.decimals()).to.be.bignumber.equal('18');
        });
    });
});
