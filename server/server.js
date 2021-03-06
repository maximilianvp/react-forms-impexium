const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const util = require('util');
const readFile = util.promisify(fs.readFile)
const http = require('http')

const app = express()
app.use(bodyParser())

const loadBlob = async (filename) => {
  const bytes = await readFile(filename)
  return new Buffer(bytes).toString('base64')
}

app.get('/', (req, res) => res.sendfile('./index.html'))
app.use('/dist', express.static('./dist'))

app.post('/api', async (req, res) => {
  console.log(`we received: ${JSON.stringify(req.body, null, 3)}`)
  return res.json({ code: 'yes all is well' })
})

app.get('/fieldoptions/individual', async (req, res) => {
  const { type, name } = req.query
  return res.json({
    regions: ['region a', 'region b'],
  })
})

app.get('/widget/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  const widget = await loadBlob(`./widget-${uuid}.txt`)
  return res.json({ widget })
})

app.set('port', 1337)
const server = http.createServer(app)
server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port)
})
