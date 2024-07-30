const { Telegraf, Markup } = require('telegraf');
const Token = '##########'; // Replace ########## With your Bot Token from BotFather
const bot = new Telegraf(Token); 

bot.start((ctx) => { // Initialize Start Command (/start)
  ctx.reply(
    "Welcome! This is a Welcome Text for Initiating Telegram Bot",
    Markup.inlineKeyboard([
      [
        { text: "URL Button", url: "https://example.phobos.id" },
        { text: "Chat Button", callback_data: "foo" },
        { text: "Another Button", callback_data: "bar" }
      ]
    ])
  );
});

bot.on('callback_query', (ctx) => {
  const data = ctx.callbackQuery.data;

  if (data === "foo") {
    ctx.reply('This is A Response Text');
  } else if (data === "bar") {
    ctx.reply('This is Another Text');
  }
});

bot.help((ctx) => { // Initialize Help Command (/help)
    ctx.reply(
    "Here is the list of the commands.\n\n/start - Initialize the Bot\n/info - Information about the Bot"
    )
});

bot.command('info', (ctx) => { // Initialize Info Command (/info)
  ctx.reply(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat tellus non nunc facilisis, vitae ultrices dolor varius."
  );
});

bot.launch().then(() => {
    console.log("Bot is Ready to Use!");
});
