const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349168023704";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_28_10_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQxLFxuICAgICAgICAzLFxuICAgICAgICA0NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMixcbiAgICAgICAgNzEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY5LFxuICAgICAgICA1NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMxLFxuICAgICAgICA2NixcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDk5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM3LFxuICAgICAgICA1NixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTksXG4gICAgICAgIDExNyxcbiAgICAgICAgODYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjU0LFxuICAgICAgICA5LFxuICAgICAgICAzNixcbiAgICAgICAgMTI4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MixcbiAgICAgICAgODgsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgODMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICAxNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkzLFxuICAgICAgICA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDMzLFxuICAgICAgICA3NixcbiAgICAgICAgMTQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCS3JBSE95OUlEYlpTanIwYnhndWRxTXY5ak5yMFQxZEVmWHEvYzlBSUhBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJXTWoyWF81Z1NDaW9CRkRUZkNFckp3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjMzYWMwNDZmLWVhYWYtNDcwZC1iNjQ5LWFiMDdiZmJiMDI5OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTksXG4gICAgICAxMyxcbiAgICAgIDI0NSxcbiAgICAgIDE0MSxcbiAgICAgIDE5MCxcbiAgICAgIDE4MyxcbiAgICAgIDE4NCxcbiAgICAgIDksXG4gICAgICAyMjIsXG4gICAgICA3LFxuICAgICAgMjE4LFxuICAgICAgMTcxLFxuICAgICAgNyxcbiAgICAgIDcxLFxuICAgICAgNDQsXG4gICAgICAyMzgsXG4gICAgICA0MSxcbiAgICAgIDI1MSxcbiAgICAgIDIwLFxuICAgICAgMjIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOCxcbiAgICAgIDE3MSxcbiAgICAgIDE4OSxcbiAgICAgIDcsXG4gICAgICA3MSxcbiAgICAgIDIzNSxcbiAgICAgIDEyNSxcbiAgICAgIDMsXG4gICAgICAyMDMsXG4gICAgICAxNTMsXG4gICAgICAxODIsXG4gICAgICAxMyxcbiAgICAgIDE0MCxcbiAgICAgIDAsXG4gICAgICAyMjAsXG4gICAgICAyMjAsXG4gICAgICAxNTEsXG4gICAgICAyNDEsXG4gICAgICAyMDksXG4gICAgICAyMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOTZWOTJLN1RcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjgwMjM3MDQ6ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzOTY4MTAxMDM0ODI2Mzo4OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPR3UwS0VIRUpISjdyY0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIml3OElra1M0ZFRhdk1VWkNWRko4YU53QmYxeFBYL2I3d3JXaWJnZEVZU1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaTJWNjdrUVVHM1ZuUjJMUlZ2eDI5WVZ4YldQOTBEMDl5OVhuWnZ5eFlBMFIrTnZUcVFHZVVQT0JzWHZFMVY2TDJQWlV4S1JmcG15OXNOTXpsTlhYQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNTNtSUs5SE4xS0VEOEhVcHB2bnI1UWxleHVGVzNvUnk2T2pUcnkydGNGQ2ZwcGE0NE9FUk1HMmZnMmhqTHVsaUg0ZkNXdDdOaGUvQWVEMjdxK2E0Z1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2ODAyMzcwNDo4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc3Njc3MDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMeXZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUx5di5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Parkerlee",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
