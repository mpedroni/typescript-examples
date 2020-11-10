// Type assertions are a way to tell the compiler “trust me, I know what I’m doing.”

// type assertion with "as" syntax (JSX accepts only this one)
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;


// type assertion with "angle-bracket" syntax
 someValue /* : unknown */ = "this is a string";
 strLength /* : number */ = (<string>someValue).length;
