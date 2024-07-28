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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_01_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg1LFxuICAgICAgICA4NixcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxLFxuICAgICAgICA0LFxuICAgICAgICA2MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDksXG4gICAgICAgIDUwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI4LFxuICAgICAgICA2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDAsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNixcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDMyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDM1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3LFxuICAgICAgICA2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyLFxuICAgICAgICAxODQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA3MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDM2LFxuICAgICAgICAxODksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3LFxuICAgICAgICA3NSxcbiAgICAgICAgNixcbiAgICAgICAgOTAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NixcbiAgICAgICAgODYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgwLFxuICAgICAgICA3NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDUyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5MixcbiAgICAgICAgMTQsXG4gICAgICAgIDYxLFxuICAgICAgICA4MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgODcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2LFxuICAgICAgICA5NCxcbiAgICAgICAgODksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NixcbiAgICAgICAgMjEwLFxuICAgICAgICA1NixcbiAgICAgICAgMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjksXG4gICAgICAgIDM4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlFnZzI1NFh4UzMya1FpTzU0UHIxVEJpbWJ1SGRqdkxPNTFUdzBpYWV2d0U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpCNzJzTDhPU0VhaFlPYzVwNU84c3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGJkNjZkODYtOGY5Mi00YTQ1LTk5ZjEtZGJlYWQwMTA5ODk4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMixcbiAgICAgIDI5LFxuICAgICAgNjgsXG4gICAgICAyMTgsXG4gICAgICA3OSxcbiAgICAgIDk1LFxuICAgICAgMTExLFxuICAgICAgNzEsXG4gICAgICAyMzIsXG4gICAgICAyMjAsXG4gICAgICAxOTksXG4gICAgICAxNzYsXG4gICAgICAxNzMsXG4gICAgICAxODMsXG4gICAgICAxNzUsXG4gICAgICAxNjIsXG4gICAgICAzLFxuICAgICAgMTYwLFxuICAgICAgMixcbiAgICAgIDE3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTEsXG4gICAgICAyMDUsXG4gICAgICAyMTgsXG4gICAgICAyMTksXG4gICAgICAyNDMsXG4gICAgICA5MyxcbiAgICAgIDEzMyxcbiAgICAgIDczLFxuICAgICAgMTM1LFxuICAgICAgMjQzLFxuICAgICAgOTIsXG4gICAgICAxOTksXG4gICAgICAxMDAsXG4gICAgICA3NyxcbiAgICAgIDE4MixcbiAgICAgIDIxNCxcbiAgICAgIDEzNCxcbiAgICAgIDE0MSxcbiAgICAgIDE1NSxcbiAgICAgIDE0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYRDQ4Wks4SFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2Nzc0Nzk0NDQ2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMDAyMzI0Njk3OTE3MjoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pMRzE0MEdFTUxabDdVR0dBMGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYTBCcitRd2tFakYwYXNUMzdvd281ZnFrNFRGYTJVUDZ0RHY2eHV5SDR5RT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxankxajg3V1JJRFRDYnRvTWo3djlZOWpqQVk2TTdZWTJjRWdrUEtZSGxUSThlZnlaaHJ1SzJiOWJuVkpBUUllMlA5bUJQYW00UjRiTmhDTUw4SU9DZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjTW1lcjhOVUZzbnJDNmcyZ3BkYTRCUU9uNGhMaDV6eTRqNWZ0a2VrbWUweHd3MG1UcGVQWmhrU05PakV1VXlyV1JQT3BkVUMxMFNHNmZCTkhkSFFBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3NzQ3OTQ0NDY6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxNTAwODUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDL25cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUMvbi5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
