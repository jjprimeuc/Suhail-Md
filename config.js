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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_43_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDkzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA0MixcbiAgICAgICAgMTEyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3MCxcbiAgICAgICAgODMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1LFxuICAgICAgICAxODYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMixcbiAgICAgICAgMTQzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA1MixcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMixcbiAgICAgICAgMTIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzksXG4gICAgICAgIDc5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc2LFxuICAgICAgICA2MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3LFxuICAgICAgICA2MixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDM2LFxuICAgICAgICA4MixcbiAgICAgICAgODIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgODEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDk3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSVpBN1c5Zk9ZaFIvRFVNdzlPcVZDSXNpenN0c0hsRXFZQU8yTnpGcy9KWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNFUwMHJuSkJSaFN0eGNUVXp6Qm5BZ1wiLFxuICBcInBob25lSWRcIjogXCJlZWYwZGJlZi03YjI1LTQ2ZGItYjhmOC1jYjBiNDc2N2Q0YzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk0LFxuICAgICAgNjcsXG4gICAgICAxNjQsXG4gICAgICAyMjQsXG4gICAgICAxMTksXG4gICAgICAxNTksXG4gICAgICAxNixcbiAgICAgIDI0NCxcbiAgICAgIDE1OCxcbiAgICAgIDI0MCxcbiAgICAgIDc2LFxuICAgICAgMTkxLFxuICAgICAgNjIsXG4gICAgICAyMjAsXG4gICAgICAxMzcsXG4gICAgICAxOTcsXG4gICAgICA0OCxcbiAgICAgIDY5LFxuICAgICAgMTA4LFxuICAgICAgMTE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU5LFxuICAgICAgMTM4LFxuICAgICAgMjI1LFxuICAgICAgNDAsXG4gICAgICA5MCxcbiAgICAgIDE2NSxcbiAgICAgIDU1LFxuICAgICAgNTgsXG4gICAgICAyMTQsXG4gICAgICA5NCxcbiAgICAgIDIyOSxcbiAgICAgIDIzOSxcbiAgICAgIDY2LFxuICAgICAgMTU5LFxuICAgICAgNzQsXG4gICAgICA3LFxuICAgICAgNjIsXG4gICAgICAxNDQsXG4gICAgICA4NSxcbiAgICAgIDQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFOTDc0VFdEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NTk3NzQzNDE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlF1ZWxsYS5cIixcbiAgICBcImxpZFwiOiBcIjEzNzQwMDY1MTE0MTE4OToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xEV3E1a0dFTzJoL2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibU1pMjdHOGVpWEpJZUJpdVdlbjVKakpSM1FoM0ZyYTBYdTgvcGkwelJtQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiQnYyWENJVVdCaWZPbWs1R2NGRStHbXRMZ1k3ejJXN3NRNnE3em5LOXcvOWQ0cGpXMkE3RTVuQm9TdzJUWUxnTlR1NjFzYmVCdGwvejVaY2dTVTVDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtNUtQZnA5NzJ4UTRTTm1JYk1GbjJxZkN5ekZXWmduTDZBL2NTVzZ4V0FQSnpLbUh3czc4QVZseTNYU2lxRHR6VmdjMXF0dXJuVldwTE1UNGFBUk9oQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3NTk3NzQzNDE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNzE2OTc4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS0NzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLQ3MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJOY1Y3TzFzK3Q2dHlZMU1OMTRCMld4UE9RNmlSMWlvUWFWTkxiRzllVGFNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NjM3NTcxMDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTcxNjk3OTY0MVwifSIKfQ=="  // PUT your SESSION_ID 


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
