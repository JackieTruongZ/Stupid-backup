interface Animal {
    speak(): void;
}

interface Habitat {
    createAnimal(): Animal;
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

class PetHabitat implements Habitat {
    createAnimal(): Animal {
        return new Dog();
    }
}

class WildHabitat implements Habitat {
    createAnimal(): Animal {
        return new Cat();
    }
}

// Sử dụng Abstract Factory
const petHabitat: Habitat = new PetHabitat();
const petAnimal = petHabitat.createAnimal();
petAnimal.speak(); // Output: Woof

const wildHabitat: Habitat = new WildHabitat();
const wildAnimal = wildHabitat.createAnimal();
wildAnimal.speak(); // Output: Meow