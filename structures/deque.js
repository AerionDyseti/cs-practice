module.exports = class Deque {
    constructor() {
        this.stack = [];
        this.end = () => this.stack[this.stack.length - 1];
        this.front = () => this.stack[0];
        this.popBack = () => this.stack.pop();
        this.popFront = () => this.stack.shift();
        this.pushBack = (item) => this.stack.push(item);
        this.pushFront = (item) => this.stack.unshift(item);
        this.isEmpty = () => this.stack.length == 0;
    }
}
