interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; 
// error => Cannot assign to 'x' because it is a read-only property.

// ReadonlyArray<T> => creates an imutable array
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

// ro[0] = 12;
// error =>  Index signature in type 'readonly number[]' only permits reading.

// ro.push(5); 
// error= > Property 'push' does not exist on type 'readonly number[]'.

// ro.length = 100;
// error => Cannot assign to 'length' because it is a read-only property.

// a = ro;
// error => The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.

// it works
a = ro as number[];