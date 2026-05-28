document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os elementos que possuem a classe de animação
    const elementosAnimados = document.querySelectorAll(".animar-entrada");

    // Configuração do Intersection Observer (detecta quando o elemento aparece na tela)
    const observerOpcoes = {
        root: null, // usa a janela de visualização do navegador (viewport)
        threshold: 0.15, // ativa a animação quando 15% do elemento estiver visível
        rootMargin: "0px 0px -50px 0px" // ativa um pouco antes do elemento chegar no meio da tela
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe que executa a transição do CSS
                entry.target.classList.add("visivel");
                // Para de observar o elemento após ele já ter aparecido
                observer.unobserve(entry.target);
            }
        });
    }, observerOpcoes);

    // Diz ao observador para monitorar cada uma das seções
    elementosAnimados.forEach(elemento => {
        observer.observe(elemento);
    });
});