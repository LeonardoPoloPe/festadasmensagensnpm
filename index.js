const axios = require('axios');

async function gerarMensagem() {
  try {
    const response = await axios.get('https://festadasmensagens.com.br/mensagemaniversario/aleatorioMensagem');
    const mensagemData = response.data;

    // A estrutura pode variar conforme as propriedades exatas do retorno
    return {
      titulo: mensagemData.titulo,
      mensagem: mensagemData.mensagem,
      categoria: mensagemData.categoria_id,
      curtidas: parseInt(mensagemData.qtde_curtidas, 10),
      compartilhar: parseInt(mensagemData.qtde_compartilhar, 10),
      palavras_chave: JSON.parse(mensagemData.palavras_seo || '[]')
    };
  } catch (error) {
    console.error("Erro ao gerar mensagem:", error);
    return { error: "Não foi possível gerar a mensagem no momento." };
  }
}

module.exports = { gerarMensagem };