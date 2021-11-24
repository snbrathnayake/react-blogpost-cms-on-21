import express from 'express';
import PostModel from '../models/PostModel.js';

const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
  try {
    const newPost = new PostModel({
      title: req.body.title,
      desciption: req.body.desciption,
      image: req.body.image,
      username: req.body.username,
      categories: req.body.categories,
    });

    const post = await newPost.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    try {
      if (post.username === req.body.username) {
        const updatedPost = await PostModel.findByIdAndUpdate(
          req.params.id,
          {$set: req.body},
          {new: true}
        );
        res.status(200).json(updatedPost);
      } else {
        res.status(401).json('Not allowed to update post');
      }
    } catch (err) {
      res.status(404).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    try {
      // await PostModel.findByIdAndDelete(req.params.id);
      await post.delete();
      res.status(200).json('Post has been deleted.!');
    } catch (err) {
      res.status(404).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET_POST_BY_ID
router.get('/:id', async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET_POST_ALL
router.get('/', async (req, res) => {
  const username = req.query.user;
  const category = req.query.category;
  try {
    let posts;
    if (username) {
      posts = await PostModel.find({username: username});
    } else if (category) {
      posts = await PostModel.find({
        categories: {
          $in: [category],
        },
      });
    } else {
      posts = await PostModel.find({});
    }

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
