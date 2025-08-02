
window.onload = function() {
    const title = document.getElementById("page-title")

    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString("pt-BR", {month: 'long'});
    const year = today.getFullYear();

    title.textContent = `Tarefas do Dia ${day} de ${month} de ${year} 🗒️✏️`;
}




function addNewTask() {
    //Pega a lista onde as tarefas vão aparecer
    var list = document.getElementById("list");
   
    //Pega o texto digitado no campo.
    var Text = document.getElementById("taskname").value;
  
    //Cria um item na lista
    var listItem = document.createElement("li");
    listItem.className ="list-item";
  
    //valida e impede a adição de tarefa vazia
    if (Text.trim() ===  "")return;
   
    //Cria o texto da tarefa.   
    var taskText = document.createElement("span");
    taskText.textContent = Text;
   
    //criando uma checkboz para as tarefas.
    var checkbox = document.createElement("input");
    checkbox.type ="checkbox";
    checkbox.className ="task-checkbox";

    //Função da CheckBox
    checkbox.onchange = function() {
        if (checkbox.checked) {
            taskText.style.textDecoration = "line-through";
        } else {
            taskText.style.textDecoration = "none";
        }
    }

    //adicionando a checkbox aos itens, e texto

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText)

    //Criando botão de remover task
    var removeButton = document.createElement("button");
    removeButton.className = "remove-button";
    removeButton.textContent = "Remover Tarefa"
    removeButton.onclick = function() {
        list.removeChild(listItem);
    }

    //adiciona o botão de remove, e adiciona a tarefa pronta a lista.
    listItem.appendChild(removeButton);
    list.appendChild(listItem);
    
    //limpa o conteúdo:
    document.getElementById("taskname").value = "";
}


