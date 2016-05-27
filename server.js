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



controller.hears(['send me', 'send to me', 'buy me', 'to my home', 'at my address', 'to my address'], 'message_received', function (bot, message) {
  bot.reply(message, 'visit www.rfeen.com/shop')
  bot.reply(message, 'Currently we are unable to receive Orders in Messenger')})



controller.hears(['billing address','shipping address', 'biling adres', 'shiping adres'], 'message_received', function (bot, message) {
  bot.reply(message, 'The shipping address is where you want your items delivered. This can be the same as your billing address, or it can be different.')
  bot.reply(message, 'Billing address is where we collect the Amount')})


controller.hears(['rfeen.com?', 'rfeen?', 'what is rfeen?', 'what is rfeen.com', 'what you do?', 'what do you Sell?'], 'message_received', function (bot, message) {
  bot.reply(message, 'Visit our Website www.rfeen.com for more information')
  bot.reply(message, 'rfeen.com is your one stop shop for anything you want ranging from grocery items to household products, from snacks & confectionary to goods of personal care. You will find everything under one roof virtually. rfeen.com is your ultimate destination for shopping online. Let’s do grocery.)
  bot.reply(message, 'Call us at 0333 1542230')})
  


controller.hears(['hello', 'hi', 'hay', 'hey', 'salam', 'aoa', 'AOA', 'A.O.A'], 'message_received', function (bot, message) {
  bot.reply(message, 'Hay!!! how can i help you?')})
  
  
controller.hears(['Updates', 'New', 'Latest products', 'new products', 'whats new?', 'show me updates'], 'message_received', function (bot, message) {
  bot.reply(message, 'We currently having nothing new... we will inform you soon')})
  

controller.hears(['number', 'contact', 'contact?', 'number?', 'i need contact', 'i need your', 'i need your number', 'i need your contact', 'i need number', 'i need your cell phone number', 'i want to contact', 'i am trying to contact you', 'i contact', 'to contact', 'Cell Number', 'Contacting You', 'Contact you?', 'Number?'], 'message_received', function (bot, message) {
  bot.reply(message, 'You can Contact us anytime at : (Cell # 0333 1542230, Email: cs@rfeen.com), just leave a message and we will contact you soon...')})
  


controller.hears(['Fuck you', 'fuck'], 'message_received', function (bot, message) {
  bot.reply(message, 'i dont mind, keep going')})
  
  
controller.hears(['thank', 'Talk to you soon', 'See you next time', 'Gotta go!', 'thanks', 'thanks you', 'thanks alot', 'OK TC', 'TC', 'BYE', 'Allah Hafiz', 'tata', 'take care', 'i am leaving', 'i have to go', 'good bye'], 'message_received', function (bot, message) {
  bot.reply(message, 'Thanks alot for your visit...')
  bot.reply(message, 'Please let me know if I can ever be of service to you. See you Soon'  )
  bot.reply(message, 'Dont forget to Save our Contact Number (0333 1542230) in your cell phone to stay in touch with us.')})
  

controller.hears(['price','price list', 'price of', 'cost price of', 'sale price of', 'sale price', 'cost price'], 'message_received', function (bot, message) {
  bot.reply(message, 'Sorry for inconvenience... Currently we are unable to help you in this regard')
  bot.reply(message, 'you can check our website for uptodate information')
  bot.reply(message, 'visit www.rfeen.com')})
  
 

controller.hears(['delivery charges', 'delivery timming', 'time of delivery', 'to deliver', 'deliver products', 'deliver items', 'charge on delivery', 'cost of delivering products', 'charges per delivery', 'home delivery', 'deliver home', 'falt rate', 'delivery cost', 'cost of delivery', 'expenses on delivery', 'delivery expenditures'], 'message_received', function (bot, message) {
  bot.reply(message, 'we charge Rs.45/- as flat rate on each delivery')
  bot.reply(message, 'Normal delivery is made between 5pm - 8:30pm')
  bot.reply(message, 'Fast Delivery is made within 30 minutes, Extra charges are applied on this delivery')
  bot.reply(message, 'Delivery is made on the same day of order')})
  
controller.hears(['cart', 'show my cart', 'show me cart', 'in my cart', 'my cart', 'what have i added to my cart', 'added to my cart', 'added to my list', 'how many have i added to my cart', 'how many have you added to my cart', 'how many items are in my cart', 'in my cart'], 'message_received', function (bot, message) {
  bot.reply(message, 'Sorry... currently we are unable to show you cart in messenger. but you can check the link')
  bot.reply(message, 'www.rfeen.com/cart')})
  
controller.hears(['Help', 'help me', 'how to', 'to order', 'how order', 'can you help', 'Guide me', 'Need help', 'Need Guidance', 'How it works', 'How to Shop?'], 'message_received', function (bot, message) {
  bot.reply(message, '0333 1542230')
  bot.reply(message, 'for any kind of help just Contact our admin')})
