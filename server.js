require('dotenv').config()
const express = require('express'),
        app = express(),
        cors = require('cors'),
        path = require('path')

app.use(express.static(path.join(__dirname, "client", "build")));
app.use(cors())


app.get(/^\/(?!api).*/, function(_, res) {
    res.sendFile(
        path.join(__dirname, "client", "build", "index.html"),
        function (err) {
            if(err) {
                res.status(500).send(err)
                console.log('in')
            }
        }
    )
})

// setting up server
app.listen(process.env.PORT, () => {
    console.log("expense app loading on port: " + process.env.PORT)
})