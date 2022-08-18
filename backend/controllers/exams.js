const { validationResult } = require('express-validator');

const Exams = require('../models/exams');

exports.fetchAll = async (req, res, next) => {
  try {
    const [allExams] = await Exams.fetchAll();
    res.status(200).json(allExams);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.examsExams = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return;

  const title = req.body.title;
  const body = req.body.body;
  const user = req.body.user;

  try {
    const exams = {
      title: title,
      body: body,
      user: user,
    };
    const result = await Exams.save(exams);
    res.status(201).json({ message: 'Posted!' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteExams = async (req, res, next) => {
  try {
    const deleteResponse = await Exams.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};