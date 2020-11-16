interface StringArray {
  // when a StringArray is indexed with a number, it wil return a string
  [ index: number ]: string;
}

let myArray: StringArray;
myArray = [ "Bob", "Fred" ];

let myStr: string = myArray[0];





interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

interface NotOkay {
  // [ x: number ]: Animal;
  // error => indexing with a numeric string might get you a completely separate type of Animal!
  [ x: string ]: Dog;
}



// While string index signatures are a powerful way to describe the “dictionary” pattern, 
// they also enforce that all properties match their return type. This is because a string 
// index declares that obj.property is also available as obj["property"]. 
// In the following example, name’s type does not match the string index’s type, 
// and the type checker gives an error
interface NumberDictionary {
  [index: string]: number;
  length: number; // ok, length is a number
  // name: string; // error, the type of 'name' is not a subtype of the indexer
// error => Property 'name' of type 'string' is not assignable to string index type 'number'.
}

// However, properties of different types are acceptable if the index 
// signature is a union of the property types
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}


interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let myArray2: ReadonlyStringArray = ["Alice", "Bob"];
// myArray2[2] = "Mallory";
// error => Index signature in type 'ReadonlyStringArray' only permits reading.


