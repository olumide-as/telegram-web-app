const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

// Replace with your bot token
const token = '8169568541:AAGsbcwEEqUfM60aKzW3lyZpD4Jq5yefHUA';
const bot = new TelegramBot(token, { polling: true });

// Start command
bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;

    // Retrieve user info
    const { username, id: userId, first_name: firstName, last_name: lastName } = msg.from;

    // Send user data to the backend for registration
    try {
        await axios.post('https://your-backend-api.com/api/users/register', {
            telegramId: userId,
            firstName: firstName || '',
            lastName: lastName || '',
            username: username || '',
        });
        console.log('User registration successful');
    } catch (error) {
        console.error('Error registering user:', error.message || error);
    }

    // Create the formatted mention
    const mention = username ? `<a href="tg://user?id=${userId}">@${username}</a>` : "User";

    // Send a message with a button that launches the Web App
    bot.sendMessage(chatId, `Welcome to AIDogs, ${mention}! The AIDogs portal is live for dog lovers to have fun and earn rewards.`, {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Open Web App',
                        web_app: {
                            url: 'https://telegram-web-app-mocha.vercel.app/',  // Replace with your React app URL
                        },
                    },
                ],
            ],
        },
        parse_mode: 'HTML', // Enable HTML parsing for clickable username
    });
});

// Start the bot
console.log('Bot is running...');