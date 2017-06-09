import mongoose from 'mongoose';

const userSignINSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

export default mongoose.model('UsersignIN', userSignINSchema);
