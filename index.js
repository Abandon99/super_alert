const {checkTime}   = require('./checkTime')


const TIMER = process.env.NODE_ENV === 'development' ? 5000 : 1000 * 60 * 15

const callMe = checkTime

const sendMessageTimer = setInterval(callMe, TIMER)
