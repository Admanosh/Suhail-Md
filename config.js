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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  //style:process.env.STYLE|| "2",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || "‽",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7-qr",
  caption:process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

 
  author: process.env.PACK_AUTHER || "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  sessionName:process.env.SESSION_ID|| "SESSION_04_43_05_28_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUd1MHlzOGs5UjJsdUh1Zjd0UmZTRnNDaXJiMHVlYitoVUVUNUFhb3czMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoienAwVFM3M0d1cDhZVkYxKzMzRDN0RzYzYzFFaUNtamhTOUZJc3hKRkEwND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SVNqaVk2cUxSSmZPejBUL1RxczJ5eVdLRzZhZnV5bkZUZ2hWaUlOdVdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwWUVKaHNWdlZNc2IzNC9FYVh4ZmxaSWxjUHZiNDVFVGpUNDhiOHE4REJrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZDQkRybkFYZk1aYUFrN1dyQXJNM1hXcnhFTE9tUkJpM3hhVDFTRjNNMGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNpcEM3TlhLNi85SG9IVVhJTmRuU2c3M05XVFFnWjFiZW1VM0RyYzhPeTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUNFeCszYTZjekI2bjhOUVBVQU4ySlVOV0RhZk5KK2NVUWlhaVdQVmRWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1dsZTViS091Qm9zcUZnZERQRDlzSm52RGg0REtKakJnVjF2T0JKV0hoZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNaU0tkQVgwMHlJVlE2TU04dE1ianh5eFZpazM4TndwdDFnTFBRL1djc1hPNExGczFNRVVEZmliZ2lvbW5JQ3NOQXRiN2pvb2o5NWhKUFhjVXBLWkNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA5LCJhZHZTZWNyZXRLZXkiOiI3cThVeU9RVjNOcGl2cDNWOTRLV1AzYjhveTlDejM1Vi96K2dhK0ZRbmtFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNTcwODQwMTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjM4RTJGNTRFNTU5REQyMzY1M0E2ODIyRDZGNkU2ODIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNjg3MTQzOH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieF8ybG9GWERRakd2TnhLQTZFYVRPUSIsInBob25lSWQiOiI4ZjQzMzRlZC03YmNjLTRiMGQtYjNkNC0yYzljM2Q5NDgyMzQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2tQOUJRbElJTEsvWEkrMElOK3NCdWNMY3pZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1MTGlneTh3clVHakRDU2dkczErM2xLU3dwUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJIRDQ0TEdSNSIsIm1lIjp7ImlkIjoiMjM0OTA1NzA4NDAxMTo0MEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJMaWxpYW4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xHODVNZ0ZFSUhDMWJJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InF4b2Z3cGg1YkpKclhTanZ1cDRzREozQ3piMWhxV3llZXRnQVZqbDNQVWc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik11MUNMRmZja1ZneTVSWkdUcnp3eGN4OFViTWc3YUdjRjBmR3dsY3hidTBzMGpVaytnK005dHRRa2Q5NkFVQTB1bHpDN05Ta1RaTDVUTitZcHpuQUJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlenVBc2FNMlBwUUlMNFRBK1RGdzZVZ215V3drc3VEUzlLWmRpQjhpSGFUdldNTUd1Z2VOWEJ5d091ZHc1VHh1VFlzT291Ti82NllRMjV2NjB2bndDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNTcwODQwMTE6NDBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYXNhSDhLWWVXeVNhMTBvNzdxZUxBeWR3czI5WWFsc25ucllBRlk1ZHoxSSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNjg3MTQyOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIZngifQ==",  // PUT SESSION ID HERE 
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
 
