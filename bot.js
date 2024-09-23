const TelegramBot = require('node-telegram-bot-api');

// Replace with your bot token
const token = '8169568541:AAGsbcwEEqUfM60aKzW3lyZpD4Jq5yefHUA';
const bot = new TelegramBot(token, { polling: true });

// Start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    // Send a message with a button that launches the Web App
    bot.sendMessage(chatId, 'Welcome to AIDogs, @olumide_as! The AIDogs portal is live for dog lovers to have fun and earn rewards.', {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Open Web App',
                        web_app: {
                            url: 'https://fitcoin.vercel.app/',  // Replace with your React app URL
                        },
                    },
                ],
            ],
        },
    });
});

// Start the bot
console.log('Bot is running...');