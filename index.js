const core = require('@actions/core')
const Slack = require('./src/postToSlack')

try {
  const webhookurl = process.env.WEBHOOKURL
  const message = core.getInput('message')
  if (!webhookurl || !message) {
    throw new Error('WEBHOOKURL and message are required.')
  }

  const slack = new Slack(webhookurl, message)
  slack.post().then(status => {
    if(status != 200) {
      core.setFailed(status)
    }
    core.setOutput('status', status)
  }).catch(error => {
    core.setFailed(error)
  })
} catch (error) {
  core.setFailed(error)
}
