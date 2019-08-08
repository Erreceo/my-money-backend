const server = require('./config/server.js')
require('./config/dabase')
require('./config/routes')(server)
