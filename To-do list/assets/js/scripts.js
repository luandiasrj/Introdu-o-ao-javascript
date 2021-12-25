var adicionaTarefa = document.getElementById("adicionar");
adicionaTarefa.addEventListener("click", function () { novaTarefa() }, false);

function novaTarefa() {
  var tarefa = document.createElement("input");
  tarefa.type = "checkbox";

  var inputValue = document.getElementById("tarefa").value;

  var myDiv = document.getElementById("tarefas");

  var checkbox = document.createElement('input');

  checkbox.type = "checkbox";

  var label = document.createElement('label');

  label.appendChild(document.createTextNode(inputValue));
  myDiv.appendChild(checkbox);
  myDiv.appendChild(label);

  var br = document.createElement('br');
  myDiv.appendChild(br);

  document.getElementById("tarefa").value = "";

} 