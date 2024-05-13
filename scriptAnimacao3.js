function iniciarAnimacao() {
    const barraProgresso = document.getElementById("minhaBarra");
    let width = 0;

    const id = setInterval(frame, 10); // Atualiza a barra a cada 10ms

    function frame() {
        if (width >= 100) {
            clearInterval(id); // Para a animação quando completa
            barraProgresso.classList.add("completo"); // Adiciona a classe "completo"
        } else {
            width++;
            barraProgresso.style.width = width + "%";
        }
    }
}