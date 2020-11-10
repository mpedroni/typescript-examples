enum Color {
  Red = 1, // changes the default indexing (starts at 0)
  Green,
  Blue
};

let c : Color = Color.Green;


let colorName: string = Color[2];

// Displays 'Green'
console.log(colorName);