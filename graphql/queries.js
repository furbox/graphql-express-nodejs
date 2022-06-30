import { GraphQLList } from "graphql";
import UserModel from "../models/User.model.js";
import { UserType } from "./types.js";

export const users = {
    type: new GraphQLList(UserType),
    description: "return users list",
    async resolve (){
        const users = await UserModel.find();
        console.log(users);
        return users;
    }
}