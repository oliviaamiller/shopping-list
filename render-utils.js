export function renderItem(item) {
    const listDiv = document.createElement('div');
    const itemP = document.createElement('p');
    const quantityP = document.createElement('p');

    if (item.bought === true) {
        listDiv.classList.add('bought', 'list');
    } else {
        listDiv.classList.add('unbought', 'list');
    }

    itemP.textContent = item.item;
    quantityP.textContent = item.quantity;

    listDiv.append(quantityP, itemP);

    return listDiv;
}