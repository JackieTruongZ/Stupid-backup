import { Severity, getModelForClass, modelOptions } from "@typegoose/typegoose";




@modelOptions({
    schemaOptions: {
        timestamps: true
    },
    options: {
        allowMixed: Severity.ALLOW,
    }
})
export class Message {
    idUser: string;
    username: string;
    type: string;
    content: string;
    preview: string;
    link: string;

}

const MessageModel = getModelForClass(Message);
export default MessageModel;