import { getModelForClass } from "@typegoose/typegoose";
import { Message } from "./message.model";
import { User } from "./user.model";



export class Chat {
    title: string;
    ava: string;
    type: string;
    member_id: string[];
    messages: Message[];
}

const ChatModel = getModelForClass(Chat);
export default ChatModel;