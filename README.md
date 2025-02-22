# Festa das Mensagens NPM

**Festa das Mensagens NPM** é um pacote que gera mensagens personalizadas de aniversário usando uma API externa.

## Instalação

Para instalar o pacote, execute:

```bash
npm install festadasmensagensnpm
```

## Uso

```javascript
const { gerarMensagem } = require('festadasmensagensnpm');

gerarMensagem()
  .then(resultado => {
    if (resultado.error) {
      console.log(resultado.error);
    } else {
      console.log(`Categoria: ${resultado.categoria}`);
      console.log(`Mensagem: ${resultado.mensagem}`);
    }
  })
  .catch(console.error);
```

## Documentação Adicional

Para mais informações, visite [festadasmensagens.com.br](https://festadasmensagens.com.br).

## Contribuindo

Visite nosso [GitHub](https://github.com) para relatar bugs ou sugerir melhorias.

## Detalhes Técnicos

### Dependências
- **axios**: Para requisições HTTP.

## Licença

Licenciado sob a **ISC**.

## Autor

Criado por **Leonardo Polo**.
