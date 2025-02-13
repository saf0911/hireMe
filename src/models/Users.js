import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: [ 30, 'something went wrong' ]
  },
  email: {
    type: String,
    unique: true,
    required: true,
    maxlength: [ 20, 'That is a long email' ]
  },
  phone: {
    type: String,
    maxlength: [ 20, 'Phone please' ]
  },
  message: {
    type: String,
    maxlength: [ 500, 'Leave some information to start the conversation' ]
  },
  

});

export default mongoose.model('User', userSchema);
