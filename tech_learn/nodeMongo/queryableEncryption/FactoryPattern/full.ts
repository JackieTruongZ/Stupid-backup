// Factory Interface
interface AnimalFactory {
    createAnimal(): Animal;
}

// Concrete Factories
class DogFactory implements AnimalFactory {
    createAnimal(): Animal {
        return new Dog();
    }
}

class CatFactory implements AnimalFactory {
    createAnimal(): Animal {
        return new Cat();
    }
}

// Product Interface
interface Animal {
    speak(): void;
}

// Concrete Products
class Dog implements Animal {
    speak(): void {
        console.log("Woof!");
    }
}

class Cat implements Animal {
    speak(): void {
        console.log("Meow!");
    }
}

// Client code
const dogFactory: AnimalFactory = new DogFactory();
const dog: Animal = dogFactory.createAnimal();
dog.speak(); // Output: Woof!

const catFactory: AnimalFactory = new CatFactory();
const cat: Animal = catFactory.createAnimal();
cat.speak(); // Output: Meow!