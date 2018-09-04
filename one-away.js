function oneAway(lStr, rStr) {

    let maxEdits = 1;
    let i = 0;

    let l = [...lStr];
    let r = [...rStr];

    while (l[i] !== undefined || r[i] !== undefined) {

        if (l[i] == undefined || r[i] == undefined) {
            maxEdits--;
        }

        else if (l[i] !== r[i]) {
            maxEdits--;
        }

        i++;

    }

    return maxEdits >= 0;

}


console.log(oneAway("pale", "pare"));
console.log(oneAway("pale", "pain"));
console.log(oneAway("poop", "prop"));
console.log(oneAway("poo", "poop"));