const express = require('express');
const router = express.Router();
const { uploadData } = require('../controllers/dataController');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), uploadData);

module.exports = router;
