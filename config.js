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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_04_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzksXG4gICAgICAgIDc2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDg0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICA1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMixcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDM2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA3MixcbiAgICAgICAgMTA2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDkxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MixcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDk0LFxuICAgICAgICA3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDgwLFxuICAgICAgICA4MixcbiAgICAgICAgMTExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc3LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNixcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDIsXG4gICAgICAgIDI5LFxuICAgICAgICAxODgsXG4gICAgICAgIDcxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTksXG4gICAgICAgIDM1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUzLFxuICAgICAgICAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM4LFxuICAgICAgICA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDUzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNixcbiAgICAgICAgMTg3LFxuICAgICAgICA4LFxuICAgICAgICA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDc2LFxuICAgICAgICA0MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5kY3hZTzBxUy8ySDgxNHJKZEM5NS9vMzhIOUxRYUM2ODhJdDN0aXQzeFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU2Nzc0Nzk0NDQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJENjAwRjc3MkVFQzYwNUExMkEzOTJFODQ3MjA4MzEzQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIxMjUwNjhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicGJFMjgzM0hTM0djemVGQVgteVV0d1wiLFxuICBcInBob25lSWRcIjogXCI0MGY1MDA0Ny1kMWI2LTQzZjYtYWNkMy0xN2FiOTBkM2I1M2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgMjEsXG4gICAgICA1MixcbiAgICAgIDE5NCxcbiAgICAgIDE2MyxcbiAgICAgIDI0MCxcbiAgICAgIDIwNyxcbiAgICAgIDQwLFxuICAgICAgMjI3LFxuICAgICAgMTExLFxuICAgICAgMjQ0LFxuICAgICAgMTAyLFxuICAgICAgMjMsXG4gICAgICAyMixcbiAgICAgIDIyOCxcbiAgICAgIDEwNixcbiAgICAgIDEwMixcbiAgICAgIDIxNyxcbiAgICAgIDEzLFxuICAgICAgMTM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1LFxuICAgICAgNjIsXG4gICAgICAxMjUsXG4gICAgICAxMDUsXG4gICAgICAxNjUsXG4gICAgICAyNTEsXG4gICAgICAxNjcsXG4gICAgICA2NixcbiAgICAgIDIyNCxcbiAgICAgIDIyNyxcbiAgICAgIDE3MSxcbiAgICAgIDIxOSxcbiAgICAgIDE4OCxcbiAgICAgIDQ4LFxuICAgICAgNTEsXG4gICAgICAxNzQsXG4gICAgICA0NyxcbiAgICAgIDE0NyxcbiAgICAgIDAsXG4gICAgICAxNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTDhZUlpTQ0VcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1Njc3NDc5NDQ0NjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjAwMjMyNDY5NzkxNzI6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKTEcxNDBHRUlPV2xyVUdHQXdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImEwQnIrUXdrRWpGMGFzVDM3b3dvNWZxazRURmEyVVA2dER2Nnh1eUg0eUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQSszVGVYSUc2ek1KMzhMbkNwa0hzT3JKa25qQy9OUlBOeituSGsyaXdBL1p3Mnl0aU91VDUwbm5BU1VLd2Jrbmwra2hSUkdlTHY4SWpKbXYrU2ZaQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQi9YbXpCL2Z1TVdzNlkvVEkwMXVZVHlDaENNK1JVSGlCTXdCY0c4QWVXcXRncncyM2orb0wxd1daV3FycDAySHljS0tBd1ltY3dLQzZ3QThQemMvaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2Nzc0Nzk0NDQ2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTI1MDYyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQy9uXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDL24uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
