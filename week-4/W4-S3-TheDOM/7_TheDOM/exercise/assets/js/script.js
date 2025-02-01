console.log("Hello from script.js");

// What is this?
//console.log(window);

// What is the difference between window and document?
console.log(document);
//Detailed representation of window objects and its properties and methods.

// What is the difference between document and document.documentElement?
/*Document object represents the entire HTML document loaded in the browser.
Document Element returns root element of the HTML*/

console.log(window.document);
//Displays entire HTML.

console.log(document.documentElement);
//The console will display the object which includes the HTML structure of the page. 

// what are the children of the body element?
console.log(document.body.children);
//div
//script
