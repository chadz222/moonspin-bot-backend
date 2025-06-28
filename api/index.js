const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const webAppUrl = 'https://moonspin-app-chadz222-sales.vercel.app';

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '🚀 Launch MoonSpin', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '🎮 Play MoonSpin',
            web_app: { url: webAppUrl }
          }
        ]
      ]
    }
  });
});

export default function handler(req, res) {
  res.status(200).json({ ok: true });
}
