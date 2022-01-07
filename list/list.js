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
const listEl = document.querySelector('#list-items');
const logoutButtonEl = document.querySelector('#logout');

window.addEventListener('load', () => {
    displayShoppingListItems();
});

formEl.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData('list');

    const listItem = data.get('item');
    const itemQuantity = data.get('quantity');

    await createItem(listItem, itemQuantity);

    formEl.reset();

    displayShoppingListItems();
})

async function displayShoppingListItems() {
    
    await getItems();

    listEl.textContent = `${list.quantity} ${list.item}`;

    for (let list of lists) {
        const listItemsAndQuantityEl = renderItem(list);
    }


}

deleteButtonEl.addEventListener('click', async() => {
    await deleteAllItems();

    displayShoppingListItems();
});


logoutButtonEl.addEventListener('click', () => {
    logout();
});
