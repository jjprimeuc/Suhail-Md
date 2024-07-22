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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_37_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDUyLFxuICAgICAgICA2MixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1LFxuICAgICAgICA2NixcbiAgICAgICAgMjI3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDksXG4gICAgICAgIDI0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY3LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEsXG4gICAgICAgIDg1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDk1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTksXG4gICAgICAgIDM5LFxuICAgICAgICA0LFxuICAgICAgICAzLFxuICAgICAgICA3MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzksXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDgwLFxuICAgICAgICA3NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICA5NixcbiAgICAgICAgODgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxODksXG4gICAgICAgIDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMixcbiAgICAgICAgNzYsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzksXG4gICAgICAgIDM5LFxuICAgICAgICAwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMixcbiAgICAgICAgMTAwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDYwLFxuICAgICAgICAxODEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzksXG4gICAgICAgIDkzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2OSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMyxcbiAgICAgICAgODksXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDkwLFxuICAgICAgICAzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDU5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDgxLFxuICAgICAgICAxMixcbiAgICAgICAgNjYsXG4gICAgICAgIDU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJueGk1dlNULzArbGxiWXFXbGQ4dnVTVTc0QWRSeUxhdDFMN2FMelJYamFBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwNS1oVEkwVFRWNldIRXpHdTVzRlRRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjViZDQ5MWE0LTRmZjgtNDY2OS04NTc0LWRjMjBiMmU5ZTM3OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDcsXG4gICAgICAxODgsXG4gICAgICA0MixcbiAgICAgIDIyLFxuICAgICAgMTA0LFxuICAgICAgNjQsXG4gICAgICAyMDAsXG4gICAgICAxODksXG4gICAgICAxMzYsXG4gICAgICAyMDYsXG4gICAgICAyNDYsXG4gICAgICAxMDYsXG4gICAgICAyNyxcbiAgICAgIDgxLFxuICAgICAgMjI4LFxuICAgICAgMTk3LFxuICAgICAgMjMsXG4gICAgICAxMDcsXG4gICAgICA0MCxcbiAgICAgIDE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1LFxuICAgICAgMzIsXG4gICAgICAxMTIsXG4gICAgICAyNDMsXG4gICAgICAxMDUsXG4gICAgICA4MixcbiAgICAgIDE1OSxcbiAgICAgIDYsXG4gICAgICA4NixcbiAgICAgIDI0MyxcbiAgICAgIDEzNyxcbiAgICAgIDksXG4gICAgICA1MSxcbiAgICAgIDIzOCxcbiAgICAgIDE4OCxcbiAgICAgIDY4LFxuICAgICAgNTYsXG4gICAgICA0OCxcbiAgICAgIDEwLFxuICAgICAgMTMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVWV1JRVktTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NzQ3OTQ0NDY6NzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMDAyMzI0Njk3OTE3Mjo3N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJN0cxNDBHRUtmZzk3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImEwQnIrUXdrRWpGMGFzVDM3b3dvNWZxazRURmEyVVA2dER2Nnh1eUg0eUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib3l0VllYQUpSWEx5Q1Y5NzRKZVRqWElyMW1TbnpJamdvZ05XUC94RmZkblVac0FnMjNpN1AyKzhjb1dUM0ZkVGJxc0dZd3ZKRDVyVm40VS85N2dMQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTHI0ZjBYd3p4NHdMbFovTHRrUERGcDhSbG92MGp0bGd6UC80aDR6U1ZDeTllMTAvT3FzT20zMU0rakZIelFRakNrU0xobHI3TVBOWmxWNDFGOWNkQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2Nzc0Nzk0NDQ2Ojc3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTYyNjY2NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUMvTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQy9MLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
