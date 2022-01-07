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