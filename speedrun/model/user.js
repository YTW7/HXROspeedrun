import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
    username: String,
    pubKey: String,
    avatar: String,
    points: Number,    
    P1T1:Boolean,
    P1T2:Boolean,
    P1T3:Boolean,
    P1T4:Boolean,
    P1T5:Boolean,
    P1T6:Boolean,
    P1T7:Boolean,
    P1NFT:Boolean,
    P1Milestone:String 
});

const Users = models.user || model('user', userSchema)

export default Users;