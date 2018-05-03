const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Assignment
      .findAll(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Assignment
      .findOne({
        where: {
          id: req.params.id
        },
        include: [db.Student]
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Assignment
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Assignment
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Assignment
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbModel) {
        res.json(dbModel);
      });
  }
};