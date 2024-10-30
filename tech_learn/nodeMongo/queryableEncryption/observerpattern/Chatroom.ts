// Lớp ChatRoom triển khai giao diện Subject
export class ChatRoom implements Subject {
    private observers: Observer[] = [];

    attach(observer: Observer): void {
        this.observers.push(observer);
    }

    detach(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notify(message: string): void {
        for (const observer of this.observers) {
            observer.update(message);
        }
    }

    sendMessage(message: string): void {
        console.log(`Gửi tin nhắn: ${message}`);
        this.notify(message);
    }
}