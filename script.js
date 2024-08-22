//your code here!
// Reference to the list element
const list = document.getElementById('infi-list');

// Function to add a specified number of list items
function addListItems(count) {
    for (let i = 0; i < count; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `Item ${list.children.length + 1}`;
        list.appendChild(listItem);
    }
}

// Initially add 10 list items
addListItems(10);

// Event listener to detect when the user scrolls to the end of the list
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const threshold = document.documentElement.scrollHeight;

    // If the user has reached the bottom of the page, add 2 more items
    if (scrollPosition >= threshold) {
        addListItems(2);
    }
});


