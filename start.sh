#!/bin/bash

clear

# ========= CORES SHIZUKU =========
BLACK="\033[30m"
RED="\033[31m"
GREEN="\033[32m"
YELLOW="\033[33m"
BLUE="\033[34m"
PURPLE="\033[35m"
CYAN="\033[36m"
WHITE="\033[37m"
RESET="\033[0m"

BOLD="\033[1m"
DIM="\033[2m"

# ========= LOGO SHIZUKU BASE =========
echo -e "
${PURPLE}${BOLD}███████╗██╗  ██╗██╗███████╗██╗   ██╗██╗  ██╗██╗   ██╗
${PURPLE}${BOLD}██╔════╝██║  ██║██║╚══███╔╝██║   ██║██║ ██╔╝██║   ██║
${CYAN}${BOLD}███████╗███████║██║  ███╔╝ ██║   ██║█████╔╝ ██║   ██║
${CYAN}${BOLD}╚════██║██╔══██║██║ ███╔╝  ██║   ██║██╔═██╗ ██║   ██║
${PURPLE}${BOLD}███████║██║  ██║██║███████╗╚██████╔╝██║  ██╗╚██████╔╝
${PURPLE}${BOLD}╚══════╝╚═╝  ╚═╝╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ 
${RESET}
"

echo -e "${CYAN}                 🕸️  SHIZUKU MURASAKI — BASE 🕸️${RESET}"
echo -e "${PURPLE}            🧤 “Blinky, não deixe rastros...” 🧤${RESET}"
echo -e "${WHITE}               Desenvolvido por: ${BOLD}JPZINH${RESET}"
echo ""

sleep 0.8

# ========= LOADING DARK =========
printf "${PURPLE}${BOLD}"
for i in {1..30}; do
  bar=$(printf "%-${i}s" "🕸" | tr ' ' '🕸')
  printf "\r🧤 Aspirando arquivos: [%-30s]" "$bar"
  sleep 0.04
done
printf "${RESET}"

echo -e "\n\n${CYAN}${BOLD}🌌 CONEXÃO ESTABELECIDA — TRUPE FANTASMA ATIVA 🌌${RESET}\n"
sleep 1

# ========= LOOP DO BOT =========
while true
do
    echo -e "${PURPLE}[🕷️ SHIZUKU 🕷️]${RESET} ${CYAN}Iniciando conexão com o servidor...${RESET}"
    node connect.js

    echo -e "\n${PURPLE}[🕷️ SHIZUKU 🕷️]${RESET} ${RED}Conexão perdida ou bot encerrado.${RESET}"
    echo -e "${WHITE}[🕷️ SHIZUKU 🕷️]${RESET} ${YELLOW}Aspirando erros... Reiniciando em 5 segundos.${RESET}\n"
    sleep 5
done
