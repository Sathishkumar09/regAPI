


const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * * UserSchema
 * @description user model
 */
const UserSchema = new Schema({
    username: {
      type: String,
      required: [true, 'Username must not be empty'],
    },
    gender: {
      type: String,
      enum: ['MALE', 'FEMALE', 'OTHER'],
    },
    password: {
      type: String,
      required: [true, 'Password must not be empty'],
    },
    date_of_birth: {
        type: String,
    },
    profile_picture: {
      type: String,
      required: [true, 'Profile picture must not be empty'],
    },
    status: { type: Number, default: 1 },
    created_at: { type: Date, default: Date.now },
});

  
export const User = mongoose.model('Users', UserSchema);