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
        let amountN = -1000;
        let client = new BankAccount(account);

        it('Return bank account after append', () => {
            assert.deepEqual(account, client.append(account, amountN));
            assert.deepEqual(account + amount, client.append(account, amount));
            
        })
    })

    describe('#substract', () => {
        let account = 2000;
        let amount = 1500; 
        let amountN = -1000;
        let client = new BankAccount(account);

        it('Return bank account after substraction', () => {
            assert.deepEqual(account, client.append(account, amountN));
            assert.deepEqual(account - amount, client.substract(account, amount));
        })
    })

    describe('#merge', () => {
        let account1 = 2000;
        let account2 = 1500; 
        let client = new BankAccount(account1);
        let client2 = new BankAccount(account2)
        let history1 = 500;
        let history2 = 1500;

        client.append(history1);
        client2.substract(history2);
        client.merge(client2);

        it('Return bank account after merge accounts', () => {
            assert.deepEqual([{amount: 500}, {amount: 3500}], client.final());
        })
        
    })

    describe('#history', () => {
        let account = 1500;
        let client = new BankAccount(account);
        let history1 = 800;
        let history2 = 1200;

        client.append(history1);
        client.substract(history2);

        it('Return bank account after merge accounts', () => {
            assert.deepEqual([{amount: 800},{amount: 1200}], client.final());
        })
        
    })


})