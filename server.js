var Botkit = require('botkit')

var accessToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN
var verifyToken = process.env.FACEBOOK_VERIFY_TOKEN
var port = process.env.PORT

if (!accessToken) throw new Error('FACEBOOK_PAGE_ACCESS_TOKEN is required but missing')
if (!verifyToken) throw new Error('FACEBOOK_VERIFY_TOKEN is required but missing')
if (!port) throw new Error('PORT is required but missing')

var controller = Botkit.facebookbot({
  access_token: accessToken,
  verify_token: verifyToken
})

var bot = controller.spawn()

controller.setupWebserver(port, function (err, webserver) {
  if (err) return console.log(err)
  controller.createWebhookEndpoints(webserver, bot, function () {
    console.log('Ready Player 1')
  })
})



controller.hears(['hello', 'hi', 'hay', 'hey', 'salam', 'aoa', 'AOA', 'A.O.A'], 'message_received', function (bot, message) {
  bot.reply(message, 'Hello! hope you are fine', 'Hi there! can i help you?')})
  
  
controller.hears(['Updates', 'New', 'Latest products', 'new products', 'whats new?', 'show me updates'], 'message_received', function (bot, message) {
  bot.reply(message, 'We currently having nothing new... we will inform you soon')})
  

controller.hears(['contact', 'i contact', 'to contact', 'Cell Number', 'Contacting You', 'Contact you?', 'Number?'], 'message_received', function (bot, message) {
  bot.reply(message, 'You can Contact us anytime at : (Cell # 0333 1542230, Email: cs@rfeen.com), just leave a message and we will contact you soon...')})
  





controller.hears(['Help', 'help me', 'can you help', 'Guide me', 'Need help', 'Need Guidance', 'How it works', 'How to Shop?'], 'message_received', function (bot, message) {
  bot.reply(message, 'Hello!')
  bot.reply(message, 'Okay! here we go. Just follow these steps')
  bot.reply(message, {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text: 'Which do you prefer',
        buttons: [
          {
            type: 'postback',
            title: 'Cats',
            payload: 'show_cat'
          },
          {
            type: 'postback',
            title: 'Dogs',
            payload: 'show_dog'
          }
        ]
      }
    }
  })
})

controller.on('facebook_postback', function (bot, message) {
  switch (message.payload) {
    case 'show_cat':
      bot.reply(message, {
        attachment: {
          type: 'image',
          payload: {
            url: 'https://media.giphy.com/media/5xaOcLT4VhjRfudPcS4/giphy.gif'
          }
        }
      })
      break
    case 'show_dog':
      bot.reply(message, {
        attachment: {
          type: 'image',
          payload: {
            url: 'https://media.giphy.com/media/3o7ZeL5FH6Ap9jR9Kg/giphy.gif'
          }
        }
      })
      break
  }
})
