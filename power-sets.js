function addItemToPowerSet(prevPowerSet, item) {
    let additions = prevPowerSet.map(arr => arr.slice());
    for (let set of additions) {
        set.push(item);
    }
    return [...prevPowerSet, ...additions];
}



let set = ['a', 'b', 'c'];
let powerSet = [[]];

for (let i = 0; i < set.length; i++) {
    powerSet = addItemToPowerSet(powerSet, set[i]);
}

console.log(powerSet);