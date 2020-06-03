const fetch = require('node-fetch')

module.exports = class Slack {
  constructor (url, message, isLink) {
    this.url = url
    this.body = { text: message, link_names: isLink }
    this.isLink = isLink
  }

  post () {
    return fetch(this.url, {
      method: 'post',
      body: JSON.stringify(this.body),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
      .then(res => res.status)
      .catch(err => {
        throw new Error(err)
      })
  }
}
