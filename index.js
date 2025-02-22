const axios = require('axios');

async function gerarMensagem() {
  try {
    const response = await axios.get('https://festadasmensagens.com.br/mensagemaniversario/aleatorioMensagem');
    const mensagemData = response.data;

    // Ajuste os dados conforme a estrutura JSON desejada
    return {
      mensagem: mensagemData.mensagem || "Mensagem não encontrada", // Certifique-se de verificar se `mensagem` sempre existe
      categoria: mensagemData.categoria_id || "ID de Categoria Desconhecida" // Ajustado de `categoria` para `categoria_id` ou conforme desejado

    };

  } catch (error) {
    console.error("Erro ao gerar mensagem:", error);
    return { error: "Não foi possível gerar a mensagem no momento." };
  }
}

module.exports = { gerarMensagem };