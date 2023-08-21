let tasks = [];

function addTask() {
    let descricao = document.getElementById('descricao').value;
    let autor = document.getElementById('autor').value;
    let departamento = document.getElementById('departamento').value;
    let importancia = document.getElementById('importancia').value;
    let valor = document.getElementById('valor').value || null;
    let duracao = document.getElementById('duracao').value || null;

    let task = {
        descricao: descricao,
        autor: autor,
        departamento: departamento,
        importancia: parseInt(importancia),
        valor: valor,
        duracao: duracao
    };
    tasks.push(task);
    updateTaskTable();
    updateImportanceList();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskTable();
    updateImportanceList();
}

function updateTaskTable() {
    let tableBody = document.querySelector('#taskTable tbody');
    tableBody.innerHTML = '';

    tasks.forEach((task, index) => {
        let row = document.createElement('tr');
        
        Object.keys(task).forEach(key => {
            let td = document.createElement('td');
            td.textContent = task[key] || '-';
            row.appendChild(td);
        });

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Excluir';
        deleteBtn.addEventListener('click', function() {
            deleteTask(index);
        });
        
        let tdAction = document.createElement('td');
        tdAction.appendChild(deleteBtn);
        row.appendChild(tdAction);

        tableBody.appendChild(row);
    });
}

function updateImportanceList() {
    let list = document.getElementById('importanceList');
    list.innerHTML = '';

    let sortedTasks = tasks.slice().sort((a, b) => b.importancia - a.importancia);
    sortedTasks.forEach(task => {
        let li = document.createElement('li');
        li.innerText = task.descricao;
        list.appendChild(li);
    });
}