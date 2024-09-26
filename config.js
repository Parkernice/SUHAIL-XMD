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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_07_09_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDksXG4gICAgICAgIDYyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDg1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc0LFxuICAgICAgICA4LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI5LFxuICAgICAgICA1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDY2LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUzLFxuICAgICAgICA0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNCxcbiAgICAgICAgNDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDMxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgODIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDU3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjksXG4gICAgICAgIDY2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMixcbiAgICAgICAgMTI3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjM4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk2LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNCxcbiAgICAgICAgODcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI5LFxuICAgICAgICA2OSxcbiAgICAgICAgODIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1LFxuICAgICAgICA1NixcbiAgICAgICAgODYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDksXG4gICAgICAgIDkxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDMwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk0LFxuICAgICAgICA1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAwLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWEJHRk5SeXJybFF2bjExamFVb25MejNvMkhXYklNMmpzZFZwdGU3anpRWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUFhwbkFnYkZRaVc3OE5aSENYMnNCQVwiLFxuICBcInBob25lSWRcIjogXCJmMGRkZWJjZS01NTU3LTQ3NDMtYTkzYS0zOGNjN2JiODg1NTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQyLFxuICAgICAgMjEsXG4gICAgICAyMDYsXG4gICAgICAyNTEsXG4gICAgICAxNDQsXG4gICAgICAxNTQsXG4gICAgICAxOTgsXG4gICAgICAxNjcsXG4gICAgICAyNDYsXG4gICAgICAxNTUsXG4gICAgICA5MCxcbiAgICAgIDU5LFxuICAgICAgMjE5LFxuICAgICAgMTgzLFxuICAgICAgMTE0LFxuICAgICAgMTQsXG4gICAgICAyNCxcbiAgICAgIDM4LFxuICAgICAgMjgsXG4gICAgICAyMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQsXG4gICAgICA0MSxcbiAgICAgIDMsXG4gICAgICAxOTgsXG4gICAgICAyMzAsXG4gICAgICAxNyxcbiAgICAgIDM1LFxuICAgICAgNDQsXG4gICAgICAxMTcsXG4gICAgICAxNzMsXG4gICAgICAyMTQsXG4gICAgICAyMjEsXG4gICAgICAxNDUsXG4gICAgICAyMjksXG4gICAgICA2NyxcbiAgICAgIDE2NyxcbiAgICAgIDI5LFxuICAgICAgMzksXG4gICAgICAxNzksXG4gICAgICA2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1M0dOQzYxQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2ODAyMzcwNDo4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM5NjgxMDEwMzQ4MjYzOjgwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04rdTBLRUhFTW5oMXJjR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaXc4SWtrUzRkVGF2TVVaQ1ZGSjhhTndCZjF4UFgvYjd3cldpYmdkRVlTWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwK0xQSVBTR0R4THFGVGpYejFhREpjUS9acHgyK09mbDMvWitMVldRQ1pjVzUxOGRLWXhIeGVZUlBtbkJBL3pST3NERTQydG5aRTZGWkR3M1ZHczFCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0MTl5SWtmcUxMdEVGQ0VTR2czVGQ2NXVVajNob1UrK3lFMDRZVHBuZVdKTW5WbDB2Qkk3TDFTam1JWncvRVBCNlhTekpQWWtodU1zd3pYcCtGaUpCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTY4MDIzNzA0OjgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzM3NzYxNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUE3NlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQTc2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiSENQUCtoZ3Rnd0MyQ3U4ZmZrZ08yMEZmNmdSMTMxTGJMSW5QOHMxVmovWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQ5NTcwOTExLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
