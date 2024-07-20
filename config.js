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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_09_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUyLFxuICAgICAgICA3MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDY2LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY2LFxuICAgICAgICAzMixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDc5LFxuICAgICAgICAzMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5OSxcbiAgICAgICAgODcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDc1LFxuICAgICAgICA3NCxcbiAgICAgICAgODEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDgwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgzLFxuICAgICAgICA1OSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ5LFxuICAgICAgICA3OSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMSxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgODAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTczLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkE1amgzLzVSZGltMWVJejhXRkYvS3BvVDRkN08vZ3VweU1hMElwZmRodkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklVWG14YVJ4UnpxR3FTSVpaZTVNLWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWI1NzczMzYtNzAwOC00Nzk0LWFhYzMtODA3ZjNlZmE2ODdjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MSxcbiAgICAgIDUyLFxuICAgICAgMTI3LFxuICAgICAgMjAzLFxuICAgICAgMTksXG4gICAgICAyMjMsXG4gICAgICAyNixcbiAgICAgIDEsXG4gICAgICA2OSxcbiAgICAgIDE2OSxcbiAgICAgIDIzMSxcbiAgICAgIDEzNCxcbiAgICAgIDE3OSxcbiAgICAgIDEyNCxcbiAgICAgIDE1LFxuICAgICAgMTcsXG4gICAgICAwLFxuICAgICAgMjQ4LFxuICAgICAgMjI3LFxuICAgICAgNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDIsXG4gICAgICAxODMsXG4gICAgICA5LFxuICAgICAgNjYsXG4gICAgICAxNDgsXG4gICAgICAxNzksXG4gICAgICAxODAsXG4gICAgICAyMDgsXG4gICAgICA5MCxcbiAgICAgIDY3LFxuICAgICAgMTg2LFxuICAgICAgMTQsXG4gICAgICAxMzksXG4gICAgICA1NCxcbiAgICAgIDEwNixcbiAgICAgIDE2OCxcbiAgICAgIDM4LFxuICAgICAgMTg3LFxuICAgICAgNjQsXG4gICAgICA4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTWlExVkI5MVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2Nzc0Nzk0NDQ2OjczQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjAwMjMyNDY5NzkxNzI6NzNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXpHMTQwR0VKaU43YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhMEJyK1F3a0VqRjBhc1QzN293bzVmcWs0VEZhMlVQNnREdjZ4dXlINHlFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk9IeTZ3a2tuTmpCaklwVldEYmd5VUVtUUhLc2oxU09lcDloUlkwUzBkMzV1c0JxS0hBR0VkbmxaZVZaaVBoZUpNV0R4NEtTTkpvalArL05CRU14NUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInllYm9XN2dqbzJKeHJKMnRuQkJFaG83dmFxaG1wMWIxK0FPczVJcWVkUnR4THRRU0R2MDBlWmc5aWVaU3dmSVA1M1JxRVl2ZSs1MDIxNmh5YWxqVmhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc3NDc5NDQ0Njo3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0NTIxODcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDL0xcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUMvTC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
