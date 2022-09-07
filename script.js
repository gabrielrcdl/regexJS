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
