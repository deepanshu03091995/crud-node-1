import mongoose from "mongoose";
import mongooseIncrement from "mongoose-increment";
const increment = mongooseIncrement(mongoose);

// how our document look like
const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phone: Number,
});
userSchema.plugin(increment, {
  modelName: "Employee-increment",
  fieldName: "id",
  start: 300,
  increment: 3,
});
// we need to turn it into a model
const postUser = mongoose.model("user", userSchema);

export default postUser;
