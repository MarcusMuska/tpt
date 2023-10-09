function countCode(letter, codes) {
    const lowercaseLetter = letter.toLowerCase();
    const lowercaseCodes = codes.map(code => code.toLowerCase());

    const matchingCodes = lowercaseCodes.filter(code => code.startsWith(lowercaseLetter));

    return matchingCodes.length;
}

const koodid = ["apple", "banana", "Icecream", "Igloo", "Orange", "Ink"];
const algustäht = "i";
const leitudKoodideArv = countCode(algustäht, koodid);
console.log(`Koodide arv, mis algavad tähega "${algustäht}": ${leitudKoodideArv}`);
