const connection = require('../app/database')

class systemService {
    //检查闲置任务是否过期，过期则改变任务状态
    async checkExpirationTime () {
        const statement = 'UPDATE `task` SET `status` = 4 WHERE `status` = 1 AND `expiration_time` <= now()'
        await connection.execute(statement)
    }
    //获取所有的进行中的任务
    async getALLReceiveTask () {
        const statement = 'SELECT * FROM `task` WHERE `status` = 2'
        const [result] = await connection.execute(statement)
        return result
    }
    //获取进行中任务的进程
    async getReceiverConfirmAt (tid) {
        const statement = 'SELECT `receiver_confirm_at` FROM `task_receive_process` WHERE `tid` = ?'
        const [result] = await connection.execute(statement, [tid])
        return result
    }
    //改变超时任务的状态为超时
    async updateReceiveTaskStatus (tid) {
        const statement = 'UPDATE `task` SET `status` = 5 WHERE `status` = 2 AND `tid` = ?'
        await connection.execute(statement, [tid])
    }
}

module.exports = new systemService()