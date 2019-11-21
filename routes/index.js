var express = require('express');
var router = express.Router();
//require models
var models = require('../models');
//require mysql2
const mysql = require('mysql2');
//require Sequelize
const Sequelize = require('sequelize');
//set Sequelize operators to a variable
const Op = Sequelize.Op;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//get route for specificActor
router.get('/specificActor', function(req, res, next) {
  models.actor.findOne({
	where: {
		Actor_id: 5
	   }
	})
	.then(actor => {
    res.render('specificActor', {
      actor: actor
    });
  });
});
//get route for query based on actor id
router.get('/actor/:id', function(req, res, next) {
  let actorId = parseInt(req.params.id);
  models.actor
    .findOne({
      where: {
        actor_id: actorId
      }
    })
    .then(actor => {
      res.render('specificActor', {
        actor: actor
      });
    });
});
//add get route for /actors that will call the Op variable. Sequelize variable used is gt (greater than). Use .findAll() to find all items that match the requirements
router.get('/actors', function(req, res) {
  models.actor
    .findAll({
      where: {
//run a query based on actor_id greater than a set number
        actor_id: {
          [Op.gt]: 55
        },
//add code to run a query on specific column and specific variable in that column
        last_name:{
          [Op.like]:'G%'
        }
      }
    })
    .then(data => {
      res.render('actors', {
        actors: data
      });
    });
});


module.exports = router;
