// Exporting a variable
export const greeting = 'Learning Modules';

// Exporting a function
export function Learn(name) {
    return `${greeting} My name is ${name}.`;
}

// Exporting a class
export class Learner {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        return `Hi, I'm ${this.name}.`;
    }
}
