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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_07_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxODMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODksXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAxLFxuICAgICAgICA2MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDMsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NixcbiAgICAgICAgOTAsXG4gICAgICAgIDk1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMixcbiAgICAgICAgODMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTksXG4gICAgICAgIDkzLFxuICAgICAgICAzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjA1LFxuICAgICAgICA2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3LFxuICAgICAgICA0NixcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NyxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDYzLFxuICAgICAgICA3NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA4MixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMxLFxuICAgICAgICAxODcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQwLFxuICAgICAgICA4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1LFxuICAgICAgICA0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDUwLFxuICAgICAgICA0NCxcbiAgICAgICAgODksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NixcbiAgICAgICAgNDQsXG4gICAgICAgIDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MyxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNixcbiAgICAgICAgODcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMixcbiAgICAgICAgMTExLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgOTIsXG4gICAgICAgIDUwLFxuICAgICAgICA2NixcbiAgICAgICAgODYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjNpdzY0UXFaanR4Wlk2Z2R0YU5LcEN3d0NjTHNsNDNZTEJWTldlSFN4VUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU2Nzc0Nzk0NDQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDMzA1RkNGN0QzQTkzQ0JBMTY0OUY5RTYzNUZGMDczRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIyNDc2MTVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieC0wdV8tYmZTS2V4M0hQYjlkN3Mwd1wiLFxuICBcInBob25lSWRcIjogXCI0YTJlNzc5Mi1hNjE3LTQzMzgtYTgxYi0zZWY1ZWVjODYwZGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzQsXG4gICAgICAyMDAsXG4gICAgICA0MSxcbiAgICAgIDIyMyxcbiAgICAgIDEzOCxcbiAgICAgIDE5NixcbiAgICAgIDE3OCxcbiAgICAgIDE5NCxcbiAgICAgIDk5LFxuICAgICAgMjAwLFxuICAgICAgMTA4LFxuICAgICAgODksXG4gICAgICAxNzcsXG4gICAgICAxMzMsXG4gICAgICAyMDMsXG4gICAgICA1NyxcbiAgICAgIDI0NixcbiAgICAgIDEzNCxcbiAgICAgIDExOCxcbiAgICAgIDMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwLFxuICAgICAgNDAsXG4gICAgICAxMzEsXG4gICAgICAyMjIsXG4gICAgICA3MSxcbiAgICAgIDEzNSxcbiAgICAgIDU5LFxuICAgICAgMTc4LFxuICAgICAgMTM5LFxuICAgICAgMTg3LFxuICAgICAgNDIsXG4gICAgICAyMDMsXG4gICAgICA4MCxcbiAgICAgIDIwMixcbiAgICAgIDI1NSxcbiAgICAgIDE3NixcbiAgICAgIDI1MixcbiAgICAgIDEzNSxcbiAgICAgIDI4LFxuICAgICAgODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU000MlExRkJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1Njc3NDc5NDQ0Njo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjAwMjMyNDY5NzkxNzI6NkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLimIbgv5DgvLXgvb3gvIbgvJLinaTigI3wn5SlIEpvZSBQcmltZeKdpOKAjfCflKUg4LyS4LyG4L+Q4Ly14L294piGXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkxHMTQwR0VMTFRuYlVHR0JFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhMEJyK1F3a0VqRjBhc1QzN293bzVmcWs0VEZhMlVQNnREdjZ4dXlINHlFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9GWUxFQVVpZ0x0M01NS2N6b0ZiUEVveWQ1S3hEY3RjaHVnem1BU0lQNWJPYmIwMWkzR29icEdGL244cEg2ZmV1NjhZVlVocFNvdDhiUFlRZUUvMENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJoSUt2Y2xydEpXbU9CbFkweXdCdGZZZUkyVDJ4STdiRzRYM29JamRLdGtxemlxb3VSY2FnY2tuMUlwWlllamlja1JyWlZ0dzl5T0Uvb0Ezb1JsdmpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc3NDc5NDQ0Njo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjI0NzYwNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUMvblwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQy9uLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "available", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

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
