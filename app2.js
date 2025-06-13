async function fnPegarFilmes(){
    let filmes = await fetch ("dados-filmes.json")
    let filmeTratados = await filmes.json()
    filmeTratados.forEach((FilmeAtual) => {
        document.querySelector(".lista-filmes").innerHTML +=`
        <div classe="card-filme">
            <img src="${FilmeAtual.foto}">
            <h3>${FilmeAtual.titulo}</h3>
            <span> ⭐ ${FilmeAtual.avalicao}</span>
        </div>
        `
        
    });
}

fnPegarFilmes()
console.dir("oi")