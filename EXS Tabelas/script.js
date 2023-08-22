//array vazio para armazenar as tarefas.
let tarefas = [];

//função para adicionar tarefas a lista
function adicionartarefa() {
//captura os valores dos elementos html
    let descricao = document.getElementById('descricao').value;
    let autor = document.getElementById('autor').value;
    let departamento = document.getElementById('departamento').value;
    let importancia = document.getElementById('importancia').value;
    let valor = document.getElementById('valor').value || null;
    let duracao = document.getElementById('duracao').value || null;

//cria um objeto tarefa com as informações capturadas
    let tarefa = {
        descricao: descricao,
        autor: autor,
        departamento: departamento,
        importancia: parseInt(importancia), //converte a importância para um número inteiro para fazer a lista de importancia dps
        valor: valor,
        duracao: duracao
    };
//adiciona a tarefa ao array de tarefas
    tarefas.push(tarefa);

//atualiza a tabela e a lista de importância após adicionar uma tarefa
    atualizartabelatarefas();
    atualizarlistaimportancia();
}

//função para deletar uma tarefa com base no índice fornecido
function deletartarefa(indice) {
//remove a tarefa do array com base no índice.
    tarefas.splice(indice, 1);

//atualiza a tabela e a lista de importância após deletar uma tarefa
    atualizartabelatarefas();
    atualizarlistaimportancia();
}

//função para atualizar a tabela de tarefas
function atualizartabelatarefas() {
//seleciona o corpo da tabela
    let corpotabela = document.querySelector('#tabelatarefas tbody');
    corpotabela.innerHTML = '';

//atualiza e adiciona cada uma a tabela
    tarefas.forEach((tarefa, indice) => {
        let linha = document.createElement('tr');
        
//atualiza as propriedades da tarefa para preencher os campos
        Object.keys(tarefa).forEach(chave => {
            let td = document.createElement('td');
            td.textContent = tarefa[chave] || '-';
            linha.appendChild(td);
        });

//cria um botão para excluir a tarefa
        let btnexcluir = document.createElement('button');
        btnexcluir.textContent = 'Excluir';
        btnexcluir.addEventListener('click', function() {
            deletartarefa(indice);
        });
        
//adiciona o botão de excluir a linha da tarefa
        let tdacao = document.createElement('td');
        tdacao.appendChild(btnexcluir);
        linha.appendChild(tdacao);

//adiciona a linha completa ao corpo da tabela
        corpotabela.appendChild(linha);
    });
}

//função para atualizar a lista de tarefas com base em sua importância
function atualizarlistaimportancia() {
//seleciona o elemento da lista de importancia
    let lista = document.getElementById('listaimportancia');
    lista.innerHTML = '';

//ordena as tarefas com base em sua importância MAIOR PARA O MENOR
    let tarefasordenadas = tarefas.slice().sort((a, b) => b.importancia - a.importancia);

//adiciona as tarefas ordenadas a lista
    tarefasordenadas.forEach(tarefa => {
        let li = document.createElement('li');
        li.innerText = tarefa.descricao;
        lista.appendChild(li);
    });
}
