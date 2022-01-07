import { 
    checkAuth, 
    logout, 
    createItem,
    deleteAllItems,
    getItems,
    buyItem,
} from '../fetch-utils.js';

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
    // fetches the items, clears out the list, and redisplays them
    //loop through those items, create DOM elements, and append -- render items differently if "bought: true"

    await getItems();

    listEl.textContent = '';

    for (let item of items) {
        const 
    }


}

deleteButtonEl.addEventListener('click', async() => {
    await deleteAllItems();

    displayShoppingListItems();
});


logoutButtonEl.addEventListener('click', () => {
    logout();
});
