// Create a "close" button and append it to each list item
function createCloseButtons() {
  let listOfItems = document.getElementsByTagName("LI");
  for (let listItemElement of listOfItems) {
    listItemElement.appendChild(createCloseButtonElement());
  }
}

function createCloseButtonElement() {
  let closeButton = document.createElement("SPAN");
  let closeIcon = document.createTextNode("\u00D7");
  closeButton.className = "close";
  closeButton.appendChild(closeIcon);
  return closeButton;
}

// Click on a close button to hide the current list item
function bindCloseButtonEvents() {
  let closeButtonElements = document.getElementsByClassName("close");
  for (let closeButton of closeButtonElements) {
    closeButton.addEventListener('click', function () {
      let div = this.parentElement;
      div.remove();
    })
  }
}

// Add a "checked" symbol when clicking on a list item
function appendCheckedToElement() {
  let listOfTodos = document.getElementById('listOfTodos');
  listOfTodos.addEventListener('click', function (event) {
    if (event.target.matches('LI')) {
      event.target.classList.toggle('checked');
    }
  }, false);
}

function validateInput(input) {
  if (input.trim()) {
    return true;
  }
  return false;
}

// Create a new list item when clicking on the "Add" button
function createNewListElement() {
  var listItem = document.createElement("li");
  var inputValue = document.getElementById("addNewTodo").value;
  listItem.innerText = inputValue;

  if (validateInput(inputValue)) {
    alert("You must write something!");
  } else {
    document.getElementById("listOfTodos").appendChild(listItem);
  }
  document.getElementById("addNewTodo").value = "";

  listItem.appendChild(createCloseButtonElement());

  bindCloseButtonEvents();
}

const submitTodoButton = document.getElementById('submitTodo');
submitTodoButton.addEventListener('click', newElement);
createCloseButtons();
bindCloseButtonEvents();
appendCheckedToElement();