let key = "eca3250ca768b6721c13c3da57714354"; //chave da API
async function buscar(cidadePadrao) {
    let cidade = cidadePadrao || document.getElementById("cidade").value;//pega o valor cidade
    document.getElementById("cidade").value = "";
    if(cidade == "") { //valida o campo cidade se estiver vazio!
        alert("Digite o nome da cidade!");
        return;
    }
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&appid=${key}&units=metric`)
    .then(res => res.json())
    .then(dado => {
        if (!dado.main) {
            alert(`Cidade não encontrada!`);
            return;
        }
        console.log(dado)

        document.querySelector('.cidade').innerHTML = `${dado.name}`;
        document.querySelector('.tempo').innerHTML = `${dado.weather[0].description} 
        <img src='https://openweathermap.org/img/wn/${dado.weather[0].icon}.png'><br>`;
        document.querySelector('.graus').innerHTML = `<p class="tempe">Temperatura<br></p>${dado.main.temp.toFixed(0)} °C`;
        document.querySelector('.sensacao').innerHTML = `<p class="sensa">Sensação<br></p>${dado.main.feels_like = Math.floor(dado.main.feels_like)} °C`;
        document.querySelector('.umidade').innerHTML = `<p class="umid">Umidade<br></p>${dado.main.humidity}%`;
        

    })
    .catch(error => {
        console.error("Erro na requisição da api", error) //exibe o erro de requisicao
    });

}

// buscar cidade padrão ao carregar a página Ex.: Uniao, teresina

window.onload = function() {
    buscar("União");
}