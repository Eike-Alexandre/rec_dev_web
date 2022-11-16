// 1 - Troque a cor e a fonte do título da prova. Tag <h2>. Cor e fonte de sua preferência. (1,0)

document.getElementsByTagName('h2')[0].style.color = '#edf0f1'
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

var z = document.getElementsByClassName("botao")[2];
z.addEventListener("click",
    function () {
        z.remove();
    })

//  6 - Faça uma função chamada converteMaiuscula que pega o nome digitado pelo usuário e o converte para maiúsculo. (1,0)

var nome = document.getElementById('nome').value;

function converteMaiuscula() {
    nome = nome.toUpperCase();
}

//  7 - Imprima no console o valor digitado na caixa de texto <input> de duas formas diferentes. (1,0)

var b = document.getElementsByTagName("input")[2].value;
console.log(b);

var c = document.getElementsByClassName("botao")[0].value;
console.log(c);

//  8 - Mostre no console uma mensagem se o nome e o login digitados pelo usuário são iguais ou diferentes. (2,0)
var nome = document.getElementById('nome').value;
var login = document.getElementsByTagName('input')[1].value;
function validar() {
    if (nome == login) {
        console.log("Nome iguais!");
    }
        
    else {
        console.log("Nomes diferentes!");
    }
        
}
