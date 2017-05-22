const AbstractHandler = require('./AbstractHandler')

class ServerSync extends AbstractHandler {
    handle(data) {
        let event = {}
        this.client.user = this.client.users.get(data.session)
        event.welcomeMessage = data.welcomeText
        event.maximumBitrate = data.maxBandwidth

        this.client.synced = true
        this.client.emit('ready', event)
    }
}

module.exports = ServerSync