let key = "e7639c7ac52064438c277c4a4086e899";

async function ver_previsao (cidade_prev){
    let cidade = cidade_prev || document.getElementById("city").value;
    if(cidade == "") {
        alert("Campo cidade vazio!");
        return ;
    }
    await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${key}
&lang=pt_br&units=metric`)
    .then(response => response.json())
    .then(dados => {
        console.log(dados)

        const data = new Date(dados.list[1].dt_txt);
        const dataFormatada = data.toLocaleDateString('pt-BR');
        document.getElementById("mostrar-prev").innerHTML = 
        `
        <div>  
        <h5 class="descricao">Previsao para:</h5>
        <p>${dados.city.name}</p>
        <p>Dia: ${dataFormatada}</p>
        <p>${dados.list[0].main.temp.toFixed(0)} °C </p>
        <p>Ventos de até ${dados.list[0].wind.speed.toFixed(0)} Km h</p>
        <a href="index.html"><i class="bi bi-arrow-left-circle-fill"></i></a>
        </div>`

        document.getElementById("city").value = "";

        //

    });

}


//sys:country

window.onload = function () {
        ver_previsao("uniao");
}