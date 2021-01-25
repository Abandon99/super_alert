const axios = require('axios')

const IS_DEV = process.env.NODE_ENV === 'development'

module.exports = function sendMessage (msg) {
    if(IS_DEV) return Promise.resolve('--- 测试环境 模拟发送消息成功 ---')

    return axios
        .get('https://sc.ftqq.com/SCU153669T5eee827e527d52b70ed8d2c56c97a446600b1789ecae4.send?text=' + encodeURI(msg))

    return Promise.resolve('--- 生产环境 模拟发送消息成功 ---') 
}



