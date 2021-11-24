import express from 'express';
import CategoryModel from '../models/CategoryModel.js';

const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
  try {
    const newCategory = new CategoryModel({name: req.body.name});
    const category = await newCategory.save();

    res.status(201).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL CATE
router.get('/', async (req, res) => {
  console.log('Hello');
  try {
    // const categories = new CategoryModel.find({});
    const categories = await CategoryModel.find({});
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
