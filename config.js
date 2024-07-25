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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_09_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzksXG4gICAgICAgIDgwLFxuICAgICAgICAyMixcbiAgICAgICAgMjUxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNSxcbiAgICAgICAgNyxcbiAgICAgICAgODIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICA2MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzksXG4gICAgICAgIDQwLFxuICAgICAgICA2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg5LFxuICAgICAgICA1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4NixcbiAgICAgICAgMjAzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICA0LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQxLFxuICAgICAgICA2NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICA4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQxLFxuICAgICAgICA4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzksXG4gICAgICAgIDI1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODEsXG4gICAgICAgIDU2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjExLFxuICAgICAgICA3NCxcbiAgICAgICAgOTksXG4gICAgICAgIDc2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgODYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDc0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDk2LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIktvZWpQUnNLTXEwSHlkNmVHUkg3cFUzSVBYTDRFSUNGWldTL09WZUgvOTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU2NzU5Nzc0MzQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzRDI5MENFQzVFNThDRDA0RDRBMUU3QkZGQjlFN0QwQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE5MDkzNDlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTY3NTk3NzQzNDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjMxMDAwRjFFMjE3NUM5Rjg5RDBDNDVENDM1ODQzRkJBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTkwOTM1MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJadEE3RS1QVlI2cXpFNjdzanFfZ3pnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjllMTNmYTBjLWExZDEtNDQ0YS05N2QyLTk1OTkwMDAxNTRlN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjcsXG4gICAgICA2OCxcbiAgICAgIDE5MyxcbiAgICAgIDI0MCxcbiAgICAgIDE4MCxcbiAgICAgIDgsXG4gICAgICAxNTYsXG4gICAgICAxODUsXG4gICAgICAzOCxcbiAgICAgIDUwLFxuICAgICAgMjUsXG4gICAgICAyMDgsXG4gICAgICAyMDIsXG4gICAgICA3OSxcbiAgICAgIDI0OCxcbiAgICAgIDE5MSxcbiAgICAgIDIzOCxcbiAgICAgIDIyOCxcbiAgICAgIDE4OCxcbiAgICAgIDg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNSxcbiAgICAgIDEwNixcbiAgICAgIDIxOCxcbiAgICAgIDEzNCxcbiAgICAgIDMyLFxuICAgICAgNCxcbiAgICAgIDE0NSxcbiAgICAgIDgwLFxuICAgICAgNjgsXG4gICAgICAzMSxcbiAgICAgIDExNCxcbiAgICAgIDEzMSxcbiAgICAgIDIyMSxcbiAgICAgIDIwNCxcbiAgICAgIDIyOSxcbiAgICAgIDI0MSxcbiAgICAgIDE2MyxcbiAgICAgIDI0MCxcbiAgICAgIDIxNyxcbiAgICAgIDI0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUSlFRNDRYVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzU5Nzc0MzQxOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzNzQwMDY1MTE0MTE4OTozQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlF1ZWxsYVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lUYnByVUNFTmVBaWJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibkZ3aXRsS011aW9zWmxSektVTmNHYXptUnE0R1dnL1NkdFFiOXE0S3dTOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXLzBZOG4ycHg1aGtka1FBTzduRStmb29RRHhBVWUyKzZVOHBLOTEvRjkyNlcwYTB3Nmh6ZFVtSkZXd0FSVnh6YUhwMGE5Yjd0S05ONTZFcGtpVVFBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSWXRsS0xyVDZIV2ZiWkFnWWJnV0kvU285L2dSQ2gvYk1QeS9SQVBwM05Sc3RFd3ZBYmViZ1lDRmJ4Qlk2SDU4dEh3RzlTVUZqdmtIMTQwMnN3SWtCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3NTk3NzQzNDE6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTkwOTM0MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBRZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFFnLmpzb24iOiAie1wia2V5RGF0YVwiOlwibGlFSU56Y042R1hCNlhpZ0lCWWtkdThNZDJETUlvd3FUZnhIUTZLMTlQST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NDg2NTQyMTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTkwOTM0NTU4N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
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
