document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');

    console.log('Script carregado e DOM pronto'); // Log para verificar se o script está carregado

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita o comportamento padrão de enviar o formulário
        const taskValue = newTaskInput.value.trim(); // A variável deve ser chamada "taskValue"
        console.log('Formulário submetido:', taskValue); // Log para verificar o valor do campo de entrada
        
        if (taskValue) {
            addTask(taskValue); // Adiciona a nova tarefa
            newTaskInput.value = ''; // Limpa o campo de entrada
        
        } else {
            console.error('Tarefa vazia não pode ser adicionada');
        }
    });

        function addTask(taskValue) {
            const li = document.createElement('li'); // Cria um novo elemento de lista
        //li.textContent = task; // Define o texto do novo elemento como a tarefa
        
        const taskText = document.createElement('span');
        taskText.textContent = taskValue;
        li.appendChild(taskText);

        const completeButton = document.createElement('button'); // Cria o botão "Complete"
        completeButton.textContent = 'Complete'; // Define o texto do botão
        completeButton.addEventListener('click', () => { // Adiciona um evento de clique
            li.classList.toggle('completed'); // Alterna a classe "completed" no elemento de lista
            
        });

        const deleteButton = document.createElement('button'); // Cria o botão "Delete"
        deleteButton.textContent = 'Delete'; // Define o texto do botão
        deleteButton.addEventListener('click', () => { // Adiciona um evento de clique
            li.remove();
            //taskList.removeChild(li); // Remove o elemento de lista
        });

        li.appendChild(completeButton); // Adiciona o botão "Complete" ao elemento de lista
        li.appendChild(deleteButton); // Adiciona o botão "Delete" ao elemento de lista

        taskList.appendChild(li); // Adiciona o novo elemento de lista à lista de tarefas
        console.log('Tarefa adicionada:', taskValue); // Log para verificar se a tarefa foi adicionada
    }
});
