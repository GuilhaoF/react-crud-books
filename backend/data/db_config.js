const knex = require('knex')
const config = require('../knexfile.JS')
const dbknex = knex(config.development)


module.exports = dbknex