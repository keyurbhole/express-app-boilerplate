import User from '../models/user.model';
import getErrorMessage from './errors.controller';
import _ from 'lodash';

/** 
 * insert user details
 * @param {*} req 
 * @param {*} res 
 */ 
const signUp = (req, res) => {
  let user = new User(req.body);
  user.displayName = user.firstName + ' ' + user.lastName;

  user.save((error) => {
    if (error) return res.status(400).send({message: getErrorMessage(error)});
    res.send(user);
  });
};

/** 
 * user login
 * @param {*} req 
 * @param {*} res 
 */ 
const login = (req, res) => {
  let query = {
    username: req.body.username,
    password: req.body.password
  }
  User.findOne(query)
  .select('-__v -created -password')
  .exec()
  .then(user => {
    res.send(user);
  })
  .catch(error => {
    return res.status(400).send({message: getErrorMessage(error)});
  });
};

/** 
 * update user details
 * @param {*} req 
 * @param {*} res 
 */ 
const updateUser = (req, res) => {
  let user = new User(req.user);

  user = _.extend(user, req.body);
  user.displayName = user.firstName + ' ' + user.lastName;
  
  user.save((error) => {
    if (error) return res.status(400).send({message: error});
    res.send(null, user);
  });
};


export { signUp, login, updateUser };
