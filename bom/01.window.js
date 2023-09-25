
// 1) Window size
const width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

const height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;    


// 2) Open a new window


// 3) Resize a window
window.resizeBy(deltaX,deltaY);

// 4) Move a window
window.moveTo(x, y);
let jsWindow = window.open(
    'http://localhost/js/about.html',
    'about',
    'height=600,width=600');

setTimeout(() => {
    jsWindow.moveTo(500, 500);
}, 3000);


// 5) Close a window

//  6) The window.opener property
/* 
Summary
The window is the global object in the web browser.
The window object exposes the functionality of the web browser.
The window object provides methods for manipulating a window such as open(), resize(), resizeBy(), moveTo(), moveBy(), and close(). */