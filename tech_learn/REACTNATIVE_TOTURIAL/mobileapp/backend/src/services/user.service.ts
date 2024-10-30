import UserModel, { User } from "../models/user.model";
import { CreateUserInput } from "../schemas/user.schema";

export function createUser(input: CreateUserInput) {
    return UserModel.create(input);
}

export function findUserById(id: string) {
    return UserModel.findById(id);
}

export function findUserByEmail(email: string) {
    return UserModel.findOne({ email });
}