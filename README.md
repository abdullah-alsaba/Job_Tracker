1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   
getElementById = getElementById is used for selecting an element by its unique id. It works fast, and it will return one element.
getElementsByClassName = getElementsByClassName is used for calling all common classes. It will return an HTML Collection.
querySelector = querySelector is used for calling id, class, and tag. But we have to be careful to use it cause for using this querySelector requires a valid CSS selector syntax. Use (#) for id, Use (.) for class.
querySelectorAll = querySelectorAll is used for selecting all matching elements. It will return a NodeList.

2. How do you create and insert a new element into the DOM?
   
Creating and inserting a new element into the DOM-

i) First, we have to create an element that we want to add-
   Example:
           const div = document.createElement("div");

ii) Add content that we want to show in the web page - 
    Example:
          div.innerText="We are inserting this text.";

iii) Now we have to insert it into the DOM-
    Example:
          document.body.appendChild(div);

3. What is Event Bubbling? And how does it work?

Event Bubbling: Event Bubbling is a process where, if you do any event in a child element, the action will go to its parent element, then the parent's parent element. Until the action reaches the document, it will work upward like a bubble.
Like if you click a child element button, then it will work button => div => body => document

4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation: Event Delegation works with Event Bubbling. For Event Delegation, you don't need to add a class for each element; instead, you can use only one class in its parent element. And it works properly.
Why is it useful? = If you want to add a child element, then you don't need to add a class to it for Event Delegation. Also, it makes code clean, short, and organized. 

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault(): preventDefault() is used to stop the browser’s default behavior. Like you create a form. When you click the submit the browser will refresh the webpage, but you can stop this using preventDefault().
stopPropagation(): stopPropagation() is used to stop Event Bubbling. It means if you clicked a child button, then the button will be clicked, not the parent. The parent will not click.  
