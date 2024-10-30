// Giao diện Observer
interface Observer {
    update(message: string): void;
  }
  
  // Giao diện Subject
  interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(message: string): void;
  }
  