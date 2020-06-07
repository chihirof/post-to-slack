![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/chihirof/post-to-slack?color=blue&include_prereleases)
[![GitHub](https://img.shields.io/github/license/chihirof/post-to-slack)](./LICENSE)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/chihirof/post-to-slack/test%20for%20post-to-slack?label=test%20post%20%28CI%29)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/chihirof/post-to-slack/lint?label=lint%20%28CI%29)

# post to slack

Action of Github Actions that can post a message to slack.  


## Attention

This is the prerelease version.  


## Simply Usage

```yaml
- name: post message to slack
  uses: chihirof/post-to-slack@v0.2.0
  env:
    WEBHOOKURL:  ${{ secrets.WEBHOOKURL }}
  with:
    message: "hello slack"
```

You can use it simply by setting the WEBHOOK URL of Slack and the message you want to send.


## Parameters

You can set environment variables to "env".

- **`WEBHOOK`** 
  - **required**
  - The WEBHOOK URL of Slack.
  - string


You can set parameters to "with".

- **`message`**
  - **required**
  - Message to send to slack.
  - string
- **`link_names`**
  - optional (default `false`)
  - If this value set to `true`, find and link channel names and usernames.
  - true / false

## Outputs

After running post-to-slack action, you will receive the following output.  
Outputs is optional(There is no problem if you do not receive it.).

- `status`
  - Execution result of post-to-slack.


## Example

When you want to know the execution result of post-to-slack.

```yaml
- name: post message to slack
  id: post
  uses: chihirof/post-to-slack@v0.2.0
  env:
    WEBHOOKURL:  ${{ secrets.WEBHOOKURL }}
  with:
    message: "hello slack"
- name: Get the output
  run: echo "${{ steps.post.outputs.status }}"
```
