# post to slack

Action of Github Actions that can post a message to slack.  


## Attention

This is the prerelease version.  


## Simply Usage

```yaml
- name: post message to slack
  uses: chihirof/post-to-slack@v0.1.4
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


You can set parameters to "with".

- **`message`**
  - **required**
  - Message to send to slack.


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
  uses: chihirof/post-to-slack@v0.1.4
  env:
    WEBHOOKURL:  ${{ secrets.WEBHOOKURL }}
  with:
    message: "hello slack"
- name: Get the output
  run: echo "${{ steps.post.outputs.status }}"
```
