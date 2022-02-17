// Write your code here

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
}

let bigFluffyDog1 = new Dog("Buzz", "greatPyrenees");
let bigFluffyDog2 = new Dog("Woody", "labrador");

// 1. Create a class for Breakfast. Breakfast will have a constructor with a food and a drink.
class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

// 2. Create a class for Lunch. Lunch will have a constructor with a salad, a soup, and a drink.
class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

// 3. Create a class for Dinner. Since dinner is a little bit fancier, Dinner will have a constructor with salad, soup, entree, and dessert. Initialize dessert as a private property by prefixing its name with the hash symbol (#).
class Dinner {
  // declare private fields
  #dessert;

  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;

    // assign values to private field of desser
    this.#dessert = dessert;
  }
}