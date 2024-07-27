const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://telegra.ph/file/3b20602024da47e38a454.jpg"                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "256774794446" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "SUHAIL_23_45_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDUyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY5LFxuICAgICAgICAzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTksXG4gICAgICAgIDI3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA5MCxcbiAgICAgICAgNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODUsXG4gICAgICAgIDYsXG4gICAgICAgIDczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYyLFxuICAgICAgICA0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgODEsXG4gICAgICAgIDE4LFxuICAgICAgICA5OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDM4LFxuICAgICAgICAyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExLFxuICAgICAgICA5OSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDMzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODIsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZXJFbEgxd0V6K0NoZnZBK3hOVWtJYmF1NXlFYk00V2tJSzFycXZHa1R4az1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia3hXdm9iX3ZUT09hN0p5MC02UFI1d1wiLFxuICBcInBob25lSWRcIjogXCI3ODhiZDIwNy05Zjc4LTRkZGMtODE1Yy1mOTk0ODBkODY3NGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTUsXG4gICAgICAxNTAsXG4gICAgICAxNjcsXG4gICAgICA0NCxcbiAgICAgIDIxMyxcbiAgICAgIDE1MCxcbiAgICAgIDIzMCxcbiAgICAgIDE2OCxcbiAgICAgIDI1LFxuICAgICAgMzAsXG4gICAgICA1MixcbiAgICAgIDE4LFxuICAgICAgMTY4LFxuICAgICAgMTQxLFxuICAgICAgMixcbiAgICAgIDU2LFxuICAgICAgNCxcbiAgICAgIDI5LFxuICAgICAgMTc4LFxuICAgICAgNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA4LFxuICAgICAgNzIsXG4gICAgICAxNDUsXG4gICAgICAxMTUsXG4gICAgICAxMDcsXG4gICAgICA4NCxcbiAgICAgIDE5OCxcbiAgICAgIDE3LFxuICAgICAgNyxcbiAgICAgIDE5MCxcbiAgICAgIDQ5LFxuICAgICAgMTc4LFxuICAgICAgMTI3LFxuICAgICAgMjM0LFxuICAgICAgMTg3LFxuICAgICAgNixcbiAgICAgIDE1OCxcbiAgICAgIDc5LFxuICAgICAgMTk4LFxuICAgICAgMjE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1SRTFUTTVKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NzQ3OTQ0NDY6OThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMDAyMzI0Njk3OTE3Mjo5OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKTEcxNDBHRUpTTmxyVUdHQXNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImEwQnIrUXdrRWpGMGFzVDM3b3dvNWZxazRURmEyVVA2dER2Nnh1eUg0eUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiM3BpaEM3ZjFteDIvSWIyMmlxR0hub3BramhEbVdBNEgyMkt3RFhKcmFZc2tMWXRXcWZPUDFaYVljMVVLT1J4NEVxYSsrL1RuRlBLalplOThSRXBGQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN3BrTWdDRFkyL1RlOXJLaVUreEEwcWJ1YWNXUmo3dzU1MnBOaVNyTGRZWHBJR2FOczNlTzdTaWdnbTJZV2xvTVV4U3hETDZONng3UkVMQ01yeHpCZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2Nzc0Nzk0NDQ2Ojk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjEyMzkyOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUMvblwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQy9uLmpzb24iOiB7fQp9", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "joeprimeuc",
  packname: process.env.PACK_NAME || "joeprimeuc",
  botname : process.env.BOT_NAME  || "joeprimeuc",
  ownername:process.env.OWNER_NAME|| "joeprimeuc",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
