btnConfirm = document.getElementById("btn-confirma");

btnConfirm.addEventListener("click", () => {
  salvarForm();
})

function salvarForm() {
  console.log("SALVEI")
  if (localStorage.cont) {
    localStorage.cont = Number(localStorage.cont) + 1;
  } else {
    localStorage.cont = 1;
  }

  let cad = {
    nome: document.getElementById("nome").value,
    empresa: document.getElementById("empresa").value,
    idade: document.getElementById("idade").value,
    endereco: document.getElementById("endereco").value,
    opniao: document.getElementById("opniao").value,
    tamanhoTerreno: document.getElementById("tamanhoTerreno").value
  }

  localStorage.setItem("cad_" + localStorage.cont, JSON.stringify(cad));
}