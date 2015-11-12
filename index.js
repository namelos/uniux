require('babel-core/register')({})

const server = require('./server')

server.listen(3000, () =>
  console.log('listening on 3000...'))