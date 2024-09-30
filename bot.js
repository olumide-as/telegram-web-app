const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
const punycode = require('punycode');

// Replace with your bot token
const token = '8169568541:AAGsbcwEEqUfM60aKzW3lyZpD4Jq5yefHUA';  // Be sure to replace this with the correct bot token
const bot = new TelegramBot(token, { polling: true });

// Start command
bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;

    // Retrieve user info
    const { username, id: userId, first_name: firstName, last_name: lastName } = msg.from;

    // Send user data to the backend for registration
    try {
        const response = await axios.post('http://localhost:5001/api/users/register', {
            telegramId: userId,
            firstName: firstName || '',
            lastName: lastName || '',
            username: username || '',
        });
        console.log('User registration successful:', response.data);
    } catch (error) {
        console.error('Error registering user:', error.message || error);
        // Inform the user about the error
        bot.sendMessage(chatId, 'Sorry, there was an error registering you. Please try again later.');
        return;  // Stop further execution if there's an error
    }

    // Create the formatted mention, only using Telegram-supported HTML tags
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