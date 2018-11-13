import MessageStateEnum from '../config/MessageStateEnum'
import MessageTypeEnum from '../config/MessageTypeEnum'
import StatusCodeEnum from '../config/StatusCodeEnum'
import MessageEleData from './MessageEleData'

/**
 * 消息的抽象类：规定了消息的一些基本格式
 */
export default interface Message {
    creatorID: string  // 创建者ID
    createdTime: string  // 创建时间
    versionL: string  // 大版本号
    version: string  // 小版本号
    type: MessageTypeEnum // 消息类型
    state: MessageStateEnum // 消息状态
    sendToSerer: boolean // 是否需要向服务器发送此消息
    saveToElement: any
    elData: MessageEleData  // 消息具体待解析元素数据，不同类型消息包含数据不同且执行解释器不同
    execute() // 消息执行器
}
