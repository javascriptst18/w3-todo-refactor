// Create a "close" button and append it to each list item
function createCloseButtons() {
  var listOfItems = document.getElementsByTagName("LI");
  for (let listItemElement of listOfItems) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    listItemElement.appendChild(span);
  }
}

// Click on a close button to hide the current list item
function bindCloseButtonEvents() {
  var close = document.getElementsByClassName("close");
  for (let closeButton of close) {
    closeButton.onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
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