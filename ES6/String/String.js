let str = "Brindha Palani";

console.log("Length of string:", str.length);
console.log("Uppercase string:", str.toUpperCase());
console.log("Lowercase string:", str.toLowerCase());
console.log("Character at index 7:", str.charAt(7));
console.log("Index of 'World':", str.indexOf("World"));
console.log("Sliced string (from index 0 to 5):", str.slice(0, 5));
console.log("Replaced 'World' with 'Universe':", str.replace("Brindha", "Nivetha"));

let strWithSpaces = "   Hello, World!   ";
console.log("Trimmed string:", strWithSpaces.trim());


// repeat and index level

var indent = " ".repeat(4),
    indentLevel = 0;

function printDirectoryStructure(level) {
    var newIndent = indent.repeat(level);
    console.log(newIndent + "Folder " + (level + 1));

    if (level < 3) { // Stop at level 3 to prevent infinite recursion
        for (let i = 0; i < 2; i++) { 
            printDirectoryStructure(level + 1);
        }
    }
}

printDirectoryStructure(indentLevel);
