const p = document.createElement('p');
p.style.color = 'red';
p.innerHTML = "Hey I'm red!";
const container = document.querySelector('#container');
container.appendChild(p);
const h3 = document.createElement('h3');
h3.setAttribute('style', 'color: blue;');
h3.innerHTML = "I'm blue h3";
container.appendChild(h3);
const div = document.createElement('div');
div.setAttribute('style', 'background-color: pink; border-color: black; border-style: double;');
const childh1 = document.createElement('h1');
childh1.innerHTML = "I'm in a div";
div.appendChild(childh1);
const childp = document.createElement('p');
childp.innerHTML = "ME TOO!";
div.appendChild(childp);
container.appendChild(div);