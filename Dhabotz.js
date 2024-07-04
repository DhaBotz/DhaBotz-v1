const fs = require('fs')
const chalk = require('chalk')
const version = require("@whiskeysockets/baileys/package.json").version 
global.namasc = "Dha - Botz"
global.versisc = "V1"
global.baileysVersion = `Baileys version ${version}`
global.TypeBaileys = `whiskeysockets`
global.ytname = "Dhabotz" //ur yt chanel name
global.socialm = "www.instagram.com/yudhaperdana._" //ur github or insta name
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""
global.tekspushkonv4 = ""
global.tekspushkonv5 = ""
global.wm = '>Dha Botz';
global.location = "Jakarta Selatan, Indonesia " //ur location
global.gr = 'https://chat.whatsapp.com/CFLZ1KdZJepKp97icGKnIa'
global.ig = 'yudhaperdana._' // ubah aja
global.email = 'muzanofficial17@gmail.com' //serah
global.region = 'indonesia' // serah
global.ownername = 'DHA - OFFICIAL' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.domain = '-' // Isi Domain Lu
global.apikey2 = 'ptla_t3j8XEl1Yz7xYKcVwO5dGDUuVqWmGmio0NEQ8ErMTgP' // Isi Apikey Plta Lu
global.capikey2 = 'ptlc_1dpDhY0FuUFmrYEWyJzc8p0DlAtoDVBAC2ZKLmQBrE4' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.owner = ['6282373608217'] // ubah aja pake nomor lu
global.muzan = "`"
global.botname = 'Dha Botz v1' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'Dha Botz v1' // ubah aja ini nama sticker
global.author = 'Dha Botz' // ubah aja ini nama sticker
global.prefa = [' ','!','.',',','🐤','🗿']
global.sessionName = 'Session' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = true
global.wlcmm = []
global.anticall = false
global.antiviewonce = true 
global.autodownload = true
global.antiswview = false
global.autobio = true
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})