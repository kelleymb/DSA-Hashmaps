const HashMap = require('./hashmap');

function removeDuplicates(string) {
    const dup = new HashMap();
    for (let i = 0; i < string.length; i++) {
        dup.set(string[i], string[i])
    }
    let newStr = '';
    dup._hashTable.forEach(char => {
        newStr += char.value;
    })
}

removeDuplicates('google');
removeDuplicates('google all that you can think of');