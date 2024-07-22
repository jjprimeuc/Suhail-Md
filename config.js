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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_59_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDc5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA2MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE4MixcbiAgICAgICAgODgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTcsXG4gICAgICAgIDM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMwLFxuICAgICAgICAzMixcbiAgICAgICAgMTM0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDc2LFxuICAgICAgICA1LFxuICAgICAgICA3MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTksXG4gICAgICAgIDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1MixcbiAgICAgICAgMSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMixcbiAgICAgICAgMTYxLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDM2LFxuICAgICAgICA0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEsXG4gICAgICAgIDkyLFxuICAgICAgICA5LFxuICAgICAgICA3MixcbiAgICAgICAgMjEzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTM5LFxuICAgICAgICA1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDczLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0NixcbiAgICAgICAgMjA2LFxuICAgICAgICA3NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAwLFxuICAgICAgICA5NixcbiAgICAgICAgNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNixcbiAgICAgICAgOTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkx1WlZ6ay91YWZRT29BRkJwOVRaa1FsSjVDSDc0V2c0c0FOMnFZbnB1R0U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlY4c0ZKUWY3UnlHSlFweFUwMVU1UXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTE5MGU1MTUtM2E0NS00YjUwLTg2MzgtZjZlYmNiMGZhMGQzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MCxcbiAgICAgIDUyLFxuICAgICAgMjQxLFxuICAgICAgNTksXG4gICAgICAxMjIsXG4gICAgICA5NixcbiAgICAgIDIwLFxuICAgICAgMjA4LFxuICAgICAgMTIyLFxuICAgICAgMTcsXG4gICAgICAxNTIsXG4gICAgICAzOSxcbiAgICAgIDcxLFxuICAgICAgNjEsXG4gICAgICAxMDEsXG4gICAgICAyMjAsXG4gICAgICA0MSxcbiAgICAgIDIyLFxuICAgICAgMTg3LFxuICAgICAgMTE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk3LFxuICAgICAgOTAsXG4gICAgICAyMzksXG4gICAgICAxOSxcbiAgICAgIDIwNixcbiAgICAgIDE1MyxcbiAgICAgIDEzMSxcbiAgICAgIDEzNSxcbiAgICAgIDIzLFxuICAgICAgNTcsXG4gICAgICAxMDcsXG4gICAgICAxOTAsXG4gICAgICAyMjMsXG4gICAgICAxMDksXG4gICAgICA1NCxcbiAgICAgIDM4LFxuICAgICAgMjA0LFxuICAgICAgMjE3LFxuICAgICAgMTc4LFxuICAgICAgMjE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktNRjdOR1c3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NzQ3OTQ0NDY6ODBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMDAyMzI0Njk3OTE3Mjo4MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKREcxNDBHRU1tRytMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImEwQnIrUXdrRWpGMGFzVDM3b3dvNWZxazRURmEyVVA2dER2Nnh1eUg0eUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMW5jWnlnR3prVkxSYnlCTWJuZTFLeHhGY3g3WlJWMVI0ZDNORVAyWktoVXE2dDVsQ2twcmROMlBnOG8yWnUvaTNxaHhUd0FGekJGNXlTK05VZ0FlQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieVNSN1RmRzdpajRJN1pWRVNSZ2hlYk83cGZmS1dkL1VNdG1jRFVtWFJmLzV1Z2lHRG5lcWM2cjRsVEI1U3hxaHhvc1A1UzJjcWh5MFFCREFMVjZrQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2Nzc0Nzk0NDQ2OjgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTYzMTU2NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUMvTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQy9MLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
