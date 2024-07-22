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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_45_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzksXG4gICAgICAgIDg4LFxuICAgICAgICA2LFxuICAgICAgICAyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDk3LFxuICAgICAgICA3NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDM5LFxuICAgICAgICA5MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDg2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDgxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzAsXG4gICAgICAgIDczLFxuICAgICAgICA4NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDc3LFxuICAgICAgICA2NixcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA2MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDcsXG4gICAgICAgIDI2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjExLFxuICAgICAgICAzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDM5LFxuICAgICAgICAwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgODUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MixcbiAgICAgICAgMTg5LFxuICAgICAgICAzOSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDksXG4gICAgICAgIDcxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzMixcbiAgICAgICAgMjUzLFxuICAgICAgICAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDU3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY5LFxuICAgICAgICA4OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDYwLFxuICAgICAgICA5MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiT2NuMFpNNmFPQ3Q4ZFF4OHRXOGJHVHg5RC83Z3FDelVERDFNYWN3YnhsOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX2VZN2FKcFpRVk8wdFlJbnBDc0U2Z1wiLFxuICBcInBob25lSWRcIjogXCI5OWI4ZWRiYS1iODY4LTQxYzYtYTc1Yi1kMDBlOTJmMWE2ZTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI5LFxuICAgICAgMTk1LFxuICAgICAgMjQxLFxuICAgICAgOTksXG4gICAgICA5MCxcbiAgICAgIDE4MCxcbiAgICAgIDIzNSxcbiAgICAgIDYzLFxuICAgICAgNDIsXG4gICAgICA2NixcbiAgICAgIDI0NCxcbiAgICAgIDMyLFxuICAgICAgMTczLFxuICAgICAgMTUxLFxuICAgICAgNDIsXG4gICAgICA2NixcbiAgICAgIDM1LFxuICAgICAgMTAxLFxuICAgICAgMjMxLFxuICAgICAgNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAwLFxuICAgICAgMjI3LFxuICAgICAgMTQwLFxuICAgICAgMTEyLFxuICAgICAgMTcxLFxuICAgICAgMTkzLFxuICAgICAgMTk5LFxuICAgICAgMTk1LFxuICAgICAgMjE4LFxuICAgICAgNzMsXG4gICAgICAxMTYsXG4gICAgICAzNixcbiAgICAgIDQsXG4gICAgICA2OCxcbiAgICAgIDExOSxcbiAgICAgIDE5NCxcbiAgICAgIDIwNixcbiAgICAgIDEzOSxcbiAgICAgIDEwNyxcbiAgICAgIDE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZLTDVTSzVXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NzQ3OTQ0NDY6NzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMDAyMzI0Njk3OTE3Mjo3OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJL0cxNDBHRUlXQStMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImEwQnIrUXdrRWpGMGFzVDM3b3dvNWZxazRURmEyVVA2dER2Nnh1eUg0eUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZWMzTlR3emIrZFhUaGNoc1BiY0FZK2JsVWNiUi9IdVl1K1l5b21pTnpLTmY5eVdTbkU3QnBBWENrSnVpL0JIYVNGVmdWeFNnVnZYVWs2a1g1akZiQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL3VidmJaNTV0VmN1RlNDNEN4V2VLYzRYQUJxeXdTQkQxeHVoNEM2b2kydE5UcVNSbHh6dGVyS0txOXo4cEd4cUdRNTc3K1JFMkFpYWV6S2VWMC8wZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2Nzc0Nzk0NDQ2Ojc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTYzMDcyOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUMvTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQy9MLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
