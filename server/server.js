const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const util = require('util');
const readFile = util.promisify(fs.readFile)
const http = require('http')

const app = express()

const loadBlob = async (filename) => {
  const bytes = await readFile(filename)
  return new Buffer(bytes).toString('base64')
}

app.get('/', (req, res) => res.sendfile('./index.html'))
app.use('/dist', express.static('./dist'))

app.get('/widget/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  const widget = await loadBlob(`./widget-${uuid}.js`)
  return res.json({ widget })
})

app.set('port', 1337)
const server = http.createServer(app)
server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port)
})
