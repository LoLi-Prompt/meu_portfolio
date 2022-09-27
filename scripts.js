ScrollReveal().reveal('#inicio', {delay: 250});
ScrollReveal().reveal('#sobreMin', {delay: 250});
ScrollReveal().reveal('#projetos', {delay: 250});
ScrollReveal().reveal('#habilidades', {delay: 250});
ScrollReveal().reveal('#intersection', {delay: 500});

function textoHtml() {
    let texto1 = document.querySelector('.habilidadeMouse')
    texto1.innerHTML = 'Desenvolvimento de documentos com a linguagem de marcação HTML5 e utilização das folhas de estilo CSS3 para estilização.'
}
function textoJavascript() {
    let texto1 = document.querySelector('.habilidadeMouse')
    texto1.innerHTML = 'Interatividade implementada através da linguagem javascript no uso de funções e recursos.'
}
function textoReact() {
    let texto1 = document.querySelector('.habilidadeMouse')
    texto1.innerHTML = 'Utilização da biblioteca ReactJs para a construção de aplicações one simple page e também implementação de elementos distintos em uma aplicação web já pronta.'
}
function textoGithub() {
    let texto1 = document.querySelector('.habilidadeMouse')
    texto1.innerHTML = 'Versionamento de código com GIT e GitHub.'
}
function textoMysql() {
    let texto1 = document.querySelector('.habilidadeMouse')
    texto1.innerHTML = 'Desenvolvimento de querys simples de verificação e inserção de dados no banco de dados MySQL.'
}
function textoEnglish() {
    let texto1 = document.querySelector('.habilidadeMouse')
    texto1.innerHTML = 'Inglês avançado, fácil leitura e interpretação de documentação técnica e conversação.'
}
function textoPadrao() {
    let texto = document.querySelector('.habilidadeMouse')
    texto.innerHTML = 'Passe o Mouse para ler a descrição!'
}


function projetosInfoNetflix() {
    let texto = document.querySelector('.textoProjeto')
    texto.innerHTML = 'Clone da netflix desenvolvido como exercício prático proposto pelo bootcamp da Digital Innovation One com utilização do Owl Carousel.'
}
function projetosInfoInsta() {
    let texto = document.querySelector('.textoProjeto')
    texto.innerHTML = 'Página de login do Instagram desenvolvida como forma de aplicar os conteúdos aprendidos a respeito de Css e Flexbox na Digital Innovation One.'
}
function projetosInfoSnake() {
    let texto = document.querySelector('.textoProjeto')
    texto.innerHTML = 'Exercício final do bootcamp onde a proposta era a criação de um jogo da cobrinha, a princípio ainda estou com pequenas dúvidas em algumas funções.'
}

function projetoInfoPadrao() {
    let texto = document.querySelector('.textoProjeto')
    texto.innerHTML = 'Passe o mouse para ler uma descrição, clique para abrir em nova janela!'
}