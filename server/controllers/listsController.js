const { validationResult } = require('express-validator');
const Board = require('../models/board');
const List = require('../models/list');
const Card = require('../models/card');
const Comment = require('../models/comment');
const HttpError = require('../models/httpError');

const getLists = (req, res, next) => {
  List.find({}, 'title _id createdAt updatedAt').then((boards) => {
    res.json({
      boards,
    });
  });
};

const getList = (req, res, next) => {
  List.findOne({ _id: req.params.id })
    .populate({
      path: 'lists',
      populate: {
        path: 'cards',
        model: 'Card',
      },
    })
    .then((lists) => {
      res.json({ lists });
    })
    .catch((err) => next(
      new HttpError('There is no board having that ID, please try again', 404),
    ));
};

const createList = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    List.create(req.body)
      .then(async (list) => {
        req.list = list;
        next();
      })
      .catch((_) => next(new HttpError('Creating title failed, please try again', 500)));
  } else {
    return next(new HttpError('The input field is empty.', 404));
  }
};

const deleteList = async (req, res) => {
  const list = await List.findById(req.params.id);

  if (list) {
    list.cards.forEach((cardId) => {
      Card.findById(cardId).then((card) => {
        if (card) { card.remove(); }
      });
    });
    await list.remove();
    return res.json({ status: 'ok' });
  }
  res.json({ status: "Couldn't find list" });
};

const updateList = async (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const query = { _id: req.body._id };
    List.findOneAndUpdate(query, req.body, { returnOriginal: false })
      .then((list) => res.json(list));
  } else {
    return next(new HttpError('Error whilst creating list.', 404));
  }
};

const addCardToList = (req, res, next) => {
  const { card } = req;

  List.findById(card.listId).then((list) => {
    list.cards = list.cards.concat(card);

    list.save().then(() => {
      res.json(card);
    }).catch((err) => next(new HttpError('Unable to save card to list.', 404)));
  }).catch((err) => next(new HttpError('Unable to find list.', 404)));
};

module.exports = {
  getLists,
  getList,
  createList,
  deleteList,
  updateList,
  addCardToList,
};
