const express = require("express")
const parameterRewriter = require("express-parameter-rewriter")

const app = express()
app.use(parameterRewriter({ hello: 'bye' })) // usage

app.use((req, res, next) => {
	console.log("2 - after parameter rewriter")
    console.log(req.url)
    console.log(req.originalUrl)
    console.log(req.query)
    next()
})

// app.use(function(req, res, next) {
// 	const temp = res.jsonp
// 	res.jsonp = function(body) {
// 		console.log("intecepting budddyyyyyy: ", body)
// 		temp.call(this, { ...body, niceru: "add data" })
// 	}
// 	next();
// })

app.use("/", (req, res, next) => {
	res.jsonp({ "hello": "world "})
	next()
})

app.listen(3000, '0.0.0.0', () => {
    console.log('Listening on localhost:3000')
})