interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

declare function getSmallPet(): Bird | Fish;

let pet = getSmallPet();

// Only avaliable in one of the two possible types
// pet.swim();
// error => Property 'swim' does not exist on type 'Bird | Fish'.
//          Property 'swim' does not exist on type 'Bird'.
