/**
 * Implement an autocomplete system. 
 * That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.
 * For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].
 * 
 */
var wordlist = require('./words_dictionary');

/** 
 * @param {String} s
 * @param {Array<String>} allStrings
 * @returns
 */
function autocomplete(s, allStrings) {
    return allStrings.filter(e => e.startsWith(s));
}

let s = "deadl";

console.log(autocomplete(s, wordlist.list));