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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_07_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDM0LFxuICAgICAgICA5NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NSxcbiAgICAgICAgODgsXG4gICAgICAgIDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NixcbiAgICAgICAgMzUsXG4gICAgICAgIDQxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDMsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMyxcbiAgICAgICAgNixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk0LFxuICAgICAgICA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA3NixcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAzLFxuICAgICAgICA0MCxcbiAgICAgICAgODUsXG4gICAgICAgIDQ2LFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTksXG4gICAgICAgIDEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDg1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDgxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOCxcbiAgICAgICAgMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjMsXG4gICAgICAgIDM0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYTFKallVemJZQmJzRGNJdTRxQXNCeGFnY0xxZzA4akZCdVRMTEErV3VxQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTmlKWU56R2lRRHVBdmNHblhJVkxBQVwiLFxuICBcInBob25lSWRcIjogXCI3MjdlMDkyNS03MGUzLTQxM2ItOGZlYy05YWZiNmJjMTQ3NzlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEyLFxuICAgICAgMTUyLFxuICAgICAgMzYsXG4gICAgICAzMSxcbiAgICAgIDIxLFxuICAgICAgMTc2LFxuICAgICAgMTkxLFxuICAgICAgNzYsXG4gICAgICA0NCxcbiAgICAgIDI2LFxuICAgICAgMTMwLFxuICAgICAgMTU2LFxuICAgICAgMTE0LFxuICAgICAgMTYwLFxuICAgICAgMTc4LFxuICAgICAgMjM1LFxuICAgICAgMjcsXG4gICAgICAyMzAsXG4gICAgICA4NCxcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OCxcbiAgICAgIDkxLFxuICAgICAgMjAwLFxuICAgICAgNDksXG4gICAgICAxMTgsXG4gICAgICAxNzksXG4gICAgICAxMixcbiAgICAgIDEyMSxcbiAgICAgIDQ4LFxuICAgICAgMTYwLFxuICAgICAgMTE0LFxuICAgICAgMjAzLFxuICAgICAgMTg4LFxuICAgICAgNjAsXG4gICAgICAxNTYsXG4gICAgICA5MSxcbiAgICAgIDE4MyxcbiAgICAgIDEsXG4gICAgICA4OSxcbiAgICAgIDE0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5V1JCRkpTQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2Nzc4NTU5NDM1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0MTg4NDg0ODYyMzYzNzoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pQRzE0MEdFUEhmc3JVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYTBCcitRd2tFakYwYXNUMzdvd281ZnFrNFRGYTJVUDZ0RHY2eHV5SDR5RT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoR2JXUjBXRlBUS2tidDEwbi9jdU1TY3V3cnZFWTlZeXk4OU5JaExzYjFDL0pkejBnUkhDYnRJa0xzTDFXY2ttV1NVN1VPb0hZbitoTUlzNm85cXZDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJid2RQN2NkRDBIbm5ZeGtRcFlwd0oyUk92cWRVN0h6ZWYzMGtsS2x2M3B2SW9uTG1tamYzYnJ5Rk5PSGJ3MW5FTkJOWHh2anFzaVZtUkVyZlljcGpqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3Nzg1NTk0MzU6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI1OTMyNjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFENHdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQ0dy5qc29uIjogIntcImtleURhdGFcIjpcImo0RXpndk96eVNlc3dHbVRLa2hGSE52bzQ5dUxkelpEaXFpQTB6Q1dLQkU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTYzOTMxMDA5OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNTkzMjc0MDUwXCJ9Igp9"  // PUT your SESSION_ID 


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
