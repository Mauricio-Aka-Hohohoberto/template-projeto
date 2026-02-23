const API_URL = 'http://localhost:3000';

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById('formRegister')

    form.addEventListener("submit", async (e) => {
        e.preventDefault()
        const nome = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('password').value;

        try {
            const resposta = await fetch(`${API_URL}/usuarios`, {
                method: 'post',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify({ nome, email, senha })
            });

            const dados = await resposta.json();

            if (resposta.status !== 201) {
                alert(dados.message)
                return
            }

            console.log(dados)
            alert(`Usuário: ${dados.nome} criado com sucesso!`);
        } catch (erro) {
            console.log('erro', erro);
        };
    })
})
