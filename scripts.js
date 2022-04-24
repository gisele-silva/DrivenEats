let comida;
let bebida;
let sobremesa;
let precoComida;
let precoComidaConta;
let precoBebida;
let precoBebidaConta;
let precoSobremesa;
let precoSobremesaConta;
let precoTotal;

function clicouComida(elemento) {
    let ficaVerde = document.querySelector(".borda1")
    if (ficaVerde !== null) {
        ficaVerde.classList.remove("borda1")
    }
    elemento.classList.add("borda1")
    comida = elemento.querySelector(".nomeDoPrato").innerHTML
    precoComida = elemento.querySelector(".preco").innerHTML
    precoComidaConta = Number(precoComida.replace("R$ ", "").replace(",", "."))
    finalizarPedido()
}

function clicouBebida(elemento) {
    let ficaVerde = document.querySelector(".borda2")
    if (ficaVerde !== null) {
        ficaVerde.classList.remove("borda2")
    }
    elemento.classList.add("borda2")
    bebida = elemento.querySelector(".nomeDoPrato").innerHTML
    precoBebida = elemento.querySelector(".preco").innerHTML
    precoBebidaConta = Number(precoBebida.replace("R$ ", "").replace(",", "."))
    finalizarPedido()
}

function clicouSobremesa(elemento) {
    let ficaVerde = document.querySelector(".borda3")
    if (ficaVerde !== null) {
        ficaVerde.classList.remove("borda3")
    }
    elemento.classList.add("borda3")
    sobremesa = elemento.querySelector(".nomeDoPrato").innerHTML
    precoSobremesa = elemento.querySelector(".preco").innerHTML
    precoSobremesaConta = Number(precoSobremesa.replace("R$ ", "").replace(",", "."))
    finalizarPedido()
}

function finalizarPedido() {
    if (precoComidaConta !== undefined && precoBebidaConta !== undefined && precoSobremesaConta !== undefined) {
        document.querySelector(".pedidoAberto").classList.add("desaparece")
        document.querySelector(".pedidoFechado").classList.remove("desaparece")
    }
}

function fecharPedido() {
    let novoMenu = document.querySelector(".qualquer")
    novoMenu.classList.remove("desaparece")
    precoTotal = (precoComidaConta + precoBebidaConta + precoSobremesaConta).toFixed(2)
    console.log(precoTotal)
    novoMenu.querySelector(".eat").innerHTML = comida
    novoMenu.querySelector(".precoEat").innerHTML = precoComida
    novoMenu.querySelector(".drink").innerHTML = bebida
    novoMenu.querySelector(".precoDrink").innerHTML = precoBebida
    novoMenu.querySelector(".sweet").innerHTML = sobremesa
    novoMenu.querySelector(".precoSweet").innerHTML = precoSobremesa
    novoMenu.querySelector(".precoFinal").innerHTML = ("R$ ") + precoTotal.replace(".", ",")
}

function voltarAoMenu() {
    document.querySelector(".qualquer").classList.add("desaparece")

}

function pedirNoWhats() {
    let mensagem;
    mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${comida}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${precoTotal.replace(".", ",")}`
    window.open("https://wa.me/+558199999999/?text="+mensagem)
}