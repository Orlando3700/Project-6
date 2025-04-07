// Function to add a new item to the list
function newElement() {
	
  // Get the input value
  var inputValue = document.getElementById("input-box").value;
  
  // Check if the input value is not empty
  if (inputValue.trim() === "") {
    alert("Please enter an item!");
    return;
  }

  // Create a new list item
  var li = document.createElement("li");

  // Create a text node with the input value
  var textNode = document.createTextNode(inputValue);

  // Create a checkbox for the item
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Create a delete button
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");

  // Append the checkbox to the list item
  // Add the checkbox to left side of the list item
  li.appendChild(checkbox);

  // Append the text node to the list item
  li.appendChild(textNode);

  // Append the delete button to the list item
  li.appendChild(deleteButton);

  // Add the new list item to the shopping list
  document.getElementById("myItems").appendChild(li);

  // Clear the input box after adding the item
  document.getElementById("input-box").value = "";


  // Add event listener to cross out the item when clicked (toggle 
  //the completed class)
  checkbox.addEventListener("click", function () {
  li.classList.toggle("completed", checkbox.checked);
});

  deleteButton.addEventListener("click", function () {
  if (confirm("Are you sure you want to delete this item?")) {
    li.remove();
  }
});
}

