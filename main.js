function validarFormulario(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const modal = document.getElementById("myModal");
    const modalContent = document.getElementById("modalContent");

    // Valida se o campo B é maior que o campo A
    if (campoB > campoA) {
        modalContent.innerText = "Formulário válido! O número B é maior que o número A.";
    } else {
        modalContent.innerText = "Formulário inválido! O número B deve ser maior que o número A.";
    }
    modal.style.display = "block"; // Exibe o modal
}

function fecharModal() {
    document.getElementById("myModal").style.display = "none";
}