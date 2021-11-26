import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
const __dirname = path.resolve();

import mongodb from './configs/mongo_connect.js';
import authRouter from './routes/auth.js';
import userRouter from './routes/users.js';
import postRouter from './routes/posts.js';
import categoryRouter from './routes/categories.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/backend/images', express.static(path.join(__dirname, '/backend/images')));
/**
 * connect to mongo database
 */
mongodb();

const LocalStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'backend/images');
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    // cb(null, file.fieldname + '-' + uniqueSuffix + '.' + fileType);
    cb(null, req.body.name);
  },
});

const upload = multer({storage: LocalStorage});
/**
 * _API endpoint & Router
 */
app.post('/api/upload', upload.single('file'), function (req, res) {
  res.status(200).json('File has been uploaded.!');
});
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);
app.use('/api/categories', categoryRouter);

const PORT = process.env.SERVER_PORT || 5000;

app.listen(PORT, () => console.log(`\nServer running on http://localhost:${PORT}`));
