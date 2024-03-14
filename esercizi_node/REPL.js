const crypto = require('crypto')
console.log(crypto)

const id = crypto.randomBytes(10).toString('hex')
console.log(id)