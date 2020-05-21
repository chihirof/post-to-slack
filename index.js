const core = require('@actions/core')
const Slack = require('./src/postToSlack')

try {
  const webhookurl = core.getInput('webhookurl')
  const message = core.getInput('message')
  const slack = new Slack(webhookurl, message)
  slack.post().then(status => {
    core.setOutput('status', status)
  })
} catch (error) {
  core.setFailed(error.message)
}
