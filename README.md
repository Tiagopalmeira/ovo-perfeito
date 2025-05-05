# 🥚 Documentação: Cronômetro de Cozimento de Ovos  

## 📁 Estrutura do Projeto  
```bash  
/src  
├── assets/                  # Imagens e sons  
│   ├── ovo_cozido.gif  
│   ├── ovo_mole.gif  
│   ├── ovo_meioMole.gif  
│   ├── ovo_ponto.gif  
│   ├── button_start.png  
│   ├── button_restart.gif  
│   ├── button_parar.gif  
│   └── alarm.mp3            # Alarme sonoro  
├── css/  
│   └── main.css             # Estilos da interface  
├── utils/  
│   └── curiosidades.js      # Dicionário de curiosidades  
├── pages/  
│   └── CronometroPage.jsx   # Página principal do cronômetro  
├── App.jsx  
└── main.jsx  
```  

## 🧠 Descrição do Projeto  
Um aplicativo em React para cronometrar o tempo de cozimento de ovos, com diferentes níveis de preparo:  

- **Mole**: 5 minutos  
- **Meio Mole**: 7 minutos  
- **Ponto**: 9 minutos  
- **Cozido**: 10 minutos  

### Funcionalidades:  
- Temporizador com contagem regressiva  
- Imagens animadas para cada tipo de ovo  
- Curiosidades exibidas a cada 10 segundos por 5 segundos  
- Notificação no navegador ao final do cozimento  
- Alarme sonoro opcional (via `alarm.mp3`)  
- Botões para iniciar, pausar, reiniciar e voltar  

## ⚙️ Como Funciona  

### ⏲️ Temporizador  
```javascript  
setInterval(() => {  
    setTempoRestante((prev) => {  
        if (prev <= 1) {  
            clearInterval(id);  
            setIsActive(false);  
            notificarFinalizacao(); // dispara notificação e som  
            return 0;  
        }  
        return prev - 1;  
    });  
}, 1000);  
```  

### 🔔 Notificação  
```javascript  
if ("Notification" in window && Notification.permission === "granted") {  
    new Notification("⏲️ Ovo pronto!", {  
        body: "Seu ovo já está no ponto! 🥚✨",  
        icon: eggImages[tipo],  
    });  
}  
```  

### 🔉 Alarme Sonoro  
```javascript  
const audio = new Audio(alarme);  
audio.play();  
```  

## 🧪 Requisitos Técnicos  
- React  
- Permissões de Notificação ativadas no navegador  
- Suporte a arquivos `.gif` e `.mp3`  

## 🧼 Sugestões de Melhorias Futuras  
- Suporte a múltiplos ovos com tempos diferentes  
- Histórico de cozimentos  
- Escolha de som de alarme  
- Modo escuro  
- PWA (funcionar offline e instalar no celular)  

## 👨‍🍳 Créditos  
Desenvolvido com amor, fome e curiosidade sobre ovos. 🥚💡  
Ideal para quem ama precisão até no café da manhã.  