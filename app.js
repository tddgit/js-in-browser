let buffer = new ArrayBuffer(16);
console.log(buffer.byteLength);

let view = new Uint32Array(buffer);

console.log(Uint32Array.BYTES_PER_ELEMENT);
console.log(view.length);
console.log(view.byteLength);
view[0] = 1213456;
for (let num of view) {
  console.log("num:", num);
}
let arr16 = new Uint16Array([1, 1000]);
let arr8 = new Uint8Array(arr16);
let arr32 = new Uint32Array(arr16);
console.log(arr32[0]);
console.log(arr32[1]);
console.log(arr32[2]);

let arr = new Uint8Array([1, 2, 3, 4]);
console.log(arr.length);
console.log(arr[1]);
console.log(arr);

// function sayHi() {
//   alert("Hello");
// }
// window.sayHi();
// alert(window.innerHeight);
// alert(window.innerWidth);
// document.body.style.background = "red";
// setTimeout(() => (document.body.style.background = ""), 2000);
// alert(location.href);
// console.log(location);
// console.dir(location);
// console.log(location.port);

// if (confirm("Go to Wikipedia")) {
//   location.href = "http://wikipedia.org/";
// }

// console.log(navigator);
// console.dir(navigator);
// console.log(navigator.mimeTypes);
// console.log(navigator.clipboard);
//
// // for (let element of document.body.childNodes) {
// //   console.log("For of: ", element);
// // }
// //
// // for (let element in document.body.childNodes) {
// //   console.log("For in: ", element);
// // }

// console.log(document.body.parentElement);
// console.log(document.body.parentNode);
// console.log(document.head.nextSibling);
// console.log(document.body.previousSibling);
//
// table = document.querySelector("table");
//
// console.log(table.rows);
// console.log(table.tBodies);
// console.log(document.body.children);
//
// console.log(document.body.children[4]);
// console.log(document.body.children[5].lastChild.innerText);
//
// let form = document.getElementsByName("my-form")[0];
// let chapterClass = form.getElementsByClassName("article");
// let chapterSel = form.querySelector(".article");
//
// let formItems = document.querySelectorAll("my-form");
//
// // alert(document.cookie);
// let name = "my name";
// let value = "John Smith";
//
// document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
//
// document.cookie = "user=John; path/; max-age=0";
