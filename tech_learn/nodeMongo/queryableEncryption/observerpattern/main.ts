import { ChatRoom } from "./Chatroom";
import { User } from "./User";

// Tạo các đối tượng User
const user1 = new User("Alice");
const user2 = new User("Bob");
const user3 = new User("Charlie");

// Tạo đối tượng ChatRoom
const chatRoom = new ChatRoom();

// Gắn các đối tượng User vào ChatRoom để quan sát
chatRoom.attach(user1);
chatRoom.attach(user2);
chatRoom.attach(user3);

// Gửi tin nhắn từ ChatRoom, tất cả các User đều sẽ nhận được thông báo cập nhật
chatRoom.sendMessage("Xin chào mọi người!");

// Kết quả:
// Gửi tin nhắn: Xin chào mọi người!
// Alice nhận được tin nhắn mới: Xin chào mọi người!
// Bob nhận được tin nhắn mới: Xin chào mọi người!
// Charlie nhận được tin nhắn mới: Xin chào mọi người!