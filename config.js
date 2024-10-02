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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_04_10_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTksXG4gICAgICAgIDMxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzMsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMixcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMixcbiAgICAgICAgMTc2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDc1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQxLFxuICAgICAgICA0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDM0LFxuICAgICAgICAxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc2LFxuICAgICAgICAzMyxcbiAgICAgICAgMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNixcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDYzLFxuICAgICAgICA0NixcbiAgICAgICAgMTQxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAwLFxuICAgICAgICA0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTDRTaEhiOWI5a1FvSjhYUnp5ZGRTQXB4QjYxUlZxbUpKZWZVbFdrSmQrdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTY4MDIzNzA0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDNjczNzZGQzJCRDMwMjEwRThDOUMwMTU0QjVBOEIzMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjc4ODE0OTBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRGpibE1GanVTcTJDcmZqaFU4Mjlad1wiLFxuICBcInBob25lSWRcIjogXCJkMTUzZmE2ZS01MzkxLTQ2MjMtYTBiNS0yNmZhYTRiMDQyNzdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTksXG4gICAgICA5MCxcbiAgICAgIDExOCxcbiAgICAgIDEzNyxcbiAgICAgIDE4OSxcbiAgICAgIDE2NSxcbiAgICAgIDE2OCxcbiAgICAgIDE2NCxcbiAgICAgIDE0OSxcbiAgICAgIDIwNixcbiAgICAgIDMxLFxuICAgICAgMjQ2LFxuICAgICAgOTIsXG4gICAgICAxMDIsXG4gICAgICAxMTAsXG4gICAgICA5NCxcbiAgICAgIDE0MSxcbiAgICAgIDg2LFxuICAgICAgMTkyLFxuICAgICAgMjEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MCxcbiAgICAgIDEwNyxcbiAgICAgIDE4MyxcbiAgICAgIDIzLFxuICAgICAgMTIyLFxuICAgICAgMjQxLFxuICAgICAgMTM2LFxuICAgICAgMTUwLFxuICAgICAgNDMsXG4gICAgICAyLFxuICAgICAgNDQsXG4gICAgICAxNzMsXG4gICAgICAxMjYsXG4gICAgICAxNjksXG4gICAgICA2MSxcbiAgICAgIDI0NixcbiAgICAgIDIxOSxcbiAgICAgIDkzLFxuICAgICAgMTY5LFxuICAgICAgMTM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxXWEFYUTY3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTY4MDIzNzA0Ojg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzk2ODEwMTAzNDgyNjM6ODlAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiUEFSS0VSIExFRVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09LdTBLRUhFSWZDOWJjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaXc4SWtrUzRkVGF2TVVaQ1ZGSjhhTndCZjF4UFgvYjd3cldpYmdkRVlTWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWMW5yTWx6MXFOS1JMQ1VCbzRETFlvWXRVeXBXdHhrUkxMTUl0WmhpdGRYTHVuaCsrQ1BRakFCdVh3ZXJDaDd6eUZkME8vOWFBUExEVjd0VU9mYXhCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3WVlyckZ0QTdnSUlPL3hFQjBIWldSL0FXOGlkb2Fub25mTE9WTkY1eFdmTEk5NjlaU21ha0FHckZRZHRxRXg3aFdXQVZKSkEzcTF6TG9TM0lkbVJqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTY4MDIzNzA0Ojg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzg4MTQ4MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtzQ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS3NDLmpzb24iOiAie1wia2V5RGF0YVwiOlwibUpMRVNQc3JNeHNGYnczQWltNzIyMXV5SGNDZGdzVGVITitXNEJwa3JCUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQ5NTcwOTE0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjc4ODE0ODcxMTRcIn0iCn0="  // PUT your SESSION_ID 


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
