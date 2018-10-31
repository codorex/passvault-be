module.exports = class Application{
    constructor(name, accounts){
        this.id = 
        this.name = name;
        this._accounts = accounts || []
    }

    getAccounts(){
        return this._accounts;
    }
}