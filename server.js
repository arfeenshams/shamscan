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



controller.hears(['i need', 'send me', 'send to me', 'buy me', 'to my home', 'at my address', 'to my address'], 'message_received', function (bot, message) {
  bot.reply(message, 'visit www.rfeen.com/shop')
  bot.reply(message, 'Currently we are unable to receive Orders in Messenger')})



controller.hears(['billing address','shipping address', 'biling adres', 'shiping adres'], 'message_received', function (bot, message) {
  bot.reply(message, 'The shipping address is where you want your items delivered. This can be the same as your billing address, or it can be different.')
  bot.reply(message, 'Billing address is where we collect the Amount')})




controller.hears(['hello', 'hi', 'hay', 'hey', 'salam', 'aoa', 'AOA', 'A.O.A'], 'message_received', function (bot, message) {
  bot.reply(message, 'Hay!!! You Need Help?')})
  
  
controller.hears(['Updates', 'New', 'Latest products', 'new products', 'whats new?', 'show me updates'], 'message_received', function (bot, message) {
  bot.reply(message, 'We currently having nothing new... we will inform you soon')})
  

controller.hears(['i need contact', 'i need your cell phone number', 'i want to contact', 'i am trying to contact you', 'i contact', 'to contact', 'Cell Number', 'Contacting You', 'Contact you?', 'Number?'], 'message_received', function (bot, message) {
  bot.reply(message, 'You can Contact us anytime at : (Cell # 0333 1542230, Email: cs@rfeen.com), just leave a message and we will contact you soon...')})
  


controller.hears(['Fuck you', 'fuck'], 'message_received', function (bot, message) {
  bot.reply(message, 'i dont mind, keep going')})
  
  


controller.hears(['price','price list', 'price of', 'cost price of', 'sale price of', 'sale price', 'cost price'], 'message_received', function (bot, message) {
  bot.reply(message, 'Sorry for inconvenience... Currently we are unable to help you in this regard')
  bot.reply(message, 'you can check our website for uptodate information')
  bot.reply(message, 'visit www.rfeen.com')})
  
 

controller.hears(['delivery charges', 'delivery timming', 'time of delivery', 'to deliver', 'deliver products', 'deliver items', 'charge on delivery', 'cost of delivering products', 'charges per delivery', 'home delivery', 'deliver home', 'falt rate', 'delivery cost', 'cost of delivery', 'expenses on delivery', 'delivery expenditures'], 'message_received', function (bot, message) {
  bot.reply(message, 'we charge Rs.45/- as flat rate on each delivery')
  bot.reply(message, 'Normal delivery is made between 5pm - 8:30pm')
  bot.reply(message, 'Fast Delivery is made within 30 minutes, Extra charges are applied on this delivery')
  bot.reply(message, 'Delivery is made on the same day of order')})
  
  
controller.hears(['Help', 'help me', 'how to', 'to order', 'how order', 'can you help', 'Guide me', 'Need help', 'Need Guidance', 'How it works', 'How to Shop?'], 'message_received', function (bot, message) {
  bot.reply(message, 'i will help you out')
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
