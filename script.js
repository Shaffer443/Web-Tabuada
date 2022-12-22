function calcular(){

    let pegaNum = document.getElementById('num')

    let retorno = document.getElementById('tabuada')

    //conversões

    if(pegaNum.value.length != 0){

        let num = Number(pegaNum.value)

        // via while:
            //Limpando Tabuada antes de rodar o loop

            retorno.innerHTML=''

        let c = 1
        while(c <= 10){
            //criando elementos dentro do select. um option dinâmicamente
            let itens = document.createElement('option')
            //parte interna do option
            itens.text = `${num} x ${c} = ${num*c}`
            //criando os valores para ser usado postriormente na seleção dos itens, como em PHP
            itens.value = `retorno${c}`
            //adicionando o elemento filho no "option"
            retorno.appendChild(itens)
            c++
        }
    
    }else{
        alert('Nenhum número digitado!')
    }


}