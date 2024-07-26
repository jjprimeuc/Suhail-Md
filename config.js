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

  menu: process.env.MENU || "SUHAIL_04_29_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3LFxuICAgICAgICA1MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDgsXG4gICAgICAgIDEwLFxuICAgICAgICA5NixcbiAgICAgICAgMTE3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMixcbiAgICAgICAgNTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDY0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA1MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDM1LFxuICAgICAgICA4MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzksXG4gICAgICAgIDM2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDM0LFxuICAgICAgICA1OCxcbiAgICAgICAgMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDkxLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1LFxuICAgICAgICA0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDc4LFxuICAgICAgICA5NixcbiAgICAgICAgOTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA4MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDQwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQxLFxuICAgICAgICA2MixcbiAgICAgICAgNzgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA0NixcbiAgICAgICAgMjEyLFxuICAgICAgICA5NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5LFxuICAgICAgICA5MixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExLFxuICAgICAgICA3MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MixcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDksXG4gICAgICAgIDM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDY3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDkwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUxLFxuICAgICAgICA3MSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMVkvY0s4U1FDNEJOZmM5T0dVOWdSUmErbXRQV01EUTMzT0M5TnRpV1VYcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQWxhUzhDZGtSOS1MLTdTQ0YtX2htQVwiLFxuICBcInBob25lSWRcIjogXCI1ZmFkZjA1OS0yMjg2LTQwZDgtODIwNC1lNjhkZWI1OTkyYmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc5LFxuICAgICAgMjAsXG4gICAgICAxODcsXG4gICAgICAyNTQsXG4gICAgICA4NCxcbiAgICAgIDE4OSxcbiAgICAgIDIxMyxcbiAgICAgIDQ1LFxuICAgICAgNzAsXG4gICAgICAxMjksXG4gICAgICAyMDUsXG4gICAgICA0NSxcbiAgICAgIDE1LFxuICAgICAgMTA5LFxuICAgICAgMTg5LFxuICAgICAgMjA1LFxuICAgICAgOTQsXG4gICAgICA5NSxcbiAgICAgIDIwMyxcbiAgICAgIDE3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzksXG4gICAgICA1MCxcbiAgICAgIDIyMCxcbiAgICAgIDE3MyxcbiAgICAgIDIxOSxcbiAgICAgIDIxNyxcbiAgICAgIDYxLFxuICAgICAgMTczLFxuICAgICAgMjEzLFxuICAgICAgMjQ0LFxuICAgICAgMzEsXG4gICAgICAxNTUsXG4gICAgICAxMixcbiAgICAgIDIwNSxcbiAgICAgIDYxLFxuICAgICAgMTQsXG4gICAgICAzOSxcbiAgICAgIDEzMyxcbiAgICAgIDMwLFxuICAgICAgMTg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBTWUNXUUQ4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NzQ3OTQ0NDY6ODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMDAyMzI0Njk3OTE3Mjo4OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKTEcxNDBHRUlMTWpMVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImEwQnIrUXdrRWpGMGFzVDM3b3dvNWZxazRURmEyVVA2dER2Nnh1eUg0eUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUkxCNWs2N1ByWEhpbTQ5WkFvdUZ6all6M0RnemRzRWs0K3p1ZnErc0d6amNuVU9NdlNIeWlNWUhPSlRPa2M3MHROQWFsK0xYcVlpTm1hQlA0ZWV4Q1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaFoxeDZCVlhvdHRZK1FlOUJhdkVrbTRVYzZFNmhVUU9abmR0cjJLR2hMa25vYS80SlVOclg1QlpKeDhDK1J2eG5NWWxJbnVpQzY1dHBhRkFQVE5PRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2Nzc0Nzk0NDQ2Ojg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTk2ODEzMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUMvblwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQy9uLmpzb24iOiB7fQp9", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

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
