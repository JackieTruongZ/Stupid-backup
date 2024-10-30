interface Animal {
    speak(): void;
}

class Dog implements Animal {
    speak(): void {
        console.log("Woof");
    }
}

class Cat implements Animal {
    speak(): void {
        console.log("Meow");
    }
}

abstract class AnimalFactory {
    abstract createAnimal(): Animal;

    // Other methods...

    speak(): void {
        const animal = this.createAnimal();
        animal.speak();
    }
}

class DogFactory extends AnimalFactory {
    createAnimal(): Animal {
        return new Dog();
    }
}

class CatFactory extends AnimalFactory {
    createAnimal(): Animal {
        return new Cat();
    }
}

// Sử dụng Factory Method
const dogFactory = new DogFactory();
dogFactory.speak(); // Output: Woof

const catFactory = new CatFactory();
catFactory.speak(); // Output: Meow