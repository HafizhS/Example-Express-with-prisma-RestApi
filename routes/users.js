var express = require('express');
var router = express.Router();

var { PrismaClient } = require('@prisma/client')
var prisma = new PrismaClient();


/* GET all users listing. */
router.get('/', function (req, res, next) {
  prisma.user.findMany().then(users => {
    res.json(users);
  });
});

module.exports = router;