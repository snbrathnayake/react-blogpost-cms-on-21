import express from 'express';
import bcrypt from 'bcrypt';
import UserModel from '../models/UserModel.js';
import PostModel from '../models/PostModel.js';

const router = express.Router();

// UPDATE
router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {new: true}
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json('Not allowed to update account');
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await UserModel.findById(req.params.id);
      try {
        // _NOTE: if the user was deleted, his posts should be deleted too
        await PostModel.deleteMany({username: user.username});
        await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).json('User has been deleted.!');
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json('User not found.!');
    }
  } else {
    res.status(401).json('Not allowed to delete account');
  }
});

// GET_USER_BY_ID
router.get('/:id', async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    const {password, ...others} = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
