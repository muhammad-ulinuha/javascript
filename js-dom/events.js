
// Events click feedback
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const textBaru = document.createTextNode('item baru');
    liBaru.appendChild(textBaru);
    ul.appendChild(liBaru);
});

// event list
const p3 = document.querySelector('.p3');
p3.addEventListener('mouseenter', function () {
    p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('mouseleave', function () {
    p3.style.backgroundColor = 'lightgreen';
});