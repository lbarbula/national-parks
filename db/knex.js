var environment = process.env.NODE_ENV || 'development'
var config = require('../knexfile')[environement]
module.exports = require('knex')(config)
