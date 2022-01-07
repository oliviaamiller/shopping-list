import { 
    checkAuth, 
    logout, 
    createItem,
    deleteAllItems,
    getItems,
    buyItem,
} from '../fetch-utils.js';
import { renderItem } from '../render-utils.js';

checkAuth();

const formEl = document.querySelector('form');
const deleteButtonEl = document.querySelector('#delete-button');
const listEl = document.querySelector('.list-items');
const logoutButtonEl = document.querySelector('#logout');

console.log(listEl);

window.addEventListener('load', () => {
    displayShoppingListItems();
});

formEl.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(formEl);

    const listItem = data.get('item');
    const itemQuantity = data.get('quantity');

    await createItem(listItem, itemQuantity);

    formEl.reset();

    displayShoppingListItems();
});

async function displayShoppingListItems() {
    
    const lists = await getItems();

    listEl.textContent = '';

    for (let item of lists) {
        const listItemsAndQuantityEl = renderItem(item);

        // add click event to loopEl, on click buy item and then display
        listItemsAndQuantityEl.addEventListener('click', async() => {
            await buyItem(item.id);

            displayShoppingListItems();
        });
        // append loop el to list el
        listEl.append(listItemsAndQuantityEl);

    }
}

deleteButtonEl.addEventListener('click', async() => {
    await deleteAllItems();

    displayShoppingListItems();
});


logoutButtonEl.addEventListener('click', () => {
    logout();
});
