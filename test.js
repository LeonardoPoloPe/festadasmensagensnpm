const { gerarMensagem } = require('./index');

async function teste() {
  try {
    const mensagem = await gerarMensagem();
    console.log(mensagem);
  } catch (err) {
    console.error('Erro ao testar a função:', err);
  }
}

teste();