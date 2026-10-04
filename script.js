const language = navigator.language;

if (language.startsWith("pt")) {
    document.getElementById('projetos').textContent = "Projetos";
    document.getElementById('about').textContent = "Sobre";
} else {
    document.getElementById('projetos').textContent = "Projects";
    document.getElementById('about').textContent = "About";
}

document.getElementById('projetos').addEventListener('click', () => {
    window.open("https://lucasmorenoms.github.io/projects");
});