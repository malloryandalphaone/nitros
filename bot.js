const Discord = require('discord.js'); 
const client = new Discord.Client();

client.on('message', message => { 
	
	function rasteleSembol(uzunluk, semboller) {

var maske = '';

if (semboller.indexOf('a') > -1) maske += 'abcdefghijklmnopqrstuvwxyz';

if (semboller.indexOf('A') > -1) maske += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

if (semboller.indexOf('0') > -1) maske += '0123456789';


var sonuc = '';

 

for (var i = uzunluk; i > 0; --i) 

{

sonuc += maske[Math.floor(Math.random() * maske.length)];

}

return sonuc;

}

function spamla(){
	message.channel.send("https:/"+"/discord.gift/" + rasteleSembol(16,'0aA'));
}

	if (message.channel.id = "578676272612376607"){
		if(message.content.startsWith("!nitro ")){ // الامر الي تكتبه بالشات
		try{
		var veri = message.content.toString();
		var veriSn = veri.substring(10)
 		var saniye = parseInt(veriSn);
 		var saniye1 = saniye * 1000;
		if (saniye > 4){
		setInterval(spamla, saniye1);
		}
		
		else{
			message.reply("ما هو الجزء الثاني أو الثاني من النص");
		}
		}
		catch(err){
			message.channel.send("كان هناك خطأ فني!");
		}
		}
		}
 	


});
client.login(process.env.TOKEN);
