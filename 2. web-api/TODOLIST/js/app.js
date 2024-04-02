

const $box = document.querySelector('.todo-list');

$box.addEventListener('click', (e) => {
  $box.removeChild(e.target.parentNode.parentNode);
  
});

const box = document.querySelector('.todo-list');

box.addEventListener('click', (e) => {
  if (e.target.closest('.remove')) {
    const listItem = e.target.closest('.todo-list-item');
    if (listItem) {
      listItem.remove();
    }
  }
});

const box = document.querySelector('.todo-list');

box.addEventListener('click', (e) => {
  if (e.target.classList.contains('lnr-cross-circle')) {
    const listItem = e.target.closest('.todo-list-item');
    if (listItem) {
      listItem.remove();
    }
  }
});

