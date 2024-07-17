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


global.devs = "923184474176" // Developer Contact
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_48_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2OSxcbiAgICAgICAgNTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAyNixcbiAgICAgICAgMTYwLFxuICAgICAgICA2MCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMixcbiAgICAgICAgODMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MixcbiAgICAgICAgNSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDk5LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDc5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU4LFxuICAgICAgICA5LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMixcbiAgICAgICAgMTU2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDc4LFxuICAgICAgICAzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQwLFxuICAgICAgICA0NixcbiAgICAgICAgNixcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDksXG4gICAgICAgIDYwLFxuICAgICAgICAwLFxuICAgICAgICA2NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZVDJxMnBqUWtaMjhkNXlLazhObHkvYTBjR1FWVjBDOEhWUU1qYUlHSVhJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJCUV9HOEJJWlJaaUF0dEF2bTdwR3lRXCIsXG4gIFwicGhvbmVJZFwiOiBcImI3ZTUxMzM3LTYzMjctNGMyYy05N2NiLTNkOTE4YjhhNzE2ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzAsXG4gICAgICAyNTMsXG4gICAgICAxNCxcbiAgICAgIDEyNyxcbiAgICAgIDIyMSxcbiAgICAgIDEyNCxcbiAgICAgIDkwLFxuICAgICAgOTMsXG4gICAgICA3OCxcbiAgICAgIDE4OSxcbiAgICAgIDExMCxcbiAgICAgIDE4MixcbiAgICAgIDIyNyxcbiAgICAgIDE5MSxcbiAgICAgIDE5MixcbiAgICAgIDEwNSxcbiAgICAgIDY0LFxuICAgICAgMTY4LFxuICAgICAgMjIwLFxuICAgICAgMTQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNSxcbiAgICAgIDI1MixcbiAgICAgIDIyNixcbiAgICAgIDE0MixcbiAgICAgIDEzNixcbiAgICAgIDEyMSxcbiAgICAgIDI3LFxuICAgICAgMjIwLFxuICAgICAgNTcsXG4gICAgICA5MyxcbiAgICAgIDIyOCxcbiAgICAgIDI0OSxcbiAgICAgIDEyMyxcbiAgICAgIDE3MixcbiAgICAgIDU4LFxuICAgICAgMTQ0LFxuICAgICAgNzAsXG4gICAgICA5NCxcbiAgICAgIDEyNixcbiAgICAgIDE0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3R1hUODcxUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2Nzc0Nzk0NDQ2OjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjAwMjMyNDY5NzkxNzI6NjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXZHMTQwR0VNQ0szclFHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhMEJyK1F3a0VqRjBhc1QzN293bzVmcWs0VEZhMlVQNnREdjZ4dXlINHlFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImFBTVNHZTlhdm9FMitHcEJIZkNFdFNSemdRaHFMaDVLaUI3RXUyaDNNZ3pKN3U0dWFBYmI2OXFyazV3bXNPVFZCajdwZmFOMVJGSG1lVGsvR2IyRkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm0wM2g5QUpCc3FtSGN6RWg3eitsTHZOSUl1eTVjY3daQmQrU01mTFJUVWxqZUNiZ1ErQ0JCYUJkRnJrK3QzYS8vVzZCY3JvRXBnZ1VWVmlNdU41cWpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc3NDc5NDQ0Njo2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyMDYwODQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDL0xcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUMvTC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
