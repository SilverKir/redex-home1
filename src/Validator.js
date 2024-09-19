export class Validator {
    constructor(userName) {
        this.userName = userName;
    };

    validateUsername(userName) {
        return (/^[A-Za-z][A-Za-z0-9_-]+[A-Za-z]$/.test(userName) && !/\d{4,}/.test(userName))
    }

}