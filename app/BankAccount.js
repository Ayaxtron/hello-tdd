class BankAccount {
    constructor(account) {
        this.account = account;
        this.history = [];
    }

    current() {
        return this.account;
    }

    append(account, amount){
        if(amount >= 0){
            this.account = account + amount;
            
        }
        this.history.push({amount: account});
        return this.account;
    }

    substract(account, amount){
        if(amount >= 0){
            this.account = account - amount;
            
        }
        this.history.push({amount: account});
        return this.account;
    }

    merge(client2 ) {
        client2.account = client2.account + this.account;
        this.history.push({amount: client2.account});
        return this.client2;
    }

    final( ) {
       return this.history;
    }

}

module.exports = BankAccount;
/*
exports.current = (account) => {
    return account;
}

exports.append = (append) => {

}

*/