import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  firstName: { type: String},
  lastName: {type: String },
})

const User = model('User', UserSchema);

export default User;
