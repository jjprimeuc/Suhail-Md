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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_04_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNDksXG4gICAgICAgIDExNixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTksXG4gICAgICAgIDUwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTksXG4gICAgICAgIDk3LFxuICAgICAgICAyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDg5LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDk0LFxuICAgICAgICA3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNixcbiAgICAgICAgNDMsXG4gICAgICAgIDI1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDUxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDk0LFxuICAgICAgICA0MixcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDczLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDMwLFxuICAgICAgICA2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgODUsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDUyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJyNzJ6anNFbmNTR2dCQlk2eTFjci9XNWh2NFFZdjJ5aFRsSVMxUy82ZE1FPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQM29qZ1lkV1NXYXBFajFMdFlzbDNnXCIsXG4gIFwicGhvbmVJZFwiOiBcImI4NzEwYWQyLTEwYmEtNGVkZS05ZWY5LWFmNjNkZTIyZjZkNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MSxcbiAgICAgIDU3LFxuICAgICAgMjE0LFxuICAgICAgNTQsXG4gICAgICAyMTMsXG4gICAgICAyMjQsXG4gICAgICAyMTEsXG4gICAgICAyMTAsXG4gICAgICAxOTksXG4gICAgICAxNzMsXG4gICAgICAyMzUsXG4gICAgICAxLFxuICAgICAgMjUwLFxuICAgICAgOSxcbiAgICAgIDEzOCxcbiAgICAgIDIwNCxcbiAgICAgIDM4LFxuICAgICAgMjE3LFxuICAgICAgMTc4LFxuICAgICAgMTkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI2LFxuICAgICAgMTA0LFxuICAgICAgMTA1LFxuICAgICAgNTcsXG4gICAgICAzMCxcbiAgICAgIDE0MCxcbiAgICAgIDIwMSxcbiAgICAgIDQ5LFxuICAgICAgMjQwLFxuICAgICAgMTEyLFxuICAgICAgMzMsXG4gICAgICAxODEsXG4gICAgICAwLFxuICAgICAgOTcsXG4gICAgICAxODgsXG4gICAgICAxNTgsXG4gICAgICAyMDcsXG4gICAgICAxNjMsXG4gICAgICA3NyxcbiAgICAgIDIzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKUEdaQkUxQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2Nzc0Nzk0NDQ2OjcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjAwMjMyNDY5NzkxNzI6NzFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXZHMTQwR0VJVFk2TFFHR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhMEJyK1F3a0VqRjBhc1QzN293bzVmcWs0VEZhMlVQNnREdjZ4dXlINHlFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNCUkhYamdHVHhaNXd4SzhpRktSY0FXVE92WmdBUi96b0pXSGhKY3VJSSs0bm1MZFJ4WEt0VVhLRXlSTUt3TjFoTVZCOVJPUVFOcDNnUXowckhrYUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIllMY09tTHYyZ0NoR1J5UkJlcHlMV2R5SXBqRHlTakc3U1JDNTR1dFdKRlA5SjNjZ2VUS2VLQXliVmpDQzREUEFHWWNzYVRTT2haQ2VPSFZQenlxS0F3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc3NDc5NDQ0Njo3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzNzk4NDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDL0xcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUMvTC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
