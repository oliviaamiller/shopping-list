export function renderItem(item) {
    const listDiv = document.createElement('div');
    const itemP = document.createElement('p');
    const quantityP = document.createElement('p');

    if (item.complete === true) {
        listDiv.classList.add('bought', 'list');
    } else {
        listDiv.classList.add('unbought', 'list');
    }

    itemP.textContent = item.item;
    quantityP.textContent = item.quantity;

    listDiv.append(itemP, quantityP);

    return listDiv;
}