const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_10_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNixcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk0LFxuICAgICAgICA0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDkzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzksXG4gICAgICAgIDI5LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDgyLFxuICAgICAgICAzNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgODksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDkxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MixcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIzLFxuICAgICAgICA1NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDg3LFxuICAgICAgICA2NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYzLFxuICAgICAgICA1OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMixcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODAsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDI5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDM0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODMsXG4gICAgICAgIDYzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODksXG4gICAgICAgIDc1LFxuICAgICAgICAxMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDk1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3R2JTdVR3R3UwTU1XR3ZXLzhzeXRseWpNMk9GTWF0Y0g5Vk80ZTV5RnhrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfbUpsdWQ5MVNXS0xYNzF2Uks5cVlRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE5ZmI0ZjJmLTQzZDItNDQ2ZS1iMzQ0LTgyZjQ0ZjA1YjYzM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OSxcbiAgICAgIDY2LFxuICAgICAgOTksXG4gICAgICAyNSxcbiAgICAgIDc3LFxuICAgICAgMTQ2LFxuICAgICAgMTM2LFxuICAgICAgMjMxLFxuICAgICAgOTEsXG4gICAgICAyMDQsXG4gICAgICAxNDcsXG4gICAgICAxNjksXG4gICAgICAxMTgsXG4gICAgICAxNDMsXG4gICAgICA5NSxcbiAgICAgIDQ5LFxuICAgICAgMzcsXG4gICAgICA3MyxcbiAgICAgIDIwNCxcbiAgICAgIDIyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NCxcbiAgICAgIDQ4LFxuICAgICAgMTk0LFxuICAgICAgMTAwLFxuICAgICAgMTEzLFxuICAgICAgNCxcbiAgICAgIDExMyxcbiAgICAgIDEyNSxcbiAgICAgIDIyMSxcbiAgICAgIDE2MyxcbiAgICAgIDE1OSxcbiAgICAgIDI0OSxcbiAgICAgIDIxMSxcbiAgICAgIDE1OSxcbiAgICAgIDE2OSxcbiAgICAgIDg3LFxuICAgICAgMjE4LFxuICAgICAgNjEsXG4gICAgICAyMTQsXG4gICAgICAyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0WlFBVENSOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2Nzc0Nzk0NDQ2Ojc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjAwMjMyNDY5NzkxNzI6NzZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTNHMTQwR0VLYXc4clFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhMEJyK1F3a0VqRjBhc1QzN293bzVmcWs0VEZhMlVQNnREdjZ4dXlINHlFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZRK0xHTUdOanhNMnV5T0pWUE9IdUdVbGVCM1NIazJORVcwYm5VeDVObThyOWFYemJCUytwNFBqR1BPSUg2azlvbnlRaW5FdVhSUlM5TmlldzB5M0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImo4OGhMeHNOT1pwYlBGcXU0S0NBUnQwK29RUlJBYy9oSXQrWVJFWEtjZnZUOWwrcktZamMxcGJqQU1zN2FkdmhyanZHdjI3Q2Z0VXFCTmIxTEFleEJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc3NDc5NDQ0Njo3NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1Mzg2MDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDL0xcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUMvTC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
