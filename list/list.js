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

console.log(formEl, deleteButtonEl, listEl, logoutButtonEl);

logoutButtonEl.addEventListener('click', () => {
    logout();
});
