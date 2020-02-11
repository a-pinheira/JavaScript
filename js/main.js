/** FUNÇÃO */
/** Web - Manipulando Elementos da página: onclick */
/** FUNÇÃO */
function clicou(){
    //Usa a função innerHTML, para inserir um texto
    //A função innerHTML permite tmb colocar HTML, texto
    document.getElementById("agradecimento").innerHTML = "<i>Obrigada por clicar..</i>";
    //console.log(document.getElementById("Agradecimento"));
    //alert("Obrigada por clicar..");
}
function redirecionar(){
    //Abre uma página em outra aba (outra janela)
    window.open("https://github.com/monymachado");
    //Abre uma pag. da mesma ABA
    //window.location.href = "https://github.com/monymachado";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigada por passar o mouse";
    document.getElementById("mousemove").style.color = "red";
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
    //alert("Trocar texto...");
}
    
function voltar (elemento){
    elemento.innerHTML = "Passe o mouse aqui para Voltar";
    document.getElementById("mousemove").style.color = "black";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui para Voltar";
}

function load(){
    alert("Pagina carregada");
}

function funcChange(elemento) {
    console.log(elemento.value);
}
/** FUNÇÃO 
//Com variáveis fixas (o user não digita os valores)
function soma(v1, v2){
    return v1 + v2;
    }

function setReplace(frase, nome, novo_nome) {
//Permite substituir uma sequência de caracteres por outra.
    return frase.replace(nome, novo_nome);
}
alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
//Var global
var valida=0;    
function validaIdade(idade) {
    if (idade >= 18) {
        valida=true;
    } else {
        valida=false;
    }
    return idade;
}
var idade = prompt("Qual a sua idade: ");
validaIdade(idade);
console.log(valida);
*/

/** Concatenar - Testando
var v1, v2;
v1 = "Simplicity is the ultimate sophistication.";
v2 = "Leonardo da Vinci:";
//console.log(var1 + var2 + "1425-1519");
//alert(var1 + var2 + "1425,1519");
//console.log(join(" - "));
//console.log(var1 + var2 + "1425", "-", "1519");
//console.log(var1 + var2 + "1425" "-" "1519");
//console.log(var1 + var2 + "1425 + "-" + 1519");
//console.log(var1 + var2 + 1425, "-", 1519);
*/


/** DATES
var d = new Date();
var diaName = new Array ("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");
var mesName = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
document.write ("<h2> Hoje é " + diaName[d.getDay()] + ", " + d.getDate() + " de " + mesName[d.getMonth()] + " de " + d.getFullYear() + ". </h2>");
alert("Hoje é " + diaName[d.getDay()] + ", " + d.getDate() + " de " + mesName[d.getMonth()] + " de " + d.getFullYear());
 */

/*alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());*/

/**ESTRUTURA/LAÇOS DE REPETIÇÕES [ FOR ] 
// A var [ i ] tem o mesmo valor que count
var i;
for (i=0; i <=5; i++) {
    alert(i);

};
*/

/**ESTRUTURA/LAÇOS DE REPETIÇÕES [ WHILE ]
var count = 0;
while (count <= 5) {
    console.log (count);
    alert(count);
    count++;
}
  */


/** CONDICIONAIS

var idade = prompt("Qual a sua idade? ");
if (idade >= 18) {
    alert("Maior de Idade! ");
    } 
    else {
        alert("Menor de idade");
    };
    */

/** Lista de DiDIONÁRIO 
//Objeto Json
var dicioFrutas = [{nome:"Maçã", cor:"Vermelha"}, {nome:"Uva", cor:"Lilás"}]
console.log(dicioFrutas);
alert(dicioFrutas[1].nome, dicioFrutas[1].cor);
*/

/** DICIONÁRIO 
var dicio = {nome:"Mação", cor:"Vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/



/** ARRAYS 
var lista = ["Banana", "Maçã", "Goiaba"]
//Coloca um item a mais na lista
lista.push("Uva");
//Retira o último item da lista
//lista.pop();
//Imprime a fruta correspondete ao índice 0
//console.log("Fruta eh:", lista);
//Elementos ao contrário da lista
//console.log(lista.reverse());
//Tamanho / qtd de elementos da lista
//console.log(lista.length);
 
console.log(lista[0]);
console.log(lista.toString()[0]);
//Você consegue mudar caracteres e tmb transforma em string, 
//igual o toString (que coloca virgula automaticamente)
console.log(lista.join(" - "));

//Caixa de dialogos - iteração com o usuário que aparece na tela
alert(lista);
alert(lista.length);
fim do ARRAY*/


/** Recebe uma variavel com o campo no qual vc irá digitar o seu nome 
var nome = prompt('Digite o seu nome');
// Variáveis com valores fixos
var n1 = 10;
var n2 = 12;
var frase = "China é o melhor país do mundo"
//ALERT
//alert("Seja bem vindo(a) " + nome + " Olá");
//alert(n1 + n2);
//CONSOLE
console.log(nome);
console.log(n1 * n2);
// MANIPULANDO STRING/Frase
//toLowerCase: Maiusculas
console.log(frase.toLowerCase("China", "Brasil"));
//Replaces: Troca uma frase por outra
//console.log(frase.replace("China", "Brasil"));
// ou o alert
alert(frase.replace("China", "Brasil"));
*/