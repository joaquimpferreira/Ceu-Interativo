let numeroEstrela = 0;

const criarEstrelaAmarela = () => {
    const estrela = document.createElement("div");
    estrela.classList.add("estrela");
    const ceu = document.getElementById("ceu");

    const a = Math.random() * 100;
    const b = Math.random() * 100;

    estrela.style.left = `${a}vw`;
    estrela.style.top = `${b}vh`;
    estrela.addEventListener("click", () => zoomNaEstrela(estrela));

    ceu.appendChild(estrela);
    numeroEstrela++;

    if (numeroEstrela === 10) {
        criarMeteoro();
        numeroEstrela = 0;
    }
};

const criarEstrelaBranca = () => {
    const estrela2 = document.createElement("div");
    estrela2.classList.add("estrela2");
    const ceu = document.getElementById("ceu");

    const a = Math.random() * 100;
    const b = Math.random() * 100;

    estrela2.style.left = `${a}vw`;
    estrela2.style.top = `${b}vh`;
    ceu.appendChild(estrela2);
};

const criarMeteoro = () => {
    const meteoro = document.createElement("div");
    meteoro.classList.add("meteoro");
    const ceu = document.getElementById("ceu");

    const startX = Math.random() * 100; 
    const startY = -10;
    meteoro.style.left = `${startX}vw`;
    meteoro.style.top = `${startY}vh`;
    ceu.appendChild(meteoro);
};

window.addEventListener("resize", () => {
    document.querySelectorAll(".estrela, .estrela2").forEach(estrela => {
        const a = Math.random() * 100;
        const b = Math.random() * 100;
        estrela.style.left = `${a}vw`;
        estrela.style.top = `${b}vh`;
    });
});

const zoomNaEstrela = (estrela) => {
    estrela.classList.add("zoom");
    setTimeout(() => {
        document.body.style.backgroundColor = "yellow";
    }, 2000);
};

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("buttonEstrela");
    button.addEventListener("click", () => {
        criarEstrelaAmarela();
        criarEstrelaBranca();
    });
});