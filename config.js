require('dotenv/config')


module.exports = {
    PRODUCTION: process.env.PRODUCTION || "FALSE",
    PORT: process.env.PORT || 3000,
    DB:{},
}