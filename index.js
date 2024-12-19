const TelegramBot = require('node-telegram-bot-api');

const token = '7326958222:AAEMQ3OVhL_SUhEOmx_J1vVdTDYg4XSrLKg';
const bot = new TelegramBot(token, { polling: true });

// Lắng nghe lệnh start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Xin chào! Tôi là bot của bạn.');
});

// Phản hồi lại tin nhắn bất kỳ
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  // 'echo' lại tin nhắn người dùng gửi đi
  bot.sendMessage(chatId, msg.text);
});