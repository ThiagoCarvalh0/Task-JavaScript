// |***************Estrutura sequencial***************|

// 1.	Crie um script que leia o nome da pessoa e mostre o nome dela em um alert() e no console

    // let nome = prompt("Digite seu nome: ");
    // alert("Seu nome é: " + nome);

    // 2.	Crie um script que leia do usuário dois números e mostre a soma desses dois números.

    // let num1 = parseInt(prompt("Digite o primeiro número: "));
    // let num2 = parseInt(prompt("Digite o segundo número: "));

    // alert("A soma é: " + (num1+num2))

// 3.	Crie um script que leia duas notas do usuário e calcule a média do aluno.

    // let nota1 = parseFloat(prompt("Digite a primeira nota: "));
    // let nota2 = parseFloat(prompt("Digite a segunda nota: "));

    // let media = ((nota1+nota2)/2);

    // alert("Sua média é: " + media);

// 4.	Crie um programa leia o ano em que o usuário nasceu e diga a idade atual dele. 

    // let anoatual = parseInt(prompt("Digite o ano atual: "));
    // let anoNasc = parseInt(prompt("Digite o ano em que você nasceu: "));

    // let idade = anoatual - anoNasc;

    // alert("Você tem ou vai completar: " + idade + " anos.");
    // console.log("Você tem ou vai completar: " + idade + " anos.");

// 5.	Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

    // let ganhoPorHora = parseFloat(prompt("Digite quanto você ganha por hora: "));
    // let horasTrabalhadas = parseInt(prompt("Digite quantas horas você trabalhou/trabalha no mês: "));

    // let salario = horasTrabalhadas*ganhoPorHora;

    // alert("Seu salário é: " + salario);
    // console.log("Seu salário é: " + salario);

// 6.	Faça um script que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.    C = 5 * ((F-32) / 9).

    // let tempF = parseInt(prompt("Digite uma temperatura em Fahrenheit: "));

    // let tempC = (5*((tempF-32)/9)).toFixed(2);

    // alert("A temperatura em celcius é: " + tempC);
    // console.log("A temperatura em celcius é: " + tempC);

// Estrutura de decisão

// 1.	Faça um Programa que peça dois números e imprima o maior deles.

    // let maior = 0;
    // for(let i = 0; i<= 1; i++){

    //     let entrada = parseInt(prompt("Digite um valor"));

    //     // só pega o maior número
    //     if (i === 0) {
    //         maior = entrada;
    //     }
    //     // pega o maior valor digitado pelo usuario
    //     if (entrada > maior){
    //         maior = entrada;
    //     }
    // }

    // alert("O maior é: " + maior);
    // console.log("O maior é: " + maior);

// 2.	Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

    // let valor = parseInt(prompt("Digite um valor: "));
    
    // if( valor > 0){
    //     alert("Este número é positivo.");
    // }else if( valor < 0) 
    //     alert("Este número é negativo.");
    // else if (valor == 0)
    //     alert("Este valor é neutro.");

// 3.	Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

    // let letra = prompt("Digite uma letra: ").toUpperCase().charAt();
    // if( letra == 'F' && isNaN(letra)){
    //     alert("Sexo feminino.");
    // }else if( letra == 'M' && isNaN(letra)){
    //     alert("Sexo masculino.");
    // }else{
    //     alert("Sexo inválido.");
    // }

// 4.	Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
// 1.	A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// 2.	A mensagem "Reprovado", se a média for menor do que sete;
// 3.	A mensagem "Aprovado com Distinção", se a média for igual a dez.

    // let nota1 = parseFloat(prompt("Digite sua primeira nota: "));
    // let nota2 = parseFloat(prompt("Digite sua segunda nota: "));

    // let media = ((nota1 + nota2)/2).toFixed(2);

    // alert(media);

    // if(media >= 7 && media < 10) //Só vai até 9 pq tem uma condição exclusiva pro 10.
    //     alert("Aprovado!");
    // else if(media < 7 && media >= 0)
    //     alert("Reprovado.");
    // else if(media == 10)
    //     alert("Aprovado com distinção");
    // else
    //     alert("Média inválida.");

// 5.	Faça um Programa que leia três números e mostre o maior e o menor deles.

    // let maior = 0;
    // let menor = 0;
    // for(let i = 0; i<= 2; i++){

    //     let entrada = parseInt(prompt("Digite o "+ (i+1) + "º valor: "));

    //     // só pega o maior número
    //     if (i === 0) {
    //         maior = entrada;
    //         menor = entrada;
    //     }
    //     // pega o maior valor digitado pelo usuario
    //     if (entrada > maior){
    //         maior = entrada;
    //     }else if(entrada < menor){
    //         menor = entrada;
    //     }
    // }
    // alert("O maior e o menor numero é: " + maior + ", " + menor);

// 6.	Faça um Programa que leia dois números e mostre se ele é par ou ímpar.

    // for(let i = 0; i <= 1; i++){

    //     let num = parseInt(prompt("Digite um número: "));

    //     if( num %2 == 0)
    //         alert("O número é par.");
    //     else
    //         alert("O número é impar.")
    // }


// Estruturas de Repetição:

// 1.	Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

    // let aux = true;
    // while(aux){
    // let nota = parseFloat(prompt("Digite uma nota entre 0 e 10: ")).toFixed(2);
    // if(nota >= 0 && nota <= 10){
    //     alert("Nota: " + nota);
    //     aux = false;
    //     }
    // }

// 2.	MOSTRAR DIFERENÇA ENTRE VAR E LET

    // if(true){
    //     var msgDentro = "Thiago";
    //     let msgDentro2 = "Thiago";
    // }
    // alert(msgDentro); alert consegue acessar a variável dentro do if, usando o var.
    // alert(msgDentro2);  alert não consegue acessar a variável declarada usando let.

// 3.	Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

    // aux = true;

    // while(aux){

    //     let nome = prompt("Digite seu nome: ");
    //     let senha = prompt ("Digite sua senha: ");
    //     if(nome == senha){
    //         alert("Senha e nome iguais");
    //     }else{
    //         aux = false;
    //     }
    // }

// 4.	Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. 

    // for(let i = 1; i <= 20; i++){
    //     console.log(i);
    // }

// 5.	Faça um programa que leia 5 números e informe o maior número.

    // let maior = 0;
    // for(let i = 0; i < 5; i++){
    //     let num = parseInt(prompt("Digite o " +(i+1) + "º número: "));
    //     if(i === 0){
    //         maior = num;
    //     }
    //     if(num > maior){
    //         maior = num;
    //     }
    //     console.log(maior);
    // }

    // alert(maior);

// 6.	Faça um programa que leia 5 números e informe a soma e a média dos números.

    // let media = 0;
    // let soma = 0;
    // let indice = 0;
    // for(let i = 0; i < 5; i++){
    //     let num = parseInt(prompt("Digite o " +(i+1) + "º número: "));
    //     soma += num;
    //     indice = i+1;
    // }
    // media = (soma/indice);
    // alert(soma);
    // alert(media);

// 7.	Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.

    // for(let i = 1; i <= 50; i++){
    //     if(i %2 !== 0){
    //         console.log("impar"+ i);
    //     }
    // }    

// 8.	Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:
// a.	Tabuada de 5:
// b.	5 X 1 = 5
// c.	5 X 2 = 10
// d.	...
// e.	5 X 10 = 50

    // let aux1 = false;

    // let iniciar = prompt("Deseja iniciar o programa S/N ?").toUpperCase().charAt();
    //     if(iniciar == 'S'){
    //         console.log("Programa iniciado.")
    //         aux1 = true;
    //     }
    // while(aux1){
    //     let aux2 = true;
    //     while(aux2){
    //         alert("Tabuada de multiplicação!");
    //         console.log("Tabuada de multiplicação!");
    //         let num = parseInt(prompt("Você quer a tabuada de qual número? "));
    //         console.log("Número digitado: " + num);

    //         if(isNaN(num)){
    //             alert("Número inválido.");
    //             console.log("Número inválido");
    //             aux2 = false;
    //         }else if(num > 0 && num <= 10){
    //             for(let i = 0; i<= 10; i++){
    //                 console.log(num + " * " + i + " = " + num * i);
    //             }
    //             alert("Tabuada gerada no console.");
    //             console.log("Tabuada gerada.");
    //         }else{
    //             alert("Apenas números entre 0 e 10.");
    //             console.log("Apenas números entre 0 e 10.");
    //             aux2 = false;
    //         }
    //         continuar = prompt("Deseja voltar para a tabuada S/N ?").toUpperCase().charAt();
    //             if(continuar == 'S'){
    //                 console.log("Continuando.");
    //                 aux2 = true;
    //             }else{
    //                 aux2 = false;
    //             }
    //     }
    //     let exit = prompt("Deseja finalizar o programa S/N ?").toUpperCase().charAt();
    //     if(exit == 'S'){
    //         console.log("Programa finalizado.");
    //         aux1 = false;
    //     }
    // }

// Desafio FizzBuzz

// 9.	Dado um número n, para cada número entre 1 e 100, imprime um valor por linha da seguinte maneira:
// Se i for múltiplo de 3 e 5, imprima o FizzBuzz.
// Se i for múltiplo de 3 (mas não de 5), imprima o Fizz.
// Se i for múltiplo de 5 (mas não de 3), imprima o Buzz.
// Se i não for múltiplo de 3 ou 5, imprima o valor de i.

    // for(let i = 1; i <=100; i++){

    //     if(i % 3 === 0 && i % 5 === 0){
    //         console.log("FizzBuzz");
    //     }else if(i % 3 === 0 && i % 5 != 0){
    //         console.log("Fizz");
    //     }else if(i%3 != 0 && i%5 === 0){
    //         console.log("Buzz");
    //     }else{
    //         console.log(i);
    //     }
    // }

// ExerciciosListas:

// 1.	Faça um Programa que leia um vetor de 5 números inteiros e mostre-os.

    // let lista = [1, 2, 3, 4, 5];
    // for(let i = 0; i < lista.length; i++){
    //     alert(lista[i]);
    // }

// 2.	Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.

    // let lista = [1,2,3,4,5,6,7,8,9,10]
    // console.log(lista.length);
    // for(i = lista.length-1; i >= 0; i--){
    //     console.log("Numero: "+ lista[i]);
    // }

// 3.	Faça um Programa que leia 4 notas, mostre as notas e a média na tela.
    
    // let notas =[];
    //     let soma = 0;
    //     let media = 0;
    //     let indice = 0;
    //     for(let i = 0; i < 4; i++){
    //         notas[i] = parseInt(prompt("Digite a sua "+ (i+1) +"º nota:"));
    //         soma += notas[i];
    //         indice =+ i + 1;
    //         alert(indice);
    //     }

    //     media = soma/indice;

    //     alert(notas + " Media: " + media);

// 4.	Faça um Programa que leia um vetor de 10 caracteres, e diga quantas consoantes foram lidas. Imprima as consoantes.

    // let lista = ['a', 'v', 'z', 'e', 'b', 'u', 'o', 'l', 'm', 'i']
    // console.log(lista.length);
    // let consoantes = 0;
    // for(let i = 0; i < 10; i++){
    //     if( lista[i] !== 'a' && lista[i] !== 'e' && lista[i] !== 'i' && lista[i] !== 'o' && lista[i] !== 'u'){
    //         consoantes += 1;
    //         console.log("Consoante: "+ lista[i]);
    //     }
    // }
    // console.log("O array tem: " + consoantes + " consoantes.");


// 5.	Faça um Programa que leia 20 números inteiros e armazene-os num vetor. Armazene os números pares no vetor PAR e os números IMPARES no vetor ímpar. Imprima os três vetores.
    // let lista = [];
    // let par = [];
    // let impar = [];
    // for(let i = 0; i < 20; i++){
    //     lista[i] = parseInt(prompt("Digite o "+ (i+1) +"º número:"));
    // }

    // for(let i = 0; i < 20; i++){
    //     if(lista[i] %2 == 0){
    //         par[i] = lista[i];
    //     }else{
    //         impar[i] = lista[i];
    //     }
    // }
    // console.log(lista);
    // console.log(par);
    // console.log(impar);

// 6.	Faça um Programa que peça as quatro notas de 10 alunos, calcule e armazene num vetor a média de cada aluno, imprima o número de alunos com média maior ou igual a 7.0.

// let notas = [];

// for(let i = 0; i < 10; i++){
//     let media = 0;
//     let soma = 0;
//     for(let j = 0; j < 4; j++){
//         let nota = parseFloat(prompt("Digite sua "+(j+1)+"º nota: "));
//         soma += nota;
//     }
//     media = (soma/4);

//     notas[i] = media.toFixed(2);
// }

// console.log(notas);

// 7.	Faça um Programa que leia um vetor de 5 números inteiros, mostre a soma, a multiplicação e os números. //NAO CONSEGUI!!!!!!!!!!!!!

    // let numeros = [1, 2, 3, 4, 5]
    // let soma = 0;
    // let multiplicacao = 0;
    // for(let i = 0; i < numeros.length; i++){
    //     soma += numeros[i];
    // }
    // for(let j = 0; j < numeros.length; j ++){

    // }

    // console.log(soma);
    // console.log(multiplicacao);


// 8.	Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo vetor. Imprima a idade e a altura na ordem inversa a ordem lida.

    // let idade = [];
    // let altura = [];

    // for(let i = 0; i < 5; i++){
    //     idade[i] = parseFloat(prompt("Digite sua idade: "));
    //     altura[i] = parseFloat(prompt("Digite sua altura: "));
    // }
    // console.log(idade);
    // console.log(altura);

    // for(let j = idade.length-1; j >= 0; j--){
    //     console.log(idade[j]);
    //     console.log(altura[j]);
    // } 

// 9.	O instrutor deve elaborar esse programa.
// Cria um script que receba o nome de várias pessoas até o usuário desejar parar o programa, bote o nome dessas pessoas em uma lista e sorteie uma dessas pessoas para pagar o churrasco. 
// O output do código deve ter o seguinte formato: 
// “{nomeDaPessoa} foi sorteada para pagar o churrasco!”

    // let aux = true;
    // let nomes = [];
    // while(aux){
    //     let nome = prompt("Adicione um nome para o churras: ");
    //     nomes.push(nome);
    //     let exit = prompt("Deseja parar de adicionar S/N?").toUpperCase().charAt()
    //     if(exit == 'S'){
    //         aux = false;
    //     }
    // }
    // let sorteio = prompt("Deseja iniciar o sorteio S/N?").toUpperCase().charAt()
    // if(sorteio == 'S'){
    //     const numero = Math.floor(Math.random()*nomes.length);
    //     console.log(nomes[numero] + " foi sortado/a para pagar o churrasco!")
    // }

// 10.	Cria um script que receba o nome de várias pessoas até o usuário desejar parar o programa, bote o nome dessas pessoas em uma lista e sorteie duas dessas pessoas para te dar um presente.
// As pessoas não podem ser repetidas.
// O output do código deve ter o seguinte formato:
// “{nomeDaPessoa} e { nomeDaOutra } foram sorteados para te dar um presente!”

    // let aux = true;
    // let nomes = [];
    // while(aux){
    //     let nome = prompt("Adicione um nome para o sorteio: ");
    //     nomes.push(nome);
    //     let exit = prompt("Deseja parar de adicionar S/N?").toUpperCase().charAt()
    //     if(exit == 'S'){
    //         aux = false;
    //     }
    // }
    // let sorteio = prompt("Deseja iniciar o sorteio S/N?").toUpperCase().charAt()
    // if(sorteio == 'S'){
    //     let aux2 = true;
    //     let numero = 0;
    //     let numero2 = 0;
    //     while(aux2){
    //         numero = Math.floor(Math.random()*nomes.length);
    //         numero2 = Math.floor(Math.random()*nomes.length);
    //         if(numero !== numero2){
    //             aux2 = false;
    //         }
    //     }
    //     console.log(nomes[numero] +" e " + nomes[numero2] + " foram sorteados para te dar um presente!")
    // }

// Exercícios Funções:

// 1.	Crie uma função que receba um inteiro e diga se ele é “Par” para números pares ou “Ímpar” para números impares.

    // function parimpar(){
    //     let num = parseInt(prompt("Digite um numero: "))
    //     if( num %2 == 0){
    //         return(console.log("Seu numero é par."))
    //     }else{
    //         return(console.log("Seu numero é impar."))
    //     }
    // }

    // parimpar();

// 2.	Crie uma função que receba dois números e retorne o resultado da soma entre eles. 

    // function soma(num1, num2){
    //     let soma = num1+num2;
    //     return soma;
    // }

    // console.log(soma(4,10));

// 3.	Crie uma função que receba um número e retorne o oposto desse número. Exemplos de retornos:
// negativo(1) // return -1
// negativo(-5) // return 5

    // function converter(num){
    //     let convertido = 0;
    //     if(num < 0){
    //         convertido = num * -1;
    //     }else{
    //         convertido = num * -1;
    //     }
    //     return convertido;
    // }

    // console.log(converter(8));

// 4.	Crie uma função que receba um array de números, e retorne a suma de todos os números positivos desse array. Exemplos de retornos:
// somaDePositivos([1,-4,7,12]) // 1 + 7 + 12 = 20 -> return 20
    // let lista = [2, 5, -6, 8, -9, -3, 10];
    // function somaPositivos(lista){
    //     let soma = 0;
    //     for(let i = 0; i < lista.length; i++){
    //         if(lista[i] > 0){
    //             soma += lista[i];
    //         }
    //     }
    //     return soma;
    // }

    // console.log(somaPositivos(lista));

// 5.	Dado um array de números inteiros, crie uma função que retorne o valor do menor número desse array. Exemplos de outputs:
// Dado [34, 15, 88, -2] sua solução deve retornar o -2
// Dado [34, -500, -1, 100] sua solução deve retornar o -345

    // let lista = [2, 5, -6, 8, -100, -3, 10];
    
    // function FindLower(lista){
    //     let menor = 0;
    //     for(let i = 0; i < lista.length; i++){
    //         if( i === 0){
    //             menor = lista[i];
    //         }
    //         if(lista[i] < menor){
    //             menor = lista[i];
    //         }
    //     }
    //     return menor;
    // }

    // console.log(FindLower(lista));
