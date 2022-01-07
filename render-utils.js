export function renderItem(item) {
    const listDiv = document.createElement('div');
    const listP = document.createElement('p');

    if (item.bought === true) {
        listDiv.classList.add('bought', 'list');
    } else {
        listDiv.classList.add('unbought', 'list');
    }
    
    listP.textContent = `${item.quantity} ${item.item}`;

    listDiv.append(listP);

    return listDiv;
}

export function renderButton(item) {
    const deleteDiv = document.createElement('div');
    const deleteButton = document.createElement('button');

    if (item.bought === true) {
        deleteDiv.classList.add('bought-button', 'delete-item');
    } else {
        deleteDiv.classList.add('unbought-button', 'delete-item');
    }

    deleteButton.textContent = 'delete';

    deleteDiv.append(deleteButton);

    return deleteDiv;
}

export function renderFullItem(item) {
    const fullDiv = document.createElement('div');

    fullDiv.append(renderItem(item), renderButton(item));

    return fullDiv;
}