const resultado = document.querySelector('.valor');
const confirmar = document.querySelector('.igual');


function inserir(num){
    resultado.innerHTML += num;
}
function limpar(){
    resultado.innerHTML = " ";
}
function backspace(){
    if(resultado.textContent){
        let result = document.getElementById('resultado').innerHTML;
        resultado.innerHTML = result.substring(0,result.length -1);
    }

}
function confirma(){
    if(resultado.textContent != 'Erro'){
        document.getElementById('resultado').innerHTML = eval(resultado.innerHTML)
    }
}