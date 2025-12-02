// Data do Evento Atualizada: 07 de Dezembro de 2025, às 12:00:00.
// Formato: Ano, Mês-1, Dia, Hora, Minuto, Segundo
// Dezembro é o mês 11 no JavaScript (Janeiro=0, Dezembro=11)
const eventDate = new Date("2025-12-07T12:00:00").getTime();

const countdown = setInterval(function() {
    // Pega a data e hora atual
    const now = new Date().getTime();

    // Encontra a distância entre o agora e a data do evento
    const distance = eventDate - now;

    // Cálculos de tempo para dias, horas, minutos e segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exibe o resultado nos elementos com os IDs
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (daysEl && hoursEl && minutesEl && secondsEl) {
        daysEl.innerHTML = formatTime(days);
        hoursEl.innerHTML = formatTime(hours);
        minutesEl.innerHTML = formatTime(minutes);
        secondsEl.innerHTML = formatTime(seconds);
    }

    // Se o evento chegou (a contagem é menor que 0)
    if (distance < 0) {
        clearInterval(countdown);
        const countdownEl = document.getElementById("countdown");
        if(countdownEl) {
            countdownEl.innerHTML = "🎉 O GRANDE DIA CHEGOU! 🎉";
            countdownEl.style.fontSize = "1.5em";
            countdownEl.style.color = "var(--secondary-color)";
        }
    }
}, 1000); // Atualiza a cada 1 segundo (1000 milissegundos)

// Função para garantir que números menores que 10 tenham um zero na frente
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}