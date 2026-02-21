/*
* projetos: Shizuku bot, Shizuku API's, Shizuku base.
* desenvolvidos por: 
* © jpzinh 👑 
* só peço que deixe os devidos créditos ai.
*/
const baileys = require("@whiskeysockets/baileys");
const { generateWAMessageContent } = require('@rexxhayanasi/elaina-baileys')
const ytSearch = require('yt-search');
const chalk = require('chalk');
const { version } = require("./package");
const Conselhos = require("./DADOS/CONSELHOS/conselhos");
const CONSELHOS = Conselhos.conselhos;
const CONSELHO = CONSELHOS[Math.floor(Math.random() * CONSELHOS.length)];
const { Sticker } = require("./DADOS/TAKE/sticker/rename/sticker");
const { fetchJson, colors, hora, data, getBuffer, fs, SimilarComandos, ListaComandos, getGroupAdmins, getMembros, moment, msg, axios, kyun, infoSystem, os, menu, menus, Config, Config2, linkfy, util, exec, jpzinhhomi, Shizukuu, sleep, ShizukuStile, Cmd, BuscarNogpt, BaixarNoYt, ttkdl, instadl, METADINHAS, ttksearch, ANT_LTR_MD_EMJ, sendImageAsSticker2, sendVideoAsSticker2, getFileBuffer, downloadContentFromMessage, prepareWAMessageMedia, jidNormalizedUser, ContarMessages, addVIP, isVIP, getExpire,  removeVIP, YoutubeDl, beijocmd, upload } = require("./consts");

async function iniciarBot() {
	
module.exports = async function (conn, upsert) {
  try {
const info = upsert?.messages && upsert?.messages[0];
if (!info) return;
const from = info?.key?.remoteJid;
const isGroup = from.endsWith('@g.us');
const isStatus = from.endsWith('@broadcast');
const pushname = info?.pushName || await conn?.user?.name || "Usuário";
const content = JSON.stringify(info.message);
const quoted = info.quoted ? info.quoted : info
const sender = jidNormalizedUser(isGroup ? info?.key?.participant || 
await conn?.user?.id : info?.key?.senderPn ||
info?.key?.remoteJid 
);

//CONSTS IMPORTANTES 
const { NumberDono, prefix, NickDono, NomeBot, SHIZUKU_KEY, SHIZUKU_SITE, Shizukusite } = Config;

const { dono1, dono2, dono3, dono4, dono5, dono6 , isSoDono } = Config2;
const isVerificado = Config2.verificado;
const BotOff = Config2.botoff;
const isVisualizar = Config2.visualizar;
const isButtons = Config2.buttons
const isAntiPv = Config2.antipv;
const botNumber = jidNormalizedUser(await conn.user.id || await conn.user.lid);
const Numero1 = jidNormalizedUser(`${dono1}@s.whatsapp.net`);
const Numero2 = jidNormalizedUser(`${dono2}@s.whatsapp.net`);
const Numero3 = jidNormalizedUser(`${dono3}@s.whatsapp.net`);
const Numero4 = jidNormalizedUser(`${dono4}@s.whatsapp.net`);
const Numero5 = jidNormalizedUser(`${dono5}@s.whatsapp.net`);
const Numero6 = jidNormalizedUser(`${dono6}@s.whatsapp.net`);
const MeuNumero = jidNormalizedUser(`${NumberDono}@s.whatsapp.net`);
const IsCreator = jpzinhhomi?.includes(sender);
const SoCriador = Shizukuu?.includes(sender);
const SoBot = botNumber?.includes(sender)
const So_Dono = MeuNumero?.includes(sender) || Numero1?.includes(sender) || Numero2?.includes(sender) || Numero3?.includes(sender) || Numero4?.includes(sender) || Numero5?.includes(sender) || Numero6?.includes(sender) || SoBot || SoCriador || IsCreator;

const type = baileys.getContentType(info?.message);
let body = info?.message?.conversation || info?.message?.extendedTextMessage?.text || info?.message?.imageMessage?.caption || info?.message?.videoMessage?.caption || info?.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info?.message?.buttonsResponseMessage?.selectedButtonId || info?.message?.templateButtonReplyMessage?.selectedId || info?.message?.listResponseMessage?.singleSelectReply?.selectedRowId || info?.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson || info?.text || "";
  
if (info?.message?.listResponseMessage) {
body = info?.message?.listResponseMessage?.singleSelectReply?.selectedRowId;
}
if (info?.message?.interactiveResponseMessage) {
try {const botn = JSON.parse(info?.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson);
if (botn?.id) body = botn?.id;
} catch {}
}

//CONSTS IMPORTANTES
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isVisuU2 = type == 'viewOnceMessageV2'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2")
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if(isImage) typeMessage = "Image"
else if(isVideo) typeMessage = "Video"
else if(isAudio) typeMessage = "Audio"
else if(isSticker) typeMessage = "Sticker"
else if(isContact) typeMessage = "Contact"
else if(isLocation) typeMessage = "Location"
else if(isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')

///{ constantes muito importantes}\\
const budy = (type === 'conversation') ? info.message?.conversation : (type === 'extendedTextMessage') ? info.message?.extendedTextMessage?.text : '';
const Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || ""
const PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
const budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
const args = body.trim().split(/ +/).slice(1);
const arg = body.trim().split(/ +/).slice(1);
const q = args.join(' ');
const CamileGostosa = (budy2 || budy || body || q || "").trim()
const testando = CamileGostosa.split(/\s+/)[0].toLowerCase()
const isCmd = body.trim().startsWith(prefix);
const command = isCmd ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase() : testando || null;
const adivinha = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'iPhone' : 'WhatsApp Web';

//INFO DE GRUPOS!!
const Infos_Do_Grupo = isGroup ? await conn.groupMetadata(from) : {} || '';
const NomeGrupo = Infos_Do_Grupo?.subject || '';
const DescGp = Infos_Do_Grupo?.desc || '';
const MembrosGP = Infos_Do_Grupo?.participants || [];
const TotalAdmins = MembrosGP[0]?.admin || '';
const TotalMembros = MembrosGP.length || 0;
const Dono_Do_Grupo = Infos_Do_Grupo?.subjectOwnerJid || '';

const So_Admins = isGroup ? getGroupAdmins(MembrosGP) : ''
const somembros = isGroup ? getMembros(MembrosGP) : ''

const diretorio_arqv = './DATABASE2/GRUPOS/antiarqv.json';
const antiarqv = JSON.parse(fs.readFileSync(diretorio_arqv));
const dirGroup = `./DATABASE2/GRUPOS/ATIVACOES/${from}.json`

if(isGroup && !fs.existsSync(dirGroup)){
var dataGp2 = [{
name: NomeGrupo,
groupId: from, 
antilinkhard: false, 
So_Admins: false,
modobn: false,
autorepo: false,
bangp: false,
antimencao: false, x9: false,
antidoc: false, antistk: false,
wellcome: [{
bemvindo1: false,
legendabv: "Olá #numerodele#, seja bem vindo(a) ao Grupo: *#nomedogp#*, Shizuku lhe deseja as boas vindas 🕸️",
legendasaiu: "Adeus, #numerodele#, espero que não se arrependa pela sua decisão. "
},
{
bemvindo2: false,
legendabv: "Olá #numerodele#, seja bem vindo(a) ao Grupo: *#nomedogp#*, Shizuku lhe deseja as boas vindas 🕸️",
legendasaiu: "Adeus, #numerodele#, espero que não se arrependa pela sua decisão. "
}],
}]
fs.writeFileSync(dirGroup, JSON.stringify(dataGp2, null, 2) + '\n')
}

const dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined 

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')}

const isBemvindo = isGroup ? dataGp[0]?.wellcome[0]?.bemvindo1 : undefined 
const isBemvindo2 = isGroup ? dataGp[0]?.wellcome[1]?.bemvindo2 : undefined
const isAntiLinkHard = isGroup ? dataGp[0]?.antilinkhard : undefined
const SoAdmins = isGroup ? dataGp[0]?.So_Admins : undefined 
const isBanGrupo = isGroup ? dataGp[0]?.bangp : undefined 
const SoAutoRepo = isGroup ? dataGp[0]?.autorepo : undefined 
const isModobn = isGroup ? dataGp[0]?.modobn : undefined 
const isAntiMencionar = isGroup ? dataGp[0].antimencao : undefined 
const isX9 = isGroup ? dataGp[0].x9 : undefined 
const isAntiRoubo = isGroup ? antiarqv[from]?.ativo : false
const isAntiSticker = isGroup ? dataGp[0]?.antistk : undefined 
const isAntiDocument = isGroup ? dataGp[0].antidoc : undefined 
const isVip = isVIP(sender);

//DEFINIÇÕES UTEIS
//VERIFICADO!
const selo = Config2.verificado ? {key: {fromMe: false, remoteJid: from, id: "META",
participant: "13135550002@s.whatsapp.net"
}, message: { contactMessage: { displayName: pushname,
 vcard: `BEGIN:VCARD
VERSION:3.0
N:Meta AI;;;;
FN:Meta AI
TEL;waid=13135550002:+1 313 555 0002
END:VCARD`
}
}
} : info

//CONTEXTINFO 
const JpzinhStile = {
        mentionedJid: [sender], 
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363405949526413@newsletter',
            newsletterName: "Jpzinh 👑",
            serverMessageId: 1
      }
 };

async function reply(texto){
try {
return conn.sendMessage(from, {text: texto, mentions: [sender, info?.key?.remoteJid], contextInfo: JpzinhStile}, {quoted: selo})
} catch (E) {
return reply("Erro ao enviar msg");
};
};

const reagir = async (idgp, emj) => {
var reactionMessage = {
react: {
text: emj, 
key: info.key
}
} 
conn.sendMessage(idgp, reactionMessage)
}

var isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? conn.sendMessage(from, {text: teks.trim(), mentions: memberr}) : conn.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
	
const mention = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
conn.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const hora2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(hora2 > "00:00:00" && hora2 < "05:00:00"){
var tempo = 'Boa noite'
} if(hora2 > "05:00:00" && hora2 < "12:00:00"){
var tempo = 'Bom dia'
} if(hora2 > "12:00:00" && hora2 < "18:00:00"){
var tempo = 'Boa tarde'
} if(hora2 > "18:00:00"){
var tempo = 'Boa noite'
}


const isBotGroupAdmins = So_Admins?.includes(botNumber) || false;
const isGroupAdmins = So_Admins.includes(sender) || false || So_Dono ||SoBot || IsCreator || SoCriador

// FUNÇÕES DE MARCAÇÕES ESSENCIAL \\
//FUNÇÃO BY: NKZIN-DEV, NÃO TIRA OS CRÉDITOS DESGRAÇA!!
let menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant || '';
if (menc_prt.includes('@lid') && Infos_Do_Grupo?.participants) {
menc_prt = Infos_Do_Grupo.participants.find(v => v.id === menc_prt)?.jid || '';
}
const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
if (menc_jid2?.[0]?.includes('@lid') && Infos_Do_Grupo?.participants) {
menc_jid2[0] = Infos_Do_Grupo.participants.find(v => v.id === menc_jid2[0])?.jid || '';
}
const menc_os2 = q.includes("@") ? (Array.isArray(menc_jid2) && menc_jid2.length > 0 ? menc_jid2[0] : null) : menc_prt;
const menc_jid = jidNormalizedUser(menc_os2 || sender);
const sender_ou_n = q.includes("@") ? menc_jid2?.[0] : (menc_prt || sender);
const normalizar = alvo => {
if (alvo?.includes('@lid') && Infos_Do_Grupo?.participants) {
return Infos_Do_Grupo.participants.find(v => v.id === alvo)?.jid || alvo;
}
return alvo;
};//FUNÇÃO BY: NKZIN-DEV, NÃO TIRA OS CRÉDITOS DESGRAÇA!!
const numClean = txt => txt.replace(/[()+\-\/\s]/g, '') + '@s.whatsapp.net';
const mrc_ou_numero  = q.length > 6  && !q.includes('@') ? numClean(q)  : normalizar(menc_prt);
const marc_tds       = q.includes('@')                 ? normalizar(menc_jid) : q.length > 6  && !q.includes('@') ? numClean(q)  : normalizar(menc_prt);
const menc_prt_nmr   = q.length > 12 && !q.includes('@') ? numClean(q)  : normalizar(menc_prt);
const menc_prt3 = info.message?.extendedTextMessage?.contextInfo?.participant
const menc_jid3 = args?.join(" ").replace("@", "") + "@s.whatsapp.net"
const menc_jid23 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid
const sender_ou_n3 = q.includes("@") ? menc_jid : sender
const mrc_ou_numero3 = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_os23 = q.includes("@") ? menc_jid : menc_prt 
const marc_tds3 = q.includes("@") ? menc_jid : q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_prt_nmr3 = q.length > 12 ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt
//============================//

if(isVisualizar) {
await conn.readMessages([info.key]);
} else {
if(from == "status@broadcast") return;
}

//ANTI MENCIONAR 
if (info.message?.groupStatusMentionMessage && isGroup && isAntiMencionar && isBotGroupAdmins && !SoBot && !isGroupAdmins && !So_Dono) {
 try {
 await conn.sendMessage(from, { delete: info.key})
 } catch (e) {
 console.log("Não consegui apagar o aviso do status")
 }
await conn.groupParticipantsUpdate(from, [ sender ],  "remove")
 await conn.sendMessage(from, { text: `🚫 @${sender.split("@")[0]} foi removido por mencionar o grupo em status.`, mentions: [sender] })
}
//ANTI DOCUMENTOS
if(info?.message?.documentMessage && isGroup && isAntiDocument && isBotGroupAdmins && !SoBot && !isGroupAdmins && !So_dono) {
try {
 await conn.sendMessage(from, { delete: info.key})
 } catch (e) {
 console.log("Não consegui apagar o documento enviado")
 }
await conn.groupParticipantsUpdate(from, [ sender ],  "remove")
await conn.sendMessage(from, { text: `🚫 @${sender.split("@")[0]} foi removido por Enviar documentos proibidos ao grupo.`, mentions: [sender] })
}

//ANTI STICKERS 
if(info?.message?.stickerMessage && isGroup && isAntiSticker && isBotGroupAdmins && !SoBot && !isGroupAdmins && !So_Dono) {
try {
 await conn.sendMessage(from, { delete: info.key})
 } catch (e) {
 console.log("Não consegui apagar a figurinha enviada ao grupo")
 }
await conn.groupParticipantsUpdate(from, [ sender ],  "remove")
await conn.sendMessage(from, { text: `🚫 @${sender.split("@")[0]} foi removido por Enviar Figurinhas com o sistema de anti stickers ativo.`, mentions: [sender] })
}


//==== { ANTI - PV } ===\\
if(isAntiPv) {
if(!isGroup && !So_Dono && !isVip) {
await sleep(2500)
msgpvblock = `./DATABASE2/func/pv-msg_block-${sender}.json`
fs.writeFileSync(msgpvblock, JSON.stringify("olá amigo o anti pv do bot ta ativo, vou te bloquear", null, 2))
msgmsglbl = JSON.parse(fs.readFileSync(msgpvblock))
reply(msgmsglbl)
fs.unlink(msgpvblock)
setTimeout(async () => {
conn.updateBlockStatus(sender, 'block')
}, 2000)
return
}
}

//==={ANTI LINK} ===\\
let isTrueFalse = Array('tiktok', 'facebook','instagram','twitter','ytmp3','ytmp4','play', 'playmix', 'play2', 'play3', 'playvid', 'playvid2').some(item => item === command)

if(isUrl(PR_String) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if(Procurar_String.includes("chat.whatsapp.com")) {
link_dgp = await conn.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return reply('Link do nosso grupo, não irei remover.. ') 
}
if(isCmd && isTrueFalse) return reply("o Erro ta aq")
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1200);
conn.groupSettingUpdate(from, 'announcement')
setTimeout(() => {
conn.groupSettingUpdate(from, 'not_announcement')
}, 1200)
if(!JSON.stringify(MembrosGP).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
conn.sendMessage(from, { text: `@${sender.split("@")[0]}  foi removido por enviar links proibidos.`, mentions: [sender] });
}//FIM

if(info.key.fromMe) return;
if(BotOff && !So_Dono) return;
if(isGroup && isCmd && SoAdmins && !So_Dono && !isGroupAdmins) return;
if(isGroup && isCmd && isBanGrupo && !So_Dono) return
if(isCmd && isSoDono && !So_Dono) return;

let tipoMsg = "Texto";

if (info?.message?.imageMessage) tipoMsg = "📸 Imagem";
else if (info?.message?.videoMessage) tipoMsg = "🎥 Vídeo";
else if (info?.message?.audioMessage) tipoMsg = "🎧 Áudio";
else if (info?.message?.stickerMessage) tipoMsg = "🧩 Figurinha";
else if (info?.message?.documentMessage) tipoMsg = "📄 Documento";
else if (info?.message?.buttonsResponseMessage) tipoMsg = "🔘 Botão";
else if (info?.message?.listResponseMessage) tipoMsg = "📋 Lista";
else if (info?.message?.reactionMessage) tipoMsg = "😂 Reação";

function linha(icon, label, value, color = "#ffffff") {
  return `${chalk.hex("#64748b")("┃")} ${icon} ${chalk.hex(color)(label)} ${chalk.white(value)}`;
}

function separador(txt, color) {
console.log(chalk.hex(color)(`\n╔════ 🎄 ${txt} 🎄 ════╗`));
}

if (!isGroup && isCmd) {
separador("COMANDO PRIVADO", "#22c55e");
console.log(linha("🧠", "Comando:", command, "#f87171")), console.log(linha("👤", "Usuário:", pushname, "#60a5fa")), console.log(linha("📱", "Número:", sender.split("@")[0], "#34d399")), console.log(linha("🕒", "Hora:", hora2, "#facc15")), console.log(linha("📆", "Data:", data, "#f472b6")), console.log(linha("👑", "Dono:", So_Dono ? "SIM" : "NÃO", "#a78bfa")), console.log(chalk.hex("#22c55e")("╚═════════════════════════════════╝\n"));
}

//MENSAGEM EM PRIVADO
if(from.endsWith("@s.whatsapp.net")) {
console.log(chalk.hex("#ff0000")("\n╭────〔 💬 MENSAGEM EM PRIVADO 〕────╮")), console.log(linha("👤 Usuário:", pushname)), console.log(linha("📱 Número:", sender.split("@")[0])), console.log(linha("📦 Tipo:", tipoMsg)), console.log(linha("🕒 Hora:", hora2)), console.log(linha("📎 Texto:", body?.slice(0, 60) || "—")), console.log(chalk.hex("#06b6d4")("╰──────────────────────────────╯\n"));
}

// ===== COMANDO EM GRUPO =====
if (isGroup && isCmd) {
separador("COMANDO EM GRUPO", "#ef4444");
console.log(linha("🧠", "Comando:", command, "#f87171")), console.log(linha("👤", "Usuário:", pushname, "#60a5fa")), console.log(linha("📱", "Número:", sender.split("@")[0], "#34d399")), console.log(linha("👥", "Grupo:", NomeGrupo, "#22d3ee")), console.log(linha("🕒", "Hora:", hora2, "#facc15")), console.log(linha("👑", "Dono:", So_Dono ? "SIM" : "NÃO", "#a78bfa")), console.log(chalk.hex("#ef4444")("╚═════════════════════════════════╝\n"))
}

// ===== MENSAGEM EM GRUPO =====
if (isGroup && !isCmd && !info.key.fromMe) {
separador("MENSAGEM NO GRUPO", "#a855f7");
console.log(linha("👤", "Usuário:", pushname, "#60a5fa")), console.log(linha("📱", "Número:", sender.split("@")[0], "#34d399")),  console.log(linha("👥", "Grupo:", NomeGrupo, "#22d3ee")), console.log(linha("📦", "Tipo:", tipoMsg, "#f97316")), console.log(linha("🕒", "Hora:", hora2, "#facc15")), console.log(linha("💬", "Texto:", body?.slice(0, 60) || "—", "#e5e7eb")), console.log(chalk.hex("#a855f7")("╚═════════════════════════════════╝\n"));
}

// ===== REAÇÃO =====
if (info?.message?.reactionMessage) {
separador("REAÇÃO DETECTADA", "#f59e0b");
console.log(linha("👤", "Usuário:", pushname, "#60a5fa")), console.log(linha("📱", "Número:", sender.split("@")[0], "#34d399"))
if(isGroup) console.log(linha("👥", "Grupo:", NomeGrupo, "#22d3ee")), console.log(linha("😂", "Emoji:", info.message.reactionMessage.text, "#facc15"));
console.log(chalk.hex("#f59e0b")("╚═════════════════════════════════╝\n"));
}

//SIMPLIFICAÇÕES!
const shizuku = conn

// ===== SISTEMA DE DIGITANDO AUTOMÁTICO =====
let digitandoGrupos = new Map()

async function iniciarDigitando(jid) {
 digitandoGrupos.set(jid, true)
const intervalo = setInterval(async () => {
if (!digitandoGrupos.get(jid)) {
 clearInterval(intervalo)
 return
}
await conn.sendPresenceUpdate('composing', jid)
}, 4000)
setTimeout(() => pararDigitando(jid), 10000)
}

async function pararDigitando(jid) {
digitandoGrupos.delete(jid)
await conn.sendPresenceUpdate('paused', jid)
}

//FUNÇÃO PARA CONTAR MENSAGENS 

const groupIdscount = [];
for(let obj of ContarMessages) {
groupIdscount.push(obj.groupId);
}

var numbersIds = []
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of ContarMessages[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
var RSM_CN = ContarMessages[ind].numbers[indnum]
type == "stickerMessage" ? "" : RSM_CN.messages += isCmd ? 0 : 1
type == "stickerMessage" ? "" : RSM_CN.cmd_messages += isCmd ? 1 : 0
type == "stickerMessage" ? "" : RSM_CN.aparelho = adivinha
RSM_CN.figus += type == "stickerMessage" ? 1 : 0
fs.writeFileSync('./DADOS/MEDIA/contador.json', JSON.stringify(ContarMessages, null, 2)+ '\n')
} else {
const messages = isCmd ? 0 : 1
const cmd_messages = isCmd ? 1 : 0
var figus = type == "stickerMessage" ? 1 : 0
ContarMessages[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages, 
aparelho: adivinha, 
figus: figus
})
fs.writeFileSync('./DADOS/MEDIA/contador.json', JSON.stringify(ContarMessages, null, 2) + '\n')
}
} else if(isGroup) {
ContarMessages.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
figus: 0,
cmd_messages: isCmd ? 1 : 0, 
aparelho: adivinha
}]
})
fs.writeFileSync('./DADOS/MEDIA/contador.json', JSON.stringify(ContarMessages, null, 2) + '\n')
}

const MSG = Cmd(command, NomeGrupo, prefix);
const SoLink = q?.includes("http:") || q?.includes("https:");

const readMore = String.fromCharCode(8206).repeat(4000);

async function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

async function renameContextSticker(pack, autor, txt = ``, info, conn, quoted, selo, sender){
  try {
    const getfile = await getFileBuffer(
      info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage,
      'sticker'
    );

    const _sticker = new Sticker();
    _sticker.addFile(getfile);
    _sticker.options.metadata = {
      pack: pack,
      author: autor,
      emojis: ['🤠', '🥶', '😻']
    };

const resultadoSt = await _sticker.start();

console.log(resultadoSt);

const stickerBuffer = Buffer.isBuffer(resultadoSt)
  ? resultadoSt
  : fs.existsSync(resultadoSt[0]?.value || resultadoSt?.path || resultadoSt)
  ? fs.readFileSync(resultadoSt[0]?.value || resultadoSt?.path || resultadoSt)
  : resultadoSt; 

    await conn.sendMessage(from, {
      sticker: stickerBuffer,
      contextInfo: ShizukuStile
    }, { quoted: selo });

    await fs.unlinkSync(resultadoSt[0].value);
  } catch (e) {
    console.log(e);
  }
}

const path5 = './DADOS/TAKE/take.json';
if (!fs.existsSync(path5)) fs.writeFileSync(path5, JSON.stringify({}, null, 2))
let takeDB = JSON.parse(fs.readFileSync(path5))
function saveTake() {
fs.writeFileSync(path5, JSON.stringify(takeDB, null, 2))
}

//EVAL E EXECUÇÕES 
if(body.startsWith('>')){
try {
if(info.key.fromMe) return 
if(!So_Dono) return
console.log('[', colors.cyan('EVAL'),']', colors.yellow(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss')), colors.green(budy))
return conn.sendMessage(from, {text: JSON.stringify(eval(budy.slice(2)),null,'\t')}).catch(e => {
return reply(String(e))
})
} catch (e){
return reply(String(e))
}
}

if(body.startsWith('(>')){
try {
if(info.key.fromMe) return   
if(!So_Dono) return 
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if(sat == undefined){
bang = util.format(sul)
}
return conn.sendMessage(from, {text: bang}, {quoted: info})
}

conn.sendMessage(from, {text: util.format(eval(`;(async () => { ${konsol} })()`))}).catch(e => { 
return reply(String(e))
})
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', hora, colors.green(">"), 'from', colors.green(sender.split('@')[0]), 'args :', colors.green(args.length))
} catch(e) {
return reply(String(e))
console.log(e)
}
}

//EXECUÇÕES EVAL
if(body.startsWith('$')) {
if(info.key.fromMe) return 
if(!So_Dono) return 
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if(stdout) {
reply(stdout)
}
})
}//FIM

if (from.endsWith("@newsletter")) {
  const id = info.key.server_id

  const emojis = [
    "❤️","🖤","💔","❤️‍🔥","❤️‍🩹","💖","💘",
    "🔥","✨","⚡","💥","🚀","🥶","🖖",
    "😈","🩸","🕷️","💀","☠️",
    "❌","⛔","🚫","👎","😐","😒",
    "⚠️","👀","🤨","🫤","🤔",
    "😂","🤣","😏","😎","🥴"
  ]

  const emoji = emojis[Math.floor(Math.random() * emojis.length)]

  await conn.newsletterReactMessage(from, id, emoji)
}

//==COMANDOS COM PREFIXO ABAIXO

switch (command) {

case 'm':
case 'menu': {
  try {
    if (isButtons) {
      await reagir(from, "🕷️");

      // 1. Texto estilo Shizuku
      const txtt = `
╔═══ 🕸️ 𝐒𝐇𝐈𝐙𝐔𝐊𝐔 𝐒𝐘𝐒𝐓𝐄𝐌 🕸️ ═══╗
║
║  👋 𝙱𝚎𝚖-𝚟𝚒𝚗𝚍𝚘, ${pushname}
║  🌟 𝙱𝚘𝚝: ${NomeBot} | v${version}
║  🗝️ 𝙿𝚛𝚎𝚏𝚒𝚡𝚘: [ ${prefix} ]
║  🕷️ 𝙼𝚎𝚜𝚝𝚛𝚎: ${NickDono}
║  📱 𝙲𝚘𝚗𝚝𝚊𝚝𝚘: wa.me/${NumberDono}
║
╚════════════════════════╝

*𝚂𝚎𝚕𝚎𝚌𝚒𝚘𝚗𝚎 𝚞𝚖 𝙼𝚎𝚗𝚞 𝚊𝚋𝚊𝚒𝚡𝚘:*`.trim();


      const imageBuffer = fs.readFileSync("./dono/menus/Foto-menu/img-menu.jpg");
     
      const mediaContent = await generateWAMessageContent(
        { image: imageBuffer }, 
        { upload: conn.waUploadToServer }
      );

      const botoes = [
      {
        name: "single_select",
        buttonParamsJson: JSON.stringify({
          title: "𝙰𝙱𝚁𝙸𝚁 𝙼𝙴𝙽𝚄𝚂",
          sections: [
            {
              title: "🕷️ Escolha seu destino, amor...",
              rows: [
                { header: "🩸 Menu Principal", title: "❄️ Abrir Menu Principal", id: `${prefix}Menup` },
                { header: "📥 Downloads", title: "🎄 Menu de Downloads", id: `${prefix}menudown` },
                { header: "👑 Dono", title: "🩸 Painel do Dono", id: `${prefix}Menudono` },
                { header: "🛡️ Admins", title: "❄️ Área dos Admins", id: `${prefix}Menuadm` },
                { header: "🎨 Stickers", title: "🎁 Figurinhas", id: `${prefix}Menufig` },
                { header: "🔞 Adulto", title: "🖤 Menu Secreto +18", id: `${prefix}Menu18` },
                { header: "🤑 Vip", title: "💎 Menu Vip", id: `${prefix}Menuvip` },
                { header: "😺 Brincadeiras", title: "😸 Menu Diversão", id: `${prefix}Brincadeiras` },
                { header: "🤓 Inteligências", title: "🧠 Menu IAS", id: `${prefix}Menu-ia` },
                { header: "🔎 Pesquisas", title: "🔎 Menu Pesquisas", id: `${prefix}Pesquisas`}
              ]
            }
          ]
        })
      },
      {
      name: "cta_url",
      buttonParamsJson: JSON.stringify({
        display_text: "𝙰𝙲𝙴𝚂𝚂𝙰𝚁 𝙲𝙰𝙽𝙰𝙻 𝙳𝙾 𝙲𝚁𝙸𝙰𝙳𝙾𝚁",
        url: "https://whatsapp.com/channel/0029VbC5uMd3GJP2mhrSmI2T"
      })
    }
    ]

      await conn.relayMessage(
        from,
        {
          interactiveMessage: {
            header: {
              hasMediaAttachment: true,
              imageMessage: mediaContent.imageMessage 
            },
            body: { text: txtt },
            footer: { text: "© Jpzinh 👑" },
            nativeFlowMessage: {
              buttons: botoes
            }
          }
        }, 
        { quoted: info, mentions: [sender] }
      );

    } else {
      const image = fs.readFileSync("./dono/menus/Foto-menu/img-menu.jpg");
      await conn.sendMessage(from, { 
        image, 
        caption: menus?.menu(prefix, sender, NickDono, NomeBot, data, hora, NumberDono, version), 
        contextInfo: JpzinhStile,
        mentions: [sender] 
      }, { quoted: info });
    }
  } catch (e) {
    console.log("Erro no menu:", e);
    reply("😵‍💫 𝚘𝚙𝚜... ᴇᴜ ᴇsǫᴜᴇᴄɪ ᴄᴏᴍᴏ ᴀʙʀᴇ ᴏ ᴍᴇɴᴜ. ᴍɪɴʜᴀ ᴍᴇɴᴛᴇ ғɪᴄᴏᴜ ᴇᴍ ʙʀᴀɴᴄᴏ.");
  }
}
break;


case 'menu_menu': case 'menup': { await reagir(from, "❤️‍🔥")
const image = fs.readFileSync("./dono/menus/Foto-menu/img-menu.jpg")
await conn.sendMessage(from, {image, caption: menus?.menu(prefix, sender, NickDono, NomeBot, data, hora, NumberDono, version), contextInfo: JpzinhStile, mentions: [sender]}, {quoted: info});
}break;

case 'menufigurinhas': case 'menufig': { await reagir(from, "💖");
const image = fs.readFileSync("./dono/menus/Foto-menu/img-menu.jpg")
await conn.sendMessage(from, {image, caption: menus?.menuStickers(prefix, sender), contextInfo: JpzinhStile, mentions: [ sender ]}, {quoted: info});
} break 

case 'menuadm':{ await reagir(from, "🎉")
const image = fs.readFileSync("./dono/menus/Foto-menu/img-menu.jpg")
await conn.sendMessage(from, {image, caption: menus?.menuadm(prefix, sender), contextInfo: JpzinhStile, mentions: [sender]}, {quoted: info});
} break;

case 'menu18':{ await reagir(from, "🔞")
const image = fs.readFileSync("./dono/menus/Foto-menu/img-menu.jpg")
await conn.sendMessage(from, {image, caption: menus?.menu18(prefix, sender), contextInfo: JpzinhStile, mentions: [sender]}, {quoted: info});
} break;

case 'menudono':{ await reagir(from, "🤴")
const image = fs.readFileSync("./dono/menus/Foto-menu/img-menu.jpg")
await conn.sendMessage(from, {image, caption: menus?.menuDono(prefix, sender), contextInfo: JpzinhStile, mentions: [sender]}, {quoted: info});
} break;

case 'menudown':{ await reagir(from, "🎶")
const image = fs.readFileSync("./dono/menus/Foto-menu/img-menu.jpg")
await conn.sendMessage(from, {image, caption: menus?.menuDown(prefix, sender), contextInfo: JpzinhStile, mentions: [sender]}, {quoted: info});
} break;

case 'menu-ia': {await reagir(from, "🤓")
const image = fs.readFileSync("./dono/menus/Foto-menu/img-menu.jpg")
await conn.sendMessage(from, {image, caption: menus?.menuIa(prefix, sender), contextInfo: JpzinhStile, mentions: [sender]}, {quoted: info});
} break;

case 'menuvip': { await reagir(from, "🤑")
const image = fs.readFileSync("./dono/menus/Foto-menu/img-menu.jpg")
await conn.sendMessage(from, {image, caption: menus?.menuVip(prefix, sender), contextInfo: JpzinhStile, mentions: [sender]}, {quoted: info});
} break;

case 'brincadeiras': { await reagir(from, "😺")
const image = fs.readFileSync("./dono/menus/Foto-menu/img-menu.jpg")
await conn.sendMessage(from, {image, caption: menus?.menuBn(prefix, sender), contextInfo: JpzinhStile, mentions: [sender]}, {quoted: info});
} break;

case 'pesquisas': { await reagir(from, "😺")
const image = fs.readFileSync("./dono/menus/Foto-menu/img-menu.jpg")
await conn.sendMessage(from, {image, caption: menus?.pesquisas(prefix, sender), contextInfo: JpzinhStile, mentions: [sender]}, {quoted: info});
} break;


case 'donogp': {
    try {
       if(!isGroup) return reply(msg.SoEmGrupo)
       if(!So_Dono) return reply(msg.SoDono)
        if (!antiarqv[from]) return reply('*O anti roubo precisa estar ativo.*');
        if (!menc_os2) return reply('*Mencione alguém por gentileza.*');
        antiarqv[from].dono = menc_os2
        fs.writeFileSync(diretorio_arqv, JSON.stringify(antiarqv, null, 2));
        reply('*Número registrado com sucesso*');
    } catch (e) {
        console.error(e);
        reply('*erro..*');
    }
    break;
}

case 'anti-arqv': 
    try {
if(!isGroup) return reply(msg.SoEmGrupo)
if(!So_Dono) return reply(msg.SoDono)
        if (!antiarqv[from]) {
            antiarqv[from] = {
                ativo: true,
                nome: NomeGrupo,
                dono: null
            };
        
            fs.writeFileSync(diretorio_arqv, JSON.stringify(antiarqv, null, 2));
            reply('*anti roubo ativo*');
        } else {
            const ant_1 = antiarqv[from];
            antiarqv[from].ativo = !ant_1.ativo;
            fs.writeFileSync(diretorio_arqv, JSON.stringify(antiarqv, null, 2));
                reply(`*anti roubo de grupo ${antiarqv[from].ativo ? "ativado" : "desativado"} com sucesso*`);    
        }
    } catch (e) {
        console.error(e);
        reply('*erro..*');
    }
    break;
//COMANDOS DE ADMIN'S!!
case 'rebaixar':  case 'promover':
if (!isGroupAdmins) return reply(msg.SoAdmin);
if (!isBotGroupAdmins) return reply(msg.BotAdmin)
if (!menc_os2 || menc_jid2.length > 1) return reply("Marque a mensagem do usuário ou mencione apenas um @.");
 if (!JSON.stringify(MembrosGP).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível rebaixar.");
if(command === 'rebaixar') {
await conn.sendMessage(from, {react: {text: "😥", key: info?.key}});
if (botNumber.includes(menc_os2)) return reply('Não sou besta de rebaixar eu mesmo né 🙁, mas estou decepcionado com você.');
await conn.groupParticipantsUpdate(from, [menc_os2], "demote");
await conn.sendMessage(from, { 
 text: `@${menc_os2.split("@")[0]} foi rebaixado para *"MEMBRO COMUM"*`,
mentions: [menc_os2] 
});
} else if(command === 'promover') {
await conn.sendMessage(from, {react: {text: "🔥", key: info?.key}});
if(So_Admins?.includes(menc_os2)) return reply("o usuário mencionado já e um admin do grupo chefe!");
if (botNumber.includes(menc_os2)) return reply("Eu ja sou administradora do grupo chefe!");
await conn.groupParticipantsUpdate(from, [menc_os2], "promote");
await conn.sendMessage(from, {text: `@${menc_os2.split("@")[0]} foi promovido(a) para o cargo de administrador`,
mentions: [menc_os2]
});
}
break;

case 'd':
case 'del':
case 'apagar': {
if(!isGroupAdmins && !So_Dono && !isVip) return reply(msg.SoAdm);
await reagir(from, "🚮");
const ctx = info.message?.extendedTextMessage?.contextInfo
if(!ctx?.stanzaId) return reply("❌ Marque a mensagem que deseja apagar.")
 const keyToDelete = { remoteJid: from, fromMe: false, id: ctx.stanzaId, participant: ctx.participant }
await conn.sendMessage(from, { delete: keyToDelete })
}
break

case 'ban': case 'banir': case 'kick': case 'avadakedavra':
if (!isGroupAdmins && !So_Dono) return reply(msg.SoAdmin);
if (!isBotGroupAdmins) return reply(msg.BotAdmin);
try {
await conn.sendMessage(from, {react: {text: "😥", key: info?.key}});
if (!menc_os2 || menc_jid2[1]) 
return reply("Marque a mensagem do usuário ou mencione o @ dele. Apenas um usuário por vez.");
if (!JSON.stringify(MembrosGP).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível rebaixar.");
 
if (botNumber.includes(menc_os2)) {
await conn.groupParticipantsUpdate(from, [sender], "demote");
return reply("Você tentou me banir! Agora perdeu o cargo de administrador.");
}

if (MeuNumero?.includes(menc_os2)) {
await conn.groupParticipantsUpdate(from, [sender], "demote");
return reply("Você tentou banir meu dono,  Agora perdeu o cargo de administrador.");
}

await conn.sendMessage(from, {text: `@${menc_os2.split("@")[0]} foi removido(a) com sucesso.`, mentions: [menc_os2] });
await conn.groupParticipantsUpdate(from, [menc_os2], "remove");  
 } catch (e) {
console.error(e);
reply("Ocorreu um erro ao tentar remover o usuário.");
 }
break; // by: shizukuh

case 'antilinkhard':
case 'antilink':
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins) return reply(msg.SoAdmin)
if(!isBotGroupAdmins) return reply(msg.BotAdmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiLinkHard) return reply('O recurso de antilink hardcore já está ativado.')
conn.sendMessage(from, {react: {text: "☠️", key: info?.key}});
dataGp[0].antilinkhard = true
setGp(dataGp)
reply(MSG.Ativado)
} else if(Number(args[0]) === 0) {
if(!isAntiLinkHard) return reply('O recurso de antilink hardcore já está desativado.')
conn.sendMessage(from, {react: {text: "👀", key: info?.key}});
dataGp[0].antilinkhard = false
setGp(dataGp)
reply(MSG.Desativado)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'autorepo': 
case 'autoresposta': 
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins) return reply(msg.SoAdmin)
if(!isBotGroupAdmins) return reply(msg.BotAdmin)
if(args.length <1) return reply("1 para ativar, 0 para desativar!");
if(Number(args[0]) === 1) {
if(SoAutoRepo) return reply("Este recuso já está ativado neste grupo!")
dataGp[0].autorepo = true
setGp(dataGp)
reply(MSG.Ativado)
} else if(Number(args[0]) === 0) {
if(!SoAutoRepo) return reply("*_Este recurso já está desativado neste grupo!_*");
dataGp[0].autorepo = false
setGp(dataGp)
reply(MSG.Desativado)
} else {
reply("Use 1 para ativar, 0 para desativar!");
}
break;

case 'modogamer': 
case 'modobrincadeiras': 
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins) return reply(msg.SoAdmin)
if(!isBotGroupAdmins) return reply(msg.BotAdmin)
if(args.length <1) return reply("1 para ativar, 0 para desativar!");
if(Number(args[0]) === 1) {
if(isModobn) return reply("Este recuso já está ativado neste grupo!")
dataGp[0].modobn = true
setGp(dataGp)
reply(MSG.Ativado)
} else if(Number(args[0]) === 0) {
if(!isModobn) return reply("*_Este recurso já está desativado neste grupo!_*");
dataGp[0].modobn = false
setGp(dataGp)
reply(MSG.Desativado)
} else {
reply("Use 1 para ativar, 0 para desativar!");
}
break;

case 'bemvindo':
case 'welcome':
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins && !SoDono) return reply(msg.SoAdmin)
if(!isBotGroupAdmins) return reply(msg.BotAdmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isBemvindo) return reply('Ja esta ativo')
dataGp[0].wellcome[0].bemvindo1 = true
setGp(dataGp)
reply(MSG.Ativado)
} else if(Number(args[0]) === 0) {
if(!isBemvindo) return reply('Ja esta Desativado')
dataGp[0].wellcome[0].bemvindo1 = false
setGp(dataGp)
reply(MSG.Desativado)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'x9adm':
case 'x9':
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins && !SoDono) return reply(msg.SoAdmin)
if(!isBotGroupAdmins) return reply(msg.BotAdmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isX9) return reply('Ja esta ativo')
dataGp[0].x9 = true
setGp(dataGp)
reply(MSG.Ativado)
} else if(Number(args[0]) === 0) {
if(!isX9) return reply('Ja esta Desativado')
dataGp[0].x9 = false
setGp(dataGp)
reply(MSG.Desativado)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'legendabv':  
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins) return reply(msg.SoAdmin)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isBemvindo) {
dataGp[0].wellcome[0].legendabv = teks
setGp(dataGp)
reply('*Mensagem de boas vindas definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo 1`)
}
break

case 'legendasaiu':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(13)
if(isBemvindo) {
dataGp[0].wellcome[0].legendasaiu = teks
setGp(dataGp)
reply('*Mensagem de saída definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo 1`
)
}
break

case 'welcome2':
case 'bemvindo2':  
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins && !So_Dono) return reply(msg.SoDono)
if(args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `)
if(Number(args[0]) === 1) {
if(isBemvindo2) return reply('O recurso já está ativado no grupo.')
dataGp[0].wellcome[1].bemvindo2 = true
setGp(dataGp)
reply(MSG.Ativado)
} else if(Number(args[0]) === 0) {
if(!isBemvindo2) return reply('O recurso não está ativado no grupo.')
dataGp[0].wellcome[1].bemvindo2 = false
setGp(dataGp)
reply(MSG.Desativado)
} else {
reply(`Digite da forma correta, ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

case 'legendabv2':  
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins) return reply(msg.SoAdmin)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isBemvindo2) {
dataGp[0].wellcome[1].legendabv = teks
setGp(dataGp)
reply('*Mensagem de boas vindas definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo 1`)
}
break

case 'legendasaiu2':
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins) return reply(msg.SoAdmin)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(13)
if(isBemvindo2) {
dataGp[0].wellcome[1].legendasaiu = teks
setGp(dataGp)
reply('*Mensagem de saída definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo 1`
)
}
break

case 'so_adm':
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins) return reply(msg.SoAdm)
if(!isBotGroupAdmins) return reply(msg.BotAdmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(SoAdmins) return reply('Ja esta ativo')
dataGp[0].So_Admins = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de só adm utilizar comandos neste grupo.')
} else if(Number(args[0]) === 0) {
if(!SoAdmins) return reply('Ja esta Desativado')
dataGp[0].So_Admins = false
setGp(dataGp)
reply('Desativou o recurso de só adm utilizar comandos neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'anti-mencao':
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins) return reply(msg.SoAdm)
if(!isBotGroupAdmins) return reply(msg.BotAdmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiMencionar) return reply('Ja esta ativo')
dataGp[0].antimencao = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti menção neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiMencionar) return reply('Ja esta Desativado')
dataGp[0].antimencao = false
setGp(dataGp)
reply('Desativou o recurso de anti menção de status neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antifigu': case 'antisticker':
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins) return reply(msg.SoAdm)
if(!isBotGroupAdmins) return reply(msg.BotAdmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiSticker) return reply('Ja esta ativo')
dataGp[0].antistk = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti Stickers neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiSticker) return reply('Ja esta Desativado')
dataGp[0].antistlk = false
setGp(dataGp)
reply('Desativou o recurso de anti stickers neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antidoc':
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins) return reply(msg.SoAdm)
if(!isBotGroupAdmins) return reply(msg.BotAdmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiDocument) return reply('Ja esta ativo')
dataGp[0].antidoc = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti Documentos neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiDocument) return reply('Ja esta Desativado')
dataGp[0].antidoc = false
setGp(dataGp)
reply('Desativou o recurso de anti Documentos neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'linkgp': {
try {
if (!isGroup) return reply(msg.SoEmGrupos);
if (!isGroupAdmins) return reply(msg.SoAdm);
if (!isBotGroupAdmins) return reply(msg.BotAdmin);
await conn.sendMessage(from, {react: {text: "🔗", key: info?.key}});

let foto;
try {
foto = await conn.profilePictureUrl(from, 'image');
} catch {
foto = "https://files.catbox.moe/ygsirs.jpg";
}

const link = `https://chat.whatsapp.com/${await conn.groupInviteCode(from)}`;

const txt = `
🔗 *LINK OFICIAL DO GRUPO — ${NomeGrupo}*

🔗 link: ${link}

Clique no botão abaixo para copiar o link:\n
`.trim();

const interactiveMessage = {
    image: { url: foto },
    caption: "",
    title: txt,
    footer: "> by: jpzinh",
    interactiveButtons: [{name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "𝙲𝙾𝙿𝙸𝙰𝚁 𝙻𝙸𝙽𝙺 𝙳𝙾 𝙶𝚁𝚄𝙿𝙾", id: link, copy_code: link }) }]
}

await conn.sendMessage(from, interactiveMessage, { quoted: info })    

} catch (e) {
console.log("Erro no linkgp:", e);
reply("Erro ao gerar o link do grupo.");
}
}
break;

case 'totag':
case 'cita':
case 'hidetag': {
  if (!isGroup) return reply(msg.SoEmGrupos);
if (!isGroupAdmins) return reply(msg.SoAdm);

  let DFC = ""
  const rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
  const MRC_TD = MembrosGP.map(i => i.id)
  const comandoRegex = new RegExp(`^\\s*\\${prefix}${command}\\s*`, "i")
  const pink = isQuotedImage ? rsm?.imageMessage : info.message?.imageMessage
  const blue = isQuotedVideo ? rsm?.videoMessage : info.message?.videoMessage
  const purple = isQuotedDocument ? rsm?.documentMessage : info.message?.documentMessage
  const yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage : info.message?.documentWithCaptionMessage?.message?.documentMessage
  const aud_d = isQuotedAudio ? rsm?.audioMessage : ""
  const figu_d = isQuotedSticker ? rsm?.stickerMessage : ""
  const red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue && !purple && !yellow ? rsm?.conversation : info.message?.conversation || "";
  const green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text

  if (pink && !aud_d && !purple) {
    pink.caption = q.length > 1 ? q.trim() : (pink.caption || '').replace(comandoRegex, '').trim()
    pink.image = { url: pink.url }
    pink.mentions = MRC_TD
    DFC = pink
  }

  else if (blue && !aud_d && !purple) {
    blue.caption = q.length > 1 ? q.trim() : (blue.caption || '').replace(comandoRegex, '').trim()
    blue.video = { url: blue.url }
    blue.mentions = MRC_TD
    DFC = blue
  }

else if (red && !aud_d && !purple) {  
  const cu = red.replace(comandoRegex, "").trim()

  const black = {  
    text: cu || '',  
    mentions: MRC_TD  
  }  

  DFC = black  
}

  else if (!aud_d && !figu_d && green && !purple) {  
  const kuh = green.replace(comandoRegex, "").trim()

  const brown = {  
    text: kuh || '',  
    mentions: MRC_TD  
  }  

  DFC = brown  
}

  else if (purple) {
    purple.document = { url: purple.url }
    purple.mentions = MRC_TD
    DFC = purple
  }

  else if (yellow && !aud_d) {
    yellow.caption = q.length > 1 ? q.trim() : (yellow.caption || '').replace(comandoRegex, '').trim()
    yellow.document = { url: yellow.url }
    yellow.mentions = MRC_TD
    DFC = yellow
  }

  else if (figu_d && !aud_d) {
    figu_d.sticker = { url: figu_d.url }
    figu_d.mentions = MRC_TD
    DFC = figu_d
  }

  else if (aud_d) {
    aud_d.audio = { url: aud_d.url }
    aud_d.mentions = MRC_TD
    aud_d.ptt = false
    DFC = aud_d
  }

  if (DFC) {
    await conn.sendMessage(from, DFC).catch(e => console.log(e))
  } else {
    reply("⚠️ Nenhuma mensagem válida encontrada para citar ou marcar todos.")
  }
}
break 

case 'marcar':
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins) return reply(msg.SoAdm)
if(!isBotGroupAdmins) return reply(msg.BotAdmin)
async function marcac() {
bla = []
blad = `- ${NomeBot} 𝐌𝐞𝐧𝐜𝐢𝐨𝐧𝐚𝐧𝐝𝐨 𝐓𝐨𝐝𝐨𝐬 𝐨𝐬 𝐦𝐞𝐦𝐛𝐫𝐨𝐬 𝐜𝐨𝐦𝐮𝐧𝐬 𝐝𝐨 𝐠𝐫𝐮𝐩𝐨/𝐜𝐨𝐦𝐮𝐧𝐢𝐝𝐚𝐝𝐞. ${!q ? "" : `\n*Mensagem:* ${q}`}\n\n`
for( let i of somembros ) {
blad += `» @${i.split("@")[0]}\n`
bla.push(i)
}
blam = JSON.stringify(somembros)
if(blam.length == 2) return reply(`❌️ Olá *${pushname}* - Não contém nenhum membro comum no grupo, é sim apenas administradores. `)
mentions(blad, bla, true)  
}
marcac().catch(e => {
console.log(e)
})
break
//COMANDOS PARA GRUPOS
case 'dono':
case 'bot':{
if(command === 'bot') {
await reagir(from, "💖");
await reply(`Bot: ${NomeBot}\n\nContato: wa.me/${botNumber.split("@")[0]}`);
} else if(command === 'dono') {
await reagir(from, "👑");
await reply(`Dono: ${NickDono}\n\nContato: wa.me/${NumberDono}`);
}
}
break;

//COMAMDOS DE IA
case 'gpt': case 'chatgpt': {
	try {
		if(!q?.trim()) return reply("parâmetro: query, obrigatório.");
		conn.sendMessage(from, { 
			react: {
				text: "😌",
				  key: info.key },
				}
		);
		const { data } = await axios.get(
		  Shizukusite+"/api/ias/gpt",  {
			params: { query: q?.trim() },
			  timeout: 4000 }
		);
		
		if(!data || !data?.status || !data?.resultado) {
			return reply("vish! parece que a API não retornou um resultado válido.");
		};
		
		const { resposta } = data?.resultado?.data[0];
		
		await reply(resposta);
		} catch (e) {
			reply(msg.Error);
			console.log(e) 
		};
	break;
};

case 'perplexity': case 'perplexity-ai': {
	try {
		if(!q?.trim()) return reply("parâmetro: query, obrigatório.");
		conn.sendMessage(from, { 
			react: {
				text: "😌",
				  key: info.key },
				}
		);
		const { data } = await axios.get(
		  Shizukusite+"/api/ias/perplexity-ai",  {
			params: { query: q?.trim() },
			  timeout: 4000 }
		);
		
		if(!data || !data?.status || !data?.resposta) {
			return reply("vish! parece que a API não retornou um resultado válido.");
		};
		
		const { resposta } = data
		
		await reply(resposta)
		} catch (e) {
			reply(msg.Error);
			console.log(e) 
		};
	break;
};

case 'gemini': case 'gemini-ai': {
	try {
		if(!q?.trim()) return reply("parâmetro: query, obrigatório.");
		conn.sendMessage(from, { 
			react: {
				text: "🤓" ,
				  key: info.key },
				}
		);
		const { data } = await axios.get(
		  Shizukusite+"/api/ias/gemini",  {
			params: { query: q?.trim() },
			  timeout: 4000 }
		);
		
		if(!data || !data?.status || !data?.resposta) {
			return reply("vish! parece que a API não retornou um resultado válido.");
		};
		
		const { resposta } = data
		
		await reply(resposta)
		} catch (e) {
			reply(msg.Error);
			console.log(e) 
		};
	break;
};
			

case 'play2': {
try {if (!q) return reply("Digite o nome da música.");
await reagir(from, "🎵");
const pesquisa = await ytSearch(q?.trim());
const i = pesquisa?.videos?.[0];
if (!i?.url) return reply("Não encontrei resultados.");
const textoMusica = `
𖦹҉ 🎼 *𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂̧𝐎̃𝐄𝐒*╰៚݈݇

⸵░⃟💿̸꙰ 𝐓𝐢́𝐭𝐮𝐥𝐨: ${i?.title}
⸵░⃟👤̸꙰ 𝐀𝐮𝐭𝐨𝐫: ${i?.author?.name}
⸵░⃟⏱̸꙰ 𝐓𝐞𝐦𝐩𝐨: ${i?.timestamp}
⸵░⃟👁̸꙰ 𝐕𝐢??𝐰𝐬: ${i?.views}
⸵░⃟📅̸꙰ 𝐀𝐠𝐨: ${i?.ago}

░⃟⃛🔗༘݊➮ ${i?.url}

${isButtons ? " 𖨮𖡎｡ *𝐄??𝐂𝐎𝐋𝐇𝐀 𝐔𝐌𝐀 𝐎𝐏𝐂̧𝐀̃𝐎*" : "Enviando sua música, aguarde..."}
`;
if(isButtons) {
const buttons = [
  { buttonId: `${prefix}ytaudio ${i?.url}`, buttonText: { displayText: "🎧 𝐁𝐀𝐈𝐗𝐀𝐑 𝐀𝐔𝐃𝐈𝐎" }, type: 1 },
  { buttonId: `${prefix}ytvideo ${i?.url}`, buttonText: { displayText: "🎬 𝐁𝐀𝐈𝐗𝐀𝐑.𝐕𝐈𝐃𝐄𝐎" }, type: 1 },
  { buttonId: `${prefix}pdoc ${i?.url}`, buttonText: { displayText: "📤 𝐁𝐀𝐈𝐗𝐀𝐑 ??𝐌 ??𝐎𝐂" }, type: 1 }
];

await conn.sendMessage(from, {image: { url: i?.thumbnail},
  caption: textoMusica,
  footer: "Shizuku Base — v1.0",
  buttons,
  headerType: 1
}, {quoted: info});


} else {
await conn.sendMessage(from, { text: textoMusica}, {quoted: info});
const audio = await getBuffer(
		    Shizukusite+"/api/downloads/ytaudio2?url="+q?.trim()
		);
		if(!audio) {
			return reply("vish! parece que a API retornou um resultado inválido.");
			}
		await conn.sendMessage(from, {
			audio,
			  mimetype: "audio/mpeg",
                 ptt: true }, 
			       { 
				     quoted 
				}
			)
await conn.sendMessage(from, { audio, mimetype: "audio/mpeg"}, { quoted: info })
}
	
  } catch (e) {
    console.log("Erro no playteste:", e);
    reply("Erro ao buscar música.");
  }
}
break;

case 'play': {
  try {
    if (!q?.trim()) return reply("𝚍𝚒𝚐𝚒𝚝𝚎 𝚘 𝚗𝚘𝚖𝚎 𝚍𝚊 𝚖𝚞́𝚜𝚒𝚌𝚊, 𝚒𝚗𝚞́𝚝𝚒𝚕... 👓")

    await reagir(from, "🎧")

    const pesquisa = await ytSearch(q.trim())
    const videos = pesquisa?.videos?.slice(0, 5) 

    if (!videos || videos.length === 0)
      return reply("𝚗𝚊̃𝚘 𝚎𝚗𝚌𝚘𝚗𝚝𝚛𝚎𝚒 𝚗𝚊𝚍𝚊. ᴍɪɴʜᴀ ᴍᴇɴᴛᴇ ᴇsᴛᴀ́ ᴇᴍ ʙʀᴀɴᴄᴏ. ❄️")

    const texto = `
╔═══ 🕸️ 𝐒𝐇𝐈𝐙𝐔𝐊𝐔 - 𝐏𝐋𝐀𝐘 🕸️ ═══╗
║
║  🔍 *𝙱𝚞𝚜𝚌𝚊:* ${q.trim()}
║  🎬 *𝚃𝚒𝚝𝚞𝚕𝚘:* ${videos[0].title}
║  ⏱️ *𝙳𝚞𝚛𝚊𝚌̧𝚊̃𝚘:* ${videos[0].timestamp}
║
╚════════════════════════╝

   “𝖡𝗅𝗂𝗇𝗄𝗒, 𝗏𝖺𝗆𝗈𝗌 𝗉𝗋𝖾𝗉𝖺𝗋𝖺𝗋 𝗈𝗌 𝖺𝗋𝗊𝗎𝗂𝗏𝗈𝗌...” 🧹`.trim()

    const mediaContent = await generateWAMessageContent(
      { image: { url: videos[0].thumbnail } }, 
      { upload: conn.waUploadToServer }
    )

    const rowsAudio = videos.map((v) => ({
      header: "🎧 ÁUDIO",
      title: v.title,
      description: `⏱️ ${v.timestamp} • 👤 ${v.author.name}`,
      id: `${prefix}ytaudio ${v.url}`
    }))

    const rowsVideo = videos.map((v) => ({
      header: "🎬 VÍDEO",
      title: v.title,
      description: `⏱️ ${v.timestamp} • 👤 ${v.author.name}`,
      id: `${prefix}ytvideo ${v.url}`
    }))

    const rowsDoc = videos.map((v) => ({
      header: "📄 DOCUMENTO",
      title: v.title,
      description: `⏱️ ${v.timestamp} • 👤 ${v.author.name}`,
      id: `${prefix}pdoc ${v.url}`
    }))

    const botoes = [
      {
        name: "single_select",
        buttonParamsJson: JSON.stringify({
          title: "📥 𝙴𝚂𝙲𝙾𝙻𝙷𝙴𝚁 𝙵𝙾𝚁𝙼𝙰𝚃𝙾",
          sections: [
            { title: "🎵 𝙼𝚄́𝚂𝙸𝙲𝙰𝚂 (𝙰𝚄́𝙳𝙸𝙾)", rows: rowsAudio },
            { title: "🎥 𝚅𝙸𝙳𝙴𝙾𝚂 (𝙼𝙿𝟺)", rows: rowsVideo },
            { title: "📂 𝙰𝚁𝚀𝚄𝙸𝚅𝙾𝚂 (𝙳𝙾𝙲)", rows: rowsDoc }
          ]
        })
      },
      {
      name: "cta_url",
      buttonParamsJson: JSON.stringify({
        display_text: "𝙰𝙲𝙴𝚂𝚂𝙰𝚁 𝙲𝙰𝙽𝙰𝙻 𝙳𝙾 𝙲𝚁𝙸𝙰𝙳𝙾𝚁",
        url: "https://whatsapp.com/channel/0029VbC5uMd3GJP2mhrSmI2T"
      })
    }
    ]

    await conn.relayMessage(
      from,
      {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            imageMessage: mediaContent.imageMessage
          },
          body: { text: texto },
          footer: { text: "🧤 𝚂𝚑𝚒𝚣𝚞𝚔𝚞 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝚂𝚢𝚜𝚝𝚎𝚖" },
          nativeFlowMessage: {
            buttons: botoes
          }
        }
      },
      { quoted: info }
    )

  } catch (e) {
    console.log("Erro no play:", e)
    reply("😵‍💫 𝚘𝚙𝚜... 𝚘𝚌𝚘𝚛𝚛𝚎𝚞 𝚞𝚖 𝚎𝚛𝚛𝚘 𝚊𝚘 𝚋𝚞𝚜𝚌𝚊𝚛. ʙʟɪɴᴋʏ ᴀsᴘɪʀᴏᴜ ᴏ sɪɴᴀʟ.")
  }
}
break

case 'pdoc':
try {
if(!q?.trim()) return reply("Por favor adicione um link do YouTube!")
await reagir(from, "📤");
const audio = await getBuffer(
		    Shizukusite+"/api/downloads/ytaudio2?url="+q?.trim()
		);
		if(!audio) {
			return reply("vish! parece que a API retornou um resultado inválido.");
			}
		await conn.sendMessage(from, {
			audio,
			  mimetype: "audio/mpeg",
                 ptt: true }, 
			       { 
				     quoted 
				}
			)
await conn.sendMessage(from, {document: audio,
mimetype: "audio/mpeg", fileName: "audio.mp3", ptt: false, contextInfo: ShizukuStile}, {quoted: info});
} catch (e) {
reply("Error...") 
} break 

case 'ytaudio': {
	try { 
		if(!q?.trim()) return reply("Parâmetro: url, faltando.");
		  conn.sendMessage(from, {
			react: {
				text: "⌛", 
				  key: info.key },
				}
			);
		  const audio = await getBuffer(
		    Shizukusite+"/api/downloads/ytaudio2?url="+q?.trim()
		);
		if(!audio) {
			return reply("vish! parece que a API retornou um resultado inválido.");
			}
		await conn.sendMessage(from, {
			audio,
			  mimetype: "audio/mpeg",
                 ptt: true }, 
			       { 
				     quoted 
				}
			)
		.catch((e) => {
			reagir(from, "❌");
			console.log(e.message)
		});
	} catch (e) {
	reply("Erro ao realizar download do áudio. 😢");
	console.log(e)
  }
 break;
};


case 'ytvideo': {
	try { 
		if(!q?.trim()) return reply("Parâmetro: url, faltando.");
		  conn.sendMessage(from, {
			react: {
				text: "⌛", 
				  key: info.key },
				}
			);
		  const video = await getBuffer(
		    Shizukusite+"/api/downloads/ytvideo2?url="+q?.trim()
		);
		if(!video) {
			return reply("vish! parece que a API retornou um resultado inválido.");
			}
		await conn.sendMessage(from, {
			video,
			  mimetype: "video/mp4",
                 caption: "Download via Shizuku API's"}, 
			       { 
				     quoted 
				}
			)
		.catch((e) => {
			reagir(from, "❌");
			console.log(e.message)
		});
	} catch (e) {
	reply("Erro ao realizar download do vídeo. 😢");
	console.log(e)
  }
 break;
};

//DOWNLOADS
case 'ytmp4':
case 'play_video': {
  try {
    if (!q?.trim()) return reply("❌ Insira o nome ou link do vídeo");
    await conn.sendMessage(from, { text: msg.Aguarde }, { quoted: selo });
    
    let videoUrl;
    let titulo;
    if (q.includes("youtube.com") || q.includes("youtu.be")) {
      videoUrl = q.trim();
    } 
    else {
      const pesquisa = await ytSearch(q.trim());
      const dados = pesquisa?.videos?.[0];

      if (!dados?.url) {
        return conn.sendMessage(
          from,
          { text: "❌ Nenhum resultado encontrado, tente outro nome!" },
          { quoted: selo }
        );
      }

      videoUrl = dados.url;
      titulo = dados.title;
    }
const video = await getBuffer(
		    Shizukusite+"/api/downloads/ytvideo2?url="+videoUrl?.trim()
		);
		if(!video) {
			return reply("vish! parece que a API retornou um resultado inválido.");
			}
		
await conn.sendMessage(
from,
      {
        video: video,
        mimetype: "video/mp4",
        fileName: `${titulo || "video"}.mp4`
      },
      { quoted: selo }
    );

    await conn.sendMessage(from, { react: { text: "✅", key: info?.key } });

  } catch (Error) {
    console.log("Erro no play_video:", Error);
    await conn.sendMessage(
      from,
      { text: msg.Error },
      { quoted: info }
    );
    await conn.sendMessage(from, { react: { text: "❌", key: info?.key } });
  }
}
break;

case 'tiktok': {
if(!q?.trim() || !SoLink) return reply("você deve adicionar após o comando o Link do vídeo do tiktok");
await reagir(from, "⌛")
try {
const { data } = await axios.get(Shizukusite+"/api/downloads/tiktok-dl", {
params: {
url: q?.trim(),
},
});

const { titulo, duracao, videos, estatisticas, criado_em } = data?.resultado;
const { views, comentarios, compartilhamentos, likes, downloads } = estatisticas;

caption = `*🩶 SHIZUKU - DOWNLOADS 🩶*\n
ℹ️ *INFORMAÇÕES DO VÍDEO:*\n
📌 *Título:* ${titulo}
⏳ *Duração:* ${duracao} segundos
👍 *Likes:* ${likes}
👁️ *Views:* ${views}
💬 *Comentários:* ${comentarios}
🔁 *Compartilhamentos:* ${compartilhamentos}
⬇️ *Downloads:* ${downloads}
📅 *Criado Em:* ${criado_em}
`;
video = await getBuffer(videos.hd);
await conn.sendMessage(from, { video, mimetype: "video/mp4", caption }, {quoted: info});

} catch (e) {
reply(msg.Error)
console.log("Erro em: ", e)
} 
break;
}


case 'tiktok-video':{
try {
if(!q?.trim() || !SoLink) return reply("Voce deve adicionar um link que seja de um vídeo do tiktok");
await reagir(from, "⌛");
const { data } = await axios.get(
Shizukusite+"/api/downloads/tiktok-video", {
params: {
url: q.trim()
}
});
  
  const { titulo, video_hd } = data.resultado;
  const { nome, username } = data.resultado.autor;
  
  caption = `- 🎶 Titulo: ${titulo || "Não encontrado"}
- 👤Author: ${nome || "Sem nome"}
- 🥷User: ${username || "User"}
  `;
video = await getBuffer(video_hd);
await conn.sendMessage(from, { 
video, 
mimetype: "video/mp4",
caption}, 
{quoted: info })
 } catch (err) {
 reply(msg.Error)
 console.log(" Error: ", err);
 }
 break;
 }
 
case 'tiktoksearch': {
try {
if(!q?.trim()) return reply(`Exemplo: ${prefix + command} Shizuku murasaki Edits`);
await reagir(from, "⌛");
const { data } = await axios.get(Shizukusite + "/api/pesquisas/tiktok-search", {
params: {
query: q?.trim()
}
});

const { titulo, duracao, views, likes, comentarios, compartilhamentos, capa, musica, autor, musica_info } = data?.resultados[0];
image = await getBuffer(capa);
audio = await getBuffer(musica_info?.audio)
video = await getBuffer(data?.resultados[0]?.video)
 
caption = `*Informações do vídeo:*\n
*🔷 Título do Vídeo:* ${titulo}
*⏳ Duração:* ${duracao} segundos
*👁️ Views:* ${views}
*👍 Likes:*  ${likes}
*💬 Comentários:* ${comentarios}
*🔁 Compartilhamentos:* ${compartilhamentos}
      
*Informações da música:*
      
*🎶 Título da Música:* ${musica_info?.titulo || 'Não disponível'}
*🎵 Autor:* ${musica_info?.autor || 'Não disponível'}
*🎧 Duração da Música:* ${musica_info?.duracao || 'Não disponível'}
    `;

await conn.sendMessage(from, { image, caption }, {quoted: info })
setTimeout(() => {
conn.sendMessage(from, { video, mimetype: "video/mp4" }, {quoted: info})
}, 2000);
await conn.sendMessage(from, { audio, mimetype: "audio/mpeg"}, {quoted: info})
} catch (e) {
console.error(e);
await reply(msg.Error)
}
break;
}
	
case 'ttksearch': {
if(!q?.trim()) return reply("adicione o parâmetro título do vídeo");
try { await reagir(from, "✅");
const ttks = await ttksearch(q, conn, from, quoted, selo, SHIZUKU_SITE, SHIZUKU_KEY);
const { title, urls, mime, audio }  = ttks;
await conn.sendMessage(from, {video: {url: urls }, mimetype: mime, caption: `✏️  *Título: ${title}`}, {quoted: info});
setTimeout(() => {
conn.sendMessage(from, {audio: {url: audio}, mimetype: "audio/mpeg"}, {quoted: info});
}, 1200);
} catch (e) {
reply(msg.Error)
}
} break;

case 'ttkdl': case 'tiktokdl': {
try {
if(!q?.trim()) { 
return reply("*_Cade o url do video?_*") 
}
if(!SoLink)  return reply("*_Apenas links_*") 
await reply(msg.Download)
const ttk = await ttkdl(q, conn, from, info, quoted, ShizukuStile, SHIZUKU_SITE, SHIZUKU_KEY);
await reagir(from, "✅");
const { txt, thumb, audioMp3, videoMp4 }  = ttk
 await conn.sendMessage(from, { image: { url: thumb }, caption: txt}, {quoted: info});

setTimeout(() => {
conn.sendMessage(from, {video: {url: videoMp4 }, mimetype: "video/mp4"}, {quoted: info});
}, 1200);
setTimeout(() => {
conn.sendMessage(from, {audio: {url: audioMp3 }, mimetype: "audio/mpeg"}, {quoted: info});
}, 1200);
} catch (e) {
reply(msg.Error)
console.log("erro:", e)
}
}break;

case 'instagram': {
if(!q?.trim() || !SoLink)  return reply("Você deve adicionar um link do Instagram");
try {
await reply(msg.Aguarde);
const igdl = await instadl(q, conn, from, info, quoted, ShizukuStile, SHIZUKU_SITE, SHIZUKU_KEY) ;
if(! igdl.url) return reply("Ocorreu um erro na solicitação, tente mais tarde.");
video = await getBuffer(igdl.url);
await conn.sendMessage(from, { video, mimetype: "video/mp4"}, {quoted: info})
.catch((e) => {
reagir(from, "❌");
console.log(e) 
})
} catch (e) {
reply(msg.Error)
console.log(" Erro: ", e);
}
break;
}
	
case 'instadl': {
try {
if(!q.trim()) {
return reply("*_Cade o link do vídeo do Instagram?_*")
} 
if(!SoLink) return reply("*_Apenas links_*");
await reply(msg.Download);
const ig = await instadl(q, conn, from, info, quoted, ShizukuStile, SHIZUKU_SITE, SHIZUKU_KEY) 
const { thumb, url } = ig
await conn.sendMessage(from, {image: {url: thumb }, caption: "AGUARDE, ja estou enviando o vídeo!"}, {quoted: info});
setTimeout(() => {
conn.sendMessage(from, {video: {url: url }, mimetype: "video/mp4"}, {quited: info});
}, 1200);

await reagir(from, "✅");
} catch (e) {
await reply(msg.Error)
console.log("erro:", e)
}
}
break;

//METADINHAS
case 'metadinhas': {await reagir(from, "🧑‍🤝‍🧑");
try {const met = await METADINHAS(conn, from, info,quoted, SHIZUKU_KEY, SHIZUKU_SITE);
const { feminino, masculino } = met;
await conn.sendMessage(from, {image: {url: feminino}, caption: "*🫅| Perfil feminino"}, {quoted: info});
setTimeout(() => {
conn.sendMessage(from, {image: {url: masculino}, caption: "*🫅| Perfil feminino"}, {quoted: info});
}, 1200);
} catch (e) {reply(msg.Error) }
} break 


//COMANDOS DE DONO!!
case 'setprefix':
if (!So_Dono) return reply(msg.SoDono);
if (!q) return reply("Digite o novo prefixo. Ex: *!setprefix .*");
const novoPrefix = q.trim();
Config.prefix = novoPrefix;
fs.writeFileSync("./dono/dono.json", JSON.stringify(Config, null, 4));
reply(`✔ Prefixo alterado para: *${novoPrefix}*`);
break;

case 'nick-dono':
if (!So_Dono) return reply(msg.SoDono);
const novaNick = q.trim();
Config.NickDono = novaNick;
fs.writeFileSync("./dono/dono.json", JSON.stringify(Config, null, 4));
reply(`✔ Nick do dono alterado para: *${novaNick}*`);
break;

case 'nome-bot':
if (!So_Dono) return reply(msg.SoDono);
const novoNome = q.trim();
Config.NomeBot = novoNome;
fs.writeFileSync("./dono/dono.json", JSON.stringify(Config, null, 4));
reply(`✔ Nome do bot alterado para: *${novoNome}*`);
break;

case 'novo-dono':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!setdono 551199999999*");
const novoDn = q.split("@")[0] || menc_os2.split("@")[0];
const novoDono = novoDn;
Config.NumberDono = novoDono;
fs.writeFileSync("./dono/dono.json", JSON.stringify(Config, null, 4));
reply(`✔ *Número do dono atualizado!*\nNovo dono: wa.me/${novoDono}`);
break;

case 'dono1':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!dono1 551199999999*");
const novodn1 = q.split("@")[0] || menc_os2.split("@")[0];
const Dono1 = novodn1;
Config2.dono1 = Dono1;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Pronto mestre!*\n${NomeBot} agora tem um novo dono!\n\n👑 Dono 1: wa.me/${Dono1}`);
break;


case 'dono2':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!dono2 551199999999*");
const novodn2 = q.split("@")[0] || menc_os2.split("@")[0];
const Dono2 = novodn2;
Config2.dono2 = Dono2;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Número do dono atualizado!*\n\n👑 Dono 2: wa.me/${Dono2}`);
break;


case 'dono3':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!dono3 551199999999*");
const novodn3 = q.split("@")[0] || menc_os2.split("@")[0];
const Dono3 = novodn3;
Config2.dono3 = Dono3;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Número do dono atualizado!*\n\n👑 Dono 3: wa.me/${Dono3}`);
break;


case 'dono4':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!dono4 551199999999*");
const novodn4 = q.split("@")[0] || menc_os2.split("@")[0];
const Dono4 = novodn4;
Config2.dono4 = Dono4;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Número do dono atualizado!*\n\n👑 Dono 4: wa.me/${Dono4}`);
break;


case 'dono5':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!dono5 551199999999*");
const novodn5 = q.split("@")[0] || menc_os2.split("@")[0];
const Dono5 = novodn5;
Config2.dono5 = Dono5;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Número do dono atualizado!*\n\n👑 Dono 5: wa.me/${Dono5}`);
break;


case 'dono6':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!dono6 551199999999*");
const novodn6 = q.split("@")[0] || menc_os2.split("@")[0];
const Dono6 = novodn6;
Config2.dono6 = Dono6;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Número do dono atualizado!*\n\n👑 Dono 6: wa.me/${Dono6}`);
break;

case 'botoff':
case 'boton': {
if(!So_Dono) return reply(msg.SoDono);
if(command === 'botoff') {
if (BotOff === true) return reply(`❌ *${NomeBot} já está DESLIGADO, mestre...*`);
Config2.botoff = true;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
return reply(
`⛔ *SISTEMA DESATIVADO*

✅ Somente você poderá usar meus comandos agora.
🕸️ *Shizuku entrou no modo silencioso...*`);
}
if(command === 'boton') {
if(BotOff === false) return reply(`⚠️ *${NomeBot} já está ATIVO, mestre!*`);
Config2.botoff = false;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
return reply(
`✅ *SISTEMA REATIVADO*

💖 Todos os usuários agora podem usar meus comandos novamente.
🔥 *Shizuku voltou ao combate!*`);
}
}
break;

case 'so_dono': {
 if (!So_Dono) return reply(msg.SoDono)
Config2.isSoDono = !Config2.isSoDono
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4))
if (Config2.isSoDono) {
reply("✅ Sucesso mestre! Agora apenas os *donos* podem usar meus comandos.")
} else {
 reply("✅ Sucesso mestre! Todos os comandos foram reativados, qualquer um pode usar novamente.")
 }
 break
}

case 'bangp':
case 'unbangp':
if(!isGroup) return reply(msg.SoEmGrupos)
if(!So_Dono) return reply(msg.SoDono)
if(command == 'bangp'){
if(isBanGrupo) return reply(`Este grupo já está banido.`)
dataGp[0].bangp = true
setGp(dataGp)
reply(`Grupo banido com sucesso`)
} else {
if(!isBanGrupo) return reply(`Este grupo não está mais banido.`)
dataGp[0].bangp = false
setGp(dataGp)
reply(`Grupo desbanido...`)
}
break

case 'reiniciar': case 'r':{
if(!So_Dono) return reply(msg.SoDono)
setTimeout(async () => {
reply("Reiniciando...")
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
}
break

case 'donos':
case 'listadonos': {
let texto = `📝 *LISTA OFICIAL DE DONOS — ${NomeBot}*

🤴 *Dono Principal*
👑 ${NickDono}
📞 wa.me/${NumberDono}

━━━━━━━━━━━━━━━━━━

🤴 *Donos Adicionais:*`;

let donos = [
  Config2?.dono1,
  Config2?.dono2,
  Config2?.dono3,
  Config2?.dono4,
  Config2?.dono5,
  Config2?.dono6
];

donos.forEach((dono, i) => {
  if(dono && dono !== "undefined" && dono !== "") {
    texto += `\n👑 Dono ${i+1}: wa.me/${dono}`;
  }
});

texto += `

━━━━━━━━━━━━━━━━━
`;

conn?.sendMessage(from, {image: fs.readFileSync("./dono/menus/Foto-menu/img-menu.jpg"), caption: texto, contextInfo: ShizukuStile}, {quoted: info});
}
break;

case 'verificado':
if(!So_Dono) return reply(msg.SoDono)
if(!isVerificado) {
Config2.verificado = true
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`O verificado foi Ativado`)
} else if(isVerificado) {
Config2.verificado = false
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`O verificado foi Desativado`)
}
break

case 'antipv':
if(!So_Dono) return reply(msg.SoDono)
if(!isAntiPv) {
Config2.antipv = true
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`O anti privado foi Ativado`)
} else if(isAntiPv) {
Config2.antipv = false
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`O ant privado foi Desativado`)
}
break

case 'botoes':
if(!So_Dono) return reply(msg.SoDono)
if(!isButtons) {
Config2.buttons = true
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`Buttons foi Ativado`)
} else if(isButtons) {
Config2.buttons = false
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`Buttons foi Desativado`)
}
break

case 'totalcases':
try {
const fileContent = fs.readFileSync("index.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
const cont = caseNames.length;
await reply(`${cont}`)
} catch (error) {
console.log(error)
reply("Erro ao obter o total de comandos");
}
break;

case 'cases':
if(!So_Dono) return reply("Você não é dono para utilizar este comando...")
try {
const listCases = () => {
const fileContent = fs.readFileSync("index.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
if (caseNames) {
return caseNames.map((caseName, index) => `${index + 1}. ${caseName.match(/'(.+?)'/)[1]}`).join('\n');
} else {
reply("Nenhuma case encontrada.") } }
conn.sendMessage(from, { text: listCases() }, { quoted: info });
} catch (e) {
console.log(e)
reply('Ocorreu um erro ao obter as cases.') }
break

case 'visumsg':
case 'visualizarmsg':
if(!So_Dono) return reply(msg.SoDono)
if(!isVisualizar) {
Config2.visualizar = true
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(" Ativou com sucesso, agora o bot irá visualizar todas as mensagens recebidas nos grupos/chats")
} else if(isVisualizar) {
Config2.visualizar = false
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply("Desativou com sucesso, agora o bot não irá mais visualizar nenhuma mensagem recebida")
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bio-bot':
if(!So_Dono) return reply(msg.SoDono);
const BioBot = args.join(" ");
await conn.updateProfileStatus(`${BioBot}`);
reply(`Sucesso, meu recado foi alterado para: *${BioBot.trim()}*`);
break;

case 'name-perfil-bot':
if(!So_Dono) return reply(msg.SoDono);
const NameBot = args.join(" ");
await conn.updateProfileName(`${NameBot}`)
reply(`Sucesso, meu recado foi alterado para: *${NameBot.trim()}*`);
break;

case 'fotomenu':
case 'fundomenu': {
if (!So_Dono) return reply(msg.SoDono);
let img = null;
if (isQuotedImage) {
img = info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
} else if (isImage) {
img = info.message.imageMessage
} else {
return reply(`❌ Marque uma imagem ou envie uma imagem com o comando:\n\n${prefix + command}`)
}
let stream = await downloadContentFromMessage(img, 'image')
let buffer = Buffer.from([])
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}

fs.writeFileSync('./dono/menus/Foto-menu/img-menu.jpg', buffer);
reply(`Foto do menu salva localmente em *"./dono/menus/Foto-menu/img-menu.jpg"*`)
}
break;

case 'setperfil': {
if(!So_Dono) return reply(msg.SoDono);
let img = null

if (isQuotedImage) {
img = info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
} else if (isImage) {
img = info.message.imageMessage
} else {
return reply(`❌ Marque uma imagem ou envie uma imagem com o comando:\n\n${prefix + command}`)
}
await reply("Atualizando foto do meu perfil...")
let stream = await downloadContentFromMessage(img, 'image')
let buffer = Buffer.from([])
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}

await conn.updateProfilePicture(botNumber, buffer)
reply("✅ Foto do meu perfil atualizada com sucesso!")
await pararDigitando(from)
}
break

case 'rm-fotobot':
case 'rmfotobot':{
if(!So_Dono) return reply(msg.SoDono);
await reply("Removendo a foto do meu perfil, aguarde....");
await conn.removeProfilePicture(botNumber);
setTimeout(() =>{
reply("Sucesso, agora meu perfil não possui mais foto");
}, 1200);
} break;

case 'ser':
if (!So_Dono) return reply(msg.SoDono)

if (!q) return reply(`Escolha uma opção:\n\n${prefix+command} adm\n${prefix+command} membro`);

const opcao = q.trim().toLowerCase();
const metadata_2 = await shizuku.groupMetadata(from);
const ownerId = metadata_2.owner;
const isSenderAdmin = So_Admins.includes(sender);
const isCreator = sender === ownerId;

if (opcao === 'adm' ||opcao === 'admin') {
    if (isSenderAdmin) return reply("Você já é um administrador do grupo.");
    await shizuku.groupParticipantsUpdate(from, [sender], "promote");
    mentions(`@${sender.split("@")[0]} Pronto - Agora você é um administrador.`, [sender], true);

} else if (opcao === 'membro') {
    if (isCreator) return reply("Você é o criador do grupo, não pode ser rebaixado.");
    if (!isSenderAdmin) return reply("Você já é um membro comum.");
    await shizuku.groupParticipantsUpdate(from, [sender], "demote");
    mentions(`@${sender.split("@")[0]} Pronto - Agora você é um membro comum novamente.`, [sender], true);

} else {
    reply(`Opção inválida!\nEscolha:\n${prefix+command} adm\n${prefix+command} membro`);
}
break;


//OUTROS COMANDOS INFORMATIVOS 
case 'ping': {
  try {
conn.sendMessage(from, { react: { text: "🏃‍♀️", key: info.key }});
    const uptime = process.uptime();
    const r = (Date.now() / 1000) - info.messageTimestamp;

    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const usedPercent = (usedMem / totalMem) * 100;

    const totalRamGB = (totalMem / 1024 / 1024 / 1024).toFixed(2);
    const freeRamGB = (freeMem / 1024 / 1024 / 1024).toFixed(2);
    const usedRamGB = (usedMem / 1024 / 1024 / 1024).toFixed(2);

    const Texto = `- *🏓 | STATUS PING - SHIZUKU BASE*
> ${tempo}, ${pushname}!!
•
- *⏳ | ${NomeBot} está ativa por:* 
- → ${kyun(uptime)}
- *⚡ | velocidade:* → ${r.toFixed(3)}s
- *📊 | Ram Total:* → ${totalRamGB}GB
- *📉 | Ram usada:* → ${usedRamGB}GB
- *📈 | Ram Disponível:* → ${freeRamGB}GB
- *🧾 | processo:* → ${usedPercent.toFixed(1)}%`;

if(isButtons) {
const buttons = [
  { buttonId: `${prefix}Ping`, buttonText: { displayText: "🔄 Atualizar" }, type: 1 },
  { buttonId: `${prefix}Menu`, buttonText: { displayText: "📁 Abrir Menu" }, type: 1 }
  ];
  
await conn.sendMessage(from, {text: Texto, footer: "By: jpzinh 👑", buttons, headerType: 1}, {quoted: info})
} else {
await reply(Texto);
}
  } catch (e) {
    console.log(e);
    reply("Erro ao mostrar ping.");
  }
}
break;

//PLAQUINHAS 
case 'plaq1':
case 'plaq2':
case 'plaq3':
case 'plaq4':
case 'plaq5':
case 'plaq6':
case 'plaq7':
case 'plaq8':
case 'plaq9':
case 'plaq10':
case 'plaq11':
try {
if(!isVip) return reply(msg.IsVipp)
if(!q.trim()) return reply(`ex: ${prefix+command} Jpzinh`);
await reply(isGroup ? "*_Enviando plaquinha no seu pv_*." : "*_Enviando.._*")

const Imagem = await getBuffer(`${SHIZUKU_SITE}/api/${command}?query=${encodeURIComponent(q.trim())}&apitoken=${SHIZUKU_KEY}`)

await conn.sendMessage(sender, {image: Imagem, caption: "Plaquinha criada com sucesso!"}, {quoted: info});
} catch (e) {
reply(msg.Error)
} break;

//FIGURINHAS 
case 'figu_raiva': case 'figu_roblox': case 'figu_engracada':
case 'figu_memes': case 'figu_anime': case 'figu_coreana': case 'figu_bebe': case 'figu_desenho': case 'figu_animais':
case 'figu_flork': case 'figu_emoji':{
if(!isVip) return reply(msg.IsVipp);
if (!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 20`)
if (q >= 20) return reply("Coloque abaixo de 20..")
await reply(isGroup ? `⌛ | *_Estou enviando ${q} figurinhas no seu PV, águarde..._*` : `⌛ | *_Enviando..._*`)
await conn.sendMessage(from, {react: {text: "💖", key: info?.key}})         
async function figu_figura() {
const figura = await getBuffer(`${SHIZUKU_SITE}/sticker/${command}?apitoken=${SHIZUKU_KEY}`)
conn.sendMessage(sender, {sticker: figura, contextInfo: ShizukuStile}, {quoted: info})
}
for (i = 0; i < q; i++) {
await sleep(1000)
figu_figura()
}
break
}

case 'figurinhas': case 'figuale':{
if (!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 20`)
if (q >= 20) return reply("Coloque abaixo de 20..")
await reply(isGroup ? `⌛ | *_Estou enviando ${q} figurinhas no seu PV, águarde..._*` : `⌛ | *_Enviando..._*`)
await conn.sendMessage(from, {react: {text: "💖", key: info?.key}})         
async function figu_Jpzinh() {
var rnd = Math.floor(Math.random() * 8051)
const figura = await getBuffer(`${SHIZUKU_SITE}/sticker/aleatorio?apitoken=${SHIZUKU_KEY}`);
conn.sendMessage(sender, {sticker: figura, contextInfo: ShizukuStile}, {quoted: info})
}
for (i = 0; i < q; i++) {
await sleep(1000)
figu_Jpzinh()
}
break
};

case 'gerarnick':
case 'fazernick': {
  try {
    const nick = args.join(" ");
    if (!nick) {
      return reply(`✍️ Escreva um nome para gerar nicks.\n\nEx: ${prefix + command} jpzinh`);
    }

    if (ANT_LTR_MD_EMJ(nick)) {
      return reply("⚠️ Use apenas letras normais, sem emojis ou caracteres modificados!");
    }

    await reply("*_GERANDO NICKS, AGUARDE..._*");

    const { data } = await axios.get(
      `${Shizukusite}/api/geradores/gerar-nicks?text=${encodeURIComponent(nick)}`
    );
console.log(data)
    const resultados = Array.isArray(data?.resultado)
      ? data.resultado
      : Array.isArray(data)
      ? data
      : [];

    if (!resultados.length) {
      return reply("❌ Não consegui gerar nicks. Tente outro nome!");
    }

    const txt = `
💈 *NICKS GERADOS — ${NomeBot}* 💈
📌 Total: ${resultados.length}

Escolha um Nick abaixo para copiar:
`.trim();
    if (isButtons) {
      const interactiveButtons = resultados
        .slice(0, resultados.length)
        .map((r) => ({
          name: "cta_copy",
          buttonParamsJson: JSON.stringify({
            display_text: r?.result || r,
            copy_code: r?.result || r
          })
        }));

      await conn.sendMessage(
        from,
        {
          text: txt,
          footer: NomeBot,
          interactiveButtons
        },
        { quoted: info }
      );
    } else {
      let txtNicks = `💈 *NICKS GERADOS* 💈\n\n`;

      resultados.forEach((r, i) => {
        txtNicks += `*${i + 1}.* ${r?.result || r}\n`;
      });

      reply(txtNicks.trim());
    }

  } catch (err) {
    console.error("Erro no gerarnick:", err);
    reply(msg.Error)
  }
}
break;

case 'ativar': {
  try {
    if (!isGroup) return reply(msg.SoEmGrupos);
    if (!isGroupAdmins && !So_Dono) return reply(msg.SoAdm)
    await reagir(from, "⚙️");

    let ppGroup;
    try {
      ppGroup = await conn.profilePictureUrl(from, 'image');
    } catch {
      ppGroup = 'https://files.catbox.moe/vtluad.jpg'; // Link reserva
    }

    const texto = `
╔═══ 🕸️ 𝐆𝐄𝐑𝐄𝐍𝐂𝐈𝐀𝐌𝐄𝐍𝐓𝐎 🕸️ ═══╗
║
║  📍 **𝙶𝚛𝚞𝚙𝚘:** ${NomeGrupo}
║  ⚙️ **𝚂𝚝𝚊𝚝𝚞𝚜:** 𝙰𝚓𝚞𝚜𝚝𝚎 𝚘𝚜 𝚂𝚒𝚜𝚝𝚎𝚖𝚊𝚜
║
╚════════════════════════╝

   “𝖡𝗅𝗂𝗇𝗄𝗒, 𝗏𝖺𝗆𝗈𝗌 𝗈𝗋𝗀𝖺𝗇𝗂𝗓𝖺𝗋 𝖾𝗌𝗌𝖺 𝖻𝖺𝗀𝗎𝗇𝖼̧𝖺...” 🧹`.trim();

    const mediaContent = await generateWAMessageContent(
      { image: { url: ppGroup } }, 
      { upload: conn.waUploadToServer }
    );

    const botoes = [
      {
        name: "single_select",
        buttonParamsJson: JSON.stringify({
          title: "✅ 𝙰𝚃𝙸𝚅𝙰𝚁 𝙵𝚄𝙽𝙲̧𝙾̃𝙴𝚂",
          sections: [
            {
              title: "🛡️ 𝚂𝙴𝙶𝚄𝚁𝙰𝙽𝙲̧𝙰 & 𝙼𝙾𝙳𝙴𝚁𝙰𝙲̧𝙰̃𝙾",
              rows: [
                { title: "🔗 Anti-Link", description: "𝙱𝚕𝚘𝚚𝚞𝚎𝚒𝚘 𝚍𝚎 𝚕𝚒𝚗𝚔𝚜 𝚎𝚡𝚝𝚎𝚛𝚗𝚘𝚜", id: `${prefix}antilink 1` },
                { title: "🚫 Anti-Stickers", description: "𝙱𝚕𝚘𝚚𝚞𝚎𝚒𝚘 𝚍𝚎 𝚏𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊𝚜", id: `${prefix}antifigu 1` },
                { title: "📄 Anti-Docs", description: "𝙱𝚕𝚘𝚚𝚞𝚎𝚒𝚘 𝚍𝚎 𝚊𝚛𝚚𝚞𝚒𝚟𝚘𝚜/𝚍𝚘𝚌𝚜", id: `${prefix}antidoc 1` },
                { title: "🚷 Anti-Menção", description: "𝙱𝚊𝚗𝚒𝚛 𝚚𝚞𝚎𝚖 𝚖𝚊𝚛𝚌𝚊 𝚘.𝚐𝚛𝚞𝚙𝚘 𝚗𝚘𝚜 𝚜𝚝𝚊𝚝𝚞𝚜", id: `${prefix}anti-mencao 1` },
                { title: "🛡️ Só Admins", description: "𝙵𝚎𝚌𝚑𝚊𝚛 𝚘 𝚌𝚑𝚊𝚝 𝚙𝚊𝚛𝚊 𝚖𝚎𝚖𝚋𝚛𝚘𝚜", id: `${prefix}so_adm 1` }
              ]
            },
            {
              title: "👋 𝙸𝙽𝚃𝙴𝚁𝙰𝙲̧𝙰̃𝙾 & 𝙱𝙾𝙰𝚂-𝚅𝙸𝙽𝙳𝙰𝚂",
              rows: [
                { title: "👋 Bem-Vindo 1", description: "𝙰𝚝𝚒𝚟𝚊𝚛 𝙱𝚅 (𝙼𝚘𝚍𝚎𝚕𝚘 𝚂𝚑𝚒𝚣𝚞𝚔𝚞)", id: `${prefix}bemvindo 1` },
                { title: "👋 Bem-Vindo 2", description: "𝙰𝚝𝚒𝚟𝚊𝚛 𝙱𝚅 (𝙼𝚘𝚍𝚎𝚕𝚘 𝙱𝚕𝚒𝚗𝚔𝚢)", id: `${prefix}bemvindo2 1` },
                { title: "🤖 Auto-Resposta", description: "𝚁𝚎𝚜𝚙𝚘𝚜𝚝𝚊𝚜 𝚊𝚞𝚝𝚘𝚖𝚊́𝚝𝚒𝚌𝚊𝚜 𝚍𝚘 𝚋𝚘𝚝", id: `${prefix}autorepo 1` }
              ]
            }
          ]
        })
      },
      {
      name: "cta_url",
      buttonParamsJson: JSON.stringify({
        display_text: "𝙰𝙲𝙴𝚂𝚂𝙰𝚁 𝙲𝙰𝙽𝙰𝙻 𝙳𝙾 𝙲𝚁𝙸𝙰𝙳𝙾𝚁",
        url: "https://whatsapp.com/channel/0029VbC5uMd3GJP2mhrSmI2T"
      })
    }
    ];

    await conn.relayMessage(
      from,
      {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            imageMessage: mediaContent.imageMessage
          },
          body: { text: texto },
          footer: { text: "𝚂𝚢𝚜𝚝𝚎𝚖 — 𝚂𝚑𝚒𝚣𝚞𝚔𝚞" },
          nativeFlowMessage: {
            buttons: botoes
          }
        }
      },
      { quoted: info }
    );

  } catch (e) {
    console.log("Erro no ativar:", e);
    reply("😵‍💫 𝚘𝚙𝚜... ᴇᴜ ᴇsǫᴜᴇᴄɪ ᴏɴᴅᴇ ғɪᴄᴀᴍ ᴏs ɪɴᴛᴇʀʀᴜᴘᴛᴏʀᴇs. ᴛᴇɴᴛᴇ ᴅᴇ ɴᴏᴠᴏ.");
  }
}
break;

case 'desativar': {
  try {
    if (!isGroup) return reply(msg.SoEmGrupos);
    if (!isGroupAdmins && !So_Dono) return reply(msg.SoAdm)
    await reagir(from, "💔");

    let ppGroup;
    try {
      ppGroup = await conn.profilePictureUrl(from, 'image');
    } catch {
      ppGroup = 'https://files.catbox.moe/vtluad.jpg'; 
    }

    const texto = `
╔═══ 🕸️ 𝐆𝐄𝐑𝐄𝐍𝐂𝐈𝐀𝐌𝐄𝐍𝐓𝐎 🕸️ ═══╗
║
║  📍 **𝙶𝚛𝚞𝚙𝚘:** ${NomeGrupo}
║  🚫 **𝚂𝚝𝚊𝚝𝚞𝚜:** 𝙳𝚎𝚜𝚊𝚝𝚒𝚟𝚊𝚛 𝚂𝚒𝚜𝚝𝚎𝚖𝚊𝚜
║
╚════════════════════════╝

   “𝖡𝗅𝗂𝗇𝗄𝗒, 𝗏𝖺𝗆𝗈𝗌 𝗉𝖺𝗋𝖺𝗋 𝖼𝗈𝗆 𝗂𝗌𝗌𝗈...” 🧹`.trim();

    const mediaContent = await generateWAMessageContent(
      { image: { url: ppGroup } }, 
      { upload: conn.waUploadToServer }
    );

    const botoes = [
      {
        name: "single_select",
        buttonParamsJson: JSON.stringify({
          title: "🚫 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝚁 𝙵𝚄𝙽𝙲̧𝙾̃𝙴𝚂",
          sections: [
            {
              title: "🛡️ 𝚂𝙴𝙶𝚄𝚁𝙰𝙽𝙲̧𝙰 & 𝙼𝙾𝙳𝙴𝚁𝙰𝙲̧𝙰̃𝙾",
              rows: [
                { title: "🔗 Anti-Link", description: "𝙳𝚎𝚜𝚕𝚒𝚐𝚊𝚛 𝚋𝚕𝚘𝚚𝚞𝚎𝚒𝚘 𝚍𝚎 𝚕𝚒𝚗𝚔𝚜", id: `${prefix}antilink 0` },
                { title: "🚫 Anti-Stickers", description: "𝙳𝚎𝚜𝚕𝚒𝚐𝚊𝚛 𝚋𝚕𝚘𝚚𝚞𝚎𝚒𝚘 𝚍𝚎 𝚏𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊𝚜", id: `${prefix}antifigu 0` },
                { title: "📄 Anti-Docs", description: "𝙳𝚎𝚜𝚕𝚒𝚐𝚊𝚛 𝚋𝚕𝚘𝚚𝚞𝚎𝚒𝚘 𝚍𝚎 𝚊𝚛𝚚𝚞𝚒𝚟𝚘𝚜", id: `${prefix}antidoc 0` },
                { title: "🚷 Anti-Menção", description: "𝙳𝚎𝚜𝚕𝚒𝚐𝚊𝚛 𝚋𝚊𝚗 𝚙𝚘𝚛 𝚖𝚎𝚗𝚌̧𝚊̃𝚘 𝚍𝚎 𝚜𝚝𝚊𝚝𝚞𝚜", id: `${prefix}anti-mencao 0` },
                { title: "🛡️ Só Admins", description: "𝙰𝚋𝚛𝚒𝚛 𝚘 𝚌𝚑𝚊𝚝 𝚙𝚊𝚛𝚊 𝚖𝚎𝚖𝚋𝚛𝚘𝚜", id: `${prefix}so_adm 0` }
              ]
            },
            {
              title: "👋 𝙸𝙽𝚃𝙴𝚁𝙰𝙲̧𝙰̃𝙾 & 𝙱𝙾𝙰𝚂-𝚅𝙸𝙽𝙳𝙰𝚂",
              rows: [
                { title: "👋 Bem-Vindo 1", description: "𝙳𝚎𝚜𝚕𝚒𝚐𝚊𝚛 𝙱𝚅 (𝙼𝚘𝚍𝚎𝚕𝚘 𝟶𝟷)", id: `${prefix}bemvindo 0` },
                { title: "👋 Bem-Vindo 2", description: "𝙳𝚎𝚜𝚕𝚒𝚐𝚊𝚛 𝙱𝚅 (𝙼𝚘𝚍𝚎𝚕𝚘 𝟶𝟸)", id: `${prefix}bemvindo2 0` },
                { title: "🤖 Auto-Resposta", description: "𝙳𝚎𝚜𝚕𝚒𝚐𝚊𝚛 𝚛𝚎𝚜𝚙𝚘𝚜𝚝𝚊𝚜 𝚊𝚞𝚝𝚘𝚖𝚊́𝚝𝚒𝚌𝚊𝚜", id: `${prefix}autorepo 0` }
              ]
            }
          ]
        })
      },
      {
      name: "cta_url",
      buttonParamsJson: JSON.stringify({
        display_text: "𝙰𝙲𝙴𝚂𝚂𝙰𝚁 𝙲𝙰𝙽𝙰𝙻 𝙳𝙾 𝙲𝚁𝙸𝙰𝙳𝙾𝚁",
        url: "https://whatsapp.com/channel/0029VbC5uMd3GJP2mhrSmI2T"
      })
    }
    ];

    await conn.relayMessage(
      from,
      {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            imageMessage: mediaContent.imageMessage
          },
          body: { text: texto },
          footer: { text: "𝚂𝚢𝚜𝚝𝚎𝚖 — 𝚂𝚑𝚒𝚣𝚞𝚔𝚞" },
          nativeFlowMessage: {
            buttons: botoes
          }
        }
      },
      { quoted: info }
    );

  } catch (e) {
    console.log("Erro no desativar:", e);
    reply("😵‍💫 𝚘𝚙𝚜... ᴇssᴇ ʙᴏᴛᴀ̃ᴏ ᴇsᴛᴀ́ ᴇᴍᴘᴏᴇɪʀᴀᴅᴏ, ɴᴀ̃ᴏ ᴄᴏɴsᴇɢᴜɪ ᴀᴘᴇʀᴛᴀʀ. ᴛᴇɴᴛᴇ ᴅᴇ ɴᴏᴠᴏ.");
  }
}
break;


case 'st':
case 'stk':
case 'sticker':
case 's':
await conn.sendMessage(from, {react: {text: `⌛`, key: info.key}})
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
if(boij2){
var pack = ` ➲ ꜱᴏʟɪᴄɪᴛᴀᴅᴏ ᴩᴏʀ  ➠\n ➲ ɴᴏᴍᴇ ᴅᴏ ʙᴏᴛ ➠\n ➲ ɴɪᴄᴋ ᴅᴏɴᴏ ➠`
var author2 = ` 「 ${pushname} 」 \n「 ${NomeBot} 」\n「 ${NickDono} 」`
owgi = await getFileBuffer(boij2, 'image')
let encmediaa = await sendImageAsSticker2(conn, from, owgi, selo, { packname:pack, author:author2})
await DLT_FL(encmediaa)
} else if(boij && boij.seconds < 11){
var pack = `➲ꜱᴏʟɪᴄɪᴛᴀᴅᴏ ᴩᴏʀ➠`
var author2 = ` ${pushname}`
owgi = await getFileBuffer(boij, 'video')
let encmedia = await sendVideoAsSticker2(conn, from, owgi, selo, { packname:pack, author:author2})
await DLT_FL(encmedia)
} else {
return reply(`Marque uma imagem, ou um vídeo de ate 9.9 segundos, ou uma visualização única, para fazer figurinha, com o comando ${prefix+command}`)
}
break

case 'toimg':
if(!isQuotedSticker) return reply('Por favor, *mencione um sticker* para executar o comando.')
try {
reply(msg.Aguarde)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
conn.sendMessage(from, {image: buff}, {quoted: selo}).catch(e => {
console.log(e);
reply('Ocorreu um erro ao converter o *sticker para imagem.*')
})
} catch {
reply(msg.Error)
}
break

case 'grupo': {
if(!isGroup) return reply(msg.SoEmGrupos);
if(!So_Dono && !isGroupAdmins) return reply("❌ Apenas admins ou dono podem usar este comando.");
if(!isBotGroupAdmins) return reply(msg.BotAdmin);
 if (!args[0]) return reply(`
Use:
!grupo a → fechar mensagens
!grupo f → abrir mensagens
!grupo lock → travar config do grupo
!grupo unlock → liberar config
  `.trim());

if(args[0] === 'f') {
await conn.groupSettingUpdate(from, 'announcement');
reply("🔒 Grupo fechado (mensagens só admins).");
} else if (args[0] === 'a') {
await conn.groupSettingUpdate(from, 'not_announcement');
reply("🔓 Grupo aberto (todos falam).");
} else if (args[0] === 'lock') {
await conn.groupSettingUpdate(from, 'locked');
reply("🛑 Configurações travadas (só admins).");
} else if (args[0] === 'unlock') {
 await conn.groupSettingUpdate(from, 'unlocked');
reply("✅ Configurações liberadas (todos podem editar).");
} else {
reply("❌ Opção inválida.");
}
}
break;

case 'novolink':
case 'redefinirlink': {
if (!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono) return reply(msg.SoAdm)
if (!isBotGroupAdmins) return reply(msg.BotAdmin)
await reply("🔄 Redefinindo o link do grupo...")
await conn.groupRevokeInvite(from)
let novoLink = await conn.groupInviteCode(from)
reply(`✅ *Link do grupo redefinido com sucesso!*\n\n🔗 Novo link:\nhttps://chat.whatsapp.com/${novoLink}`)
await pararDigitando(from)
}
break

case 'rm-fotogp':
case 'rmfotogp': {
if (!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono) return reply(msg.SoAdm)
if (!isBotGroupAdmins) return reply(msg.BotAdmin)
await reply("🗑️ Apagando foto do grupo...")
await conn.removeProfilePicture(from)
reply("✅ Foto do grupo removida com sucesso!")
await pararDigitando(from)
}
break

case 'fotogp':
case 'novafotogp': {
if (!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono) return reply(msg.SoAdm)
if (!isBotGroupAdmins) return reply(msg.BotAdmin)

let img = null

if (isQuotedImage) {
img = info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
} else if (isImage) {
img = info.message.imageMessage
} else {
return reply(`❌ Marque uma imagem ou envie uma imagem com o comando:\n\n${prefix + command}`)
}
let stream = await downloadContentFromMessage(img, 'image')
let buffer = Buffer.from([])
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}

await conn.updateProfilePicture(from, buffer)
reply("✅ Foto do grupo atualizada com sucesso!")
await pararDigitando(from)
}
break

case 'checkme':
case 'meustats':{if (!isGroup) return reply('❌ Esse comando só funciona em grupos!')
var ind = groupIdscount.indexOf(from)
if (ind < 0) return reply('⚠️ Nenhuma atividade sua foi registrada nesse grupo ainda.')
 let membro = ContarMessages[ind].numbers.find(obj => obj.id === sender)
if (!membro) return reply('⚠️ Nenhuma atividade sua foi registrada ainda.')
let texto = `📊 *SUAS ESTATÍSTICAS NO GRUPO*\n\n`
  texto += `🆔 Número: @${sender.split('@')[0]}\n`
  texto += `💬 Mensagens: *${membro.messages}*\n`
  texto += `⚙️ Comandos usados: *${membro.cmd_messages}*\n`
  texto += `🧷 Figurinhas: *${membro.figus}*\n`
  texto += `📱 Aparelho: *${membro.aparelho || 'Desconhecido'}*\n`
  texto += `\n🔥 *Atividade:* ${
    membro.messages > 300 ? 'Super ativo'
    : membro.messages > 100 ? 'Moderado'
    : 'Sumido'
  }`

await conn.sendMessage(from, { text: texto, mentions: [sender], contextInfo: ShizukuStile}, { quoted: selo})
}
break


case 'check':
case 'stats':{if (!isGroup) return reply('❌ Esse comando só funciona em grupos!')
 if (!menc_os2) return reply('❌ Marque um membro para ver as estatísticas.')
 var ind = groupIdscount.indexOf(from)
 if(ind < 0) return reply('⚠️ Nenhuma atividade registrada no grupo ainda.')
let membro = ContarMessages[ind].numbers.find(obj => obj.id === menc_os2)
if (!membro) return reply('⚠️ Nenhuma atividade registrada desse membro.')

  let texto = `📊 *ESTATÍSTICAS DE @${menc_os2.split('@')[0]}*\n\n`
  texto += `💬 Mensagens: *${membro.messages}*\n`
  texto += `⚙️ Comandos usados: *${membro.cmd_messages}*\n`
  texto += `🧷 Figurinhas: *${membro.figus}*\n`
  texto += `📱 Aparelho: *${membro.aparelho || 'Desconhecido'}*\n`
  texto += `\n🔥 *Atividade:* ${
    membro.messages > 300 ? 'Super ativo'
    : membro.messages > 100 ? 'Moderado'
    : 'Sumido'
  }`

 await conn.sendMessage(from, { text: texto, mentions: [menc_os2], contextInfo: ShizukuStile }, { quoted: selo })
}
break

case 'perfil': {if(!isGroup) return reply(msg.SoEmGrupos);
let perfil;
try {await conn.sendMessage(from, {react: {text: "❤️‍🔥", key: info.key}});
perfil = await conn.profilePictureUrl(sender_ou_n, 'image').catch(_ => perfil = "https://files.catbox.moe/yet8m8.jpg")
const bio = await conn.fetchStatus(sender_ou_n)
const recado = bio[0]?.status?.status || "privado, ou sem recado!!";
var levelgado = [Math.floor(Math.random() * 102)];
var levelgostosura = [Math.floor(Math.random() * 103)];
var valor = [Math.floor(Math.random() * 10000)];
var gay = [Math.floor(Math.random() * 102)]
var puta = [Math.floor(Math.random() * 100)]
var user = sender_ou_n?.split("@")[0];

const Foto_Perfil = await getBuffer(perfil);
let TXT_Perfil = `╭───〔 𝙿𝙴𝚁𝙵𝙸𝙻 / 𝚄𝚂𝚄𝙰́𝚁𝙸𝙾 〕───╮
│
│ 👤 *𝚄𝚜𝚞𝚊́𝚛𝚒𝚘:*
│ ➤ @${user}
│
│ 📞 *𝙽𝚞́𝚖𝚎𝚛𝚘:*
│ ➤ ${user}
│
│ 💬 *𝚁𝚎𝚌𝚊𝚍𝚘:*
│ ➤ ${recado || "Privado"}
│
│ 📱 *𝙳𝚒𝚜𝚙𝚘𝚜𝚒𝚝𝚒𝚟𝚘:*
│ ➤ ${adivinha}
│
│ 👥 *𝙶𝚛𝚞𝚙𝚘:*
│ ➤ ${NomeGrupo}
│
│ 🗓️ ${data}  ⏰ ${hora}
│
├──────────────
│
│ 🐂 *𝙻𝚎𝚟𝚎𝚕 ??𝚊𝚍𝚘:* ${levelgado}%
│ 🏳️‍🌈 *𝙻𝚎𝚟𝚎𝚕 𝙶𝚊𝚢:* ${gay}%
│ 🍑 *𝙻𝚎𝚟𝚎𝚕 𝙿𝚞𝚝𝚊:* ${puta}%
│ 🔥 *𝙻𝚟𝚎𝚕 𝙶𝚘𝚜𝚝𝚘𝚜𝚞𝚛𝚊:* ${levelgostosura}%
│ 🍼 *𝚅𝚊𝚕𝚘𝚛 𝚍𝚘 𝚙𝚛𝚘𝚐𝚛𝚊𝚖𝚊:* R$${valor}
│
├──────────────
│
│ ❝ 𝙲𝚘𝚗𝚜𝚎𝚕𝚑𝚘:
│ *_${CONSELHO || "Ainda vai piorar… então acostuma 😌" }_*
│
╰────────────────╯`;
await conn.sendMessage(from, {image: Foto_Perfil, caption: TXT_Perfil, mentions: [sender_ou_n]}, {quoted: selo});
} catch (Err) {
reply("Erro ao tentar enviar perfil");
console.log("Erro em:", Err);
}
}
break;

case 'addvip': {
if (!So_Dono) return reply(msg.SoDono);
let tempovip = q.split("/")[1];
if (!menc_os2  || !tempovip) 
return reply(`✳ Exemplo:
${prefix}addvip @user/4d
${prefix}addvip @user/2h
${prefix}addvip @user/10min`);

let result = addVIP(menc_os2, tempovip);
if (!result) return reply("❌ Formato inválido. Use d, h ou min.");

reply(`✅ VIP ATIVADO!

👤 Usuário: @${menc_os2.split("@")[0]}
⏰ Expira em: ${new Date(result).toLocaleString("pt-BR")}`);
}
break;

case 'ver-vip': {
if (!isVIP(sender)) return reply(msg.IsVipp)
let exp = getExpire(sender);
reply(`🌟 SEU VIP

✅ Status: ATIVO
⏳ Expira: ${new Date(exp).toLocaleString("pt-BR")}`);
}
break;

case 'delvip': {
if (!So_Dono) return reply(msg.SoDono);
if(!menc_os2) return reply("cade o user?")
if(!isVIP(menc_os2)) return reply("o usuário mencionado não é vip");
removeVIP(menc_os2);
reply("✅ VIP removido.");
}
break;

case 'gethtml': {
try {
if(!isVip) return reply(msg.IsVipp);
if(!q?.trim()) return reply("adicione um link do site que deseja puxar o HTML");
if(!SoLink) return reply("apenas links");
await reply(msg.Aguarde);
const { data } = await axios.get(q.trim());
await reply(data);
} catch (e) {
reply(msg.Error)
}break;
}

//BRINCADEIRAS
case 'beijo': case 'beijar':
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isModobn && !So_Dono) return reply(msg.Modobn)
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer beijar, a mensagem ou o @')
conn.sendMessage(from, {video: {url: beijocmd },  gifPlayback: true, caption: `@${sender.split("@")[0]} deu um beijo gostoso na(o) @${menc_os2.split('@')[0]} ??👉👈❤` , mentions: [sender, menc_os2]}, {quoted: selo})
break

case 'abraco': case 'abracar':
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isModobn && !So_Dono) return reply(msg.Modobn)
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer abraçar, a mensagem ou o @')
abraco1 = ["https://files.catbox.moe/ty52a2.mp4", "https://files.catbox.moe/rxuhxi.mp4"];
abracoc = abraco1[Math.floor(Math.random() * abraco1.length)]
linkVideo = await getBuffer(abracoc)
conn.sendMessage(from, {video:  linkVideo, gifPlayback: true, caption: `@${sender.split("@")[0]} deu um abraço gostoso na(o) @${menc_os2.split('@')[0]} 🫂❤` , mentions: [sender, menc_os2]}, {quoted: selo})
break

//COMANDOS INFORMATIVOS!!
case 'gerarlink':
try {
 if (isMedia && info.message?.imageMessage || isQuotedImage) {
 reply(msg.Aguarde);
 let img = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
 let buffer = await getFileBuffer(img, 'image')
 let url = await upload(buffer)
const interactiveButtons = [ { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "𝙲𝙾𝙿𝙸𝙰𝚁 𝙻𝙸𝙽𝙺 🔗" , id: url, copy_code: url }) }, { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "𝙰𝙲𝙴𝚂𝚂𝙰𝚁 𝙻𝙸𝙽𝙺", url: url }) } ]
const interactiveMessage = {image: { url: url}, caption: "*𝙲𝙻𝙸𝚀𝚄𝙴 𝙰𝙱𝙰𝙸𝚇𝙾 𝙿𝙰𝚁𝙰 𝙲𝙾𝙿𝙸𝙰𝚁 𝙾 𝙻𝙸𝙽𝙺*", title: "✅ *𝙻𝙸𝙽𝙺 𝙶𝙴𝚁𝙰𝙳𝙾 𝙲𝙾𝙼 𝚂𝚄𝙲𝙴𝚂𝚂𝙾*", footer: NomeBot, interactiveButtons }

await conn.sendMessage(from, interactiveMessage, {quoted: info});
 } else if ((isMedia && info.message?.videoMessage?.seconds < 30) || (isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 30)) {
 reply(msg.Aguarde);
 let vid = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
 let buffer = await getFileBuffer(vid, 'video')
 let url = await upload(buffer)
const interactiveButtons = [ { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "𝙲𝙾𝙿𝙸𝙰𝚁 𝙻𝙸𝙽𝙺 🔗" , id: url, copy_code: url }) }, { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "𝙰𝙲𝙴𝚂𝚂𝙰𝚁 𝙻𝙸𝙽𝙺", url: url }) } ]
const interactiveMessage = {video: { url: url}, caption: "*𝙲𝙻𝙸𝚀𝚄𝙴 𝙰𝙱𝙰𝙸𝚇𝙾 𝙿𝙰𝚁𝙰 𝙲𝙾𝙿𝙸𝙰𝚁 𝙾 𝙻𝙸𝙽𝙺*", title: "✅ *𝙻𝙸𝙽𝙺 𝙶𝙴𝚁𝙰𝙳𝙾 𝙲𝙾𝙼 𝚂𝚄𝙲𝙴𝚂𝚂𝙾*", footer: NomeBot, interactiveButtons }

await conn.sendMessage(from, interactiveMessage, {quoted: info});

} else if (isQuotedAudio) {
 reply(msg.Aguarde);
 let aud = info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage
 let buffer = await getFileBuffer(aud, 'audio')
 let url = await upload(buffer)
 const interactiveButtons = [ { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "𝙲𝙾𝙿𝙸𝙰𝚁 𝙻𝙸𝙽𝙺 🔗" , id: url, copy_code: url }) }, { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "𝙰𝙲𝙴𝚂𝚂𝙰𝚁 𝙻𝙸𝙽𝙺", url: url }) } ]
const interactiveMessage = {text: " 🔗 Link: "+url, title: "✅ *𝙻𝙸𝙽𝙺 𝙶𝙴𝚁𝙰𝙳𝙾 𝙲𝙾𝙼 𝚂𝚄𝙲𝙴𝚂𝚂𝙾*", footer: NomeBot, interactiveButtons }

await conn.sendMessage(from, interactiveMessage, {quoted: info});

 } else if (isQuotedSticker) {
 reply('⏳ Processando...')
 let stick = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage
const stream = await downloadContentFromMessage(stick, 'sticker')
let buffer = Buffer.from([])
for await (const chunk of stream) {
 buffer = Buffer.concat([buffer, chunk])
  }
  if (!buffer.length) return reply('❎ Erro ao baixar a figurinha.')
  let url = await upload(buffer)
const interactiveButtons = [ { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "𝙲𝙾𝙿𝙸𝙰𝚁 𝙻𝙸𝙽𝙺 🔗" , id: url, copy_code: url }) }, { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "𝙰𝙲𝙴𝚂𝚂𝙰𝚁 𝙻𝙸𝙽𝙺", url: url }) } ]
const interactiveMessage = {text: " 🔗 Link: "+url, title: "✅ *𝙻𝙸𝙽𝙺 𝙶𝙴𝚁𝙰𝙳𝙾 𝙲𝙾𝙼 𝚂𝚄𝙲𝙴𝚂𝚂𝙾*", footer: NomeBot, interactiveButtons }
await conn.sendMessage(from, interactiveMessage, {quoted: info});

 } else {
 reply("Você deve marcar uma imagem, vídeo (até 30s), áudio ou figurinha.")
 }
} catch (e) {
 console.log("Erro ao gerar link:", e)
 reply(msg.Error)
}
break

case 'status': {
if(!isGroupAdmins && !So_Dono) { reply(msg.SoAdm)
await reagir(from, "😼");
return;
}
await reagir(from, "📌")
const statusGp = `
*STATUS DE ATIVAÇÕES - SHIZUKU-BASE*

▸ 🎭 *Modo Brincadeiras*  
   ┗ ${isModobn ? "🟢 Ativo" : "🔴 Desativado"}

▸ 🔗 *Anti-Link*  
   ┗ ${isAntiLinkHard ? "🟢 Ativo" : "🔴 Desativado"}
   
   ▸ 📁 *Anti-doc*  
   ┗ ${isAntiDocument ? "🟢 Ativo" : "🔴 Desativado"}
   
   ▸ 🩶 *Anti-stickers*  
   ┗ ${isAntiSticker ? "🟢 Ativo" : "🔴 Desativado"}

▸ 👋 *Bem-Vindo*  
   ┗ ${isBemvindo ? "🟢 Ativo" : "🔴 Desativado"}

▸ 👋 *Bem-Vindo 2*  
   ┗ ${isBemvindo2 ? "🟢 Ativo" : "🔴 Desativado"}

▸ 🛡️ *Somente Admins*  
   ┗ ${SoAdmins ? "🟢 Ativo" : "🔴 Desativado"}

▸ 🤖 *Auto-Resposta*  
   ┗ ${SoAutoRepo ? "🟢 Ativo" : "🔴 Desativado"}

▸ 🚫 *Anti-Menção de Status*  
   ┗ ${isAntiMencionar ? "🟢 Ativo" : "🔴 Desativado"}

▸ 🔐 *Anti-arquivamento*  
   ┗ ${isAntiRoubo ? "🟢 Ativo" : "🔴 Desativado"}

▸ 👀 *X9 Admin*  
   ┗ ${isX9 ? "🟢 Ativo" : "🔴 Desativado"}`;


await conn.sendMessage(from, { text: statusGp, mentions: [ sender ]}, {quoted: selo});
} break;

case 'print': case 'printsite': {
if(!q?.trim() || !SoLink) return reply(`Exemplo: ${prefix + command} https://zhizuku-apis.online`);
await reagir(from, "⌛")
image = await getBuffer(Shizukusite+"/api/outros/printsite?url=" + q?.trim())
await conn.sendMessage(from, { image }, {quoted: info } )
.catch((e) => {
reply(msg.Error)
console.log(e);
});
break;
};

case 'qrcode':{
if(!q?.trim()) return reply("você deve fornecer um texto para gerar o qrcode!");
await reagir(from, "⌛")
image = await getBuffer(Shizukusite+"/api/outros/qrcode?text="+q?.trim());
await conn.sendMessage(from, { image }, { quoted: info})
.catch((e) => {
reply(msg.Error)
console.log(e)
})
 break;
 }
 
 case 'rename':
case 'roubar': {
 if (!isQuotedSticker) {
await reply(`❌ | Marque uma figurinha para poder renomear.`);
return;
};
if (!q) {
await reply(`⚠️ | Envie no formato:\n\n*${prefix + command} nome/autor*\n\nExemplo:\n*${prefix + command} Shizuku-Bot/Jpzinh*`);
return;
};

const [author5, pack5] = q.split('/').map(a => a.trim()) 
 if (!author5 || !pack5) {
return reply('⚠️ Faltou algum campo!\n\nFormato correto:\n> +rename jpzinh/Shizuku')
 }

await reagir(from, "✅");
await sleep(1000)
renameContextSticker(author5,  pack5, `${NomeDoBot}`, info, conn, quoted, selo, sender)
.catch((err) => {
reagir(from, "❌");
reply(`❌ | Houve um erro ao renomear. Tente novamente mais tarde.`);
console.log(err);
});
}
break;

case 'rgtake': {
if (takeDB[sender]) return reply('❕| Voce já ésta registrado! ')
if (!q.includes('/')) {
return reply('❌ Formato inválido!\n\nUse assim:\n> +rgtake author/pack\n\nExemplo:\n> +rgtake jpzinh edits/Shizuku-Bot')
}
const [author, pack] = q.split('/').map(a => a.trim()) || null;
 if (!author || !pack) {
return reply('⚠️ Faltou algum campo!\n\nFormato correto:\n> +rgtake author/pack')
 }

takeDB[sender] = {
author,
pack,
registrado_em: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
}

saveTake()
reply(`✅ Marca registrada com sucesso!\n\n🪶 *Author:* ${author}\n📦 *Pack:* ${pack}`)
break
}

// remover marca
case 'rmtake': {
if (!takeDB[sender]) return reply('❌ Você ainda não tem nenhuma marca registrada.')
delete takeDB[sender]
saveTake()
reply('🗑️ Registro removido com sucesso!')
break
};

// aplicar marca em figurinhas
case 'rbale':
case 'take': {
reagir(from, "✅️")
const registro = takeDB[sender]
if (!registro) return reply('⚠️ Você ainda não registrou uma marca!\nUse: *+rgtake author/pack*')
if (!isQuotedSticker) return reply("❌ Falta marcar a figurinha!");
const criador = registro.author || null;
const pacote = registro.pack || null;
renameContextSticker(criador, pacote, `@${pushname}`, info, conn, quoted, selo, sender)
.catch(err => {
reagir(from, "❌️")
reply(`❌ Erro ao renomear figurinha, tente mais tarde.`)
console.log('Erro no take:', err)
})
break;
};

case 'criarenquete':
case 'enquete': {
  try {
    if (!q) {
      return reply(
        `📊 *CRIAR ENQUETE*\n\n` +
        `Use o formato:\n` +
        `*${prefix + command} Pergunta / Opção 1 / Opção 2 / Opção 3*\n\n` +
        `⚠️ Mínimo: 2 opções\n⚠️ Máximo: 5 opções`
      )
    }
const partes = q.split('/').map(t => t.trim()).filter(Boolean)
if(partes.length < 3) return reply("❌ Você precisa de uma pergunta + pelo menos 2 opções.")
if(partes.length > 6) return reply("❌ Máximo permitido é 5 opções.")
const pergunta = partes[0]
const opcoes = partes.slice(1)

await conn.sendMessage(from, { poll: { name: pergunta, values: opcoes, selectableCount: 1} })
} catch (e) {
console.log("Erro na enquete:", e)
reply(msg.Error)
}
}
break;

case 'ttkstalk': {
  try {
    if (!q) return reply("❌ Informe o usuário do TikTok.")
await reagir(from, "⌛")
    const ttstalk = require("@rexxhayanasi/elaina-baileys/lib/Api/stalker/tiktokstalk")
    const res = await ttstalk(q)

    if (!res || !res.results) {
      return reply("❌ Nenhum resultado encontrado.")
    }

    const {
      id,
      username,
      avatar,
      bio,
      region,
      verifikasi,
      totalfollowers,
      totalmengikuti,
      totaldisukai,
      totalvideo,
      totalteman
    } = res.results

    const image = await getBuffer(avatar)

    const caption = `
╔══════════ 📊 RESULTADOS ENCONTRADOS ══════════╗
│
│ 🆔 𝗜𝗗: ${id || "Não informado"}
│ 👤 𝗨𝘀𝘂𝗮́𝗿𝗶𝗼: ${username || "Não informado"}
│ 🌍 𝗥𝗲𝗴𝗶𝗮̃𝗼: ${region || "Não informado"}
│ ✅ 𝗩𝗲𝗿𝗶𝗳𝗶𝗰𝗮𝗱𝗼: ${verifikasi ? "Sim" : "Não"}
│
│ 👥 𝗦𝗲𝗴𝘂𝗶𝗱𝗼𝗿𝗲𝘀: ${totalfollowers || 0}
│ ➕ 𝗦𝗲𝗴𝘂𝗶𝗻𝗱𝗼: ${totalmengikuti || 0}
│ ❤️ 𝗖𝘂𝗿𝘁𝗶𝗱𝗮𝘀: ${totaldisukai || 0}
│ 🎥 𝗩𝗶́𝗱𝗲𝗼𝘀: ${totalvideo || 0}
│ 🤝 𝗔𝗺𝗶𝗴𝗼𝘀: ${totalteman || 0}
│
│ 📝 𝗕𝗶𝗼:
│ ${bio || "Sem biografia."}
│
╚══════════════════════════════════════════════╝
`.trim()

    await conn.sendMessage(
      from,
      { image, caption },
      { quoted: info }
    )

  } catch (err) {
    console.error(err)
    reply(msg.Error)
  }
}
break

case 'stalkroblox': {
  try {
    if (!q) return reply("❌ Informe o username do Roblox.")
await reagir(from, "⌛")
    const stalkroblox = require("@rexxhayanasi/elaina-baileys/lib/Api/stalker/stalkroblox")
    const res = await stalkroblox(q)

    if (!res || !res.data) {
      return reply("❌ Nenhum resultado encontrado.")
    }

    const {
      username,
      displayName,
      userId,
      profilePicUrl,
      description,
      joinDate,
      friendsCount,
      followersCount,
      followingCount,
      groups,
      badges
    } = res.data

    const image = await getBuffer(profilePicUrl)

    const dataFormatada = joinDate
      ? new Date(joinDate).toLocaleDateString("pt-BR")
      : "Não informado"

    const badgesTxt = badges && badges.length > 0
      ? badges.map(b => `• ${b}`).join("\n")
      : "Nenhuma badge encontrada."

    const gruposTxt = groups && groups.length > 0
      ? groups.map(g => `• ${g.name}`).join("\n")
      : "Nenhum grupo."

    const caption = `
╔══════════ 🎮 ROBLOX STALK ══════════╗
│
│ 👤 𝗨𝘀𝘂𝗮́𝗿𝗶𝗼: ${username}
│ 🏷️ 𝗡𝗼𝗺𝗲: ${displayName}
│ 🆔 𝗜𝗗: ${userId}
│
│ 📅 𝗖𝗿𝗶𝗮𝗱𝗼 𝗲𝗺: ${dataFormatada}
│
│ 👥 𝗔𝗺𝗶𝗴𝗼𝘀: ${friendsCount}
│ ➕ 𝗦𝗲𝗴𝘂𝗶𝗻𝗱𝗼: ${followingCount}
│ ⭐ 𝗦𝗲𝗴𝘂𝗶𝗱𝗼𝗿𝗲𝘀: ${followersCount}
│
│ 📝 𝗗𝗲𝘀𝗰𝗿𝗶𝗰̧𝗮̃𝗼:
│ ${description || "Sem descrição."}
│
│ 🏰 𝗚𝗿𝘂𝗽𝗼𝘀:
│ ${gruposTxt}
│
│ 🏆 𝗕𝗮𝗱𝗴𝗲𝘀:
│ ${badgesTxt}
│
╚══════════════════════════════════════╝
`.trim()

    await conn.sendMessage(
      from,
      { image, caption },
      { quoted: info }
    )

  } catch (err) {
    console.error(err)
    reply(msg.Error)
  }
}
break

case 'shazam':
if (!isMedia && !isQuotedAudio && !isQuotedVideo) {
return reply("🎵 *Envie ou marque um áudio/vídeo para identificar a música!*");
}

try {
const shazam = isQuotedAudio
? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage
: isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage
: info.message.audioMessage || info.message.videoMessage;

const audioU = await getFileBuffer(shazam, "audio");
const AudioUrl = await upload(audioU);

const { data } = await axios.get(`${SHIZUKU_SITE}/api/shazam`, { params: { url: AudioUrl, apitoken: SHIZUKU_KEY}});
if(!data || !data.resultado) return reply("Erro ao buscar resultados");
const { titulo, artista, album, ano, url_shazam, capa, preview } = data?.resultado;

const caption = `╭⩺━[ *SHIZUKU API'S - SHAZAM INFO* ]━⩹┐
 
°✰ 🎶 *Titulo:* ${titulo || "Sem respostas"}
°✰ 👤 *Artista:* ${artista || "Sem respostas"}
°✰ 🔂 *Álbum:* ${album || "Sem respostas"}
°✰ 📆 *Ano:* ${ano || "2026"}
°✰ 🌐 *Shazam Url:* ${url_shazam || "Sem respostas"}
╰⩺━━━━━━━━━✦━━━━━━━━━⩹┘`;

await conn.sendMessage(from, {image: {url: capa}, caption}, {quoted: info});

await conn.sendMessage(from, {audio: {url: preview}, mimetype: "audio/mpeg", ptt: false, fileName: `${titulo || "música"}.mp3`, contextInfo: ShizukuStile}, {quoted: info});

await reagir(from, "✅");

} catch (e) {
console.error(e);
reply(msg.Error)
}
break;

case 'remover-fundo':
case 'remover-bg':
 if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
 const post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage;
const img = await downloadContentFromMessage(post, 'image');
base64 = Buffer.from([]);
for await (const send of img) {
base64 = Buffer.concat([base64, send]);
 }
reply(`*_⌛ | Removendo fundo da imagem, aguarde..._*`)
try {
let ImgUrl = await upload(base64);
const { data } = await axios.get(`${SHIZUKU_SITE}/api/remover-bg `, { params: { img: ImgUrl, apitoken: SHIZUKU_KEY }});
const { low_resolution } = data?.resultado?.data
await conn.sendMessage(from, { image: { url: low_resolution }}, { quoted: selo});
} catch (error) {
console.error(error);
return reply(msg.Error)
}
} else {
reply('Mencione uma imagem para remover o fundo.');
}
break; 

case 'igstalk': {
  try {
    if (!q) return reply("📸 Digite o nome de usuário do Instagram!\n\nExemplo: *.insta samsung*");
    await reply(msg.Aguarde)

    const Api = await fetchJson(`${SHIZUKU_SITE}/api/insta-stalk?query=${encodeURIComponent(q)}&apitoken=${SHIZUKU_KEY}`);

    const data = Api?.resultado || Api?.result || Api || {};
    const user = data.usuario ? data : (data.resultado ? data.resultado : data);

    const username = user.usuario || user.user || user.id || q;
    const fullName = user.nomeCompleto || user.fullName || user.name || "indefinido";
    const verified = (typeof user.verificado !== "undefined") ? user.verificado : (user.verified || false);
    const bio = (user.bio && String(user.bio).trim()) ? String(user.bio).replace(/\n+/g, " ") : "Sem bio";
    const followers = user.seguidores ?? user.followers ?? user.follows_count ?? "0";
    const following = user.seguindo ?? user.following ?? user.following_count ?? "0";
    const posts = user.publicacoes ?? user.post_count ?? user.media_count ?? (user.timeLine ? user.timeLine : "0");

    let photoUrl =
      user.photoProfile?.high ||
      user.photoProfile?.low ||
      user.photoProfile ||
      user.foto ||
      user.foto_perfil_hd ||
      user.profilePicUrl ||
      user.profile_pic_url ||
      user.profile_pic_url_hd ||
      null;

    
    if (!photoUrl && username && username !== q) {
      
      photoUrl = null;
    }

    const caption = `
╭━━━〔 📸  INSTAGRAM STALK 〕━━━╮
│ 👤  Usuário: ${username}
│ 🪪  Nome: ${fullName}
│ ✅  Verificado: ${verified ? "Sim ✅" : "Não ❌"}
│ 💬  Bio: ${bio}
│ 👥  Seguidores: ${followers}
│ 👤  Seguindo: ${following}
│ 🖼️  Publicações: ${posts}
│ 🔗  Perfil: https://instagram.com/${username}
╰──────────────────────────────╯

> ⚙️  Shizuku-Bot && Shizuku API's
> 🩷  jpzinh Project
`.trim();

    if (photoUrl) {
      await conn.sendMessage(from, {
        image: { url: photoUrl },
        caption
      }, { quoted: info });
    } else {
      await conn.sendMessage(from, { text: caption }, { quoted: info });
    }

    await reagir(from, "✅");
  } catch (e) {
    console.error("Erro na case 'insta':", e);
    reply(msg.Error)
  }
  break;
}

case 'remini':
case 'hd':
 if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
 post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage;
imagem = await downloadContentFromMessage(post, 'image');
base64 = Buffer.from([]);
for await (const send of imagem) {
base64 = Buffer.concat([base64, send]);
 }
reply('Alterando a qualidade da foto para *HD*, aguarde um pouco!');
try {
let link = await upload(base64) || q.trim()
const image = await getBuffer(`${SHIZUKU_SITE}/api/upscale?img=${encodeURIComponent(link)}&apitoken=${SHIZUKU_KEY}`);
return shizuku.sendMessage(from,
{image}, {quoted: selo});
} catch (error) {
console.error(error);
return reply(msg.Error)
}
} else {
reply('Mencione uma imagem para converter em HD');
}
break;

case 'hd2':
case 'tohd2': {
  if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
    try {
      const post = isQuotedImage
        ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage
        : info.message.imageMessage;

      const stream = await downloadContentFromMessage(post, 'image');
      let buffer = Buffer.from([]);
      for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk]);

      const inPath = `./tmp/original_${Date.now()}.jpg`;
      const outPath = `./tmp/hd_${Date.now()}.jpg`;
      fs.writeFileSync(inPath, buffer);

      await reply('⏳ Melhorando a qualidade da imagem, aguarde...');
      const cmd = `ffmpeg -y -i "${inPath}" -vf "eq=brightness=0.06:contrast=1.08:saturation=1.06,unsharp=5:5:1.0" -q:v 2 "${outPath}"`;

      exec(cmd, async (err, stdout, stderr) => {
        try { if (fs.existsSync(inPath)) fs.unlinkSync(inPath); } catch(e){}

        if (err) {
          console.error('FFMPEG IMAGE ERR:', err, stderr);
          return reply("❌ Erro ao processar a imagem.");
        }

        const imgHD = fs.readFileSync(outPath);
        await shizuku.sendMessage(from, { image: imgHD }, { quoted: selojp });

        try { if (fs.existsSync(outPath)) fs.unlinkSync(outPath); } catch(e){}
      });

    } catch (err) {
      console.error('Erro hd2 (image):', err);
      reply('❌ Ocorreu um erro ao melhorar a imagem.');
   }
  } else if ((isMedia && !info.message.imageMessage) || isQuotedVideo) {
    try {
      const vmsg = isQuotedVideo
        ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage
        : info.message.videoMessage;

      const fileBuffer = await getFileBuffer(vmsg, 'video'); // sua função já pega o buffer
      const inPath = `./tmp/original_${Date.now()}.mp4`;
      const outPath = `./tmp/hd_${Date.now()}.mp4`;
      fs.writeFileSync(inPath, fileBuffer);

      reply("⏳ Melhorando qualidade do vídeo, aguarde...");
      const cmd = `ffmpeg -y -i "${inPath}" -vf "eq=brightness=0.03:contrast=1.05:saturation=1.05,unsharp=5:5:1.0" -c:v libx264 -preset veryfast -crf 23 -c:a copy "${outPath}"`;

      exec(cmd, async (err, stdout, stderr) => {
        try { if (fs.existsSync(inPath)) fs.unlinkSync(inPath); } catch(e){}

        if (err) {
          console.error('FFMPEG VIDEO ERR:', err, stderr);
          return reply("❌ Erro ao converter vídeo em HD.");
        }

        const vidHD = fs.readFileSync(outPath);
        await shizuku.sendMessage(from, { video: vidHD, mimetype: "video/mp4" }, { quoted: selojp });

        try { if (fs.existsSync(outPath)) fs.unlinkSync(outPath); } catch(e){}
      });

    } catch (err) {
      console.error('Erro hd2 (video):', err);
      reply('❌ Ocorreu um erro ao melhorar o vídeo.');
    }

  } else {
    reply('Mencione uma imagem ou um vídeo para converter em HD.');
  }
  break;
} 


case 'getbio': case 'getb': {
if (!isGroup) return reply('Este comando só pode ser usado em grupos.');
if (!menc_os2) return reply(`Você deve marcar uma pessoa ou usar o "@", com o comando ${prefix + command}.`);
reply(enviar.Aguarde)
try {
const recadoUser = await shizuku.fetchStatus(menc_os2)
var recadoW = recadoUser[0]?.status?.status;
} catch {
var recadoW = "privado, ou inexistente!"
}
await shizuku.sendMessage(from, {text: `Status de @${menc_os2.split("@")[0]}:\n\n> 》${recadoW}`, mentions: [menc_os2]}, {quoted: selojp}).catch(_ => reply("Error ao obter informações.")
);
}
break;

case 'pinterest': {
    try {
        if (!q?.trim()) return reply('parâmetro: query, obrigatório.');
        reply(msg.Aguarde)
        const url = Shizukusite + '/api/downloads/pinterest?query=' + q?.trim();
        const image = await getBuffer(url);
        if (!image) {
            return reply('Vish! parece que a resposta da API ta inválida. ');
        }

        await conn.sendMessage(from, {
            image,
            caption: "download via Shizuku API's "
        }, {
            quoted: info
        });
    } catch (err) {
        if (err.response && err.response.status === 404) {
            return reply('API não encontrada');
        } else if (err.code === 'ETIMEDOUT') {
            return reply('Tempo esgotado ao chamar a API');
        } else {
            return reply(msg.Erro);
        }
        console.log(err);
    }
    break;
}


case 'limpar':
if (!isGroup) {
await reply(msg.SoEmGrupo)
return;
};
if (!isGroupAdmins) {
await reply(msg.SoAdm)
return;
};
if(!Number(q)) {
await reply(`Voce deve adicionar uma quantidade desejada para fazer a limpeza`);
return;
};
if(q >= 15) {
await reply("não pode ser acima de 15, coloque abaixo de 15 por favor");
return;
};
let clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`

await shizuku.groupSettingUpdate(from, 'announcement')
for (let i = 0; i < q; i++) {
setTimeout(() => {
shizuku.sendMessage(from, { text: clear }, { quoted: selo, contextInfo: { forwardingScore: 500, isForwarded: true } })
}, 1400);
};
await new Promise(resolve => setTimeout(resolve, 5000))
await shizuku.groupSettingUpdate(from, 'not_announcement')
  
let finalMsg = `✅ *Lɪᴍᴘᴇᴢᴀ ᴄᴏɴᴄʟᴜɪ́ᴅᴀ!*\n\nAgora o grupo foi reaberto`;

await shizuku.sendMessage(from, { text: finalMsg }, { quoted: selo })
break;

case 'criador': {
await conn.sendMessage(from, { react: {text: "👨‍💻", key: info.key}});
const audio = await getBuffer("https://files.catbox.moe/ghx6hu.mp3");
await conn.sendMessage(from, { audio, mimetype: 'audio/mpeg', ptt: false, contextInfo: ShizukuStile}, {quoted: info});
  const saudacao = `
╔════════════════════╗
│ 𝙾𝙻𝙰́, ${pushname} 🕷️
│
│ 𝙴𝚂𝚃𝙴 𝙱𝙾𝚃 𝙵𝙾𝙸
│ 𝙲𝚁𝙸𝙰𝙳𝙾 𝙿𝙾𝚁
│
│ 𝙹𝙿𝚉𝙸𝙽𝙷 👑
│
│ 𝙲𝙻𝙸𝚀𝚄𝙴 𝙰𝙱𝙰𝙸𝚇𝙾
│ 𝙿𝙰𝚁𝙰 𝙰𝙲𝙴𝚂𝚂𝙰𝚁
╚════════════════════╝
`.trim();

  const interactiveButtons = [
    {
      name: "cta_copy",
      buttonParamsJson: JSON.stringify({
        display_text: "📋 𝙲𝙾𝙿𝙸𝙰𝚁 𝙲𝙾𝙽𝚃𝙰𝚃𝙾",
        copy_code: "https://wa.me/559392146388"
      })
    },
    {
      name: "cta_url",
      buttonParamsJson: JSON.stringify({
        display_text: "💬 𝙰𝙲𝙴𝚂𝚂𝙰𝚁 𝙲𝙾𝙽𝚃𝙰𝚃𝙾",
        url: "https://wa.me/559392146388"
      })
    },
    {
      name: "cta_url",
      buttonParamsJson: JSON.stringify({
        display_text: "🌐 𝙰𝙲𝙴𝚂𝚂𝙰𝚁 𝙰𝙿𝙸",
        url: Shizukusite
      })
    },
    {
      name: "cta_url",
      buttonParamsJson: JSON.stringify({
        display_text: "📢 𝙲𝙰𝙽𝙰𝙻 𝙾𝚏𝚒𝚌𝚒𝚊𝚕",
        url: "https://whatsapp.com/channel/0029VbC5uMd3GJP2mhrSmI2T"
      })
    },
    {
      name: "cta_url",
      buttonParamsJson: JSON.stringify({
        display_text: "👥 𝙶𝚁𝚄𝙿𝙾 𝙾𝙵𝙸𝙲𝙸𝙰𝙻",
        url: "https://chat.whatsapp.com/IUuawkLH9W88h3MRilCBNu"
      })
    }
  ];

  const interactiveMessage = {
    video: { url: "https://files.catbox.moe/cbvyax.mp4" },
    gifPlayback: true,
    caption: saudacao,
    footer: NomeBot,
    interactiveButtons
  };

  await conn.sendMessage(from, interactiveMessage, { quoted: info });
 
 const vcard = `
BEGIN:VCARD
VERSION:3.0
N:;Jpzinh!!;;;
FN: Jpzinh!!
item1.TEL;waid=559392146388:+55 93 9214-6388
item1.X-ABLabel:Celular
END:VCARD`.trim()
await sleep(1200)
await conn.sendMessage(from, {
        contacts: {
            displayName: `jpzinh num é programador`,
            contacts: [{ vcard }]
        }
    })
 
}
break;

case 'instaaudio': case 'insta-audio': {
if(!q?.trim() || !SoLink) return reply("adicione um link do vídeo do Instagram ")
await reply(msg.Download)
  const instaAudio = require("./DADOS/instadl")
  const res = await instaAudio(q)
  console.log(res)

  const audioBuffer = fs.readFileSync(res.audioPath)

  await conn.sendMessage(from, {
    audio: audioBuffer,
    mimetype: "audio/mpeg"
  }, { quoted: info })

  fs.unlinkSync(res.audioPath) 
}
break


//FINAL DE COMANDOS 
default:

if(budy2 === "prefixo" || budy2 === "prefix"){
const buttons = [
{ buttonId: prefix+"Menu", buttonText: { displayText: "📁 Abrir Menu"}, type: 1}
];

await conn.sendMessage(from, {
 text: `*_Aqui está meu prefixo: ${prefix}_*`,
 footer: "by: jpzinh 👑",
 buttons,
 headerType: 1 },
 { quoted: info });
}

if(SoAutoRepo) {// SO SEGUIR A MSM LÓGICA E FAZER DO JEITO QUE VCS QUISER!!

if(budy2 === "bot" || budy2 === "Bot") {
const gg = await getBuffer("https://files.catbox.moe/26flje.mp3");
conn.sendMessage(from, {audio: gg, mimetype: "audio/mpeg", fileName: `${NomeBot}.mp3`, ptt: false, contextInfo: ShizukuStile, mentions: [sender]}, {quoted: selo});
await reagir(from, "🤬");
};

if(budy.includes(tempo) || budy.includes('bom dia') || budy.includes('boa tarde') ||budy.includes('boa noite ') || budy.includes('boa madrugada')) {
await reply(`Ola, ${tempo} ${pushname}, Como você está? 😄`);
}


}//FINAL É AQUII



if(isCmd) {
await conn.sendMessage(from, {react: {text: "❓", key: info?.key}});
const CmdSimilar = ListaComandos(command);
const txt = CmdSimilar.similarity > 0 
    ? `${prefix + CmdSimilar.command}`
    : `Nenhum!`;

const sem = `${(CmdSimilar.similarity || 0).toFixed(1)}%`;

const ErrorComando = ` ⚠️ *COMANDO INVÁLIDO!* ⚠️\n
*🛠️ | Comando:* [ ${prefix + command} ]
- --------------------
*⚖️ | Semelhante:* 「 ${txt} 」
- --------------------
*🪫 | Porcentagem:*[ ${sem} ]
- --------------------
> ⚙️ → Use: *"${prefix}Menu"* pra ver meus comandos.`;

const buttons = [
{buttonId: prefix+"Menu", buttonText: { displayText: "📁 Abrir Menu"}, type: 1},
{buttonId: prefix+"Ping", buttonText: { displayText: "🏓 Ping"}, type: 1}
]

await conn.sendMessage(from, {
text: ErrorComando,
footer: NomeBot,
buttons,
headerType: 1},
{quoted: info})
break;
}

}
}catch (e) {
console.log("Erro geral no index:", e);

if (String(e).includes("jpzinh")) {
console.log("A API caiu ou não foi possível executar esta ação.");
}

 if (String(e).includes("aborted")) {
let file = require.resolve("./connect");
delete require.cache[file];
require(file);
}
}
};
}

let file2 = require.resolve(__filename)
fs.watchFile(file2, () => {
fs.unwatchFile(file2)
console.log(colors.red(`Alterações salvas - '${__filename}'`))
delete require.cache[file2]
require(file2)
})

iniciarBot().catch(async(e) => {
console.log(colors.red("Erro apresentado no arquivo: './index' - Error: "+e))
})
