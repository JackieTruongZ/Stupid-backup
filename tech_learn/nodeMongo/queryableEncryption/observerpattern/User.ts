// Lớp User triển khai giao diện Observer
export class User implements Observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(message: string): void {
        console.log(`${this.name} nhận được tin nhắn mới: ${message}`);
    }
}
