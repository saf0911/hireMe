import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  avatar: String,
  interests: String,
  username: String

});

export default mongoose.model('User', userSchema);
