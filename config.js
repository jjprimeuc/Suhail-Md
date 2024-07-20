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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_53_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NSxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM5LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MixcbiAgICAgICAgNTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDg0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDc1LFxuICAgICAgICA1NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMixcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzksXG4gICAgICAgIDI2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODksXG4gICAgICAgIDI1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MSxcbiAgICAgICAgODUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDksXG4gICAgICAgIDUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgODYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc3LFxuICAgICAgICAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTcsXG4gICAgICAgIDU5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMixcbiAgICAgICAgMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjksXG4gICAgICAgIDgzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDk1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDczLFxuICAgICAgICA1OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDY2LFxuICAgICAgICA3OCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjksXG4gICAgICAgIDIxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlM4RTl6SDNhWnh5V3A1c1AwdEV4bENnc2V3UmpsS0U5VnphYmVCeHNVeWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImw0QWVlN1VXVDktZ0JkcjYtZUt6U1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDhiNjAzYjUtYTRkNy00YzJjLWI0YTEtYzIxY2VmNjk4MTc4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMixcbiAgICAgIDkwLFxuICAgICAgMjEsXG4gICAgICAxNTAsXG4gICAgICAxMTAsXG4gICAgICA0MCxcbiAgICAgIDczLFxuICAgICAgMTc1LFxuICAgICAgNjYsXG4gICAgICAxNjIsXG4gICAgICAxODMsXG4gICAgICAyMzIsXG4gICAgICAxNTAsXG4gICAgICAyMixcbiAgICAgIDM5LFxuICAgICAgMTgyLFxuICAgICAgNTYsXG4gICAgICAxMDUsXG4gICAgICAxMTMsXG4gICAgICAxMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY1LFxuICAgICAgNzMsXG4gICAgICAyNDUsXG4gICAgICAxNTMsXG4gICAgICAyMTMsXG4gICAgICAyMDMsXG4gICAgICA1OCxcbiAgICAgIDk5LFxuICAgICAgMTkxLFxuICAgICAgMTYyLFxuICAgICAgMTIyLFxuICAgICAgMjQwLFxuICAgICAgODEsXG4gICAgICAxNixcbiAgICAgIDk0LFxuICAgICAgMTE4LFxuICAgICAgMjI0LFxuICAgICAgMjU1LFxuICAgICAgMjM5LFxuICAgICAgMTY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJRQkgxWERIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NzQ3OTQ0NDY6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMDAyMzI0Njk3OTE3Mjo3NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJM0cxNDBHRUt5UDhMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImEwQnIrUXdrRWpGMGFzVDM3b3dvNWZxazRURmEyVVA2dER2Nnh1eUg0eUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQWFKZFhMeFZmUHY1bHFlZ29MMVR6ZzcvTFNsSFVndkw3Yyt0c1ZpQS9RL3hZRUJxcTRwMDBCNlA4ekFJd2w2bE9aVk56SWNiaWlPNW94OEltOUMxQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidkJ3cXBCcUxyT3lxTHYzZ2xhbG5TQkpmNmpZa09XSmhocENFNnIwVDVYVDNFWU5pUFhwS1MzdGtqVHNTaFRqeHpabjIxWGovNFFVak1XMnVJbjlkQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2Nzc0Nzk0NDQ2Ojc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTUwMTYxNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUMvTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQy9MLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
