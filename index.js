const TelegramBot = require("node-telegram-bot-api");

const token = "5912669945:AAH-eLHxioxImN38rSbtG5yGfe3p-03umUs";

const bot = new TelegramBot(token, { polling: true });
const url = "https://www.google.com/"

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    await bot.sendMessage(chatId, "enter form", {
      reply_markup: {
        keyboard: [[{ text: "Заполнить форму" }]],
      },
    });
  }

  await bot.sendMessage(chatId, "Ниже появится кнопка", {
    reply_markup: {
      inline_keyboard: [[{ text: "Сделать заказ", web_app: { url } }]],
    },
  });
});
