// 1 - Troque a cor e a fonte do título da prova. Tag <h2>. Cor e fonte de sua preferência. (1,0)

document.getElementsByTagName('h2')[0].style.color = 'blue'
document.getElementsByTagName('h2')[0].style.fontfamily = 'Arial'


// 2 - Alterar o texto da tag <h2> para Prova de Web Avançado . (1,0)

document.getElementsByTagName('h2')[0].innerHTML = 'Prova de Desenvolvimento Web'

// 3 - Pegue o texto digitado na caixa <input> da classe botao e insira no lugar do link Sobre. (1,0)

function troca() {
    var txt = document.getElementsByTagName('input')[2].value
    console.log(txt)
    document.getElementsByTagName('a')[3].innerHTML = txt
}


//  4 - Criar um parágrafo com a tag <p> com o seu nome dentro. (2,0)

var p = document.createElement('p')
p.innerHTML = 'Eike'
document.body.appendChild(p)

//  5 - Adicionar um evento ao botão para removê-lo ao clicá-lo. (1,0)

function remove() {
    document.getElementsByTagName('button')[1].style.display = 'none'
}

//  6 - Faça uma função chamada converteMaiuscula que pega o nome digitado pelo usuário e o converte para maiúsculo. (1,0)

function converteMaiuscula() {
    var nome = document.getElementsById('nome').value;
    nome.toUpperCase();

}

//  7 - Imprima no console o valor digitado na caixa de texto <input> de duas formas diferentes. (1,0)



//  8 - Mostre no console uma mensagem se o nome e o login digitados pelo usuário são iguais ou diferentes. (2,0)