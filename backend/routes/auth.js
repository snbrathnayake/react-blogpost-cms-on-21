import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../models/UserModel.js';

const router = express.Router();

// REGISTER
// TODO call controller Class
router.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      profileImage: req.body.profileImage,
    });

    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN

router.post('/login', async (req, res) => {
  try {
    const user = await UserModel.findOne({username: req.body.username});
    !user && res.status(401).json({message: 'wrong username'});
    // Load hash(user.password) from your password DB.
    const validate = await bcrypt.compare(req.body.password, user.password);

    !validate && res.status(401).json({message: 'wrong password'});

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin ? user.isAdmin : false,
      },
      process.env.JWT_SECRET,
      {expiresIn: '1d'}
    );
    
    const {password, ...others} = user._doc;
    res.status(200).json({...others, accessToken});
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
