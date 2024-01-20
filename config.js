const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="samsamsun789@gmail.com"
global.location="Lahore,Punjab,Pakistan"
global.mongodb= process.env.MONGODB_URI || ""
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl = process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website =process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE=process.env.THUMB_IMAGE|| "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 





global.disablepm = process.env.DISABLE_PM || "false",
global.userImages = process.env.USER_IMAGES|| "text",
global.style = process.env.STYLE || "5",  // put '1' to "5" here to check bot styles




global.devs = "923184474176" // Developer Conatact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2349057084011";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  //style:process.env.STYLE|| "2",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7-qr",
  caption:process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

 
  author: process.env.PACK_AUTHER || "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  sessionName:process.env.SESSION_ID|| "SESSION_19_38_01_20_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVByem0xU085dE1UZ2lwa09HaE02eWJjaTh1aDEwbHFGdmhJN1RJcTUwdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0hOSWlmbG5mWVVEZDVJbWs3YlIrRVIrWXA5c1RtdFc1TmtiV01EUTMzYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrUFF5YnBxUFVHckIxNHNIdExpUExRREFhM0VpZjhKVXIxTm94NmNackdNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1cytzOUNOVUllZWJLdFdqSkRmZTJPdHVSYmZ6SEtxL0xncmNoV0NMdW5FPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFNUnNMVlZ5aXdjMGVUOXROUEFSTjJTdVdPU201TGIwaEhlRTFOaTh3bDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh1RmpMUnF1aXNOdXVDemx4RzNYUVUwYVF0b1k5Y1FRa0hvUFFBZHFZRUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0hCa0FueExNeklCTnZlYk9wckhISjFjcmh6T0FPbjZEVERGeVFmT2dHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSjFsMDcrZ1h3akIybXU3bWwwK015dThlZDRsQmpuL3hyV3JlRTd3TzBScz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVRNmVKSGh3dEFOcmxYTVIyNkpBYVorclJpU3dEeTdoTms2dndKWVRJVzZWRDhXTzBWcXQwTXhHd2xEUW1pcGozT2hWUW9jZmlGTTViVFJKQU53a2pnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgsImFkdlNlY3JldEtleSI6IlVFT3ZCNkFxaEE2emxLL2dHako2WnN3eXo1ZnhQMnFBbmF0U09XaWVHTXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTA1NzA4NDAxMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJENDU0NDc2RjVFQTBENDdENDk4OEJGMzY4RENCRDU1QiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzA1Nzc5NTE1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MDU3MDg0MDExQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjFCQjczQjJEMEMwQUJEODVDRTEwRDhDNDcxMkU5NEY0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MDU3Nzk1MTh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlpDYlAxQ3FxUXkyaHdCc3g1cHZHV3ciLCJwaG9uZUlkIjoiYTdkZDM1YTEtNjRmMi00ZTA3LWFlZWUtN2NlZWM1YjBkNmE4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVFSzNYaldYLzNRU2hSOTMwbXJWZHhSSkhNTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsOUI4RERqTmJkYjRtbzVYWW5UWmpNa3p2OVU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQ0RSMlJKN0IiLCJtZSI6eyJpZCI6IjIzNDkwNTcwODQwMTE6MTVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTGlsaWFuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNVGp1R1FRczhLd3JRWVlBeUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ2QW12cng5RjlSNmZQSW94ckZkNVlSUkhuNC9RYnFRNy9ETENGM09ON0Y4PSIsImFjY291bnRTaWduYXR1cmUiOiI0dTROTWxTczI5WTUxNGwyRkQ0TjJ3WlZhdDJEK0pKaEtDNXBRRmxMTkMxZE1PaGFHTGtYZ2N0Y1crSXJmbG9uZzVUVkk3aG5UYitBbTZXRG1zM0lDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYXBpSHR5dTdjTUw5bHpkZmtOUXY5anI5UmxKVUlXaldsbUFaUWMrdjJmWjRielJjcmRsekRIVXo2S2JEMHlCRk9xb0VJcFNhckp1YktpTTlGZjR4Z1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDU3MDg0MDExOjE1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJ3SnI2OGZSZlVlbnp5S01heFhlV0VVUjUrUDBHNmtPL3d5d2hkempleGYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDU3Nzk1MTAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTTdDIn0=",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
 
 
  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "false",
  save_status: process.env.AUTO_SAVE_STATUS || "false",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
