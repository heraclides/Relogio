const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

let horarioAlarme = "";
let alarmeAtivado = false;
let disparoAlarme = false;


const som = document.getElementById("somAlarme");

setInterval(function () {
    let agora = new Date();

    let hr = agora.getHours();
    let min = agora.getMinutes();
    let sec = agora.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;

    let horaAtual = hr + ":" + min;

    // Reseta o disparo quando muda o minuto
    if (horaAtual !== horarioAlarme) {
        disparoAlarme = false;
    }


    if (alarmeAtivado && horaAtual === horarioAlarme && !disparoAlarme) {
        disparoAlarme = true;
        try {
          som.play();
        } catch (e) {}
        const container = document.getElementById("videoContainer");
        container.classList.add("ativo");
        container.classList.remove("fechando");

    }

    atualizarContagemRegressiva();

}, 1000);

function definirAlarme(valor) {
    const inputHora = valor;

    if (!valor === "") {
        alert("Digite um horário válido!");
        return;
    }

    horarioAlarme = inputHora;
    alarmeAtivado = true;

    document.getElementById("mensagemAlarme").textContent =
        "⏱️ Alarme definido para " + horarioAlarme;
}

function cancelarAlarme() {
    alarmeAtivado = false;
    horarioAlarme = "";
    
    document.getElementById("mensagemAlarme").textContent = "❌ Alarme cancelado";
    document.getElementById("contagemRegressiva").textContent = "";
    fecharVideoContainer()
}


function atualizarContagemRegressiva() {

    if (!alarmeAtivado) return;

    let agora = new Date();
    let [hrAlarme, minAlarme] = horarioAlarme.split(":");

    let dataAlarme = new Date();
    dataAlarme.setHours(hrAlarme, minAlarme, 0);

    if (dataAlarme < agora) {
        dataAlarme.setDate(dataAlarme.getDate() + 1);
    }

    let diferenca = dataAlarme - agora;

    let horasRestantes = Math.floor(diferenca / (1000 * 60 * 60));
    let minutosRestantes = Math.floor((diferenca / (1000 * 60)) % 60);
    let segundosRestantes = Math.floor((diferenca / 1000) % 60);

    document.getElementById("contagemRegressiva").textContent =
        `⏳ Falta: ${horasRestantes}h ${minutosRestantes}m ${segundosRestantes}s`;

}

//função pra reagendar o Alarme para o próximo minuto teste
function reagendarAlarmeParaProximoMin() {

    fecharVideoContainer();

    let agora = new Date();

    // TESTE: soma 1 minuto em vez de 1 dia
    agora.setMinutes(agora.getMinutes() + 1);

    let hr = String(agora.getHours()).padStart(2, "0");
    let min = String(agora.getMinutes()).padStart(2, "0");

    horarioAlarme = hr + ":" + min;
    alarmeAtivado = true;

    document.getElementById("mensagemAlarme").textContent =
        "🧪 TESTE: Alarme reagendado para " + horarioAlarme;
    
        atualizarContagemRegressiva();
}


function reagendarAlarmeParaProximoDia() {
    fecharVideoContainer();
    if (!horarioAlarme) return;

    let agora = new Date();
    let [hr, min] = horarioAlarme.split(":");

    let proximo = new Date();
    proximo.setDate(agora.getDate() + 2);
    proximo.setHours(hr, min, 0);

    alarmeAtivado = true;

    document.getElementById("mensagemAlarme").textContent =
        "📅 Alarme reagendado para amanhã às " + horarioAlarme;

}

function abrirYoutube() {
    alarmeAtivado = false;
    fecharVideoContainer();
    
    window.open("https://youtu.be/SxH5rfOghr4?si=8jcqNZCMN5GUg8C8", "_blank");

    reagendarAlarmeParaProximoDia();
    //reagendarAlarmeParaProximoMin();
}



function fecharVideoContainer() {
    const container = document.getElementById("videoContainer");

    som.pause();
    som.currentTime = 0;

    container.classList.add("fechando");

    setTimeout(() => {
        container.classList.remove("ativo");
    }, 500);
}



