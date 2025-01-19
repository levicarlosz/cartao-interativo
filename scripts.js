let nomeCartaoDigitado = document.getElementById("nomeCartao");
let cartaoNome = document.getElementById("cartaoNome");

let numeroCartaoDigitado = document.getElementById("numeroCartao");
let cartaoNumero = document.getElementById("cartaoNumero");

let mesExpiracao = document.getElementById("mesExpiracao");
let anoExpiracao = document.getElementById("anoExpiracao");
let cartaoMes = document.getElementById("cartaoMes");
let cartaoAno = document.getElementById("anoCartao");

let cartaoCredito = document.querySelector(".cartaoCredito");
let cvvInput = document.getElementById("CVV");
let cvvTexto = document.getElementById("cvvTexto");

function formatarCartaoCredito(valor) {
  valor = valor.replace(/\D/g, "").slice(0, 16);
  return valor.replace(/(\d{4})(?=\d)/g, "$1 ");
}

function atualizarDadosNomeCartao() {
  cartaoNome.innerText = nomeCartaoDigitado.value.slice(0, 32) || "Gabriel Jesus S Dias";
}

function atualizarDadosNumeroCartao() {
  cartaoNumero.innerText = formatarCartaoCredito(numeroCartaoDigitado.value) || "0000 0000 0000 0000";
}

function atualizarDataExpiracao() {
  cartaoMes.innerText = mesExpiracao.value.padStart(2, "0");
  cartaoAno.innerText = anoExpiracao.value;
}

function atualizarCVV() {
  let valor = cvvInput.value.replace(/\D/g, "").slice(0, 4);
  cvvTexto.innerText = valor || 'XXX';
  cvvInput.value = valor;
}

cvvInput.addEventListener("focus", () => cartaoCredito.classList.add("flipped"));
cvvInput.addEventListener("blur", () => cartaoCredito.classList.remove("flipped"));

nomeCartaoDigitado.addEventListener("input", atualizarDadosNomeCartao);
numeroCartaoDigitado.addEventListener("input", atualizarDadosNumeroCartao);
mesExpiracao.addEventListener("change", atualizarDataExpiracao);
anoExpiracao.addEventListener("change", atualizarDataExpiracao);
cvvInput.addEventListener("input", atualizarCVV);
