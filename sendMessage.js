const axios = require('axios')


module.exports = function sendMessage (msg) {
    return axios
        .get('https://sc.ftqq.com/SCU153669T5eee827e527d52b70ed8d2c56c97a446600b1789ecae4.send?text=' + encodeURI(msg))
}


