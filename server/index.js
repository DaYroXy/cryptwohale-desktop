const express = require('express')
const app = express()
const crypto = require('crypto')
const port = 3251

app.use(express.json());

app.post('/order', (req, res) => {

    const authentication = req.headers.authorization ? req.headers.authorization.toString() : ''
    const {name, amount, levrage, method, timestamp, Signture} = req.body

    let generateSignature = `${name}&${amount}&${levrage}&${authentication}&${method}&${timestamp}`

    let response = {
        error: 0,
        msg: ''
    }

    generateSignature = crypto.createHash('sha256').update(generateSignature).digest('hex')
    if(authentication !== '51A8-6B73-4C2F-8B06-8D25-981F-52B4-D687') {
        response.error = 1,
        response.msg = 'Not authorized'
        res.status(401).json(response);
        return;
    }

    if(generateSignature.toString() !== Signture) {
        response.error = 1,
        response.msg = 'Invalid signature'
        res.status(403).json(response);
        return;
    }

    response.error = 0
    response.msg = 'Order placed successfully'
    res.status(200).json(response)
})

app.listen(port, () => {
    console.log("Listening on port" + port)
})
