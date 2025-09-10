const frm = document.querySelector('form');

const api_url = 'https://cleanuri.com/api/v1/shorten';

frm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const url = document.querySelector('#input_url').value;
    console.log(url);

    if(url === '') {
        alert('Por favor digite uma valor valido!');
        return;
    }

    try {
        const response = await fetch(api_url, {
            method: "POST",
            body: new URLSearchParams({ url })
        });

        const data = await response.json();
        
        if(data.error) {
            console.error("Erro da API: ", data.error);
            alert("Erro: " + data.error);
        } else {
            console.log("URL encurtada: ", data.result_url);
        }

    } catch (erro) {
        console.log(erro);
    }
});