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
  bot.reply(message, 'Hay, How can i help you?')
  bot.reply(message, 'For information regarding our upcoming events please visit www.fallclub.com/events')
  bot.reply(message, 'If you are interested in registring yourself or your friends kindly visit www.fallclub.com/join')
  bot.reply(message, 'For Rates or Price List visit www.fallclub.com/Rates')
  bot.reply(message, 'To talk to ur person please leave a text at 0333 1542230')})

controller.hears(['What is Fall Club?', 'Fall Club?', 'who are you?', 'who is FallClub?', 'what is FallClub?'], 'message_received', function (bot, message) {
  bot.reply(message, 'visit www.FallClub.com')
  bot.reply(message, 'We help you Explore the world within your Budget.')})

controller.hears(['i want', 'i need', 'send me', 'Give me rates', 'send to me', 'Give me', 'rates', 'Price', 'Price List'], 'message_received', function (bot, message) {
  bot.reply(message, 'Price list is on the link.')
  bot.reply(message, 'visit www.fallclub.com/rates')})

controller.hears(['my name is'], 'message_received', function (bot, message) {
  bot.reply(message, 'Nice name')})

controller.hears(['Okay', 'okie', 'ok', 'okayy', 'okey'], 'message_received', function (bot, message) {
  bot.reply(message, ':)')})

controller.hears(['Please share my Pictures', 'give me my pics', 'Pictures', 'Aoa pics nae mili abi tak','please send pictures', 'please photos', 'please upload pics', 'sir pic to share karain', 'Pictures Please', 'Our Pic', 'Our Pictures', 'Our Photos'], 'message_received', function (bot, message) {
  bot.reply(message, 'Thanks allot for joining. Check our Page, We have already uploaded Pictures of the Event. We will upload more pics soon on our Page inshallah. ')
  bot.reply(message, 'To talk to ur person please leave a text at 0333 1542230')})

controller.hears(['any family packages', 'any trip for family', 'for families', 'for family', 'trip for people', 'any event in this month', 'in this month', 'any trip', 'any upcoming trip', 'in next month', 'in next Month?', 'upcoming Events', 'is there Any Upcoming Events?', 'in January', 'in Feb', 'in February', 'in March', 'in April', 'in May', 'in June', 'in July', 'in August', 'in Sep', 'in September', 'in October', 'in Oct', 'in Nov', 'in november', 'in dec', 'in december'], 'message_received', function (bot, message) {
  bot.reply(message, 'we charge Rs.45/- as flat rate on each delivery')
  bot.reply(message, 'Delivery is made on the same day of order')})
  
controller.hears(['Help', 'help me', 'how to', 'to Register', 'how register', 'can you help', 'Guide me', 'Need help', 'Need Guidance', 'How it works', 'Register kese hota hay', 'registeration kese hogi?', 'Registration?'], 'message_received', function (bot, message) {
  bot.reply(message, '0333 1542230')
  bot.reply(message, 'Contact our Admin for any kind of queries')})
 

controller.hears(['number', 'contact', 'contact?', 'number?', 'i need your number', 'i need your contact', 'i need number', 'i need your cell phone number', 'i want to contact', 'i am trying to contact you', 'i contact', 'to contact', 'Cell Number', 'Contacting You', 'Contact you?', 'Number?'], 'message_received', function (bot, message) {
  bot.reply(message, 'You can Contact us anytime at : (Cell # 0333 1542230, Email: cs@fallclub.com), just leave a message and we will contact you soon...')})

controller.hears(['thank', 'Talk to you soon', 'See you next time', 'Gotta go!', 'thanks', 'thanks you', 'thanks alot', 'OK TC', 'TC', 'BYE', 'Allah Hafiz', 'tata', 'take care', 'i am leaving', 'i have to go', 'good bye'], 'message_received', function (bot, message) {
  bot.reply(message, 'Thanks alot for your time...')
  bot.reply(message, 'Please let us know if we can ever be of service to you. See you Soon'  )
  bot.reply(message, 'Dont forget to Save our Contact Number (0333 1542230) in your cell phone to stay in touch with us.')})
  
