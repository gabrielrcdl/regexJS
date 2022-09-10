/*Caracteres epeciais

 \d - Qualquer dígito de caractere
 \w - Um caractere alfanumérico("teste")
 \s - Qualquer caractere de espaço em branco

 \D - Caracteres que não são dígitos
 \W - Caracteres não alfanumérico
 \S - Caractere que não seja espaço em branco

 . - Qualquer caractere, menos nova linha
 */



// Verifcar se tem dois dígitos númericos
const dia = /\d\d/;
console.log(dia.test("2019") && "2019".length == 2);
console.log(dia.test("a22"));
console.log(dia.test("05") && "05".length == 2);

// Verificar se tem pelos menos 3 dígitos alfa-numéricos
const palavrasPeloMenosTresLetras = /\w\w\w/;
console.log(palavrasPeloMenosTresLetras.test("asd"));
console.log(palavrasPeloMenosTresLetras.test("asds"));
console.log(palavrasPeloMenosTresLetras.test("as"));

// Operador not
const notAZ = /[^a-z]/;
console.log(notAZ.test("123 as"));
console.log(notAZ.test(" swfwetfwgrwtrewtrwtrwtrwtrw"));
console.log(notAZ.test("az"));

// Operador plus
const umOuMaisNumeros = /\d+/;
console.log(umOuMaisNumeros.test("123"));
console.log(umOuMaisNumeros.test("123456789"));
console.log(umOuMaisNumeros.test(""));

// Operador question
const padrao = /Abacax?i/;

console.log(padrao.test("Abacaxi"));
console.log(padrao.test("Abacai"));


// Operador dígitos  precisos
const cep = /\d{5}-\d{3}/;
console.log(cep.test("57690-000"));
console.log(cep.test("erererer"));


// Exec

const digitos = /\d+/

console.log(digitos.exec("Tem o número 100 aqui"))
console.log(digitos.exec("Tem o número aqui"))

// Choice pattern
// Podemos colocar uma instrução na regex que funciona como || (or) das condicionais;

const frutas = /\d+ (bananas|maçãs|goiabas)/;
console.log(frutas.test("10 bananas"))
console.log(frutas.test("8 goiabas"))
console.log(frutas.test("10 jacas"))


// Validando um domínio, podemos validar da seguinte forma:

const validarDominio = /www.\w+\.com|com.br/
console.log(validarDominio.test("www.google.com"))
console.log(validarDominio.test("google.com"))
console.log(validarDominio.test("google.com.br"))

// Validando email

const validarEmail = /\w+@\w+\.\w+/
console.log(validarEmail.test("gr78787@gmail.com"))


