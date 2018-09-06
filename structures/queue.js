module.exports = class Queue {
    constructor() {
        this._mainArray = [];
        this._popArray = [];
    }
    push(item) {
        this._mainArray.push(item);
    }
    pop() {
        this._prepare();
        const rVal = this._popArray.pop();
        this._cleanup();
        return rVal;
    }
    peek() {
        this._prepare();
        const rVal = this._popArray.pop();
        this._popArray.push(rVal);
        this._cleanup();
        return rVal;
    }
    isEmpty() {
        return this._mainArray.length === 0;
    }

    _prepare() {
        while (this._mainArray.length > 0) {
            this._popArray.push(this._mainArray.pop());
        }
    }

    _cleanup() {
        while (this._popArray.length > 0) {
            this._mainArray.push(this._popArray.pop());
        }
    }


}