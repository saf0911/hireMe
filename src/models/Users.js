import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    maxlength: [ 20, 'We do not need that long of a name' ]
  },
  lastName: {
    type: String,
    maxlength: [ 20, 'That is a long last name' ]
  },
  avatar: {
    type: String,
    maxlength: [ 20, 'Pictures only' ]
  },
  interests: {
    type: String,
    maxlength: [ 300, 'Leave some information to start the conversation' ]
  },
  username: {
    type: String,
    unique: true,
    required: true,
    maxlength: [ 20, 'Username does not need to be that long' ]
  }

});

export default mongoose.model('User', userSchema);
