// 1. Asynchronous Programming Background

function asyncOperation(callback) {
    setTimeout(() => {
        callback('Async operation completed');
    }, 1000);
}

asyncOperation(message => {
    console.log(message);
});

// 2. Promise Basics

const basicPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved successfully');
    }, 1000);
});

basicPromise.then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});

// 3. Global Promise Rejection Handling

window.addEventListener('unhandledrejection', event => {
    console.error('Unhandled rejection:', event.reason);
});

// Simulating an unhandled rejection
const unhandledPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Unhandled promise rejection');
    }, 500);
});

// 4. Chaining Promises

// Chaining multiple promises
const chainPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 1000);
});

chainPromise.then(result => {
    console.log('First then:', result);
    return result * 2;
}).then(result => {
    console.log('Second then:', result);
    return result + 20;
}).then(result => {
    console.log('Third then:', result);
}).catch(error => {
    console.error('Error in chain:', error);
});

// 5. Responding to Multiple Promises

// Using Promise.all to wait for multiple promises
const promise1 = new Promise(resolve => setTimeout(() => resolve('First promise resolved'), 500));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Second promise resolved'), 1000));
const promise3 = new Promise(resolve => setTimeout(() => resolve('Third promise resolved'), 1500));

Promise.all([promise1, promise2, promise3]).then(results => {
    console.log('All promises resolved:', results);
}).catch(error => {
    console.error('Error in Promise.all:', error);
});

// 6. Inheriting from Promises

// Creating a custom promise class
class CustomPromise extends Promise {
    customMethod() {
        return this.then(result => {
            console.log('Custom method called with:', result);
            return result;
        });
    }
}

const customPromise = new CustomPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('Custom promise resolved');
    }, 1000);
});

customPromise.customMethod().then(result => {
    console.log('Result:', result);
});
