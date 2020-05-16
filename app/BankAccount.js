class BankAccount {
    constructor(account) {
        this.account = account;
    }

    current() {
        return this.account;
    }

    append(account, amount){
        this.account = account + amount;
        return this.account;
    }

    substract(account, amount){
        this.account = account - amount;
        return this.account;
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