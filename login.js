// Bloco de verificação de preenchimento de campos

function Verifica(){
    let user = document.getElementById('email').value;
    let senha = document.getAnimations('loginsenha').value;
     if(!loginEmail || !loginSenha) {
        alert("favor preencha os campos para acessar o site");
     }else {
        window.location.href ="aula2.html";

     }

}
/*FUNÇÃO PARA CRIAR A LISTA DE USUÁRIOS */
/*
--->Cria o Array para armazenar os usuários
*/
var dadosLista=[];
function salvarUser(){
    
    let nomeUser =document.getElementById("nomeUser").value;

    if(nomeUser){
        dadosLista.push (nomeUser);
        criaLista();
        document.getElementById("nomeUser").value= '';
    }else{
        alert("Digite um nome");
        document.getElementById("nomeUser").focus();
    }

        
        function criaLista(){
            let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuário</th><th>Ações<th></tr>";
            
            for(let i=0; i <= (dadosLista.length-1);i++){
                tabela += "<tr><td>" + dadosLista[i] + "</td><td><button onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
                document.getElementById('tabela').innerHTML = tabela;
            }


        }
    }

//FUNÇÃO PARA EDIÇÃO DE NOME
function editar(i){
    document.getElementById("nomeUser").value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i-1)], 1);

}
//FUNÇÃO PARA EXCLUIR O NOME

function excluir(i){
    dadosLista.splice((i - 1), 1);
    document.getElementById("tabela").deleteRow(i);
}