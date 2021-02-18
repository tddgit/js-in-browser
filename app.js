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

console.log(document.body.parentElement);
console.log(document.body.parentNode);
console.log(document.head.nextSibling);
console.log(document.body.previousSibling);

table = document.querySelector("table");

console.log(table.rows);
console.log(table.tBodies);
console.log(document.body.children);

console.log(document.body.children[4]);
console.log(document.body.children[5].lastChild.innerText);

let form = document.getElementsByName("my-form")[0];
let chapterClass = form.getElementsByClassName("article");
let chapterSel = form.querySelector(".article");

let formItems = document.querySelectorAll("my-form");

// alert(document.cookie);
let name = "my name";
let value = "John Smith";

document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

document.cookie = "user=John; path/; max-age=0";
