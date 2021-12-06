
class Account {
    // The static property
    static #ibanNum = 0;

    constructor(name) {
        this.name = name;
        this.balance = 0;
        this.IBAN = "FI00000" + Account.#ibanNum++;
    }
    // returns static value
    getIBAN(){
        return this.IBAN;
    }
    // getter
    getBalance() {
        return this.balance;
    }
    // setter
    setBalance(newBalance){
        this.balance = newBalance
    }

    deposit(amount){
        // check if amount is valid or not
        const isValid = this.#isAmountValid(amount);
        if (isValid.error) {
            return isValid.message;
        }
        this.setBalance(this.balance + amount)
    }

    withdraw(amount){
        // check if amount is valid or not
        const isValid = this.#isAmountValid(amount);
        if (isValid.error) {
            return isValid.message;
        }
        // Check if amount greater than the balance or not
        if (amount > this.getBalance()) {
            return "Error 'Insufficient balance!'"
        }
    }
    // Validation function #=hide from other users
    #isAmountValid(amount){
        if (typeof(amount) !== 'number' || amount < 0) {
            return {
                error : true,
                message : "Error 'Invalid amount'"
            }
        }
        return { error: false }
    }

}


const newAccount = new Account( "Kostas Minaidis" );    
// New account created for: Kostas Minaidis
// IBAN: GR00010003

console.log(newAccount.getBalance()    ) // 0
console.log(newAccount.deposit( 100 )  )
console.log(newAccount.getBalance()    ) // 100
console.log(newAccount.withdraw( 50 )  )
console.log(newAccount.getBalance()    ) // 50

console.log(newAccount.withdraw( 500 ) )  // Error 'Insufficient balance!'
console.log(newAccount.withdraw( "50" ))  // Error 'Invalid amount'
console.log(newAccount.withdraw( -150 ))  // Error 'Invalid amount'
