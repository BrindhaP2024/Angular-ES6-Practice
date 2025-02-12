'use strict';

function exampleStrict() {
  y = 20; // it will cause ReferenceError in strict mode
  console.log(y);
}

exampleStrict();
