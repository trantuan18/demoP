// Here we define our Food interface, its properties, and their types.
interface Food {
  name: string;
  calories?: number;
}

class Square {
  width: number;
  color: string;
  shadows: boolean;

  constructor(width: number = 0, color: string = "blue", shadows: boolean = true) {
    this.width = width;
    this.color = color;
    this.shadows = shadows;
  }
}

// We tell our function to expect an object that fulfills the Food interface. 
// This way we know that the properties we need will always be available.
function speak(food: Food): void {
  console.log("Our " + food.name + " has " + (food.calories || '') + " calories.");
}

// We define an object that has all of the properties the Food interface expects.
// Notice that types will be inferred automatically.
var ice_cream = {
  name: "cookies",
  // calories: 250
}
let temp = new Square()

console.log("ShowTemp", temp)


speak(ice_cream);