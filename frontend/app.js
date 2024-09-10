document.getElementById('cadastroPessoa').addEventListener('submit', async function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
  
    try {
        const response = await fetch('http://localhost:3000/pessoas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, cpf, telefone }),
        });
  
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        alert('Pessoa cadastrada com sucesso!');
    } catch (error) {
        console.error('Error:', error);
    }
  });
  