/*
* códigos desenvolvido por: 
* © jpzinh 👑 
* deixa os devidos créditos ai mossu
*/
const { default: makeWASocket, useMultiFileAuthState, fetchLatestBaileysVersion, Browsers, DisconnectReason,  jidNormalizedUser , lastDisconnect } = require("@rexxhayanasi/elaina-baileys")

const colors = require("colors");
const P = require("pino");
const readline = require("readline");

const { banner2, banner3, Boom, data, hora, fs, axios, exec, Config2} = require("./consts");
const { prefix } = Config2;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(text) {
  return new Promise(resolve => {
    rl.question(text, answer => {
      rl.close(); 
      resolve(answer);
    });
  });
}

async function Bot() {
const pastaAuth = "./DADOS/QR-CODE";
const { state, saveCreds } = await useMultiFileAuthState(pastaAuth);
const { version, isLatest} = await fetchLatestBaileysVersion();

const conn = makeWASocket({
version,
auth: state,
logger: P({ level: "silent" }),
printQRInTerminal: true,
markOnlineOnConnect: false,
browser: Browsers.ubuntu("Safari"),
syncFullHistory: true,
});

if(conn.authState?.creds?.registered) {
console.log(colors.green.bold("\n[✓] Sessão ativa detectada! Conectando...\n"));
} else {
console.log(colors.blue.bold("\nNenhuma sessão encontrada. Vamos conectar seu número.\n\n"));
try {
let number = await question(
colors.red.bold("Digite seu número (ex: 5593999999999): ")
);

number = number.replace(/\D/g, "");
console.log(colors.magenta.bold("\nGerando código de pareamento...\n"));
const code = await conn.requestPairingCode(number, "JPZINHKK")
console.log(colors.red(`📲 Seu código de pareamento:\n\n   ${colors.magenta.bold(code)}\n`));
rl.close();
} catch (err) {
console.log(colors.red("\n❌ Erro ao gerar código de pareamento:\n"), err);
}
}

conn.ev.process(async(events) => {
if (events["group-participants.update"]) {
  try {
const jpzinh = events["group-participants.update"];
const groupId = jpzinh.id;
const Shizuku = `./DATABASE2/GRUPOS/ATIVACOES/${groupId}.json`;
if (!fs.existsSync(Shizuku)) return console.log(Shizuku)
const jsonGp = JSON.parse(fs.readFileSync(Shizuku));
const participante = jpzinh.participants[0];
const participanteLimpo = jidNormalizedUser(participante);
const mdata = await conn.groupMetadata(groupId);
const groupDesc = mdata.desc || '';
const well1 = jsonGp[0].wellcome[0];
const well2 = jsonGp[0].wellcome[1];
 
 const diretorio_arqv = './DATABASE2/GRUPOS/antiarqv.json';

const antiarqv = JSON.parse(fs.readFileSync(diretorio_arqv));

let ppUser, ppGroup;
try { ppUser = await conn.profilePictureUrl(participanteLimpo, 'image'); }
catch { ppUser = 'https://telegra.ph/file/24fa902ead26340f3df2c.png'; }
try { ppGroup = await conn.profilePictureUrl(mdata.id, 'image'); }
catch { ppGroup = 'https://telegra.ph/file/24fa902ead26340f3df2c.png'; }

if(jsonGp[0]?.x9 && jpzinh.action === "demote" || jsonGp[0]?.x9 && jpzinh.action === "promote") {
await conn.sendMessage(jpzinh.id, { text: ` ❕Ação detectada: O Participante [ @${jpzinh.author.split("@")[0]} ] ${jpzinh.action === "demote" ? "Rebaixou a membro comum o participante: " : "Promoveu a adm o participante:"} [ @${participanteLimpo.split("@")[0]} ]`, mentions: [jpzinh.author, participanteLimpo]});
}

if(jsonGp[0]?.x9 && jpzinh.action === "remove") {
await conn.sendMessage(jpzinh.id, { text: ` ❕Ação detectada: O Participante [ @${jpzinh.author.split("@")[0]} ] Removeu o participante: [ @${participanteLimpo.split("@")[0]} ]`, mentions: [jpzinh.author, participanteLimpo]});
}

if(jsonGp[0]?.x9 && jpzinh.action === "add") {
const teste = jpzinh.author;
if(!teste) return;
await conn.sendMessage(jpzinh.id, { text: ` ❕Ação detectada: O Participante [ @${jpzinh?.author?.split("@")[0]} ] Adicionou ou permitiu a entrada do participante: [  @${participanteLimpo?.split("@")[0]} ]`, mentions: [jpzinh.author, participanteLimpo]});
}

if (
  antiarqv[jpzinh.id]?.ativo &&
  jpzinh.action === "demote"
) {
  const alvo = jidNormalizedUser(jpzinh.participants[0].phoneNumber);
  const executor = jidNormalizedUser(jpzinh.author)
  const dono = jidNormalizedUser(antiarqv[jpzinh.id].dono)
  const bot = jidNormalizedUser(conn.user.id)

  if (alvo === dono && executor !== dono) {

    await conn.groupParticipantsUpdate(
      jpzinh.id,
      [dono],
      'promote'
    )
    
    if (executor !== bot) {
      await conn.groupParticipantsUpdate(
        jpzinh.id,
        [executor],
        'demote'
      )
    }

    console.log('[ANTI-ROUBO] Tentativa de rebaixar o dono bloqueada.')
  }
}


const substituir = (txt) => txt
.replace('#hora#', hora)
.replace('#nomedogp#', mdata.subject)
.replace('#numerodele#', '@' + participanteLimpo.split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc);

if(jpzinh.action === 'add') {
if(well1?.bemvindo1) {
const legenda = well1.legendabv ? substituir(well1.legendabv) : `Bem-vindo(a) @${participanteLimpo.split('@')[0]}!`;
await conn.sendMessage(groupId, {image: {url: ppUser}, caption: legenda, mentions: [participanteLimpo]});
}

if (well2?.bemvindo2) {
const legenda = well2.legendabv ? substituir(well2.legendabv) : `🎉 Bem-vindo(a), @${participanteLimpo.split('@')[0]}!`;
await conn.sendMessage(groupId, {text: legenda, mentions: [participanteLimpo]});
}
}

if (jpzinh.action === 'remove') {
if (well1?.bemvindo1 && well1?.legendasaiu) {
const legenda = substituir(well1.legendasaiu);
await conn.sendMessage(groupId, {image: {url: ppUser }, caption: legenda, mentions: [participanteLimpo]});
}

if(well2?.bemvindo2 && well2?.legendasaiu) {
const legenda = substituir(well2.legendasaiu);
await conn.sendMessage(groupId, {text: legenda, mentions: [participanteLimpo]});
}
}
} catch (e) {
console.error('[ERRO NO SISTEMA DE BEM-VINDO/SAIU]:', e);
}
}
});

conn.ev.process(async (events) => {
if(events["messages.upsert"]) {
const upsert = events["messages.upsert"];
require("./index.js")(conn, upsert);
}
if(events["creds.update"]) {
await saveCreds();
}
});

  conn.ev.on("connection.update", ({ connection }) => {

const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode
switch (connection) {
case 'close':
if(shouldReconnect) {
if(shouldReconnect == 428) {
console.log(colors.yellow("[Error: 428] - Conexão caiu, irei ligar novamente, se continuar com este erro, provavelmente sua internet está caindo constantemente..."));
} else if(shouldReconnect == 401) {
exec("cd  database && rm -rf qr-code")
console.log(colors.red("A autenticação com WhatsApp Web falhou! Por favor, reinicie e realize a autenticação novamente."))
} else if(shouldReconnect == 515) {
console.log(colors.gray("\nA autenticação foi bem sucedida! Restart necessário para estabilizar a conexão."))
} else if(shouldReconnect == 440) {
console.log(colors.gray("Está tendo um pequeno conflito, se isso aparecer mais de 4 vez, creio que há uma outra sessão aberta, ou o bot ligado em outro lugar, caso contrário ignore..."))
} else if(shouldReconnect == 503) {
console.log(colors.grey("[Error: 503] - Ocorreu um erro desconhecido ao executar o bot novamente ou sua primeira inicialização."));
} else if(shouldReconnect == 502) {
console.log(colors.grey("[Error: 502] - A conexão com a internet, está querendo cair..."))
} else if(shouldReconnect == 408) {
console.log(colors.gray("[Error: 408] - A conexão com a Internet atualmente está fraca..."))
} else {
console.log(colors.red.bold(`[CONEXÃO CLOSED] - A conexão entre o WhatsApp foi fechada, por motivos de: ${lastDisconnect?.error}`))
};
setTimeout(() => Bot(), 2000);
}
break;

case 'connecting':
console.log(colors.magenta.bold(`[BASE-SHIZUKU] Reconectando / Iniciando - ${data} ${hora}`))
break;

case 'open':
console.log(banner3?.string)   
console.log(banner2?.string)  
console.log(colors.black.bold(`〔 CONECTADA COM SUCESSO... 〕`))
//await conn.sendPresenceUpdate("available")
break;

default:
break
}

});
return conn;

}

module.exports = Bot;

Bot().catch(async(e) => {console.log(colors.red("• ERROR: "+e))})