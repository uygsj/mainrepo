var itemList=document.querySelector('#items')
console.log(itemList.parentNode)
itemList.parentNode.style.backgroundColor='#f4f4f4'
console.log(itemList.parentNode.parentNode.parentNode)

console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor='#f4f4f4'
console.log(itemList.parentElement.parentElement.parentElement)

console.log(itemList.childNodes)

console.lod(itemList.children)
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';


//firstChild
console.log(itemList.FirstChild);
//firstElementChild
console.log(itemList.FirstElementChild);
itemList.FirstElementChild.textContent='Hellow 1'


//lastChild
console.log(itemList.lastChild);
//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hellow 4'


//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
//nextSibling
console.log(itemList.previousSibling);
//nextElementSibling
console.log(itemList.previousElementSibling);

//createElement

//create a div
var newDiv=document.createElement('div');


//Add class
newDiv.className='hello';

//Add id
newDiv.id='hello1';

//Add attr
newDiv.setAttribute('title', 'Hello Div');

//create text node
var newDivText=document.createTextNode('HEllo');

//Add text to dix
newDiv.appendChild(newDivText);
var container=document.querySelector('header.container');
var h1=document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize='30px';

container.insertBefore(newDiv,h1);

