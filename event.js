// click - Fired when an element is clicked.
// dblclick - Fired when an element is double-clicked.
// mouseover - Fired when the mouse pointer is moved onto an element.
// mouseout - Fired when the mouse pointer is moved out of an element.
// mousemove - Fired when the mouse pointer is moving within an element.
// mousedown - Fired when the mouse button is pressed down on an element.
// mouseup - Fired when the mouse button is released over an element.
// keypress - Fired when a key is pressed down on the keyboard (deprecated).
// keydown - Fired when a key is pressed down.
// keyup - Fired when a key is released.
// focus - Fired when an element gains focus.
// blur - Fired when an element loses focus.
// submit - Fired when a form is submitted.
// change - Fired when the value of an element changes (like an input or select).
// input - Fired when the value of an <input>, <textarea>, or <select> element is changed.
// load - Fired when the page or a resource has loaded.
// unload - Fired when the user navigates away from the page (deprecated).
// scroll - Fired when the document view or an element is scrolled.
// resize - Fired when the document view is resized.
// contextmenu - Fired when the right mouse button is clicked (to open a context menu).
// dragstart - Fired when the user starts dragging an element.
// drag - Fired when the user drags an element.
// dragenter - Fired when a dragged element enters a valid drop target.
// dragleave - Fired when a dragged element leaves a valid drop target.
// dragover - Fired when a dragged element is being dragged over a valid drop target.
// drop - Fired when a dragged element is dropped on a valid drop target.
// dragend - Fired when the user stops dragging an element.

// Click event
document.getElementById("clickButton").addEventListener("click", function () {
  alert("Button clicked!");
});

// Double click event
document
  .getElementById("clickButton")
  .addEventListener("dblclick", function () {
    alert("Button double-clicked!");
  });

// Mouseover event
document
  .getElementById("clickButton")
  .addEventListener("mouseover", function () {
    console.log("Mouse over the button!");
  });

// Mouseout event
document
  .getElementById("clickButton")
  .addEventListener("mouseout", function () {
    console.log("Mouse out of the button!");
  });

// Keydown event
document
  .getElementById("textInput")
  .addEventListener("keydown", function (event) {
    console.log("Key pressed:", event.key);
  });

// Focus event
document.getElementById("textInput").addEventListener("focus", function () {
  console.log("Input field focused");
});

// Blur event
document.getElementById("textInput").addEventListener("blur", function () {
  console.log("Input field lost focus");
});

// Submit event
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from actually submitting
  alert("Form submitted!");
});

// Scroll event
window.addEventListener("scroll", function () {
  console.log("Page is being scrolled!");
});

// Resize event
window.addEventListener("resize", function () {
  console.log("Window is resized!");
});

// Context menu event (right-click)
document
  .getElementById("clickButton")
  .addEventListener("contextmenu", function (event) {
    event.preventDefault(); // Prevent the context menu from appearing
    alert("Right-click detected!");
  });

// Drag and Drop events
const draggableElement = document.getElementById("clickButton");

draggableElement.addEventListener("dragstart", function (event) {
  console.log("Drag started");
});

draggableElement.addEventListener("dragend", function (event) {
  console.log("Drag ended");
});

document.body.addEventListener("dragover", function (event) {
  event.preventDefault(); // Allow drop
});

document.body.addEventListener("drop", function (event) {
  event.preventDefault();
  console.log("Element dropped");
});
