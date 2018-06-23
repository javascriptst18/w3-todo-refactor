// Create a "close" button and append it to each list item
function createCloseButtons() {
  let listOfItems = document.getElementsByTagName("LI");
  for (let listItemElement of listOfItems) {
    let closeButton = document.createElement("SPAN");
    let closeIcon = document.createTextNode("\u00D7");
    closeButton.className = "close";
    closeButton.appendChild(closeIcon);
    listItemElement.appendChild(closeButton);
  }
}

// Click on a close button to hide the current list item
function bindCloseButtonEvents() {
  let closeButtonElements = document.getElementsByClassName("close");
  for (let closeButton of closeButtonElements) {
    closeButton.addEventListener('click', function () {
      let div = this.parentElement;
      div.classList.toggle('hidden');
    })
  }
}

// Add a "checked" symbol when clicking on a list item
function appendCheckedToElement() {
  var list = document.querySelector('ul');
  list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("addNewTodo").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("listOfTodos").appendChild(li);
  }
  document.getElementById("addNewTodo").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  bindCloseButtonEvents();
}

const submitTodoButton = document.getElementById('submitTodo');
submitTodoButton.addEventListener('click', newElement);
createCloseButtons();
bindCloseButtonEvents();
appendCheckedToElement();