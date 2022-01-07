export function renderItem(list) {
    const listDiv = document.createElement('div');
    const itemP = document.createElement('p');
    const quantityP = document.createElement('p');

    if (list.complete === true) {
        listDiv.classList.add('bought', 'list');
    } else {
        listDiv.classList.add('unbought', 'list');
    }

    itemP.textContent = list.item;
    quantityP.textContent = list.quantity;

    listDiv.append(itemP, quantityP);

    return listDiv;
}