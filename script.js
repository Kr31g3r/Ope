// Select the input field, button, and list
const inputField = document.getElementById('inputField');
const addButton = document.getElementById('addButton');
const itemList = document.getElementById('itemList');

// Add an event listener to the button
addButton.addEventListener('click', () => {
    // Get the value from the input field
    const inputValue = inputField.value.trim();

    // Ensure the input is not empty
    if (inputValue) {
        // Create a new list item
        const newItem = document.createElement('li');

        // Create a text node for the input value
        const textNode = document.createTextNode(inputValue);

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Ope';
        deleteButton.style.marginLeft = '10px'; // Optional styling

        // Add an event listener to the delete button
        deleteButton.addEventListener('click', () => {
            // Remove the list item
            itemList.removeChild(newItem);
        });

        // Append the text and button to the list item
        newItem.appendChild(textNode);
        newItem.appendChild(deleteButton);

        // Add the new list item to the list
        itemList.appendChild(newItem);

        // Clear the input field
        inputField.value = '';
    } else {
        alert('Please enter some text before adding.');
    }
});

inputField.addEventListener('keydown', (event) => {
    // Check if the pressed key is 'Enter'
    if (event.key === 'Enter') {
        // Trigger the add note functionality
        addButton.click(); // Simulate a button click
    }
});