// useful when handling values from code 
// that has been written without TypeScript or a 3rd party library.

declare function getValue(key: string): any;

// OK, return value of 'getValue' is not checked
const str: string = getValue("myString");


let looselyTyped: any = 4;
// OK, ifItExists might exist at runtime
looselyTyped.ifItExists();

// OK, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed();

// unlike "unknown" type, any type allows us to access arbitrary properties, 
// even ones that doesn't exists
let strictlyTyped: unknown = 4;
// strictlyTyped.toFixed();
// error => Object is of type 'unknown'.