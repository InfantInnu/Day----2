// 1) List 5 difference between Browser JS(console) v Nodejs
// Browser JS (console):
// i)“window” is a predefined global object which has functions and attributes, that have to deal 
//      with window that has been drawn.
// ii)“location” is another predefined object in browsers, that has all the information about the url we have loaded.
// iii)“document”, which is also another predefined global variable in browsers, has the html which is rendered.
// iv)Browsers may have an object named “global”, but it will be the exact one as “window”.
// v)Browsers don’t have “require” predefined. You may include it in your app for asynchronous file loading.

// Nodejs:
// i)Node doesn’t have a predefined “window” object because it doesn’t have a window to draw anything.
// ii)“location” object is related to a particular url; that means it is for page specific. So, node doesn’t require that.
// iii)Ofcourse Node doesn’t have “document” object also, cause it never have to render anything in a page.
// iv)Node has “global”, which is a predefined global object. It contains several functions that are not available in browsers, cause they are needed for server side works only.
// v)“require” object is predefined in Node which is used to include modules in the app.

// 2) Watch and summary 5 points:
// -->PARSING HTML: 
//   i)html is a forgiving by nature.
//   ii)parsing isn't straight forward.
//   iii)can behalted.
//-->Speculative parsing:
//   i)will look ahead.
//   ii)external images,scripts.
// -->Reentrant:
//   i)means  the parsing process can be intruptted.

// 4)Execute the below code and write your description in txt file
// typeof(1) -->number
// typeof(1.1) -->number
// typeof('1.1') -->string
// typeof(true) -->Boolean
// typeof(null) -->Object
// typeof(undefined) -->undefined
// typeof([]) -->object
// typeof({}) -->object
// typeof(NaN) -->object

// 5)What is Prototype?
//   Prototypes are the mechanism by which JavaScript objects inherit features from one another.



