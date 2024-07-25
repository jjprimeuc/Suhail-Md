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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_49_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDUyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDUzLFxuICAgICAgICAxODEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NixcbiAgICAgICAgMjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgOTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICAxMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMixcbiAgICAgICAgMTcyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMixcbiAgICAgICAgMzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDg3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDc3LFxuICAgICAgICA4NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDkxLFxuICAgICAgICA1NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDkxLFxuICAgICAgICAwLFxuICAgICAgICAxOCxcbiAgICAgICAgNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDMxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NixcbiAgICAgICAgOTcsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTczLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjNSMjFEbTF5ZHNFckFVTkFBby9ncUdvMHRoK1hEK0F4UGRLU3g2UUphZDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImlDMV9KMWlHU3ZxbHVHWW9YQ2lpT1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjBhNDA5MmEtZWNiMi00OTk5LTgyMjMtOTExZGRlNGMwZGZjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMyxcbiAgICAgIDM2LFxuICAgICAgMjA3LFxuICAgICAgMTI5LFxuICAgICAgMTY4LFxuICAgICAgMjAzLFxuICAgICAgMjEzLFxuICAgICAgMjM1LFxuICAgICAgMTQwLFxuICAgICAgMTQxLFxuICAgICAgMjQzLFxuICAgICAgNzIsXG4gICAgICAyOSxcbiAgICAgIDE0OCxcbiAgICAgIDExNSxcbiAgICAgIDE3MyxcbiAgICAgIDkzLFxuICAgICAgMjEzLFxuICAgICAgMTAzLFxuICAgICAgMTc0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM1LFxuICAgICAgNDMsXG4gICAgICAyMDEsXG4gICAgICAyMjAsXG4gICAgICAxMTIsXG4gICAgICAxNzcsXG4gICAgICAxNTEsXG4gICAgICA4NixcbiAgICAgIDksXG4gICAgICAyMzgsXG4gICAgICAxODEsXG4gICAgICAxODIsXG4gICAgICA1MCxcbiAgICAgIDMxLFxuICAgICAgOTYsXG4gICAgICAxMzIsXG4gICAgICA1OCxcbiAgICAgIDUxLFxuICAgICAgMTI1LFxuICAgICAgMjQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxLUE0xU0ZQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NzQ3OTQ0NDY6ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMDAyMzI0Njk3OTE3Mjo4OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKTEcxNDBHRUwvMGlyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImEwQnIrUXdrRWpGMGFzVDM3b3dvNWZxazRURmEyVVA2dER2Nnh1eUg0eUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVUFwQmVDSVN0NUFqOVJVdnBNM290SklyaDN2RnVMeEtXYjZtL25DT3U5TndnajNiZzVXdE5aSnBCcWNYZ0t3YkRhSVVvZXYreFl5MjdOQ3pTUkF3RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicXVQVjVScy83VlBRYVQ1T0F5WTNORjBLV25qWFIrTG5FeW9wVDkvTVhQbU1jeHJtVENqYWdRTHlSQ1RkWUtMbkdtNVVxU3FHK3ErdWhURjZTNXJUaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2Nzc0Nzk0NDQ2Ojg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTk0MDU0NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUMvblwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQy9uLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
