// We're making a guarantee that this variable
// helloWorld will never change, by using const.

// So, TypeScript sets the type to be "Hello World" not string
const helloWorld = "Hello World";

// On the other hand, a let can change, and so the compiler declares it a string
let hiWorld = "Hi World";

/* 
 * The process of going from an infinite number of potential cases 
 * (there are an infinite number of possible string values) to a smaller, 
 * finite number of potential case (in helloWorld’s case: 1) is called narrowing. 
 */