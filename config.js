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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_02_09_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMCxcbiAgICAgICAgODgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDksXG4gICAgICAgIDc0LFxuICAgICAgICA3MixcbiAgICAgICAgNDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDM4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODIsXG4gICAgICAgIDI2LFxuICAgICAgICAyNixcbiAgICAgICAgMTkyLFxuICAgICAgICA4NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDcxLFxuICAgICAgICA3NSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA4NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyLFxuICAgICAgICA5MixcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMixcbiAgICAgICAgNzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyLFxuICAgICAgICA1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDg0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjIsXG4gICAgICAgIDQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUG9rajU1K0VvalljQkNRcWVxU1RhOGNtNzFHZ0xtOExtZEp4ZVdDU3Nwaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTY4MDIzNzA0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1OEU0QURFRTE3NjkwMkM5QjU0QkJDMzU4QkI1MDZBQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjc3MTkzNzJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTY4MDIzNzA0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCNjZGMDE3Qzg4QkRDQzVGNUM1RjQ0QjE3RDlEQ0Q2MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjc3MTkzNzVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOUV2b1VGaURSZ2VRc1JGNGFNTE83d1wiLFxuICBcInBob25lSWRcIjogXCIwMmNmODJlOS1lMDg4LTRlZWQtYjg2Mi04NWMyNDM5MjIzMGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTAsXG4gICAgICA3MyxcbiAgICAgIDEwOCxcbiAgICAgIDk2LFxuICAgICAgMTk5LFxuICAgICAgNjUsXG4gICAgICAxOTAsXG4gICAgICAxOTQsXG4gICAgICAxMTIsXG4gICAgICAxMTIsXG4gICAgICAxMTcsXG4gICAgICAxLFxuICAgICAgMTQ3LFxuICAgICAgMTE0LFxuICAgICAgNTEsXG4gICAgICAxMzQsXG4gICAgICAxMzEsXG4gICAgICAyMDcsXG4gICAgICAxMTQsXG4gICAgICA2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAwLFxuICAgICAgMjAwLFxuICAgICAgMTIsXG4gICAgICAxMjAsXG4gICAgICAxMjAsXG4gICAgICAxMzAsXG4gICAgICAyMjQsXG4gICAgICA2OSxcbiAgICAgIDE4NyxcbiAgICAgIDIxMSxcbiAgICAgIDM5LFxuICAgICAgMTg2LFxuICAgICAgMjM0LFxuICAgICAgMTgyLFxuICAgICAgMTkyLFxuICAgICAgNjUsXG4gICAgICA1OCxcbiAgICAgIDUsXG4gICAgICAyOCxcbiAgICAgIDE5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFNENKUFJMSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2ODAyMzcwNDo4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM5NjgxMDEwMzQ4MjYzOjg2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlBBUktFUiBMRUVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPR3UwS0VIRU1UUDY3Y0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIml3OElra1M0ZFRhdk1VWkNWRko4YU53QmYxeFBYL2I3d3JXaWJnZEVZU1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRWdpVXNDMThMTUxERUxhek1rdU4xMUxFZkpTWUl1SHYvblNGaFVjNy9jOU5ZdTZNcjJFUGJRazBxdWkrTDFXeUFiRElKNEFBMlNFZUp3c0VCYXljRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYnk4YlN5TnFmejZLdGdsVEdpRWQwRDkxQUZuOTZkOG5TNVZBdGJucDh3SzJmQ1dMYm9YbkNIOGJUb1Y2dlAxOWhjRHFlM3hvNG5RSlYyZEZEZmVMQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2ODAyMzcwNDo4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc3MTkzNjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMeXVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUx5dS5qc29uIjogIntcImtleURhdGFcIjpcIjR4UGZLdzJocHI4a21LWEZYOFFNN3IzaWlna0NqbWRSais2QWxoVFlMRnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk0OTU3MDkxMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI3NzE5MzcxMTY0XCJ9Igp9"  // PUT your SESSION_ID 


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
