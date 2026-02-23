const API_URL = 'http://localhost:3000';

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById('formLogin')

    form.addEventListener("submit", async (a) => {
        a.preventDefault()
        const email = document.getElementById('email').value;
        const senha = document.getElementById('password').value;

        try {
            const resposta = await fetch(`${API_URL}/login`, {
                method: 'post',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify({ email, senha })
            });

            const dados = await resposta.json();

            if (resposta.status !== 200) {
                alert(dados.message)
                return
            }
// Ainda há de colocar o token!
            console.log(dados)
            alert(`Usuário logado com sucesso!`);
            window.location.href = "homepage.html"
        } catch (erro) {
            console.log('erro', erro);
        };
    })
})
