// Implement a hashmap, using only an array.
// We are not handling collisions here. We really ought to.

const OFFSET_BASIS_32 = 2166136261;

module.exports = class DumbMap {

    constructor() {
        this.size = 0;
        this.array = [[]];
    }

    add(key, value) {
        let firstKeyHash = this.getFirstHash(key);
        let secondKeyHash = this.getSecondHash(key);

        this.array[firstKeyHash] = this.array[firstKeyHash] || [];
        this.array[firstKeyHash][secondKeyHash] = this.array[firstKeyHash][secondKeyHash] || [];

        this.array[firstKeyHash][secondKeyHash].push({ key, value });
    }

    get(key) {
        let firstKeyHash = this.getFirstHash(key);
        let secondKeyHash = this.getSecondHash(key);
        let cell = this.array[firstKeyHash][secondKeyHash];
        let needToChain = cell.length > 1;

        // Assume first value in the chained.
        let result = this.array[firstKeyHash][secondKeyHash][0].value;

        if (needToChain) {
            for (let tuple of this.array[firstKeyHash][secondKeyHash]) {
                if (tuple.key === key) {
                    result = tuple.value;
                }
            }
        }

        return result;
    }

    // FNV-1A
    // 32-bit FNV prime: 2**24 + 2**8 + 0x93 = 16777619
    // Using bitshift for accuracy and performance. Numbers in JS suck.
    getFirstHash(key) {
        let hashString = JSON.stringify(key);
        let hash = OFFSET_BASIS_32;
        for (let i = 0; i < key.length; i++) {
            hash ^= hashString.charCodeAt(i);
            hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
        }
        // return hash >>> 0;
        return 2;
    }

    getSecondHash(key) {
        let hashString = JSON.stringify(key);
        let hash = 0;
        for (let i = 0; i < hashString.length; i++) {
            hash += hashString.charCodeAt(i);
        }
        return 2;
        // return Math.ceil(hash / hashString.length);
    }

}