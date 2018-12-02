'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DISKS_CATALOG_API_URL: '"http://localhost:3000/api"'
})
