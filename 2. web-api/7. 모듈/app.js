
import { $btn as $button } from "./getDom.js";
import { clickHandler } from "./event.js";
import pow from "./pow.js";

const $btn = '123';
console.log($btn);
console.log($button);
// event.js에서 만든 이벤트 핸들러 등록
$btn.addEventListener('click', clickHandler);