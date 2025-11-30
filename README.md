# ⏰ Relógio Web com Alarme

Este projeto é um **relógio web em tempo real**, desenvolvido com **HTML, CSS e JavaScript**, que permite ao usuário **configurar alarmes**, visualizar uma **contagem regressiva** e **disparar um alerta sonoro e visual**, incluindo a abertura de um vídeo do YouTube quando o alarme toca.

---

## ✅ Funcionalidades

✔ Relógio em tempo real (Horas, Minutos e Segundos)
✔ Sistema de alarme configurável
✔ Contagem regressiva até o alarme
✔ Reagendamento automático
✔ Alerta visual na tela
✔ Som de alarme integrado
✔ Abertura de vídeo no YouTube
✔ Interface moderna com gradiente personalizado

---

## 🗂 Estrutura do projeto

```
relogio-web/
├── index.html
├── style.css
├── script.js
└── alarme.mp3 (opcional)
```

---

## 🚀 Como executar o projeto

1. Baixe ou clone o repositório:

```
git clone https://github.com/seu-usuario/relogio-web.git
```

2. Abra a pasta do projeto.

3. Clique duas vezes no arquivo:

```
index.html
```

Ou abra com o navegador (Chrome, Edge ou Firefox).

4. Escolha um horário no campo de alarme e clique em **Definir Alarme**.

5. Aguarde o disparo e veja o alerta em ação.

---

## 📚 Como funciona (resumo técnico)

### ⏱ Relógio em tempo real

O JavaScript utiliza:

```javascript
new Date()
```

junto com `setInterval()` para atualizar na tela:

* Horas
* Minutos
* Segundos

A cada 1 segundo, os valores são atualizados automaticamente.

---

### ⏰ Sistema de alarme

Quando você define um horário, o sistema:

* Salva a hora em uma variável
* Compara esse horário a cada segundo
* Quando chega a hora exata:

  * Toca o alarme (`audio`)
  * Mostra um alerta visual (`videoContainer`)
  * Permite abrir um vídeo do YouTube

---

### 🔁 Reagendamento automático

Após o disparo, o sistema pode:

* Reagendar para o próximo dia
* Ou para +2 dias (exemplo)

Isso é feito com:

```javascript
dataAlarme.setDate(dataAlarme.getDate() + 1);
```

---

## 🛠 Tecnologias utilizadas

* HTML5
* CSS3 (Flexbox e Gradiente)
* JavaScript (DOM, Date, setInterval)

---

## 💡 Ideias para melhorias futuras

* ✅ Múltiplos alarmes
* ✅ Função Soneca (Snooze)
* ✅ Salvar alarmes no navegador
* ✅ Versão mobile (PWA)
* ✅ Lista de alarmes

---

## 👨‍💻 Autor

**Heraclides Mourão**
Projeto desenvolvido para fins educacionais e de aprendizado em programação web.

---

## 📌 Observação importante

Este projeto não utiliza servidor ou internet para funcionar.
Ele usa o **horário local do computador** do usuário.

---
