const express = require("express")
const parameterRewriter = require("express-parameter-rewriter")

const app = express()
app.use(parameterRewriter({ hello: 'bye' })) // usage

app.use((req, res, next) => {
    console.log(req.url)
    console.log(req.originalUrl)
    console.log(req.query)
    next()
})

app.listen(3000, '0.0.0.0', () => {
    console.log('Listening on localhost:3000')
})