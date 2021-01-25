const sendMessage = require('./sendMessage')

const ALERT_TIME = 10
let todayHasCalled = false
let shadowHous = (new Date()).getHours()

exports.checkTime = () => {
    const nowHour = (new Date()).getHours()
    const gap = nowHour - shadowHous
    if(gap < 0) todayHasCalled = false
    if(gap > 1) shadowHous = nowHour - 1
    if(todayHasCalled) {
        console.log('发送过了')
        return
    } else {
        if(nowHour >= ALERT_TIME) {
            console.log('send message！！！！！！！========> 只有一次哦 很重要')
            sendMessage('这是宇宙在喊你起床！！！赶紧的！！！')
                .then(res => {
                console.log('res => ', res)
                })
                .catch(err => {
                    console.log('err ====>', err)
                    clearInterval(sendMessageTimer)
                })
            todayHasCalled = true
        } else {
            console.log('还没到时间', (new Date()).getSeconds())
        }
    }
    
}