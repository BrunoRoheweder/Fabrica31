const container = document.getElementById('gerencia_relatorio');

function addDiv(verificar, lista) {

    if (verificar) {
        // const newDiv = document.createElement('div');
        // newDiv.textContent = lista; 
        // newDiv.style.border = '1px solid black'; 
        // newDiv.style.margin = '10px'; 
        // newDiv.style.padding = '10px'; 

        // if (container.children.length === 0) {
        //     container.appendChild(newDiv);
        // } 
        const newDivHTML = `
                <div class="tabela_relatorio">
                    
                </div>
            `;

            // Se o container estiver vazio, adiciona a nova div diretamente
            if (container.children.length === 0) {
                container.insertAdjacentHTML('beforeend', newDivHTML);
            }
        // return true;
    }
}

function banco() {
    const lista = "Teste"
    addDiv(true, lista)
}

banco()