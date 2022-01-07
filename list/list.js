import { 
    checkAuth, 
    logout, 
    createItem,
    deleteAllItems,
    getItems,

} from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});
