// json - javascript object notification

let filme1 = {
    titulo: "Jurassic Park",
    foto: "filme1.webp",
    avalicao: "10/10",
    duracao: "1h50m"
}

filme2 = {
    titulo: "Karate Kid Lendas",
    foto: "filme2.jpg",
    avalicao: "9/10",
    duracao: "1h90m"
}

filme3 = {
    titulo: "Lilo & Stitch",
    foto: "filme3.jpg",
    avalicao: "8/10",
    duracao: "1h30m"
}

filme4 = {
    titulo: "Pecadores",
    foto: "filme3.jpg",
    avalicao: "5/10",
    duracao: "1h550m"
}

{/* 
    <div class="lista-filmes">
        <div class="card-filme">
            <img src="img/filme1.webp">
            <h3>Jurassic Park</h3>
            <span>⭐ 10/10</span>
        </div> */}

function fnMontarCartao(FilmeAtual){
    document.querySelector(".lista-filmes").innerHTML =`
        <div classe="card-filme">
            <img src="img/${FilmeAtual.foto}">
            <h3>${FilmeAtual.titulo}</h3>
            <span> ⭐ ${FilmeAtual.avalicao}</span>
        </div>
        `
    
}

fnMontarCartao(filme1)
fnMontarCartao(filme2)