const core = require('@actions/core')
const Slack = require('./src/postToSlack')
const util = require('./src/util')

try {
  const webhookurl = process.env.WEBHOOKURL
  const message = core.getInput('message')
  if (!webhookurl || !message) {
    throw new Error('WEBHOOKURL and message are required.')
  }
  const isLink = util.isLink(core.getInput('link_names'))

  const slack = new Slack(webhookurl, message, isLink)
  slack.post().then(status => {
    if (status !== 200) {
      core.setFailed(status)
    }
    core.setOutput('status', status)
  }).catch(error => {
    core.setFailed(error)
  })
} catch (error) {
  core.setFailed(error)
}
