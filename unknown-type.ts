// notSure may be anything. 
// useful for data from user or to accept all values in our API
let notSure: unknown = 4;
notSure = "maybe a string instead";

// OK, definitely a boolean
notSure = false;


declare const maybe: unknown;
// 'maybe' could be a string, object, boolean, undefined, or other types
// const aNumber: number = maybe;
// error => Type 'unknown' is not assignable to type 'number'.

if (maybe === true) {
  // TypeScript knows that maybe is a boolean now
  const aBoolean: boolean = maybe;

  // So, it cannot be a string
  // const aString: string = maybe;
  // error => Type 'boolean' is not assignable to type 'string'.
}

if (typeof maybe === "string") {
  // TypeScript knows that maybe is a string
  const aString: string = maybe;
  
  // So, it cannot be a boolean
  // const aBoolean: boolean = maybe;
  // error => Type 'string' is not assignable to type 'boolean'.
}