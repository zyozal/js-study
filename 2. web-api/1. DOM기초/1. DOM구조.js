/*

<html>
<head>
</head>
<body>
  <div class='wrap'>
    <ul id='list'>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
</body>
</html>

*/

let html, head, body;

html = {
  tagName: 'html',
  children: [head, body]
};
head = {
  tagName: 'head',
  children: null,
  parentNode: html,
  nextSibling: body
};
body = {
  tagName: 'body',
  children: null,
  parentNode: html,
  nextSibling: null,
  prevSibling: head
};