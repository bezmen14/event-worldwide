const express = require('express');

const router = express.Router();
const path = require('path');
const multer = require('multer');
const { User } = require('../db/models');

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storageConfig });

router.route('/')
  .post(upload.single('file'), async (req, res) => {
    const url = `${req.protocol}://${req.get('host')}`;
    const profileImg = `${url}/uploads/${req.file.filename}`;
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });
    await user.update({ Userphoto: profileImg });
    res.json(user);
  });

module.exports = router;
