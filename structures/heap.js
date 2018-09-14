module.exports.MaxHeap = class MaxHeap {
    constructor() {
        var _arr = [];
        var _swap = (aIndex, bIndex) => [_arr[aIndex], _arr[bIndex]] = [_arr[bIndex], _arr[aIndex]];
        var _getParentIndex = (nodeIndex) => nodeIndex == 0 ? null : Math.floor((nodeIndex - 1) / 2);
        var _getChildToSwap = (nodeIndex) => {
            let leftChildIndex = (2 * nodeIndex) + 1;
            let rightChildIndex = (2 * nodeIndex) + 2;
            if (!_arr[rightChildIndex]) { return (_arr[leftChildIndex] !== null) ? leftChildIndex : null; }
            return (_arr[leftChildIndex] > _arr[rightChildIndex]) ? leftChildIndex : rightChildIndex;
        }

        this.insert = function (item) {
            _arr.push(item);
            let index = _arr.length - 1;
            let parentIndex = _getParentIndex(index);
            while (parentIndex !== null && _arr[index] > _arr[parentIndex]) {
                _swap(index, parentIndex);
                index = parentIndex;
                parentIndex = _getParentIndex(index);
            }
        }

        this.remove = function () {
            let output = _arr[0];
            _swap(0, _arr.length - 1);
            _arr.pop();

            let index = 0;
            let childIndex = _getChildToSwap(index);
            while (_getChildToSwap !== null && _arr[childIndex] > _arr[index]) {
                _swap(index, childIndex);
                index = childIndex;
                childIndex = _getChildToSwap(index);
            }
            return output;
        }
        this.peek = function () {
            return _arr[0];
        }

        this.toArray = function () {
            return _arr.slice(0);
        }

    }

}

module.exports.MinHeap = class MinHeap {
    constructor() {

        var _array = [];
        var _getParentIndex = (nodeIndex) => nodeIndex == 0 ? null : Math.floor((nodeIndex - 1) / 2);
        var _swap = (aIndex, bIndex) => [_array[aIndex], _array[bIndex]] = [_array[bIndex], _array[aIndex]];
        var _getChildToSwap = (nodeIndex) => {
            let leftChild = (nodeIndex * 2) + 1;
            let rightChild = (nodeIndex * 2) + 2;
            if (!_array[rightChild]) {
                return (_array[leftChild]) ? leftChild : null;
            }
            return _array[leftChild] < _array[rightChild] ? leftChild : rightChild;
        }

        this.insert = function (item) {
            _array.push(item); // Add to next slot in bottom level.
            // bubble up. 
            let index = _array.length - 1;
            let parentIndex = _getParentIndex(index);
            while (parentIndex !== null && _array[index] < _array[parentIndex]) {
                _swap(index, parentIndex);
                index = parentIndex;
                parentIndex = _getParentIndex(index);
            }
        }

        // Removes the top item of the min heap.
        this.remove = function () {
            let output = _array[0];
            _swap(0, _array.length - 1);
            _array.pop();

            // Bubble Down.
            let index = 0;
            let childIndex = _getChildToSwap(index);
            while (childIndex !== null && _array[childIndex] < _array[index]) {
                _swap(index, childIndex);
                index = childIndex;
                childIndex = _getChildToSwap(index);
            }

            return output;
        }

        // Returns the top element without removing it.
        this.peek = function () {
            return _array[0];
        }


        this.toString = () => {
            return _array.toString();
        }

        this.toArray = () => {
            return _array;
        }

    }

}

module.exports.ArbitraryHeap = class ArbitraryHeap {
    constructor(isBetterFn) {
        var _array = [];
        var swap = (aIndex, bIndex) => [_array[aIndex], _array[bIndex]] = [_array[bIndex], _array[aIndex]];
        var getParentIndex = index => Math.floor((index - 1) / 2);
        var getBetterChild = index => {
            let leftChildIndex = (2 * index) + 1;
            let rightChildIndex = (2 * index) + 2;
            if (_array[rightChildIndex] === undefined) {
                return (_array[leftChildIndex] !== undefined) ? leftChildIndex : null;
            }
            return (isBetterFn(_array[leftChildIndex], _array[rightChildIndex]) ? leftChildIndex : rightChildIndex);
        }
        this.insert = function (item) {
            _array.push(item);
            // Bubble Up.
            let index = _array.length - 1;
            let parentIndex = getParentIndex(index);
            while (parentIndex !== null && isBetterFn(_array[index], _array[parentIndex])) {
                swap(index, parentIndex);
                index = parentIndex;
                parentIndex = getParentIndex(index);
            }
        }

        this.remove = function () {
            let output = _array[0];

            // Switch and remove the top item.
            swap(0, _array.length - 1);
            _array.pop();

            // Bubble down.
            let index = 0;
            let betterChildIndex = getBetterChild(index);
            while (betterChildIndex !== null && isBetterFn(_array[betterChildIndex], _array[index])) {
                swap(index, betterChildIndex);
                index = betterChildIndex;
                betterChildIndex = getBetterChild(index);
            }
        }

        this.peek = function () {
            return _array[0];
        }

        this.toArray = function () {
            return _array.slice(0);
        }

    }
}

