class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(descricao, autor, departamento, importancia, valor, duracao) {
        let task = {
            descricao: descricao,
            autor: autor,
            departamento: departamento,
            importancia: parseInt(importancia),
            valor: valor || null,
            duracao: duracao || null
        };
        this.tasks.push(task);
        this.updateTaskTable();
        this.updateImportanceList();
    }

    deleteTask(index) {
        this.tasks.splice(index, 1);
        this.updateTaskTable();
        this.updateImportanceList();
    }

    updateTaskTable() {
        let tableBody = document.querySelector('#taskTable tbody');
        tableBody.innerHTML = '';

        this.tasks.forEach((task, index) => {
            let row = tableBody.insertRow();
            row.insertCell(0).innerText = task.descricao;
            row.insertCell(1).innerText = task.autor;
            row.insertCell(2).innerText = task.departamento;
            row.insertCell(3).innerText = task.importancia;
            row.insertCell(4).innerText = task.valor || '-';
            row.insertCell(5).innerText = task.duracao || '-';
            let deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'Excluir';
            deleteBtn.onclick = () => {
                this.deleteTask(index);
            };
            row.insertCell(6).appendChild(deleteBtn);
        });
    }

    updateImportanceList() {
        let list = document.getElementById('importanceList');
        list.innerHTML = '';

        let sortedTasks = this.tasks.slice().sort((a, b) => b.importancia - a.importancia);
        sortedTasks.forEach(task => {
            let li = document.createElement('li');
            li.innerText = task.descricao;
            list.appendChild(li);
        });
    }
}

let manager = new TaskManager();

function addTask() {
    manager.addTask(
        document.getElementById('descricao').value,
        document.getElementById('autor').value,
        document.getElementById('departamento').value,
        document.getElementById('importancia').value,
        document.getElementById('valor').value,
        document.getElementById('duracao').value
    );
}
