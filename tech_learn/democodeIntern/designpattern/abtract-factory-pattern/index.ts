// Abstract Product A
interface ProductA {
    operationA(): void;
}

// Concrete Product A1
class ConcreteProductA1 implements ProductA {
    operationA(): void {
        console.log("ConcreteProductA1.operationA");
    }
}

// Concrete Product A2
class ConcreteProductA2 implements ProductA {
    operationA(): void {
        console.log("ConcreteProductA2.operationA");
    }
}

// Abstract Product B
interface ProductB {
    operationB(): void;
}

// Concrete Product B1
class ConcreteProductB1 implements ProductB {
    operationB(): void {
        console.log("ConcreteProductB1.operationB");
    }
}

// Concrete Product B2
class ConcreteProductB2 implements ProductB {
    operationB(): void {
        console.log("ConcreteProductB2.operationB");
    }
}

// Abstract Factory
interface AbstractFactory {
    createProductA(): ProductA;
    createProductB(): ProductB;
}

// Concrete Factory 1
class ConcreteFactory1 implements AbstractFactory {
    createProductA(): ProductA {
        return new ConcreteProductA1();
    }

    createProductB(): ProductB {
        return new ConcreteProductB1();
    }
}

// Concrete Factory 2
class ConcreteFactory2 implements AbstractFactory {
    createProductA(): ProductA {
        return new ConcreteProductA2();
    }

    createProductB(): ProductB {
        return new ConcreteProductB2();
    }
}

// Client code
function clientCode(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    productA.operationA();
    productB.operationB();
}

// Usage
const factory1: AbstractFactory = new ConcreteFactory1();
clientCode(factory1);

const factory2: AbstractFactory = new ConcreteFactory2();
clientCode(factory2);