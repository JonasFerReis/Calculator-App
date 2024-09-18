# Calculator app

## Sumário

- [Visão geral](#visão-geral)
- [Desenvolvimento](#desenvolvimento)
- [Autor](#autor)

## Visão geral

Os usuários devem ser capazes de:

- Ver o tamanho dos elementos ajustados com base no tamanho da tela do dispositivo;
- Executar operações matemáticas como adição, subtração, multiplicação e divisão;
- Ajustar o tema de cores com base em suas preferências;

### Design inicial

![design](./design/desktop-preview.jpg)

### Link

- URL do site ao vivo: https://jonasferreis.github.io/Calculator-App/

## Desenvolvimento

### Construído com:

- HTML5
- CSS FlexBox
- Vanilla JavaScript

### Método de realização dos cálculos:

Nessa solução evitei o uso do `eval()` para a realização das operações matemáticas, então, para resolve-lás a expressão matemática é montada em uma String, separando números e operadores. Essa String é manipulada de acordo com as ações do usuário, como adicionar ou deletar um número e ao cliclar para obter o resultado a expressão da String é lida e resolvida.

## Autor

Jonas Fernandes

- LinkedIn: https://www.linkedin.com/in/jonas-fernandes-5b4681260/
