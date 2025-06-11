const btexecutar = document.querySelector("#btnAdicionar");
const btremover = document.querySelector("#btnRemoverConcluidas");
let lista = document.querySelector("#listaTarefas");
let tarefas = [];
let tarefasc = [];
let tarefasp = [];
const concluidas = document.querySelector("#tarefasConcluidas");
const pendentes = document.querySelector("#tarefasPendentes");
const tarefasTotal = document.querySelector("#totalTarefas");

btexecutar.addEventListener("click", function() {
    let tarefa = document.querySelector("#descricaoTarefa").value;
    tarefas.push(tarefa);
    tarefasp.push(tarefa);
    ReceberTarefa(tarefa);
    atualizarContagem();
})

function ReceberTarefa(tarefa) {
    let obj = document.createElement("li");
    let tarefaAlterada = document.createTextNode(tarefa);
    obj.append(tarefaAlterada);
    lista.append(obj);
}

lista.addEventListener("click",function(e){
    e.target.classList.toggle("concluida");
    let textoTarefa = e.target.textContent;

    if (e.target.classList.contains("concluida")) {
        if (!tarefasc.includes(textoTarefa)) tarefasc.push(textoTarefa);
        let index = tarefasp.indexOf(textoTarefa);
        if (index > -1) {
            tarefasp.splice(index, 1);
        }
    }
    else {
        let index = tarefasc.indexOf(textoTarefa);
        if (index > -1) {
            tarefasc.splice(index, 1);
        }
        if (!tarefasp.includes(textoTarefa)) tarefasp.push(textoTarefa);
    }

    atualizarContagem();
});

btremover.addEventListener("click", function() {
    let itens = document.querySelectorAll("#listaTarefas li");
    itens.forEach(function(item) {
        if (item.classList.contains("concluida")) {
            let textoTarefa = item.textContent;

            let indexTarefa = tarefas.indexOf(textoTarefa);
            if (indexTarefa > -1) {
                tarefas.splice(indexTarefa, 1);
            }

            let indexConcluida = tarefasc.indexOf(textoTarefa);
            if (indexConcluida > -1) {
                tarefasc.splice(indexConcluida, 1);
            }

            item.remove();
        }
    });

    atualizarContagem();
});

function atualizarContagem() {
    concluidas.innerHTML = tarefasc.length;
    pendentes.innerHTML = tarefasp.length;
    tarefasTotal.innerHTML = tarefas.length;
}

