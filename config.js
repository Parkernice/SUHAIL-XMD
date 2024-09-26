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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_34_09_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEzLFxuICAgICAgICA5MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDczLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDcxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMixcbiAgICAgICAgMzAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk2LFxuICAgICAgICA2MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU1LFxuICAgICAgICA2MixcbiAgICAgICAgMTcyLFxuICAgICAgICA5MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgOCxcbiAgICAgICAgODEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIsXG4gICAgICAgIDQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICA5NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgODAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDksXG4gICAgICAgIDQxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNCxcbiAgICAgICAgODIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExLFxuICAgICAgICA4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDksXG4gICAgICAgIDYzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODEsXG4gICAgICAgIDkxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc1LFxuICAgICAgICA0OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDkxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDc2LFxuICAgICAgICA2NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUHV2MzBxb1htTGJPZ1hmZTlnODcrRE9kdE44N3d0ZmJKa2VvMWFEd2NKYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX2FGMlVhWnRRN2VCUDFTQjRUVXM0UVwiLFxuICBcInBob25lSWRcIjogXCI0OWU1MWI5Mi1lY2E2LTRjYTYtOGFkOC05M2FkMWNiNWI3YTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgMTAyLFxuICAgICAgMjI5LFxuICAgICAgMjU0LFxuICAgICAgMjQ0LFxuICAgICAgNjYsXG4gICAgICA5NCxcbiAgICAgIDIwMCxcbiAgICAgIDY3LFxuICAgICAgMTk2LFxuICAgICAgMTYzLFxuICAgICAgMjI0LFxuICAgICAgMjQzLFxuICAgICAgMjExLFxuICAgICAgOTUsXG4gICAgICAxODQsXG4gICAgICAyNyxcbiAgICAgIDEyOSxcbiAgICAgIDIyNCxcbiAgICAgIDM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNCxcbiAgICAgIDExNixcbiAgICAgIDI0OCxcbiAgICAgIDE0MyxcbiAgICAgIDE3NCxcbiAgICAgIDgxLFxuICAgICAgMjI2LFxuICAgICAgMjU1LFxuICAgICAgMTI2LFxuICAgICAgMjE4LFxuICAgICAgMjksXG4gICAgICA2MixcbiAgICAgIDQwLFxuICAgICAgNTMsXG4gICAgICA0NSxcbiAgICAgIDIwOCxcbiAgICAgIDI4LFxuICAgICAgMzEsXG4gICAgICAxOTksXG4gICAgICA3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFN0E0OEdBRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2ODAyMzcwNDo4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM5NjgxMDEwMzQ4MjYzOjgxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04rdTBLRUhFTWJ1MXJjR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaXc4SWtrUzRkVGF2TVVaQ1ZGSjhhTndCZjF4UFgvYjd3cldpYmdkRVlTWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6N0N0OUhkRDF2eFBBSHg0MTVnYUhXb3krcC9HMzk1Z1lveFkxb1B3cmRjQTlySHNhMXpINnlwTi9ZQ1NQNUp2YXFoRjZ0ZVFTellXR1pjSGx4ay9CUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJGbUVvU3dCcXlZU1dtRkJjbDlkdnRvZ0h5dCtEUytQUml5QTNSMXYrNmJhMysvNEhQOU9JYU9OMTQ0cXp5cStialRZMWllS3IzVzZGOVRGTjkwa2Vpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTY4MDIzNzA0OjgxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzM3OTI3NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUE3NlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQTc2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiSENQUCtoZ3Rnd0MyQ3U4ZmZrZ08yMEZmNmdSMTMxTGJMSW5QOHMxVmovWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQ5NTcwOTExLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
