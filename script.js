document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. LÓGICA DE FOTOS ALEATÓRIAS (NOVO)
    // ==========================================
    
    // Lista com o nome exato dos arquivos de imagem dentro da sua pasta "fotos/"
    const bancoDeFotos = [
        "13.jpg",
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "13.jpg",
        "6.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        
        // Professor, adicione os outros nomes de arquivos da sua pasta aqui embaixo seguindo o padrão:
        
    ];

    const containerGaleria = document.getElementById("galeria-fotos");

    if (containerGaleria) {
        // Copia a lista original para não alterá-la diretamente
        let fotosEmbaralhadas = [...bancoDeFotos];
        
        // Algoritmo de embaralhamento (Fisher-Yates)
        for (let i = fotosEmbaralhadas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [fotosEmbaralhadas[i], fotosEmbaralhadas[j]] = [fotosEmbaralhadas[j], fotosEmbaralhadas[i]];
        }

        // Seleciona as 3 primeiras fotos do resultado embaralhado
        const fotosSorteadas = fotosEmbaralhadas.slice(0, 3);

        // Cria o HTML dinamicamente e injeta na galeria
        fotosSorteadas.forEach(nomeFoto => {
            const card = document.createElement("div");
            card.classList.add("foto-card");
            
            const img = document.createElement("img");
            img.src = `fotos/${nomeFoto}`;
            img.alt = "Registro de encontros do Festival do PAS";
            img.classList.add("foto-galeria");

            card.appendChild(img);
            containerGaleria.appendChild(card);
        });
    }

    // ==========================================
    // 2. CONFIGURAÇÃO DO INTERSECTION OBSERVER
    // ==========================================
    const elementosAnimados = document.querySelectorAll(".animar-entrada");

    const observerOpcoes = {
        root: null, 
        threshold: 0.15, 
        rootMargin: "0px 0px -50px 0px" 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visivel");
                observer.unobserve(entry.target);
            }
        });
    }, observerOpcoes);

    elementosAnimados.forEach(elemento => {
        observer.observe(elemento);
    });
});
