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

// 체크박스 이벤트
document.querySelector('.todo-list').addEventListener('click', e => {
  if(!e.target.matches('.checkbox input')) return;
  const $checked = e.target.closest('.checkbox');
  $checked.classList.toggle('checked');
});


// 수정 버튼 클릭 이벤트
document.querySelector('.todo-list').addEventListener('click', e => {
  if(!e.target.matches('.modify span')) return;
  const $text = e.target.closest('.modify');
  $text
});
