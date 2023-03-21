function themeSelector() {    
    const header = document.querySelector("#header")
    const slide = document.querySelector("#slide")
    const selector = document.querySelector("#selector")
    const tela = document.querySelector("#tela")
    const teclado = document.querySelector("#teclado")
    const botao = document.querySelectorAll(".botao")
    const del = document.querySelector("#del")
    const reset = document.querySelector("#reset")
    const result = document.querySelector("#result")

    /**
     * Utiliza a propriedade justify-content para controlar qual tema está selecionado com base na posição do seletor.
     * theme1 = flex-start
     * theme2 = center
     * theme3 = flex-end
     */
    let option = "flex-start"
    slide.addEventListener("click", () => {
        switch (option) {
            case "flex-start": {
                option = "center"
                theme2()
                break
            }
            case "center": {
                option = "flex-end"
                theme3()
                break
            }
            case "flex-end": {
                option = "flex-start"
                theme1()
                break
            }
            default: {
                console.error("Error ao selecionar uma opção")
                break
            }
        }
        slide.style.justifyContent = option
    })

    function theme1() {
        header.style.color = "white"
        slide.style.backgroundColor = "hsl(223, 31%, 20%)"
        selector.style.backgroundColor = "hsl(6, 63%, 50%)"

        tela.style.backgroundColor = "hsl(224, 36%, 15%)"
        tela.style.color = "white"

        teclado.style.backgroundColor = "hsl(223, 31%, 20%)"
        botao.forEach((e) => {
            e.style.backgroundColor = "hsl(30, 25%, 89%)"
            e.style.boxShadow = "0px 4px hsl(28, 16%, 65%)"
            e.style.color = "hsl(221, 14%, 31%)"
        })

        del.style.backgroundColor = "hsl(225, 21%, 49%)"
        del.style.boxShadow = "0px 4px hsl(224, 28%, 35%)"
        del.style.color = "white"

        reset.style.backgroundColor = "hsl(225, 21%, 49%)"
        reset.style.boxShadow = "0px 4px hsl(224, 28%, 35%)"
        reset.style.color = "white"

        result.style.backgroundColor = "hsl(6, 63%, 50%)"
        result.style.boxShadow = "0px 4px hsl(6, 70%, 34%)"
        result.style.color = "white"

        document.body.style.backgroundColor = "hsl(222, 26%, 31%)"
    }

    function theme2() {
        header.style.color = "hsl(60, 10%, 19%)"
        slide.style.backgroundColor = "hsl(0, 5%, 81%)"
        selector.style.backgroundColor = "hsl(25, 98%, 40%)"

        tela.style.backgroundColor = "hsl(0, 0%, 93%)"
        tela.style.color = "hsl(60, 10%, 19%)"

        teclado.style.backgroundColor = "hsl(0, 5%, 81%)"
        botao.forEach((e) => {
            e.style.backgroundColor = "hsl(45, 7%, 89%)"
            e.style.boxShadow = "0px 4px hsl(35, 11%, 61%)"
            e.style.color = "hsl(60, 10%, 19%)"
        })

        del.style.backgroundColor = "hsl(185, 42%, 37%)"
        del.style.boxShadow = "0px 4px hsl(185, 58%, 25%)"
        del.style.color = "white"

        reset.style.backgroundColor = "hsl(185, 42%, 37%)"
        reset.style.boxShadow = "0px 4px hsl(185, 58%, 25%)"
        reset.style.color = "white"

        result.style.backgroundColor = "hsl(25, 98%, 40%)"
        result.style.boxShadow = "0px 4px hsl(25, 99%, 27%)"
        result.style.color = "white"

        document.body.style.backgroundColor = "hsl(0, 0%, 90%)"
    }

    function theme3() {
        header.style.color = "hsl(52, 100%, 62%)"
        slide.style.backgroundColor = "hsl(268, 71%, 12%)"
        selector.style.backgroundColor = "hsl(176, 100%, 44%)"

        tela.style.backgroundColor = "hsl(268, 71%, 12%)"
        tela.style.color = "hsl(52, 100%, 62%)"

        teclado.style.backgroundColor = "hsl(268, 71%, 12%)"
        botao.forEach((e) => {
            e.style.backgroundColor = "hsl(268, 47%, 21%)"
            e.style.boxShadow = "0px 4px hsl(290, 70%, 36%)"
            e.style.color = "hsl(52, 100%, 62%)"
        })

        del.style.backgroundColor = "hsl(281, 89%, 26%)"
        del.style.boxShadow = "0px 4px hsl(285, 91%, 52%)"
        del.style.color = "white"

        reset.style.backgroundColor = "hsl(281, 89%, 26%)"
        reset.style.boxShadow = "0px 4px hsl(285, 91%, 52%)"
        reset.style.color = "white"

        result.style.backgroundColor = "hsl(176, 100%, 44%)"
        result.style.boxShadow = "0px 4px hsl(177, 92%, 70%)"
        result.style.color = "hsl(198, 20%, 13%)"

        document.body.style.backgroundColor = "hsl(268, 75%, 9%)"
    }
}

function calculator() {
    const screen = document.querySelector("#tela")
    const button = document.querySelectorAll(".botao")

    /**
     * Onde será montada a expressão matemática conforme os dados de entrada, separando valores
     * de operadores por um underline (_).
     */
    let expression = ""

    /**
     * @param {int} i O indice do botão a ser adicionado o evento.
     * @param {string} exp O que será adiciona na expressão.
     */
    function buttonEventListener(i, exp) {
        button[i].addEventListener("click", () => {
            screen.innerText += button[i].innerText
            expression += exp
        })
    }

    /**
     * @param {string[]} strArray Um vetor de string com a expressão matemática a ser resolvida, dividida em números e operadores.
     * @returns Retorna o mesmo vetor, porém com as operações de multiplicação e divisão resolvidas.
     */
    function calcMultiplicationAndDivision(strArray) {
        // Itera sobre o vetor procurando operadores de multiplicação ou divisão.
        for (let i = 0; i <= strArray.length; i++) {
            if (strArray[i] === "/") {
                // Após encontrar um operador, realiza o calculo com o valor anterior e posterior a ele.
                let calc = Number(strArray[i - 1]) / Number(strArray[i + 1])
                // Substitui os dois valores e o operador utilizado no calculo pelo resultado.
                strArray.splice(i - 1, 3, calc)
                // Decrementa o índice para corrigi-lo, pois o tamanho do vetor foi diminuido.
                i--
            }
            
            if (strArray[i] === "*") {
                let calc = Number(strArray[i - 1]) * Number(strArray[i + 1])
                strArray.splice(i - 1, 3, calc)
                i--
            }
        }
        return strArray
    }

    /**
     * @param {string[]} strArray Um vetor de string com a expressão matemática a ser resolvida, dividida em números e operadores.
     * @returns Retorna o mesmo vetor, porém com as operações de soma e subtração resolvidas.
     */
    function calcSumAndSubtraction(strArray) {
        // Exatamente igual a função "calcMultiplicationAndDivision" porém agora é soma e subtração.
        for (let i = 0; i <= strArray.length; i++) {
            if (strArray[i] === "+") {
                let calc = Number(strArray[i - 1]) + Number(strArray[i + 1])
                strArray.splice(i - 1, 3, calc)
                i--
            }
            
            if (strArray[i] === "-") {
                let calc = Number(strArray[i - 1]) - Number(strArray[i + 1])
                strArray.splice(i - 1, 3, calc)
                i--
            }
        }
        return strArray
    }

    // Números
    buttonEventListener(0, "7")
    buttonEventListener(1, "8")
    buttonEventListener(2, "9")
    buttonEventListener(4, "4")
    buttonEventListener(5, "5")
    buttonEventListener(6, "6")
    buttonEventListener(8, "1")
    buttonEventListener(9, "2")
    buttonEventListener(10, "3")
    buttonEventListener(12, ".")
    buttonEventListener(13, "0")
    
    // Operadores
    buttonEventListener(7, "_+_")
    buttonEventListener(11, "_-_")
    buttonEventListener(14, "_/_")
    buttonEventListener(15, "_*_")
    
    // DEL
    button[3].addEventListener("click", () => {
        let content = screen.innerText
        content = content.substring(0, content.length - 1)
        screen.innerText = content

        let tam = expression.length
        if (expression[tam - 1] === "_") {
            expression = expression.substring(0, tam - 3)
        }
        else {
            expression = expression.substring(0, tam - 1)
        }
    })

    // RESET
    button[16].addEventListener("click", () => {
        screen.innerText = ""
        expression = ""
    })

    // RESULT (=)
    button[17].addEventListener("click", () => {
        /**
         * Quebra a expressão montada em um array, usando como referência o underline, que 
         * separa os valores dos operadores.
         */
        let strArray = expression.split("_")

        /**
         * Envia o array para as função de cálculo (Primeiro para a multiplicação e divisão devido a precedência
         * de operadores).
         */
        strArray = calcMultiplicationAndDivision(strArray)
        strArray = calcSumAndSubtraction(strArray)

        console.log(strArray)
        console.log("Old expression: " + expression)
        
        /**
         * Substitui a expressão pelo resultado obtido, e exibe na tela.
         */
        expression = String(strArray[0])
        screen.innerText = strArray[0]

        console.log("New expression: " + expression)
    })
}

themeSelector()
calculator()