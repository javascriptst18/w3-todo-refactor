// Create a "close" button and append it to each list item
function createCloseButtons() {
  let listOfItems = document.getElementsByTagName("LI");
  for (let listItemElement of listOfItems) {
    listItemElement.appendChild(createCloseButtonElement());
  }
  appendCheckedToElement();
  bindCloseButtonEvents();
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

function createListItemElement(inputValue) {
  let listItem = document.createElement("li");
  listItem.innerText = inputValue;
  return listItem;
}

// Create a new list item when clicking on the "Add" button
function createNewListItem() {
  let inputField = document.getElementById("addNewTodo");
  let inputValue = inputField.value;
  let listItem = createListItemElement(inputValue);

  if (validateInput(inputValue)) {
    document.getElementById("listOfTodos").appendChild(listItem);
  } else {
    alert("You must write something!");
  }
  inputField.value = "";

  listItem.appendChild(createCloseButtonElement());

  bindCloseButtonEvents();
}

const submitTodoButton = document.getElementById('submitTodo');
submitTodoButton.addEventListener('click', createNewListItem);
createCloseButtons();