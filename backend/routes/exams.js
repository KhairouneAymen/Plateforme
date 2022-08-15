const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const examsController = require('../controllers/exams');

const auth = require('../middleware/auth');

router.get('/',auth,examsController.fetchAll);

router.post(
  '/',
  [
    auth,
    body('title').trim().isLength({ min: 5 }).not().isEmpty(),
    body('body').trim().isLength({ min: 10 }).not().isEmpty(),
    body('user').trim().not().isEmpty(),
  ],
  examsController.examsExams
);

router.delete('/:id', auth, examsController.deleteExams);

module.exports = router;
