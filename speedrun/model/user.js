import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
    username: String,
    publicKey: String,
    points: Number,
    progress: Boolean
});

const Users = models.user || model('user', userSchema)

export default Users;