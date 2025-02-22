# Festa das Mensagens NPM

Um pacote para gerar mensagens personalizadas de aniversário usando uma API.

## Instalação

```bash
npm install festadasmensagensnpm


## Como Usar

```javascript
const { gerarMensagem } = require('festadasmensagensnpm');

gerarMensagem()
  .then(resultado => {
    if (resultado.error) {
      console.log(resultado.error);
    } else {
      console.log(`Título: ${resultado.titulo}`);
      console.log(`Mensagem: ${resultado.mensagem}`);
    }
  })
  .catch(console.error);