const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
        if (input.value != '') {
            displayList(input.value);
            chaptersArray.push(input.value);
            setChapterList(chaptersArray);
            input.value = '';
            input.focus();
        };
});

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    const createdListItem = document.createElement('li');
    const deleteButton = document.createElement('button');
    createdListItem.textContent = input.value;
    deleteButton.textContent = '❌';
    createdListItem.append(deleteButton);
    list.append(createdListItem);
    deleteButton.addEventListener('click', () => {
        list.removeChild(createdListItem);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('BOMScriptureList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('BOMScriptureList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList;
}