let idades = [];

document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    const idade = parseInt(document.getElementById('idade').value);

    if(isNaN(idade)){
        alert("Por favor, digite uma idade válida");
    }
    else{
        const idade_000 = new Idade(idade);
    }
    document.getElementById('idades_digitadas').textContent = Idade.quantidade_de_idades_digitadas();
    document.getElementById('soma_das_idades').textContent = Idade.soma_das_idades();
    document.getElementById('maior_idade').textContent = Idade.maior_idade_digitada();

    document.getElementById('idade').value = '';
});
class Idade{
    constructor(idade){
        this.idade = idade;
        idades.push(parseInt(idade));
    }
    static quantidade_de_idades_digitadas(){
        return idades.length;
    }
    static soma_das_idades(){
        return idades.reduce((total, idade) => total + idade, 0);
    }
    static maior_idade_digitada(){
        return Math.max(...idades);
    }
}