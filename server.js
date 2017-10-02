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


controller.hears(['bhai', 'listen', 'hello', 'hi', 'hay', 'hey', 'salam', 'aoa', 'AOA', 'A.O.A'], 'message_received', function (bot, message) {
  bot.reply(message, 'Hi, How can i help you?. Please visit www.fallclub.com/events for our upcoming events. For Registration visit www.fallclub.com/join. To check out our Rates/Price List visit www.fallclub.com/Rates, (To talk to our person please leave a text at 0333 1542230)')})



controller.hears(['Fallclub?', 'Fall Club ?', 'What is Fallclub?',], 'message_received', function (bot, message) {
  bot.reply(message, 'It's your own Club, We Organize Events for you. Traveling, Family, Birthday etc. (To talk to our person please leave a text at 0333 1542230)')})


controller.hears(['registeration', 'Register', 'registr', 'register me'], 'message_received', function (bot, message) {
  bot.reply(message, 'For Registration visit www.fallclub.com/join. (To talk to our person please leave a text at 0333 1542230)')})

controller.hears(['What is Fall Club?', 'Fall Club?', 'who are you?', 'who is FallClub?', 'what is FallClub?'], 'message_received', function (bot, message) {
  bot.reply(message, 'visit www.FallClub.com')
  bot.reply(message, 'We help you Explore the world within your Budget.')})

controller.hears(['Charges', 'how much you charge', 'rates', 'Price', 'Price List'], 'message_received', function (bot, message) {
  bot.reply(message, 'Price list is on the link.')
  bot.reply(message, 'visit www.fallclub.com/rates')})

controller.hears(['my name is'], 'message_received', function (bot, message) {
  bot.reply(message, 'Nice name')})

controller.hears(['gandu', 'gando', 'bc', 'bhenchod', 'raami', 'fucker', 'fuck face', 'Fuck'], 'message_received', function (bot, message) {
  bot.reply(message, 'plz...b specific')})

controller.hears(['Okay', 'right', 'alright', 'okie', 'ok', 'okayy', 'okey'], 'message_received', function (bot, message) {
  bot.reply(message, ':)')})

controller.hears(['Please share my Pictures', 'pics', 'give me my pics', 'Pictures', 'Aoa pics nae mili abi tak','please send pictures', 'please photos', 'please upload pics', 'sir pic to share karain', 'Pictures Please', 'Our Pic', 'Our Pictures', 'Our Photos'], 'message_received', function (bot, message) {
  bot.reply(message, 'Check our Page, We have already uploaded Pictures of the Event. We will upload more pics soon on our Page inshallah. To talk to our person please leave a text at 0333 1542230')})

controller.hears(['any trips?', 'trips', 'kaha ja rahy ho', 'kaha ka trip hay', 'agla trip kab?', 'koi trip', 'what type of event is that?', 'Any New Event', 'Any Tip', 'any trip in', 'next month', 'this month', 'current month', 'upcoming event', 'any family packages', 'any trip for family', 'for families', 'for family', 'trip for people', 'any event in this month', 'in this month', 'any trip', 'any upcoming trip', 'in next month', 'in next Month?', 'upcoming Events', 'is there Any Upcoming Events?', 'in January', 'in Feb', 'in February', 'in March', 'in April', 'in May', 'in June', 'in July', 'in August', 'in Sep', 'in September', 'in October', 'in Oct', 'in Nov', 'in november', 'in dec', 'in december'], 'message_received', function (bot, message) {
  bot.reply(message, 'For information regarding our upcoming trips, family packages or Events please visit www.fallclub.com/events')
  bot.reply(message, 'Or Leave a Text at 0333 1542230 our Person will call you back.')})

controller.hears(['Help', 'help me', 'how to', 'register me', 'to Register', 'how register', 'can you help', 'Guide me', 'Need help', 'Need Guidance', 'How it works', 'Register kese hota hay', 'registeration kese hogi?', 'Registration?'], 'message_received', function (bot, message) {
  bot.reply(message, '0333 1542230')
  bot.reply(message, 'Contact our Admin for any kind of queries')})



controller.hears(['number', 'contact', 'contact?', 'number?', 'i need your number', 'i need your contact', 'i need number', 'i need your cell phone number', 'i want to contact', 'i am trying to contact you', 'i contact', 'to contact', 'Cell Number', 'Contacting You', 'Contact you?', 'Number?'], 'message_received', function (bot, message) {
  bot.reply(message, 'You can Contact us anytime at : (Cell # 0333 1542230, Email: cs@fallclub.com), just leave a message and we will contact you soon...')})

controller.hears(['thank', 'Talk to you soon', 'See you next time', 'Gotta go!', 'thanks', 'thanks you', 'thanks alot', 'OK TC', 'TC', 'BYE', 'Allah Hafiz', 'tata', 'take care', 'i am leaving', 'i have to go', 'good bye'], 'message_received', function (bot, message) {
  bot.reply(message, 'Thanks alot for your time...')
  bot.reply(message, 'Please let us know if we can ever be of service to you. See you Soon'  )
  bot.reply(message, 'Dont forget to Save our Contact Number (0333 1542230) in your cell phone to stay in touch with us.')})
  
