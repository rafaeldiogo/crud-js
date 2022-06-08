var selectedRow = null;
function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();

  if (selectedRow === null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

function readFormData() {
  var formData = {};

  formData["codigoProduto"] = document.getElementById("codigoProduto").value;
  formData["nomeProduto"] = document.getElementById("nomeProduto").value;
  formData["quantidadeProduto"] =
    document.getElementById("quantidadeProduto").value;
  formData["precoProduto"] = document.getElementById("precoProduto").value;

  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.codigoProduto;
  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.nomeProduto;
  var cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.quantidadeProduto;
  var cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.precoProduto;
  var cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<button onClick = 'onEdit(this)'>Editar</button> <button onClick = 'onDelete(this)'>Deletar</button>`;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("codigoProduto").value =
    selectedRow.cells[0].innerHTML;
  document.getElementById("nomeProduto").value = selectedRow.cells[1].innerHTML;
  document.getElementById("quantidadeProduto").value =
    selectedRow.cells[2].innerHTML;
  document.getElementById("precoProduto").value =
    selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.codigoProduto;
  selectedRow.cells[1].innerHTML = formData.nomeProduto;
  selectedRow.cells[2].innerHTML = formData.quantidadeProduto;
  selectedRow.cells[3].innerHTML = formData.precoProduto;
}

function onDelete(td) {
  if (confirm("Você quer deletar os dados?")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
  }
  resetForm();
}

function resetForm() {
  document.getElementById("codigoProduto").value = "";
  document.getElementById("nomeProduto").value = "";
  document.getElementById("quantidadeProduto").value = "";
  document.getElementById("precoProduto").value = "";
}
