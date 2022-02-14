var express = require('express');
var router = express.Router();

var { PrismaClient } = require('@prisma/client')
var prisma = new PrismaClient();

router.get('/', function(req, res, next) {
  prisma.post.findMany().then(posts => {
    res.json(posts);
  });
});

module.exports = router;