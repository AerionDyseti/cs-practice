module.exports = class Stack {
    constructor() {
        this._array = [];
    }
    push(item) {
        this._array.push(item)
    }
    peek() {
        let val = this._array.pop();
        this._array.push(val);
        return val;
    }
    pop() {
        return this._array.pop();
    }
    isEmpty() {
        return this._array.length === 0;
    }
}