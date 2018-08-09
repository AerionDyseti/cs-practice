/*
    Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. 
    If there are two or more words that are the same length, return the first word from the string with that length. 
    Ignore punctuation and assume sen will not be empty. 
*/

function LongestWord(sen) {

    let senArray = sen.split(" ");

    let maxWord = sen[0];

    for (let s of senArray) {
        if (s.length > maxWord.length) {
            maxWord = s;
        }
    }
    return maxWord;
}


console.log(LongestWord("I love dogs"));
console.log(LongestWord("fun&!! time"));