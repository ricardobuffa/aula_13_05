function enchendoBarraProgresso() {
    var elem = document.getElementById("minhaBarra");
    var width = 0;
    var id = setInterval(frame, 100); // Aumenta a largura da barra de progresso a cada 100ms

    function frame() {
    if (width >= 100) {
        clearInterval(id); // Para o intervalo quando a barra de progresso estiver completa
    } else {
        width++;
        elem.style.width = width + "%"; // Define a largura da barra de progresso
    }
    }
}