let originalStr = 'π';
let stringWithCombiningMarks = 'p\u0342';

console.log("Original String with combined 'π' (Pi):", originalStr);
console.log("String with combining 'p' + Greek tonos accent:", stringWithCombiningMarks);

let normalizedNFD = originalStr.normalize('NFD');
let normalizedCombiningNFD = stringWithCombiningMarks.normalize('NFD');

console.log("Normalized to NFD:", normalizedNFD);
console.log("Normalized combining marks to NFD:", normalizedCombiningNFD);
console.log("Are NFD normalized strings equal?", normalizedNFD === normalizedCombiningNFD);

let normalizedNFC = originalStr.normalize('NFC');
let normalizedCombiningNFC = stringWithCombiningMarks.normalize('NFC');

console.log("Normalized to NFC:", normalizedNFC);
console.log("Normalized combining marks to NFC:", normalizedCombiningNFC);
console.log("Are NFC normalized strings equal?", normalizedNFC === normalizedCombiningNFC);

let normalizedNFKD = originalStr.normalize('NFKD');
let normalizedCombiningNFKD = stringWithCombiningMarks.normalize('NFKD');

console.log("Normalized to NFKD:", normalizedNFKD);
console.log("Normalized combining marks to NFKD:", normalizedCombiningNFKD);
console.log("Are NFKD normalized strings equal?", normalizedNFKD === normalizedCombiningNFKD);

let normalizedNFKC = originalStr.normalize('NFKC');
let normalizedCombiningNFKC = stringWithCombiningMarks.normalize('NFKC');

console.log("Normalized to NFKC:", normalizedNFKC);
console.log("Normalized combining marks to NFKC:", normalizedCombiningNFKC);
console.log("Are NFKC normalized strings equal?", normalizedNFKC === normalizedCombiningNFKC);

console.log("Final Comparison Results:");
console.log("Are original and combining marks string the same before normalization?", originalStr === stringWithCombiningMarks);
console.log("Are NFD normalized strings equal?", normalizedNFD === normalizedCombiningNFD);
console.log("Are NFC normalized strings equal?", normalizedNFC === normalizedCombiningNFC);
console.log("Are NFKD normalized strings equal?", normalizedNFKD === normalizedCombiningNFKD);
console.log("Are NFKC normalized strings equal?", normalizedNFKC === normalizedCombiningNFKC);

// unicode u flag ,,,,,,,,,,,,,,,,
let str = '𐍈';

let regexWithoutU = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
console.log("Without u flag: ", regexWithoutU.test(str));

let regexWithU = /[\uD800-\uDBFF][\uDC00-\uDFFF]/u;
console.log("With u flag: ", regexWithU.test(str));

let strWithEmoji = "hello 🌍";
console.log("Length of string with emoji (no u flag):", strWithEmoji.length);
console.log("Length of string with emoji (with u flag):", [...strWithEmoji].length);

let match = strWithEmoji.match(/./gu);
console.log("Characters matched with u flag:", match);
console.log("Number of code points:", match.length);
