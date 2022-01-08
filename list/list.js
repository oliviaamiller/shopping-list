import { 
    checkAuth, 
    logout, 
    createItem,
    deleteAllItems,
    getItems,
    buyItem,
    unbuyItem,
    deleteSingleItem,
} from '../fetch-utils.js';
import { renderItem, renderButton } from '../render-utils.js';

checkAuth();

const formEl = document.querySelector('form');
const deleteButtonEl = document.querySelector('#delete-button');
const listEl = document.querySelector('.list-items');
const logoutButtonEl = document.querySelector('#logout-button');


window.addEventListener('load', () => {
    displayShoppingListItems();
});

formEl.addEventListener('submit', async(e) => {
    e.preventDefault();

    //get access to form data
    const data = new FormData(formEl);

    //grab data input by name
    const listItem = data.get('item');
    const itemQuantity = data.get('quantity');

    //create item with data from form you want displayed
    await createItem(listItem, itemQuantity);

    //reset the form
    formEl.reset();

    // display in dom 
    displayShoppingListItems();
});

async function displayShoppingListItems() {
    
    const lists = await getItems();
    

    listEl.textContent = '';

    for (let item of lists) {
        const listItemsAndQuantityEl = renderItem(item);
        const deleteButtonEl = renderButton(item);

        // add click event to loopEl, on click buy item and then display
        listItemsAndQuantityEl.addEventListener('click', async() => {

            if (item.bought === false) {
                await buyItem(item.id);
            } else {
                await unbuyItem(item.id);
            }
                       

            displayShoppingListItems();
        });

        deleteButtonEl.addEventListener('click', async() => {
            await deleteSingleItem(item.id);

            displayShoppingListItems();
        });
        // append loop el to list el

        const allTogetherEl = document.createElement('div');
        
        allTogetherEl.classList.add('item-container');

        allTogetherEl.append(listItemsAndQuantityEl, deleteButtonEl);

        listEl.append(allTogetherEl);

    }
}

deleteButtonEl.addEventListener('click', async() => {
    await deleteAllItems();

    displayShoppingListItems();
});


logoutButtonEl.addEventListener('click', () => {
    logout();
});
