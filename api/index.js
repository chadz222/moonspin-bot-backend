import TelegramBot from 'node-telegram-bot-api';

const token = process.env.BOT_TOKEN;

// Don't use polling in webhook mode
const bot = new TelegramBot(token);

// Start command handler
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, '🚀 Launch MoonSpin', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '🎮 Play MoonSpin',
            web_app: {
              url: 'https://moonspin-app-chadz222-sales.vercel.app'
            }
          }
        ]
      ]
    }
  });
});

// Required Vercel handler for webhook
export default function handler(req, res) {
  res.status(200).json({ ok: true });
}
