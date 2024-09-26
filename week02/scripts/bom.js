const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
        if (input.value != '') {
            const createdListItem = document.createElement('li');
            const deleteButton = document.createElement('button');
            createdListItem.textContent = input.value;
            deleteButton.textContent = '❌';
            createdListItem.append(deleteButton);
            list.append(createdListItem);
            deleteButton.addEventListener('click', () => {
                list.removeChild(createdListItem);
                input.focus();
            });
            input.focus();
            input.value = '';
        };
        input.focus();
});