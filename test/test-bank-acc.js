const assert = require('assert');
const BankAccount = require('../app/BankAccount')

describe('BancAcc', () => {
    describe('#current', () => {
        let account = 1000;
        let client = new BankAccount(account);
        it('Return current bank account', () => {
            assert.deepEqual(account, client.current(account));
        })
    })

    describe('#append', () => {
        let account = 1000;
        let amount = 1500; 
        let client = new BankAccount(account);

        it('Return bank account after append', () => {
            assert.deepEqual(account + amount, client.append(account, amount));
        })
    })

    describe('#substract', () => {
        let account = 2000;
        let amount = 1500; 
        let client = new BankAccount(account);

        it('Return bank account after substraction', () => {
            assert.deepEqual(account - amount, client.substract(account, amount));
        })
    })
})