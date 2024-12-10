const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "fBUQTDhS#5B4NQFaM8nZ2lA57RCpUTlVYHP5KkDjHDk6zjp33aiE", /* you sessin_id */
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
ALIVE_IMG: process.env.ALIVE_IMG || "https://ibb.co/sHJVhDj",
ALIVE_MSG: process.env.ALIVE_MSG || "Hy Sir Can HELP",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
OWNER_REACT: process.env.OWNER_REACT || "true",
BOT_NAME: process.env.BOT_NAME || "Hy I Am Adeesha Eshan 👀😂

"වචන අඩුවෙන් කෙරෙන්න ඔන දේ කෙටියෙන් Typeing එකක් දපන්😏💔"",
LANG: process.env.LANG || "SI"
};
