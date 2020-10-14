function pai(param1,param2) {
    let umaVariavel = "Olá";
    function filha() {
        return umaVariavel +" "+ param1 +" "+ param2;
    }
    return filha();
}
console.log(pai("João","Carlos"));

//-------------------------------
function saudacao(nome) {
    let menssagem = "Olá seja bem vindo";
    function juntarNome() {
        return menssagem +' '+ nome +'!';
    }
    return juntarNome();    
}
console.log(saudacao("Danilo"));