interface Shape {
    draw(): void;
}

class Circle implements Shape {
    draw(): void {
        console.log("Drawing a circle");
    }
}

class Rectangle implements Shape {
    draw(): void {
        console.log("Drawing a rectangle");
    }
}

class Square implements Shape {
    draw(): void {
        console.log("Drawing a square");
    }
}

class ShapeFactory {
    createShape(type: string): Shape {
        if (type === "circle") {
            return new Circle();
        } else if (type === "rectangle") {
            return new Rectangle();
        } else if (type === "square") {
            return new Square();
        } else {
            throw new Error("Invalid shape type");
        }
    }
}

// Sử dụng Factory Pattern
const factory = new ShapeFactory();

const circle = factory.createShape("circle");
circle.draw(); // Output: Drawing a circle

const rectangle = factory.createShape("rectangle");
rectangle.draw(); // Output: Drawing a rectangle

const square = factory.createShape("square");
square.draw(); // Output: Drawing a square