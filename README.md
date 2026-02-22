
## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ansower:
getElementByID:  can work by calling the id specified by getElementByID.
for example:document.getElementByID("id").

getElementsByClassName: we can work by calling classes together using getElementsByClassName.
for example:document.getElementsByClassName("boxsClass").

querySelector:works by calling querySelector with a specified css selector.
for example:document.querySelector("#id")
 
 querySelectorAll: querySelectorAll can be used to call multiple css selector.
 for examle: document.querySelectorAll(".call")/ document.querySelectorAll("#call") or tagname call document.querySelectorAll("h2")

### 2. How do you create and insert a new element into the DOM?
to create element in the dom , document.create.element() is used and the innertext of the element is placed by calling append.child .

### 3. What is Event Bubbling? And how does it work?
Event Bubbling : if a child element is clicked , that event will also be triggered on it parent element.
 
### 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation:is a method that instead of providing an event listener on each child element, provides a listener on a parent element , and the parent understands which child has been clicked on. 

### 5. What is the difference between preventDefault() and stopPropagation() methods?
event preventDefault(): disables the browsers default behavior
stopPropagation(): is is a method that stops the event from bubbling up.

---




## What to submit: 

1. GitHub Repository Link: 
2. Live Site Link: 
