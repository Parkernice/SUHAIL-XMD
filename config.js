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

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_19_09_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc2LFxuICAgICAgICA2MixcbiAgICAgICAgOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDcyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDU2LFxuICAgICAgICA5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICAyMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA5NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjUsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMixcbiAgICAgICAgMjI0LFxuICAgICAgICAzLFxuICAgICAgICAyNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMixcbiAgICAgICAgODYsXG4gICAgICAgIDUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDksXG4gICAgICAgIDc5LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjU1LFxuICAgICAgICA5NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDczLFxuICAgICAgICAxMDgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTIyLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyOCxcbiAgICAgICAgOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNixcbiAgICAgICAgNzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDksXG4gICAgICAgIDg3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA5OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODEsXG4gICAgICAgIDQzLFxuICAgICAgICA4NixcbiAgICAgICAgOTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0LFxuICAgICAgICA2OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NixcbiAgICAgICAgODQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExLFxuICAgICAgICAxMjYsXG4gICAgICAgIDYyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUnJFZGJEdkJMTDdIdlllWGZ2dW5vSjRMTjZNT0R5Q1pwbU0vM1UxQ3M1ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTY4MDIzNzA0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDREI5NDFCMERGN0JERjg5NjgwQTRFMTNCMDRBNUU0RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjcyMzc5NTJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ1lFdVB4MDRTUmE2OC1BMTd4NE9Gd1wiLFxuICBcInBob25lSWRcIjogXCIzMTU3ZDdjNS0wMDhkLTQzYjItOTNjYi1kYTI0YjIxZGRiNDVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgNjIsXG4gICAgICA3NCxcbiAgICAgIDY3LFxuICAgICAgMjUwLFxuICAgICAgMTI4LFxuICAgICAgMjExLFxuICAgICAgMTA2LFxuICAgICAgNjgsXG4gICAgICA2LFxuICAgICAgNjcsXG4gICAgICAxMDUsXG4gICAgICAyNDcsXG4gICAgICAyMDksXG4gICAgICA0LFxuICAgICAgMTY0LFxuICAgICAgODgsXG4gICAgICAyNDUsXG4gICAgICA0OSxcbiAgICAgIDIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MixcbiAgICAgIDIyNCxcbiAgICAgIDg3LFxuICAgICAgMTk2LFxuICAgICAgODEsXG4gICAgICA2MCxcbiAgICAgIDEzMyxcbiAgICAgIDE0MixcbiAgICAgIDIzMCxcbiAgICAgIDg0LFxuICAgICAgMjE1LFxuICAgICAgNjMsXG4gICAgICAyNTEsXG4gICAgICAxNzYsXG4gICAgICAxNjIsXG4gICAgICAxMixcbiAgICAgIDY3LFxuICAgICAgMTA0LFxuICAgICAgNDQsXG4gICAgICAyNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNTE0NEU4REtcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjgwMjM3MDQ6NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzOTY4MTAxMDM0ODI2Mzo3MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNONnUwS0VIRUxlZXpyY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIml3OElra1M0ZFRhdk1VWkNWRko4YU53QmYxeFBYL2I3d3JXaWJnZEVZU1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibmFrbUxJWklHejJndDJYVldEcjZTdVJLLzc4ZjlubHNSL3o0NDhSZGRjQ0U3dDhudHdjZmdmd1RIaUViRXRIdHo2MjR5VnVXOElPb0ZSNXBUWWQvQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaHRqblcvRkRhbEVvbUwrc1d1c3dnUHBtS3RPbXhqMXhOSEdQekxnOWZZdVVKeTg4ZWhkUXROVWFaSytHd1c1TFczYTBWUE50TXczeUZKRk94YVpyQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2ODAyMzcwNDo3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjcyMzc5NDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCVmxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJWbC5qc29uIjogIntcImtleURhdGFcIjpcIldKZjBtcElMd2dyZmkzTitXb3EveEtBRjBkS2c5YnR0Mm95MXY5Ymk1Mmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk0OTU3MDkwOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
