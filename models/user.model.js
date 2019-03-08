import mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * Simple user model
 */
const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    default: ''
  },
  lastName: {
    type: String,
    trim: true,
    default: ''
  },
  displayName: {
    type: String,
    trim: true,
    default: ''
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    default: ''
  },
  username: {
    type: String,
    unique: 'Username already exists',
    required: 'Please fill in a username',
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('users', UserSchema);
